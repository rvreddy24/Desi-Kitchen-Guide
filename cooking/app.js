document.addEventListener('DOMContentLoaded', () => {
    // Diet card selection
    const dietCards = document.querySelectorAll('.diet-card');
    
    // Handle mouse move effect
    dietCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Handle selection
    dietCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            dietCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Store diet preference
            const dietType = card.dataset.diet;
            localStorage.setItem('userDiet', dietType);
            console.log('Set diet type:', dietType);
            
            // Navigate after animation
            setTimeout(() => {
                window.location.href = 'health-goals.html';
            }, 400);
        });
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
        });
    });

    // Add these styles to make the click animation work
    const style = document.createElement('style');
    style.textContent = `
        .diet-card.clicked {
            transform: scale(0.95);
            opacity: 0.8;
            transition: all 0.3s ease;
        }
        
        @keyframes clickEffect {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Debug logging
    console.log('Current diet preference:', localStorage.getItem('userDiet'));
    
    // Check if coming back from other pages
    const currentDiet = localStorage.getItem('userDiet');
    if (currentDiet) {
        const matchingCard = document.querySelector(`.diet-card[data-diet="${currentDiet}"]`);
        if (matchingCard) {
            matchingCard.classList.add('selected');
        }
    }

    // Health Goals Selection
    const goalCards = document.querySelectorAll('.goal-card');
    const continueBtn = document.getElementById('continue-btn');
    
    if (goalCards.length > 0) { // Check if we're on the health goals page
        // Hide continue button initially
        continueBtn.style.display = 'none';
        
        goalCards.forEach(card => {
            card.addEventListener('click', () => {
                // Toggle selection
                card.classList.toggle('selected');
                
                // Show/hide continue button based on selection
                const hasSelection = document.querySelector('.goal-card.selected');
                continueBtn.style.display = hasSelection ? 'inline-flex' : 'none';
            });

            // Add hover effect with mouse position
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Handle continue button click
        continueBtn.addEventListener('click', () => {
            const selectedGoals = Array.from(document.querySelectorAll('.goal-card.selected'))
                .map(card => card.dataset.goal);
            
            // Store selected goals
            localStorage.setItem('healthGoals', JSON.stringify(selectedGoals));
            
            // Navigate to ingredients page
            window.location.href = 'ingredients.html';
        });
    }

    // Ingredients Page Handling
    const ingredientsGrid = document.querySelector('.ingredients-grid');
    const findRecipesBtn = document.getElementById('find-recipes-btn');

    if (ingredientsGrid) { // Check if we're on ingredients page
        // Hide find recipes button initially
        findRecipesBtn.style.display = 'none';

        // Get ingredients from data.js and populate the grid
        const categories = Object.keys(ingredients);
        
        categories.forEach(category => {
            // Add category header
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'ingredient-category';
            categoryHeader.innerHTML = `<h3>${category}</h3>`;
            ingredientsGrid.appendChild(categoryHeader);

            // Add ingredients for this category
            ingredients[category].forEach(ingredient => {
                const ingredientCard = document.createElement('div');
                ingredientCard.className = 'ingredient-card';
                ingredientCard.dataset.name = ingredient;
                ingredientCard.innerHTML = `
                    <div class="ingredient-icon">
                        <i class="fas fa-${getIngredientIcon(category)}"></i>
                    </div>
                    <span>${ingredient}</span>
                `;
                ingredientsGrid.appendChild(ingredientCard);

                // Add click handler
                ingredientCard.addEventListener('click', () => {
                    ingredientCard.classList.toggle('selected');
                    updateFindRecipesButton();
                });
            });
        });

        // Handle find recipes button click
        findRecipesBtn.addEventListener('click', () => {
            const selectedIngredients = Array.from(
                document.querySelectorAll('.ingredient-card.selected')
            ).map(card => card.dataset.name);

            // Store selected ingredients
            localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
            
            // Navigate to recipes page
            window.location.href = 'recipes.html';
        });
    }

    // Add this near the top of your app.js
    console.log('Ingredients data:', typeof ingredients !== 'undefined' ? 'Loaded' : 'Not loaded');
});

// Helper function to get appropriate icon for each category
function getIngredientIcon(category) {
    const icons = {
        'Vegetables': 'carrot',
        'Proteins': 'drumstick-bite',
        'Spices': 'pepper-hot',
        'Grains': 'wheat-awn',
        'Dairy': 'cheese',
        'Others': 'mortar-pestle'
    };
    return icons[category] || 'utensils';
}

// Helper function to update find recipes button visibility
function updateFindRecipesButton() {
    const hasSelection = document.querySelector('.ingredient-card.selected');
    const findRecipesBtn = document.getElementById('find-recipes-btn');
    findRecipesBtn.style.display = hasSelection ? 'inline-flex' : 'none';
} 