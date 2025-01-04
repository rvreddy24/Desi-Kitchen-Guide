// Get user diet preference and health goals
let userDiet = localStorage.getItem('userDiet') || null;
let healthGoals = JSON.parse(localStorage.getItem('healthGoals')) || [];

// Check if user has selected diet preference
if (!userDiet) {
    window.location.href = 'index.html';
}

// Single ingredients object with proper categorization
const ingredients = {
    'Vegetables': [
        // Fresh Vegetables
        'Tomatoes', 'Onions', 'Potatoes', 'Spinach', 'Cauliflower',
        'Green Peas', 'Carrots', 'Bell Peppers', 'Ginger', 'Garlic',
        'Broccoli', 'Cabbage', 'Mushrooms', 'Eggplant', 'Okra',
        'Green Beans', 'Sweet Potatoes', 'Corn', 'Beetroot', 'Radish',
        'Cucumber', 'Zucchini', 'Bitter Gourd', 'Bottle Gourd', 'Ridge Gourd',
        'Pumpkin', 'Fenugreek Leaves', 'Mint Leaves', 'Coriander Leaves', 'Curry Leaves'
    ],
    'Plant Proteins': [
        // Plant-based Proteins
        'Paneer', 'Tofu', 'Chickpeas', 'Lentils', 'Kidney Beans',
        'Black Beans', 'Green Peas', 'Soya Chunks', 'Tempeh',
        'Quinoa', 'Almonds', 'Cashews', 'Peanuts', 'Moong Dal',
        'Toor Dal', 'Urad Dal', 'Chana Dal', 'Masoor Dal',
        'Rajma', 'Black Chickpeas', 'Green Moong', 'Sprouts'
    ],
    'Meat & Seafood': {
        'Poultry': [
            'Chicken', 'Turkey', 'Duck', 'Quail', 'Chicken Liver',
            'Chicken Wings', 'Chicken Breast', 'Chicken Thighs', 'Chicken Drumsticks'
        ],
        'Red Meat': [
            'Mutton', 'Lamb', 'Beef', 'Goat Meat', 'Pork',
            'Bacon', 'Ham', 'Veal', 'Rabbit', 'Venison',
            'Mutton Liver', 'Mutton Chops', 'Beef Steak'
        ],
        'Seafood': [
            'Fish', 'Prawns', 'Crab', 'Salmon', 'Tuna',
            'Pomfret', 'Mackerel', 'Sardines', 'Anchovies', 'Squid',
            'Octopus', 'Lobster', 'Clams', 'Scallops', 'Oysters',
            'Fish Roe', 'Mussels', 'Shrimp'
        ],
        'Eggs': [
            'Chicken Eggs', 'Quail Eggs', 'Duck Eggs'
        ]
    },
    'Spices': [
        // Whole and Ground Spices
        'Turmeric', 'Cumin Seeds', 'Coriander Powder', 'Garam Masala', 'Red Chili Powder',
        'Black Pepper', 'Green Cardamom', 'Cinnamon', 'Cloves', 'Bay Leaves',
        'Fenugreek Seeds', 'Mustard Seeds', 'Asafoetida', 'Saffron', 'Black Cardamom',
        'Fennel Seeds', 'Carom Seeds', 'Star Anise', 'Nutmeg', 'Mace',
        'White Pepper', 'Kashmiri Chili', 'Black Salt', 'Dried Mango Powder', 'Pomegranate Seeds',
        'Curry Powder', 'Chaat Masala', 'Panchphoron', 'Caraway Seeds', 'Poppy Seeds'
    ],
    'Dairy': [
        // Dairy Products
        'Yogurt', 'Milk', 'Fresh Cream', 'Ghee', 'Butter',
        'Cheese', 'Cottage Cheese', 'Buttermilk', 'Condensed Milk', 'Khoya',
        'Paneer', 'Curd', 'Malai', 'Processed Cheese', 'Mozzarella',
        'Ricotta', 'Sour Cream', 'Heavy Cream', 'Skimmed Milk', 'Full Fat Milk'
    ],
    'Grains': [
        // Grains and Flours
        'Basmati Rice', 'Wheat Flour', 'Chickpea Flour', 'Semolina', 'Corn Flour',
        'White Bread', 'Oats', 'Quinoa', 'Barley', 'Millet',
        'Buckwheat', 'Brown Rice', 'Vermicelli', 'Rice Flour', 'Maida',
        'Jowar Flour', 'Bajra Flour', 'Ragi Flour', 'Sago', 'Poha',
        'Red Rice', 'Black Rice', 'Wild Rice', 'Broken Wheat', 'Multigrain Flour'
    ],
    'Herbs & Aromatics': [
        // Fresh and Dried Herbs
        'Mint', 'Coriander', 'Curry Leaves', 'Bay Leaves', 'Basil',
        'Thyme', 'Rosemary', 'Lemongrass', 'Kaffir Lime Leaves', 'Sage',
        'Dill', 'Parsley', 'Green Chillies', 'Spring Onions', 'Celery',
        'Tarragon', 'Oregano', 'Marjoram', 'Chives', 'Holy Basil'
    ]
};

function populateIngredients() {
    const ingredientsList = document.getElementById('ingredients-list');
    if (!ingredientsList) return;
    
    ingredientsList.innerHTML = '';
    console.log('Current Diet:', userDiet);

    // Iterate through categories
    Object.entries(ingredients).forEach(([category, items]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'ingredient-category';

        // Handle Meat & Seafood category for non-vegetarians
        if (category === 'Meat & Seafood') {
            if (userDiet === 'non-vegetarian') {
                // Create subcategories for meat and seafood
                Object.entries(items).forEach(([subCategory, subItems]) => {
                    const subCategorySection = document.createElement('div');
                    subCategorySection.className = 'ingredient-subcategory';
                    addCategoryContent(subCategorySection, subCategory, subItems);
                    categorySection.appendChild(subCategorySection);
                });
                ingredientsList.appendChild(categorySection);
            }
            // Skip this category for vegetarians
            return;
        }

        // Handle other categories normally
        addCategoryContent(categorySection, category, items);
        ingredientsList.appendChild(categorySection);
    });
}

function addCategoryContent(categorySection, category, items) {
    // Create category header
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `
        <h3>
            <i class="category-icon ${getCategoryIcon(category)}"></i>
            ${category}
        </h3>
        <i class="fas fa-chevron-down"></i>
    `;

    // Create category content
    const categoryContent = document.createElement('div');
    categoryContent.className = 'category-content';
    categoryContent.style.display = 'none'; // Initially collapsed
    
    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'ingredients-grid';

    // Add items
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'ingredient-item';
        const itemId = item.toLowerCase().replace(/\s+/g, '-');
        itemElement.innerHTML = `
            <input type="checkbox" id="${itemId}" value="${item}">
            <label for="${itemId}">
                <i class="category-icon ${getCategoryIcon(category, item)}"></i>
                ${item}
            </label>
        `;
        itemsGrid.appendChild(itemElement);
    });

    categoryContent.appendChild(itemsGrid);
    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(categoryContent);

    // Add click handler for category header
    categoryHeader.addEventListener('click', () => {
        const isExpanded = categoryContent.style.display !== 'none';
        categoryContent.style.display = isExpanded ? 'none' : 'block';
        categoryHeader.querySelector('.fa-chevron-down').style.transform = 
            isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
}

// Helper function to get category icon
function getCategoryIcon(category, item = '') {
    const icons = {
        'Vegetables': 'fas fa-carrot',
        'Plant Proteins': 'fas fa-seedling',
        'Meat & Seafood': 'fas fa-drumstick-bite',
        'Poultry': 'fas fa-drumstick-bite',
        'Red Meat': 'fas fa-bacon',
        'Seafood': 'fas fa-fish',
        'Eggs': 'fas fa-egg',
        'Spices': 'fas fa-mortar-pestle',
        'Dairy': 'fas fa-cheese',
        'Grains': {
            'Rice': 'fas fa-bowl-rice',
            'Wheat': 'fas fa-wheat-awn',
            'Bread': 'fas fa-bread-slice',
            'Flour': 'fas fa-wheat-awn-circle-exclamation',
            'default': 'fas fa-wheat-awn'
        },
        'Herbs & Aromatics': 'fas fa-leaf'
    };

    // Special handling for grains to show different icons based on the item name
    if (category === 'Grains' && item) {
        const itemLower = item.toLowerCase();
        if (itemLower.includes('rice')) return icons.Grains.Rice;
        if (itemLower.includes('wheat')) return icons.Grains.Wheat;
        if (itemLower.includes('bread')) return icons.Grains.Bread;
        if (itemLower.includes('flour')) return icons.Grains.Flour;
        return icons.Grains.default;
    }

    // For category headers, return the default icon
    if (category === 'Grains') return icons.Grains.default;

    return icons[category] || 'fas fa-utensils';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateIngredients();

    // Get the buttons
    const findRecipesBtn = document.getElementById('find-recipes');
    const resetDietBtn = document.getElementById('reset-diet');

    // Find Recipes button click handler
    if (findRecipesBtn) {
        findRecipesBtn.addEventListener('click', () => {
            const selectedIngredients = Array.from(
                document.querySelectorAll('.ingredient-item input[type="checkbox"]:checked')
            ).map(checkbox => checkbox.value);

            if (selectedIngredients.length === 0) {
                alert('Please select at least one ingredient');
                return;
            }

            // Store selected ingredients and navigate to recipes page
            localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients));
            window.location.href = 'recipes.html';
        });
    }

    // Reset button click handler
    if (resetDietBtn) {
        resetDietBtn.addEventListener('click', () => {
            // Uncheck all checkboxes
            document.querySelectorAll('.ingredient-item input[type="checkbox"]')
                .forEach(checkbox => checkbox.checked = false);
            
            // Clear stored ingredients
            localStorage.removeItem('selectedIngredients');
        });
    }
}); 