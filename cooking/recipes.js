document.addEventListener('DOMContentLoaded', () => {
    const recipesGrid = document.getElementById('recipes-grid');
    const matchingCount = document.getElementById('matching-count');
    const matchPercentage = document.getElementById('match-percentage');
    const sortSelect = document.getElementById('sort-recipes');
    const modal = document.getElementById('recipe-modal');
    
    // Get selected ingredients from localStorage
    const selectedIngredients = JSON.parse(localStorage.getItem('selectedIngredients')) || [];
    const userDiet = localStorage.getItem('userDiet');
    
    console.log('Selected Ingredients:', selectedIngredients);
    console.log('User Diet:', userDiet);

    // Convert our recipes object to array format
    let allRecipes = [];
    Object.entries(recipes).forEach(([category, categoryRecipes]) => {
        Object.entries(categoryRecipes).forEach(([name, details]) => {
            allRecipes.push({
                name: name,
                category: category,
                ingredients: details.ingredients,
                cookTime: details.cookTime,
                servings: details.servings,
                difficulty: details.difficulty,
                tags: details.tags,
                nutrition: details.nutrition,
                steps: details.steps,
                tips: details.tips,
                type: category === 'Non-Vegetarian' ? 'non-vegetarian' : 'vegetarian'
            });
        });
    });

    // Filter and process recipes
    let filteredRecipes = allRecipes
        .filter(recipe => {
            // Check diet preference
            if (userDiet === 'vegetarian' && recipe.type === 'non-vegetarian') {
                return false;
            }

            // Check if recipe has any matching ingredients
            return selectedIngredients.length === 0 || recipe.ingredients.some(ingredient =>
                selectedIngredients.some(selected => 
                    ingredient.toLowerCase().includes(selected.toLowerCase())
                )
            );
        })
        .map(recipe => {
            // Calculate matching ingredients
            const matchingIngredients = recipe.ingredients.filter(ingredient =>
                selectedIngredients.some(selected => 
                    ingredient.toLowerCase().includes(selected.toLowerCase())
                )
            );

            const matchPercent = Math.round((matchingIngredients.length / recipe.ingredients.length) * 100);

            return {
                ...recipe,
                matchPercent,
                matchingIngredients,
                missingIngredients: recipe.ingredients.filter(ingredient => 
                    !selectedIngredients.some(selected => 
                        ingredient.toLowerCase().includes(selected.toLowerCase())
                    )
                )
            };
        })
        .sort((a, b) => b.matchPercent - a.matchPercent);

    // Display recipes
    function displayRecipes(recipes) {
        if (recipes.length === 0) {
            recipesGrid.innerHTML = `
                <div class="no-recipes">
                    <i class="fas fa-search"></i>
                    <h3>No matching recipes found</h3>
                    <p>Try selecting different ingredients</p>
                </div>
            `;
            return;
        }

        recipesGrid.innerHTML = recipes.map(recipe => `
            <div class="recipe-card">
                <div class="recipe-image">
                    <i class="fas fa-utensils"></i>
                    <div class="recipe-match">${recipe.matchPercent}% Match</div>
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.name}</h3>
                    
                    <div class="recipe-meta">
                        <span class="meta-item">
                            <i class="fas fa-clock"></i> ${recipe.cookTime}
                        </span>
                        <span class="meta-item">
                            <i class="fas fa-user"></i> ${recipe.servings} servings
                        </span>
                    </div>

                    <div class="nutrition-info">
                        <h4>Nutrition Facts</h4>
                        <div class="nutrition-grid">
                            <div class="nutrition-item">
                                <span>${recipe.nutrition.calories}</span>
                                <small>Calories</small>
                            </div>
                            <div class="nutrition-item">
                                <span>${recipe.nutrition.protein}</span>
                                <small>Protein</small>
                            </div>
                            <div class="nutrition-item">
                                <span>${recipe.nutrition.carbs}</span>
                                <small>Carbs</small>
                            </div>
                            <div class="nutrition-item">
                                <span>${recipe.nutrition.fats}</span>
                                <small>Fats</small>
                            </div>
                        </div>
                    </div>

                    <div class="ingredients-section">
                        <h4>Ingredients (${recipe.matchingIngredients.length}/${recipe.ingredients.length})</h4>
                        <div class="ingredients-grid">
                            ${recipe.ingredients.map(ingredient => `
                                <span class="ingredient-tag ${recipe.matchingIngredients.includes(ingredient) ? 'available' : 'missing'}">
                                    <i class="fas fa-${recipe.matchingIngredients.includes(ingredient) ? 'check' : 'times'}"></i>
                                    ${ingredient}
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <button onclick="showRecipeDetails('${recipe.name}')" class="view-recipe-btn">
                        <i class="fas fa-eye"></i> View Recipe
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Initial display
    displayRecipes(filteredRecipes);

    // Update stats
    matchingCount.textContent = filteredRecipes.length;
    const avgMatch = filteredRecipes.length > 0
        ? Math.round(filteredRecipes.reduce((sum, r) => sum + r.matchPercent, 0) / filteredRecipes.length)
        : 0;
    matchPercentage.textContent = `${avgMatch}%`;

    // Recipe detail modal handler
    window.showRecipeDetails = (recipeName) => {
        const recipe = filteredRecipes.find(r => r.name === recipeName);
        if (!recipe) return;

        modal.style.display = 'block';
        modal.querySelector('.modal-header h2').textContent = recipe.name;
        modal.querySelector('.modal-body').innerHTML = `
            <div class="recipe-details">
                <div class="recipe-stats">
                    <span><i class="fas fa-clock"></i> ${recipe.cookTime}</span>
                    <span><i class="fas fa-user"></i> ${recipe.servings} servings</span>
                    <span><i class="fas fa-chart-line"></i> ${recipe.difficulty}</span>
                </div>
                
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `
                        <li class="${recipe.matchingIngredients.includes(ingredient) ? 'available' : 'missing'}">
                            ${ingredient}
                        </li>
                    `).join('')}
                </ul>

                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.steps.map(step => `<li>${step.description}</li>`).join('')}
                </ol>

                <h3>Tips</h3>
                <ul class="tips-list">
                    ${recipe.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        `;
    };

    // Close modal handlers
    modal.querySelector('.close-modal').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
});