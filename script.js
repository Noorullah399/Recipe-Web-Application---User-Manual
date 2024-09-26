const recipes = [
    {
        "id": 1,
        "name": "Classic Margherita Pizza",
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "instructions": "Delicious homemade pizza with fresh mozzarella and basil.",
        "reviews": 98,
        "mealType": "Dinner",
        "uploadedTime": "2 hours ago",
        "rating": 4.6


    },
    {
        "id": 2,
        "name": "Vegetarian Stir-Fry",
        "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
        "instructions": "Quick and healthy stir-fry with fresh vegetables.",
        "reviews": 65,
        "mealType": "Lunch",
        "uploadedTime": "1 day ago",
        "rating": 4.2
    },
    {
        "id": 3,
        "name": "Chocolate Chip Cookies",
        "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
        "instructions": "Crispy, chewy chocolate chip cookies.",
        "reviews": 230,
        "mealType": "Dessert",
        "uploadedTime": "3 days ago",
        "rating": 4.9
    },
    {
        "id": 4,
        "name": "Spaghetti Carbonara",
        "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
        "instructions": "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
        "reviews": 78,
        "mealType": "Dinner",
        "uploadedTime": "2 days ago",
        "rating": 4.5
    },
    {
        "id": 5,
        "name": "Caesar Salad",
        "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
        "instructions": "Crispy romaine lettuce, croutons, and Caesar dressing.",
        "reviews": 55,
        "mealType": "Lunch",
        "uploadedTime": "5 hours ago",
        "rating": 4.1
    },
    {
        "id": 6,
        "name": "Blueberry Pancakes",
        "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
        "instructions": "Fluffy pancakes with fresh blueberries and maple syrup.",
        "reviews": 102,
        "mealType": "Breakfast",
        "uploadedTime": "6 hours ago",
        "rating": 4.7
    }
];

function renderRecipes(filteredRecipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.name}</h5>
                        <p class="card-text">${recipe.instructions}</p>
                        <p class="card-text"><strong>Uploaded:</strong> ${recipe.uploadedTime}</p>
                        <p class="card-text"><strong>Meal Type:</strong> ${recipe.mealType}</p>
                        <div class="star-rating">${'★'.repeat(Math.round(recipe.rating))}</div>
                        <p class="card-text green-highlight">${recipe.reviews} reviews</p>
                    </div>
                </div>
            </div>
        `;
        recipeList.innerHTML += recipeCard;
    });
}
function renderRecipes(filteredRecipes) {
    const recipeList = document.getElementById('recipeList');
    recipeList.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
            <div class="col-md-4 mb-4" onclick="showRecipeDetails(${recipe.id})">
                <div class="card">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                    <div class="card-body">
                        <h5 class="card-title">${recipe.name}</h5>
                        <p class="card-text">${recipe.instructions}</p>
                        <p class="card-text"><strong>Uploaded:</strong> ${recipe.uploadedTime}</p>
                        <p class="card-text"><strong>Meal Type:</strong> ${recipe.mealType}</p>
                        <div class="star-rating">${'★'.repeat(Math.round(recipe.rating))}</div>
                        <p class="card-text green-highlight">${recipe.reviews} reviews</p>
                    </div>
                </div>
            </div>
        `;
        recipeList.innerHTML += recipeCard;
    });
}

function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
        document.getElementById('detailsImage').src = recipe.image;
        document.getElementById('detailsName').innerText = recipe.name;
        document.getElementById('detailsInstructions').innerText = recipe.instructions;
        document.getElementById('detailsIngredients').innerText = recipe.Ingredients;
        document.getElementById('detailsMealType').innerText = recipe.mealType;
        document.getElementById('detailsRating').innerText = recipe.rating;
        document.getElementById('detailsReviews').innerText = recipe.reviews;

        // Hide recipe list and show details
        document.getElementById('recipeList').style.display = 'none';
        document.getElementById('recipeDetails').style.display = 'block';
    }
}

// Back button to return to recipe list
document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('recipeDetails').style.display = 'none';
    document.getElementById('recipeList').style.display = 'flex'; // Show recipe list again
});

// Initial rendering of recipes
renderRecipes(recipes);


// Initial rendering of recipes
renderRecipes(recipes);

document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.uploadedTime.toLowerCase().includes(searchTerm)
    );
    renderRecipes(filteredRecipes);
});
// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) || 
        recipe.instructions.toLowerCase().includes(searchTerm) || 
        recipe.uploadedTime.toLowerCase().includes(searchTerm)
    );

    renderRecipes(filteredRecipes);
});