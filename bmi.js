document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-bmi');
    const resultSection = document.getElementById('bmi-result');
    const bmiNumber = document.getElementById('bmi-number');
    const bmiCategory = document.getElementById('bmi-category');
    const calorieNeed = document.getElementById('calorie-need');
    const dietRecommendations = document.getElementById('diet-recommendations');
    const recommendedRecipes = document.getElementById('recommended-recipes');

    // Recipe suggestions based on BMI category
    const recipeRecommendations = {
        'Underweight': [
            {
                name: 'High-Protein Butter Chicken',
                calories: 450,
                protein: '35g',
                image: 'butter-chicken.jpg',
                description: 'Rich in protein and healthy fats'
            },
            {
                name: 'Calorie-Dense Dal Makhani',
                calories: 400,
                protein: '20g',
                image: 'dal-makhani.jpg',
                description: 'Nutritious and protein-rich'
            },
            {
                name: 'Ghee Rice with Paneer',
                calories: 500,
                protein: '25g',
                image: 'ghee-rice.jpg',
                description: 'High in calories and protein'
            }
        ],
        'Normal weight': [
            {
                name: 'Balanced Chicken Biryani',
                calories: 350,
                protein: '25g',
                image: 'biryani.jpg',
                description: 'Perfect balance of nutrients'
            },
            {
                name: 'Mixed Vegetable Curry',
                calories: 300,
                protein: '15g',
                image: 'veg-curry.jpg',
                description: 'Rich in vitamins and minerals'
            },
            {
                name: 'Grilled Fish Tikka',
                calories: 280,
                protein: '30g',
                image: 'fish-tikka.jpg',
                description: 'Lean protein with spices'
            }
        ],
        'Overweight': [
            {
                name: 'Low-Cal Tandoori Chicken',
                calories: 250,
                protein: '30g',
                image: 'tandoori-chicken.jpg',
                description: 'High protein, low fat'
            },
            {
                name: 'Steamed Vegetable Idli',
                calories: 150,
                protein: '8g',
                image: 'idli.jpg',
                description: 'Light and nutritious'
            },
            {
                name: 'Masala Dosa with Chutney',
                calories: 200,
                protein: '10g',
                image: 'dosa.jpg',
                description: 'Low-calorie traditional dish'
            }
        ],
        'Obese': [
            {
                name: 'Grilled Chicken Salad',
                calories: 200,
                protein: '25g',
                image: 'chicken-salad.jpg',
                description: 'Low-cal, high-protein'
            },
            {
                name: 'Vegetable Soup',
                calories: 120,
                protein: '8g',
                image: 'veg-soup.jpg',
                description: 'Low in calories, filling'
            },
            {
                name: 'Moong Dal Khichdi',
                calories: 180,
                protein: '12g',
                image: 'khichdi.jpg',
                description: 'Light and easy to digest'
            }
        ]
    };

    calculateBtn.addEventListener('click', () => {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        const age = parseInt(document.getElementById('age').value);
        const activity = parseFloat(document.getElementById('activity').value);

        if (!height || !weight || !age || !activity) {
            alert('Please fill in all fields');
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = Math.round(bmi * 10) / 10;

        // Calculate BMR (Basal Metabolic Rate) using Harris-Benedict equation
        const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        
        // Calculate daily calorie needs
        const dailyCalories = Math.round(bmr * activity);

        // Determine BMI category
        let category;
        let recommendations = [];
        if (bmi < 18.5) {
            category = 'Underweight';
            recommendations = [
                'Focus on nutrient-dense foods',
                'Include healthy fats in your diet',
                'Eat more frequently throughout the day',
                'Add protein-rich foods to each meal'
            ];
        } else if (bmi < 25) {
            category = 'Normal weight';
            recommendations = [
                'Maintain a balanced diet',
                'Regular exercise routine',
                'Stay hydrated',
                'Include variety in your meals'
            ];
        } else if (bmi < 30) {
            category = 'Overweight';
            recommendations = [
                'Control portion sizes',
                'Increase physical activity',
                'Choose whole grains over refined grains',
                'Include more vegetables in your diet'
            ];
        } else {
            category = 'Obese';
            recommendations = [
                'Consult with a healthcare provider',
                'Focus on portion control',
                'Regular physical activity',
                'Choose low-calorie, nutrient-rich foods'
            ];
        }

        // Display results
        bmiNumber.textContent = `${roundedBMI}`;
        bmiCategory.textContent = category;
        calorieNeed.textContent = `${dailyCalories} calories/day`;

        // Display recommendations
        dietRecommendations.innerHTML = recommendations
            .map(rec => `<div class="recommendation-item"><i class="fas fa-check"></i> ${rec}</div>`)
            .join('');

        // Add recipe recommendations
        const suggestedRecipes = recipeRecommendations[category];
        recommendedRecipes.innerHTML = suggestedRecipes.map(recipe => `
            <div class="recipe-card">
                <div class="recipe-image">
                    <i class="fas fa-utensils"></i>
                </div>
                <div class="recipe-content">
                    <h4>${recipe.name}</h4>
                    <div class="recipe-stats">
                        <span><i class="fas fa-fire"></i> ${recipe.calories} cal</span>
                        <span><i class="fas fa-dumbbell"></i> ${recipe.protein}</span>
                    </div>
                    <p>${recipe.description}</p>
                </div>
            </div>
        `).join('');

        // Show results section with animation
        resultSection.style.display = 'block';
        resultSection.classList.add('animate-in');

        // Scroll to results
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}); 