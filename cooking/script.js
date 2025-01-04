let userDiet = localStorage.getItem('userDiet') || null;
let healthGoals = JSON.parse(localStorage.getItem('healthGoals')) || [];

function initializePage() {
    const dietSelection = document.getElementById('diet-selection');
    const healthGoalsSection = document.getElementById('health-goals');
    const mainContent = document.getElementById('main-content');

    // Add event listeners to diet buttons
    document.querySelectorAll('.diet-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            userDiet = btn.dataset.diet;
            localStorage.setItem('userDiet', userDiet);
            
            // Hide diet selection and show health goals
            dietSelection.style.display = 'none';
            healthGoalsSection.style.display = 'block';
        });
    });

    // Add event listener to continue button
    document.getElementById('continue-btn').addEventListener('click', () => {
        // Save health goals
        healthGoals = Array.from(document.querySelectorAll('.health-goal-option input:checked'))
            .map(checkbox => checkbox.value);
        localStorage.setItem('healthGoals', JSON.stringify(healthGoals));
        
        // Hide health goals and show main content
        healthGoalsSection.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Initialize ingredients list
        populateIngredients();
    });

    // Check if user already has diet preference
    if (userDiet) {
        dietSelection.style.display = 'none';
        mainContent.style.display = 'block';
        populateIngredients();
    }
}

function populateIngredients() {
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.innerHTML = '';

    // Filter ingredients based on diet preference
    for (const [category, items] of Object.entries(ingredients)) {
        // Skip meat category for vegetarians
        if (userDiet === 'vegetarian' && category === 'meats') {
            continue;
        }

        // Filter items based on health goals
        let filteredItems = items;
        if (healthGoals.includes('weight-loss')) {
            filteredItems = items.filter(item => !highCalorieIngredients.includes(item));
        }
        if (healthGoals.includes('diabetes')) {
            filteredItems = filteredItems.filter(item => !highSugarIngredients.includes(item));
        }
        if (healthGoals.includes('muscle-gain')) {
            filteredItems = filteredItems.filter(item => highProteinIngredients.includes(item));
        }
        if (healthGoals.includes('heart-health')) {
            filteredItems = filteredItems.filter(item => !highCholesterolIngredients.includes(item));
        }

        const categorySection = createCategorySection(category, filteredItems);
        ingredientsList.appendChild(categorySection);
    }
}

function createCategorySection(category, items) {
    const categorySection = document.createElement('div');
    categorySection.className = 'ingredient-category';

    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `
        <h3>${formatCategoryName(category)}</h3>
        <span class="arrow">▼</span>
    `;

    const categoryContent = document.createElement('div');
    categoryContent.className = 'category-content';

    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'ingredients-grid';

    items.forEach(ingredient => {
        const div = document.createElement('div');
        div.className = 'ingredient-item';
        div.innerHTML = `
            <input type="checkbox" id="${ingredient}" value="${ingredient}">
            <label for="${ingredient}">${ingredient}</label>
        `;
        itemsContainer.appendChild(div);
    });

    categoryContent.appendChild(itemsContainer);
    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(categoryContent);

    categoryHeader.addEventListener('click', () => {
        categoryHeader.classList.toggle('active');
        categoryContent.classList.toggle('active');
    });

    return categorySection;
}

function formatCategoryName(category) {
    return category
        .split(/(?=[A-Z])/)
        .join(' ')
        .replace(/^\w/, c => c.toUpperCase());
}

function saveSelections() {
    // Save cuisine selection
    const selectedCuisine = document.getElementById('cuisine-select').value;
    localStorage.setItem('selectedCuisine', selectedCuisine);

    // Save selected ingredients
    const selectedIngredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));

    // Save dietary restrictions
    const dietaryRestrictions = Array.from(document.querySelectorAll('.dietary-filters input:checked'))
        .map(checkbox => checkbox.value);
    console.log('Saving dietary restrictions:', dietaryRestrictions); // Debug log
    localStorage.setItem('dietaryRestrictions', JSON.stringify(dietaryRestrictions));

    // Save health goals (already being saved in showDietModal)
    const healthGoals = Array.from(document.querySelectorAll('.health-goal-option input:checked'))
        .map(checkbox => checkbox.value);
    localStorage.setItem('healthGoals', JSON.stringify(healthGoals));
}

function updateSelectedCount() {
    document.querySelectorAll('.category-header').forEach(header => {
        const content = header.nextElementSibling;
        const selectedCount = content.querySelectorAll('input[type="checkbox"]:checked').length;
        const countSpan = header.querySelector('.selected-count');
        
        if (selectedCount > 0) {
            if (countSpan) {
                countSpan.textContent = `(${selectedCount} selected)`;
            } else {
                header.querySelector('h3').insertAdjacentHTML('beforeend', 
                    `<span class="selected-count"> (${selectedCount} selected)</span>`);
            }
        } else if (countSpan) {
            countSpan.remove();
        }
    });
}

// Initialize the page
window.addEventListener('DOMContentLoaded', initializePage); 