const recipes = {
    'Vegetarian': {
        'Paneer Butter Masala': {
            ingredients: [
                '500g paneer, cubed',
                '3 large tomatoes, pureed',
                '2 onions, finely chopped',
                '100g butter',
                '1/2 cup fresh cream',
                '2 tbsp garam masala',
                '1 tsp turmeric powder',
                '2 tsp red chili powder',
                '2 tbsp ginger-garlic paste',
                'Salt to taste',
                'Kasuri methi (dried fenugreek leaves)',
                'Oil for cooking'
            ],
            cookTime: '30 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Curry', 'Rich', 'Party'],
            nutrition: {
                calories: 450,
                protein: '18g',
                carbs: '12g',
                fats: '22g'
            },
            steps: [
                { step: 1, description: 'Heat oil in a pan. Add chopped onions and sauté until golden brown.' },
                { step: 2, description: 'Add ginger-garlic paste and sauté for 2 minutes until raw smell disappears.' },
                { step: 3, description: 'Add tomato puree and cook until oil starts separating from the masala.' },
                { step: 4, description: 'Add turmeric, red chili powder, and garam masala. Cook for 2-3 minutes.' },
                { step: 5, description: 'Add butter and cream. Stir well and let it simmer for 2-3 minutes.' },
                { step: 6, description: 'Add paneer cubes and salt. Cook for 5 minutes on low heat.' },
                { step: 7, description: 'Crush kasuri methi between your palms and add to the curry.' },
                { step: 8, description: 'Garnish with cream and serve hot with naan or rice.' }
            ],
            tips: [
                'For softer paneer, soak the cubes in hot water for 10 minutes before adding to curry',
                'Use fresh cream for best results',
                'Don\'t overcook paneer as it can become rubbery'
            ]
        },
        'Aloo Gobi': {
            ingredients: [
                '2 medium potatoes, cubed',
                '1 medium cauliflower, cut into florets',
                '2 onions, finely chopped',
                '2 tomatoes, chopped',
                '1 tsp turmeric powder',
                '1 tsp cumin seeds',
                '2 tsp ginger-garlic paste',
                '1 tsp red chili powder',
                '1 tsp coriander powder',
                'Salt to taste',
                'Fresh coriander for garnishing',
                '3 tbsp oil'
            ],
            cookTime: '25 mins',
            servings: 4,
            difficulty: 'Easy',
            tags: ['Dry', 'Everyday'],
            nutrition: {
                calories: 180,
                protein: '4g',
                carbs: '28g',
                fats: '8g'
            },
            steps: [
                { step: 1, description: 'Heat oil in a pan. Add cumin seeds and let them crackle.' },
                { step: 2, description: 'Add chopped onions and sauté until golden brown.' },
                { step: 3, description: 'Add ginger-garlic paste and cook for 2 minutes.' },
                { step: 4, description: 'Add chopped tomatoes and cook until soft.' },
                { step: 5, description: 'Add turmeric, red chili powder, coriander powder, and salt. Mix well.' },
                { step: 6, description: 'Add potato cubes and cook for 5 minutes with lid on.' },
                { step: 7, description: 'Add cauliflower florets, mix well, and cook covered for 10-12 minutes until vegetables are tender.' },
                { step: 8, description: 'Garnish with fresh coriander and serve hot with rotis.' }
            ],
            tips: [
                'Par-boil the potatoes for faster cooking',
                'Don\'t overcook the cauliflower to maintain texture',
                'Sprinkle some water if the vegetables start sticking to the pan'
            ]
        },
        'Baingan Bharta': {
            ingredients: [
                '1 large eggplant',
                '2 onions, finely chopped',
                '3 tomatoes, chopped',
                '4-5 green chilies, chopped',
                '2 tbsp ginger-garlic paste',
                '1 tsp cumin seeds',
                '1 tsp red chili powder',
                '1/2 tsp turmeric powder',
                '1 tsp garam masala',
                'Fresh coriander for garnishing',
                'Salt to taste',
                '3 tbsp oil'
            ],
            cookTime: '45 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Roasted', 'Smoky'],
            nutrition: {
                calories: 160,
                protein: '3g',
                carbs: '20g',
                fats: '9g'
            },
            steps: [
                { step: 1, description: 'Roast the eggplant directly on flame, turning occasionally until the skin is charred and flesh is soft.' },
                { step: 2, description: 'Let it cool, peel off the skin, and mash the pulp. Keep aside.' },
                { step: 3, description: 'Heat oil in a pan. Add cumin seeds and let them splutter.' },
                { step: 4, description: 'Add chopped onions and sauté until golden brown.' },
                { step: 5, description: 'Add ginger-garlic paste and green chilies. Sauté for 2 minutes.' },
                { step: 6, description: 'Add chopped tomatoes and cook until soft and oil starts separating.' },
                { step: 7, description: 'Add turmeric, red chili powder, and salt. Mix well.' },
                { step: 8, description: 'Add the mashed eggplant and garam masala. Cook for 5-7 minutes.' },
                { step: 9, description: 'Garnish with fresh coriander and serve hot with rotis.' }
            ],
            tips: [
                'For a smoky flavor, place a hot charcoal in a small bowl and add a few drops of oil before covering',
                'Choose a large, firm eggplant for best results',
                'Make sure to roast the eggplant thoroughly until it\'s completely soft inside'
            ]
        },
        'Dal Makhani': {
            ingredients: [
                '1 cup black lentils (urad dal)',
                '1/4 cup red kidney beans (rajma)',
                '4 tbsp butter',
                '1/2 cup fresh cream',
                '2 onions, finely chopped',
                '4 tomatoes, pureed',
                '2 tbsp ginger-garlic paste',
                '2 tsp garam masala',
                '1 tsp red chili powder',
                '1/2 tsp turmeric powder',
                'Salt to taste',
                'Fresh coriander for garnishing'
            ],
            cookTime: '45 mins',
            servings: 6,
            difficulty: 'Medium',
            tags: ['Protein Rich', 'Comfort Food'],
            nutrition: {
                calories: 320,
                protein: '14g',
                carbs: '28g',
                fats: '16g'
            },
            steps: [
                { step: 1, description: 'Soak black lentils and kidney beans overnight. Drain and rinse.' },
                { step: 2, description: 'Pressure cook the lentils and beans with salt until soft (about 30-40 minutes).' },
                { step: 3, description: 'Heat butter in a pan. Add chopped onions and sauté until golden.' },
                { step: 4, description: 'Add ginger-garlic paste and cook for 2 minutes.' },
                { step: 5, description: 'Add tomato puree, turmeric, red chili powder, and cook until oil separates.' },
                { step: 6, description: 'Add cooked dal mixture and simmer for 15-20 minutes, stirring occasionally.' },
                { step: 7, description: 'Add cream and garam masala. Simmer for another 5 minutes.' },
                { step: 8, description: 'Garnish with cream and coriander. Serve hot with naan or rice.' }
            ],
            tips: [
                'For best results, cook on low heat for longer duration',
                'Mash some lentils while cooking to make it creamy',
                'Add a little water if dal becomes too thick'
            ]
        },
        'Palak Paneer': {
            ingredients: [
                '250g paneer, cubed',
                '500g spinach, blanched and pureed',
                '2 onions, finely chopped',
                '2 tomatoes, pureed',
                '2 tbsp ginger-garlic paste',
                '1 tsp garam masala',
                '1/2 cup fresh cream',
                'Salt to taste',
                '2 tbsp oil'
            ],
            cookTime: '35 mins',
            servings: 4,
            difficulty: 'Easy',
            tags: ['Healthy', 'Iron Rich'],
            nutrition: {
                calories: 280,
                protein: '16g',
                carbs: '8g',
                fats: '14g'
            },
            steps: [
                { step: 1, description: 'Heat oil in a pan. Add chopped onions and sauté until golden brown.' },
                { step: 2, description: 'Add ginger-garlic paste and sauté for 2 minutes.' },
                { step: 3, description: 'Add tomato puree and cook until oil separates.' },
                { step: 4, description: 'Add spinach puree and cook for 5 minutes.' },
                { step: 5, description: 'Add paneer cubes, garam masala, and salt. Cook for 5 minutes.' },
                { step: 6, description: 'Add cream and mix well. Cook for another 2 minutes.' },
                { step: 7, description: 'Serve hot with roti or rice.' }
            ],
            tips: [
                'Blanch spinach to retain its green color',
                'Use fresh paneer for best results',
                'Adjust spices according to taste'
            ]
        },
        'Chole Bhature': {
            ingredients: [
                '1 cup chickpeas, soaked overnight',
                '2 onions, finely chopped',
                '3 tomatoes, pureed',
                '2 tbsp ginger-garlic paste',
                '2 tsp garam masala',
                '1 tsp red chili powder',
                'Salt to taste',
                'Oil for cooking',
                'For Bhature: 2 cups all-purpose flour, 1/2 cup yogurt, 1 tsp baking powder, salt, water'
            ],
            cookTime: '60 mins',
            servings: 4,
            difficulty: 'Hard',
            tags: ['Punjabi', 'Festival'],
            nutrition: {
                calories: 550,
                protein: '16g',
                carbs: '72g',
                fats: '22g'
            },
            steps: [
                { step: 1, description: 'Pressure cook chickpeas with salt until soft.' },
                { step: 2, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add ginger-garlic paste and cook for 2 minutes.' },
                { step: 4, description: 'Add tomato puree, red chili powder, and garam masala. Cook until oil separates.' },
                { step: 5, description: 'Add cooked chickpeas and simmer for 10 minutes.' },
                { step: 6, description: 'For Bhature: Mix flour, yogurt, baking powder, and salt. Knead into a dough.' },
                { step: 7, description: 'Roll out dough into circles and deep fry until golden.' },
                { step: 8, description: 'Serve hot chole with bhature.' }
            ],
            tips: [
                'Soak chickpeas overnight for best results',
                'Adjust spices according to taste',
                'Serve with pickles and onions for extra flavor'
            ]
        },
        'Malai Kofta': {
            ingredients: [
                '200g paneer, grated',
                '2 potatoes, boiled and mashed',
                '2 tbsp cornflour',
                'Salt to taste',
                'Oil for frying',
                'For Gravy: 2 onions, pureed, 3 tomatoes, pureed, 1/2 cup cream, 2 tbsp ginger-garlic paste, 1 tsp garam masala'
            ],
            cookTime: '50 mins',
            servings: 4,
            difficulty: 'Hard',
            tags: ['Rich', 'Party'],
            nutrition: {
                calories: 480,
                protein: '14g',
                carbs: '32g',
                fats: '28g'
            },
            steps: [
                { step: 1, description: 'Mix paneer, potatoes, cornflour, and salt. Shape into balls.' },
                { step: 2, description: 'Deep fry koftas until golden brown. Set aside.' },
                { step: 3, description: 'Heat oil in a pan. Add onion puree and cook until golden.' },
                { step: 4, description: 'Add ginger-garlic paste and cook for 2 minutes.' },
                { step: 5, description: 'Add tomato puree and cook until oil separates.' },
                { step: 6, description: 'Add cream, garam masala, and salt. Simmer for 5 minutes.' },
                { step: 7, description: 'Add koftas to the gravy and cook for 2 minutes.' },
                { step: 8, description: 'Serve hot with naan or rice.' }
            ],
            tips: [
                'Ensure koftas are firm before frying',
                'Use fresh cream for a rich taste',
                'Adjust spices according to taste'
            ]
        }
    },
    'Non-Vegetarian': {
        'Butter Chicken': {
            ingredients: [
                '500g chicken, boneless',
                '3 tomatoes, pureed',
                '2 onions, finely chopped',
                '100g butter',
                '1/2 cup fresh cream',
                '2 tbsp garam masala',
                '1 tsp turmeric powder',
                '2 tsp red chili powder',
                '2 tbsp ginger-garlic paste',
                'Salt to taste',
                'Kasuri methi (dried fenugreek leaves)',
                'Oil for cooking'
            ],
            cookTime: '40 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Popular', 'Rich', 'Party'],
            nutrition: {
                calories: 520,
                protein: '32g',
                carbs: '12g',
                fats: '26g'
            },
            steps: [
                { step: 1, description: 'Marinate chicken with ginger-garlic paste, turmeric, and salt for 30 minutes.' },
                { step: 2, description: 'Heat oil in a pan. Add chicken and cook until golden brown. Remove and set aside.' },
                { step: 3, description: 'In the same pan, add butter and onions. Sauté until golden.' },
                { step: 4, description: 'Add tomato puree, red chili powder, and garam masala. Cook until oil separates.' },
                { step: 5, description: 'Add cooked chicken and simmer for 10 minutes.' },
                { step: 6, description: 'Add cream and kasuri methi. Cook for another 5 minutes.' },
                { step: 7, description: 'Garnish with cream and serve hot with naan or rice.' }
            ],
            tips: [
                'Marinate chicken for at least 30 minutes for best flavor',
                'Use fresh cream for a rich taste',
                'Adjust spices according to taste'
            ]
        },
        'Mutton Rogan Josh': {
            ingredients: [
                '500g mutton, cut into pieces',
                '2 onions, finely chopped',
                '3 tomatoes, pureed',
                '1 cup yogurt',
                '2 tbsp ginger-garlic paste',
                '2 tsp garam masala',
                '1 tsp red chili powder',
                'Salt to taste',
                'Oil for cooking'
            ],
            cookTime: '60 mins',
            servings: 6,
            difficulty: 'Hard',
            tags: ['Spicy', 'Traditional'],
            nutrition: {
                calories: 480,
                protein: '36g',
                carbs: '8g',
                fats: '24g'
            },
            steps: [
                { step: 1, description: 'Marinate mutton with yogurt, ginger-garlic paste, and salt for 1 hour.' },
                { step: 2, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add marinated mutton and cook until browned.' },
                { step: 4, description: 'Add tomato puree, red chili powder, and garam masala. Cook until oil separates.' },
                { step: 5, description: 'Add water and simmer for 40 minutes until mutton is tender.' },
                { step: 6, description: 'Garnish with coriander and serve hot with rice or naan.' }
            ],
            tips: [
                'Marinate mutton for at least 1 hour for best flavor',
                'Cook on low heat for tender meat',
                'Adjust spices according to taste'
            ]
        },
        'Fish Curry': {
            ingredients: [
                '500g fish, cut into pieces',
                '2 onions, finely chopped',
                '3 tomatoes, pureed',
                '1 cup coconut milk',
                '2 tbsp ginger-garlic paste',
                '1 tsp turmeric powder',
                '1 tsp red chili powder',
                'Salt to taste',
                'Oil for cooking',
                'Curry leaves for garnishing'
            ],
            cookTime: '30 mins',
            servings: 4,
            difficulty: 'Easy',
            tags: ['Coastal', 'Light'],
            nutrition: {
                calories: 340,
                protein: '28g',
                carbs: '6g',
                fats: '18g'
            },
            steps: [
                { step: 1, description: 'Marinate fish with turmeric and salt for 15 minutes.' },
                { step: 2, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add ginger-garlic paste and cook for 2 minutes.' },
                { step: 4, description: 'Add tomato puree and cook until oil separates.' },
                { step: 5, description: 'Add coconut milk, red chili powder, and salt. Simmer for 5 minutes.' },
                { step: 6, description: 'Add fish pieces and cook for 10 minutes.' },
                { step: 7, description: 'Garnish with curry leaves and serve hot with rice.' }
            ],
            tips: [
                'Use fresh fish for best results',
                'Adjust spices according to taste',
                'Serve with steamed rice for a complete meal'
            ]
        },
        'Chicken Biryani': {
            ingredients: [
                '500g chicken, cut into pieces',
                '2 cups basmati rice',
                '2 onions, sliced',
                '1 cup yogurt',
                '2 tbsp ginger-garlic paste',
                '2 tsp garam masala',
                '1 tsp red chili powder',
                'Saffron strands soaked in milk',
                'Salt to taste',
                'Oil for cooking',
                'Fried onions and mint leaves for garnishing'
            ],
            cookTime: '60 mins',
            servings: 6,
            difficulty: 'Hard',
            tags: ['Party', 'Traditional'],
            nutrition: {
                calories: 560,
                protein: '24g',
                carbs: '48g',
                fats: '22g'
            },
            steps: [
                { step: 1, description: 'Marinate chicken with yogurt, ginger-garlic paste, and salt for 1 hour.' },
                { step: 2, description: 'Cook rice with salt and set aside.' },
                { step: 3, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 4, description: 'Add marinated chicken and cook until browned.' },
                { step: 5, description: 'Layer cooked rice and chicken in a pot. Add saffron milk.' },
                { step: 6, description: 'Cover and cook on low heat for 20 minutes.' },
                { step: 7, description: 'Garnish with fried onions and mint leaves. Serve hot.' }
            ],
            tips: [
                'Marinate chicken for at least 1 hour for best flavor',
                'Use basmati rice for authentic taste',
                'Serve with raita for a complete meal'
            ]
        },
        'Chicken Korma': {
            ingredients: [
                '500g chicken, cut into pieces',
                '1 cup yogurt',
                '2 onions, finely chopped',
                '2 tbsp ginger-garlic paste',
                '1/2 cup cashews, ground',
                '1/2 cup fresh cream',
                '1 tsp garam masala',
                'Salt to taste',
                'Oil for cooking'
            ],
            cookTime: '45 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Mild', 'Rich'],
            nutrition: {
                calories: 490,
                protein: '28g',
                carbs: '14g',
                fats: '24g'
            },
            steps: [
                { step: 1, description: 'Marinate chicken with yogurt, ginger-garlic paste, and salt for 1 hour.' },
                { step: 2, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add marinated chicken and cook until browned.' },
                { step: 4, description: 'Add ground cashews and cook for 5 minutes.' },
                { step: 5, description: 'Add cream, garam masala, and salt. Simmer for 10 minutes.' },
                { step: 6, description: 'Serve hot with naan or rice.' }
            ],
            tips: [
                'Marinate chicken for at least 1 hour for best flavor',
                'Use fresh cream for a rich taste',
                'Adjust spices according to taste'
            ]
        },
        'Tandoori Chicken': {
            ingredients: [
                '500g chicken, cut into pieces',
                '1 cup yogurt',
                '2 tbsp ginger-garlic paste',
                '1 tsp red chili powder',
                '1 tsp turmeric powder',
                '1 tsp tandoori masala',
                'Salt to taste',
                'Lemon wedges for serving'
            ],
            cookTime: '40 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Grilled', 'Spicy'],
            nutrition: {
                calories: 380,
                protein: '32g',
                carbs: '8g',
                fats: '18g'
            },
            steps: [
                { step: 1, description: 'Marinate chicken with yogurt, ginger-garlic paste, and spices for 1 hour.' },
                { step: 2, description: 'Preheat oven to 200°C. Place chicken on a baking tray.' },
                { step: 3, description: 'Bake for 30 minutes, turning halfway through.' },
                { step: 4, description: 'Serve hot with lemon wedges.' }
            ],
            tips: [
                'Marinate chicken for at least 1 hour for best flavor',
                'Use a grill for authentic taste',
                'Serve with mint chutney for extra flavor'
            ]
        },
        'Mutton Biryani': {
            ingredients: [
                '500g mutton, cut into pieces',
                '2 cups basmati rice',
                '2 onions, sliced',
                '1 cup yogurt',
                '2 tbsp ginger-garlic paste',
                '2 tsp garam masala',
                '1 tsp red chili powder',
                'Saffron strands soaked in milk',
                'Salt to taste',
                'Oil for cooking',
                'Fried onions and mint leaves for garnishing'
            ],
            cookTime: '90 mins',
            servings: 6,
            difficulty: 'Hard',
            tags: ['Festival', 'Rich'],
            nutrition: {
                calories: 620,
                protein: '28g',
                carbs: '48g',
                fats: '26g'
            },
            steps: [
                { step: 1, description: 'Marinate mutton with yogurt, ginger-garlic paste, and salt for 1 hour.' },
                { step: 2, description: 'Cook rice with salt and set aside.' },
                { step: 3, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 4, description: 'Add marinated mutton and cook until browned.' },
                { step: 5, description: 'Layer cooked rice and mutton in a pot. Add saffron milk.' },
                { step: 6, description: 'Cover and cook on low heat for 30 minutes.' },
                { step: 7, description: 'Garnish with fried onions and mint leaves. Serve hot.' }
            ],
            tips: [
                'Marinate mutton for at least 1 hour for best flavor',
                'Use basmati rice for authentic taste',
                'Serve with raita for a complete meal'
            ]
        },
        'Prawn Masala': {
            ingredients: [
                '500g prawns, cleaned',
                '2 onions, finely chopped',
                '3 tomatoes, pureed',
                '1 cup coconut milk',
                '2 tbsp ginger-garlic paste',
                '1 tsp turmeric powder',
                '1 tsp red chili powder',
                'Salt to taste',
                'Oil for cooking',
                'Curry leaves for garnishing'
            ],
            cookTime: '30 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Seafood', 'Spicy'],
            nutrition: {
                calories: 280,
                protein: '24g',
                carbs: '12g',
                fats: '16g'
            },
            steps: [
                { step: 1, description: 'Marinate prawns with turmeric and salt for 15 minutes.' },
                { step: 2, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add ginger-garlic paste and cook for 2 minutes.' },
                { step: 4, description: 'Add tomato puree and cook until oil separates.' },
                { step: 5, description: 'Add coconut milk, red chili powder, and salt. Simmer for 5 minutes.' },
                { step: 6, description: 'Add prawns and cook for 10 minutes.' },
                { step: 7, description: 'Garnish with curry leaves and serve hot with rice.' }
            ],
            tips: [
                'Use fresh prawns for best results',
                'Adjust spices according to taste',
                'Serve with steamed rice for a complete meal'
            ]
        },
        'Lamb Vindaloo': {
            ingredients: [
                '500g lamb, cut into pieces',
                '1/2 cup vinegar',
                '2 onions, finely chopped',
                '2 tbsp ginger-garlic paste',
                '2 tsp red chili powder',
                '1 tsp turmeric powder',
                'Salt to taste',
                'Oil for cooking'
            ],
            cookTime: '60 mins',
            servings: 4,
            difficulty: 'Hard',
            tags: ['Goan', 'Very Spicy'],
            nutrition: {
                calories: 420,
                protein: '32g',
                carbs: '10g',
                fats: '28g'
            },
            steps: [
                { step: 1, description: 'Marinate lamb with vinegar, ginger-garlic paste, and spices for 1 hour.' },
                { step: 2, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add marinated lamb and cook until browned.' },
                { step: 4, description: 'Add water and simmer for 40 minutes until lamb is tender.' },
                { step: 5, description: 'Serve hot with rice or naan.' }
            ],
            tips: [
                'Marinate lamb for at least 1 hour for best flavor',
                'Cook on low heat for tender meat',
                'Adjust spices according to taste'
            ]
        },
        'Chicken Tikka': {
            ingredients: [
                '500g chicken breast, cubed',
                '1 cup yogurt',
                '2 tbsp ginger-garlic paste',
                '2 tbsp tikka masala',
                '1 tsp red chili powder',
                '1 tsp garam masala',
                'Salt to taste',
                'Lemon juice',
                'Oil for basting'
            ],
            cookTime: '35 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Appetizer', 'Grilled'],
            nutrition: {
                calories: 320,
                protein: '28g',
                carbs: '8g',
                fats: '14g'
            },
            steps: [
                { step: 1, description: 'Marinate chicken with yogurt, spices, and lemon juice for 2 hours.' },
                { step: 2, description: 'Thread onto skewers and grill, basting with oil occasionally.' },
                { step: 3, description: 'Cook until charred and done.' }
            ],
            tips: [
                'Marinate overnight for best results',
                'Use thick yogurt for better coating',
                'Don\'t overcook to keep chicken juicy'
            ]
        },
        'Fish Curry Kerala Style': {
            ingredients: [
                '500g fish pieces',
                'Coconut milk',
                'Curry leaves',
                'Kokum or tamarind',
                'Shallots',
                'Green chilies',
                'Turmeric powder',
                'Red chili powder',
                'Mustard seeds'
            ],
            cookTime: '30 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Kerala', 'Spicy', 'Coastal'],
            nutrition: {
                calories: 280,
                protein: '24g',
                carbs: '12g',
                fats: '16g'
            },
            steps: [
                { step: 1, description: 'Marinate fish with turmeric and salt.' },
                { step: 2, description: 'Prepare coconut milk gravy with spices.' },
                { step: 3, description: 'Add fish and simmer until cooked.' }
            ],
            tips: [
                'Use fresh fish for best results',
                'Don\'t overcook the fish',
                'Add kokum for authentic taste'
            ]
        },
        'Mutton Curry': {
            ingredients: [
                '500g mutton pieces',
                'Onions',
                'Tomatoes',
                'Ginger-garlic paste',
                'Garam masala',
                'Red chili powder',
                'Coriander powder',
                'Cumin powder',
                'Oil'
            ],
            cookTime: '45 mins',
            servings: 4,
            difficulty: 'Hard',
            tags: ['Spicy', 'Main Course'],
            nutrition: {
                calories: 420,
                protein: '32g',
                carbs: '14g',
                fats: '24g'
            },
            steps: [
                { step: 1, description: 'Marinate mutton with spices.' },
                { step: 2, description: 'Cook onions until golden brown.' },
                { step: 3, description: 'Add mutton and cook until tender.' }
            ],
            tips: [
                'Pressure cook for tender meat',
                'Use fresh spices',
                'Simmer on low heat for best results'
            ]
        },
        'Chicken 65': {
            ingredients: [
                '500g boneless chicken',
                'Yogurt',
                'Red chili powder',
                'Ginger-garlic paste',
                'Corn flour',
                'Egg',
                'Curry leaves',
                'Green chilies',
                'Oil for deep frying'
            ],
            cookTime: '40 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Appetizer', 'Spicy', 'South Indian'],
            nutrition: {
                calories: 350,
                protein: '26g',
                carbs: '18g',
                fats: '20g'
            },
            steps: [
                { step: 1, description: 'Marinate chicken with spices and yogurt.' },
                { step: 2, description: 'Coat with corn flour and egg mixture.' },
                { step: 3, description: 'Deep fry until golden and crispy.' }
            ],
            tips: [
                'Double fry for extra crispiness',
                'Don\'t overcrowd while frying',
                'Serve immediately while hot'
            ]
        },
        'Tandoori Fish': {
            ingredients: [
                '500g fish fillets',
                'Yogurt',
                'Tandoori masala',
                'Ginger-garlic paste',
                'Lemon juice',
                'Red chili powder',
                'Garam masala',
                'Oil for basting'
            ],
            cookTime: '30 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Grilled', 'Healthy'],
            nutrition: {
                calories: 280,
                protein: '32g',
                carbs: '6g',
                fats: '14g'
            },
            steps: [
                { step: 1, description: 'Marinate fish with spices and yogurt.' },
                { step: 2, description: 'Grill, basting with oil occasionally.' },
                { step: 3, description: 'Cook until done and slightly charred.' }
            ],
            tips: [
                'Use firm fish varieties',
                'Don\'t over marinate',
                'Serve with mint chutney'
            ]
        }
    },
    'Quick Meals': {
        'Masala Dosa': {
            ingredients: [
                '2 cups rice',
                '1 cup urad dal',
                '2 potatoes, boiled and mashed',
                '1 onion, finely chopped',
                '1 tsp mustard seeds',
                '1 tsp turmeric powder',
                'Salt to taste',
                'Oil for cooking'
            ],
            cookTime: '20 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Breakfast', 'South Indian'],
            nutrition: {
                calories: 280,
                protein: '8g',
                carbs: '42g',
                fats: '10g'
            },
            steps: [
                { step: 1, description: 'Soak rice and urad dal separately for 4 hours. Grind to a smooth batter and ferment overnight.' },
                { step: 2, description: 'Heat oil in a pan. Add mustard seeds and let them splutter.' },
                { step: 3, description: 'Add onions and sauté until golden. Add turmeric and potatoes. Mix well.' },
                { step: 4, description: 'Heat a non-stick pan. Pour a ladle of batter and spread into a thin circle.' },
                { step: 5, description: 'Drizzle oil around the edges. Cook until golden brown.' },
                { step: 6, description: 'Place potato filling in the center and fold dosa. Serve hot with chutney.' }
            ],
            tips: [
                'Ferment batter overnight for best results',
                'Use a non-stick pan for easy cooking',
                'Serve with coconut chutney and sambar'
            ]
        },
        'Vegetable Pulao': {
            ingredients: [
                '2 cups basmati rice',
                '1 cup mixed vegetables (carrots, peas, beans)',
                '2 onions, sliced',
                '2 tbsp ghee',
                '1 tsp garam masala',
                'Salt to taste',
                'Fried onions for garnishing'
            ],
            cookTime: '25 mins',
            servings: 4,
            difficulty: 'Easy',
            tags: ['One Pot', 'Light'],
            nutrition: {
                calories: 320,
                protein: '6g',
                carbs: '46g',
                fats: '12g'
            },
            steps: [
                { step: 1, description: 'Wash and soak rice for 30 minutes. Drain and set aside.' },
                { step: 2, description: 'Heat ghee in a pan. Add onions and sauté until golden.' },
                { step: 3, description: 'Add mixed vegetables and cook for 5 minutes.' },
                { step: 4, description: 'Add rice, garam masala, and salt. Mix well.' },
                { step: 5, description: 'Add water and bring to a boil. Cover and cook on low heat for 15 minutes.' },
                { step: 6, description: 'Garnish with fried onions and serve hot.' }
            ],
            tips: [
                'Use basmati rice for best results',
                'Adjust vegetables according to preference',
                'Serve with raita for a complete meal'
            ]
        },
        'Egg Bhurji': {
            ingredients: [
                '4 eggs',
                '2 onions, finely chopped',
                '2 tomatoes, chopped',
                '2 green chilies, chopped',
                '1 tsp turmeric powder',
                'Salt to taste',
                'Oil for cooking',
                'Fresh coriander for garnishing'
            ],
            cookTime: '15 mins',
            servings: 2,
            difficulty: 'Easy',
            tags: ['Breakfast', 'Quick'],
            nutrition: {
                calories: 220,
                protein: '14g',
                carbs: '8g',
                fats: '16g'
            },
            steps: [
                { step: 1, description: 'Heat oil in a pan. Add onions and sauté until golden.' },
                { step: 2, description: 'Add tomatoes, green chilies, and turmeric. Cook until tomatoes are soft.' },
                { step: 3, description: 'Beat eggs with salt and add to the pan. Stir continuously.' },
                { step: 4, description: 'Cook until eggs are scrambled and cooked through.' },
                { step: 5, description: 'Garnish with fresh coriander and serve hot.' }
            ],
            tips: [
                'Use fresh eggs for best results',
                'Adjust spices according to taste',
                'Serve with toast or paratha'
            ]
        }
    },
    'Snacks': {
        'Samosa': {
            ingredients: [
                '2 cups all-purpose flour',
                '4 potatoes, boiled and mashed',
                '1 cup peas',
                '1 tsp cumin seeds',
                '1 tsp garam masala',
                'Salt to taste',
                'Oil for frying'
            ],
            cookTime: '45 mins',
            servings: 8,
            difficulty: 'Hard',
            tags: ['Deep Fried', 'Party'],
            nutrition: {
                calories: 240,
                protein: '4g',
                carbs: '24g',
                fats: '14g'
            },
            steps: [
                { step: 1, description: 'Mix flour, salt, and water to form a dough. Set aside.' },
                { step: 2, description: 'Heat oil in a pan. Add cumin seeds and let them splutter.' },
                { step: 3, description: 'Add potatoes, peas, garam masala, and salt. Cook for 5 minutes.' },
                { step: 4, description: 'Roll out dough into circles. Cut in half and form cones.' },
                { step: 5, description: 'Fill cones with potato mixture and seal edges.' },
                { step: 6, description: 'Deep fry samosas until golden brown. Serve hot.' }
            ],
            tips: [
                'Ensure dough is firm for easy shaping',
                'Adjust spices according to taste',
                'Serve with mint chutney for extra flavor'
            ]
        },
        'Pakora': {
            ingredients: [
                '1 cup chickpea flour',
                '2 onions, sliced',
                '2 potatoes, sliced',
                '2 green chilies, chopped',
                '1 tsp red chili powder',
                'Salt to taste',
                'Oil for frying'
            ],
            cookTime: '20 mins',
            servings: 6,
            difficulty: 'Easy',
            tags: ['Rainy Day', 'Tea Time'],
            nutrition: {
                calories: 180,
                protein: '6g',
                carbs: '18g',
                fats: '10g'
            },
            steps: [
                { step: 1, description: 'Mix chickpea flour, red chili powder, salt, and water to form a batter.' },
                { step: 2, description: 'Add onions, potatoes, and green chilies to the batter.' },
                { step: 3, description: 'Heat oil in a pan. Drop spoonfuls of batter into hot oil.' },
                { step: 4, description: 'Fry pakoras until golden brown. Serve hot.' }
            ],
            tips: [
                'Ensure batter is thick for crispy pakoras',
                'Adjust spices according to taste',
                'Serve with tamarind chutney for extra flavor'
            ]
        },
        'Vada Pav': {
            ingredients: [
                '4 potatoes, boiled and mashed',
                '4 bread rolls',
                '2 green chilies, chopped',
                '1 tsp mustard seeds',
                'Salt to taste',
                'Oil for frying',
                'Chutney for serving'
            ],
            cookTime: '30 mins',
            servings: 4,
            difficulty: 'Medium',
            tags: ['Street Food', 'Mumbai'],
            nutrition: {
                calories: 320,
                protein: '8g',
                carbs: '42g',
                fats: '16g'
            },
            steps: [
                { step: 1, description: 'Heat oil in a pan. Add mustard seeds and let them splutter.' },
                { step: 2, description: 'Add potatoes, green chilies, and salt. Cook for 5 minutes.' },
                { step: 3, description: 'Shape potato mixture into balls and deep fry until golden.' },
                { step: 4, description: 'Place vada in bread rolls. Serve hot with chutney.' }
            ],
            tips: [
                'Ensure potato mixture is firm for easy shaping',
                'Adjust spices according to taste',
                'Serve with spicy chutney for extra flavor'
            ]
        },
        'Pani Puri': {
            ingredients: [
                '1 cup semolina',
                '4 potatoes, boiled and mashed',
                '1 cup chickpeas, boiled',
                '1/2 cup mint leaves',
                '1/2 cup tamarind pulp',
                'Salt to taste',
                'Oil for frying'
            ],
            cookTime: '40 mins',
            servings: 6,
            difficulty: 'Medium',
            tags: ['Street Food', 'Chaat'],
            nutrition: {
                calories: 160,
                protein: '4g',
                carbs: '28g',
                fats: '6g'
            },
            steps: [
                { step: 1, description: 'Mix semolina, salt, and water to form a dough. Roll out and cut into circles.' },
                { step: 2, description: 'Deep fry circles until puffed and golden. Set aside.' },
                { step: 3, description: 'Blend mint leaves, tamarind pulp, and salt to make pani.' },
                { step: 4, description: 'Fill puris with potatoes, chickpeas, and pani. Serve immediately.' }
            ],
            tips: [
                'Ensure dough is firm for crispy puris',
                'Adjust spices according to taste',
                'Serve immediately for best results'
            ]
        }
    },
    'Desserts': {
        'Gulab Jamun': {
            ingredients: [
                '1 cup milk powder',
                '1/4 cup all-purpose flour',
                '1/4 cup ghee',
                '1/2 cup sugar',
                '1/2 tsp cardamom powder',
                'Oil for frying'
            ],
            cookTime: '30 mins',
            servings: 10,
            difficulty: 'Medium',
            tags: ['Sweet', 'Festival'],
            nutrition: {
                calories: 150,
                protein: '3g',
                carbs: '25g',
                fats: '5g'
            },
            steps: [
                { step: 1, description: 'Mix milk powder, flour, and ghee to form a dough. Shape into balls.' },
                { step: 2, description: 'Heat oil in a pan. Fry balls until golden brown. Set aside.' },
                { step: 3, description: 'Boil sugar and water to make syrup. Add cardamom powder.' },
                { step: 4, description: 'Soak fried balls in syrup for 30 minutes. Serve warm.' }
            ],
            tips: [
                'Ensure dough is smooth for soft gulab jamuns',
                'Adjust sweetness according to taste',
                'Serve warm for best results'
            ]
        },
        'Rasgulla': {
            ingredients: [
                '1 liter milk',
                '1/4 cup lemon juice',
                '1 cup sugar',
                '1/2 tsp rose water'
            ],
            cookTime: '45 mins',
            servings: 12,
            difficulty: 'Hard',
            tags: ['Sweet', 'Bengali'],
            nutrition: {
                calories: 120,
                protein: '4g',
                carbs: '22g',
                fats: '3g'
            },
            steps: [
                { step: 1, description: 'Boil milk and add lemon juice to curdle. Strain and collect chenna.' },
                { step: 2, description: 'Knead chenna to a smooth dough. Shape into balls.' },
                { step: 3, description: 'Boil sugar and water to make syrup. Add rose water.' },
                { step: 4, description: 'Add chenna balls to syrup and cook for 20 minutes. Serve chilled.' }
            ],
            tips: [
                'Ensure chenna is smooth for soft rasgullas',
                'Adjust sweetness according to taste',
                'Serve chilled for best results'
            ]
        }
    }
}; 