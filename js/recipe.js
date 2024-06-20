// Dữ liệu giả định cho các món ăn
const recipesData = [
    {
        id: 1,
        name: "Cơm chiên",
        image: "img/comchien.jpg",
        description: " Cơm chiên thường được làm từ cơm trắng đã nấu chín, sau đó kết hợp với các loại gia vị, rau củ và thịt.Bạn có thể thêm hành, tỏi, ớt, xà lách, cà rốt, gà hoặc tôm vào cơm chiên. Món này thường được chiên trên một chảo nóng với dầu ăn cho đến khi cơm và các thành phần khác được nâu và thơm ngon."
    },
    {
        id: 2,
        name: "Đùi gà chiên",
        image: "img/duiga.jpg",
        description: "Đùi gà chiên là món ăn hấp dẫn, thường được làm giòn ngoài, mềm trong. Đùi gà được ướp gia vị, sau đó chiên cho đến khi da và thịt chín vàng. Nước sốt gà chiên thường sử dụng nước mắm, tỏi, đường, và ớt để tạo hương vị đậm đà"
    },
    {
        id: 3,
        name: "Mực chiên",
        image: "img/mucchien.jpg",
        description: "Mực vòng chiên là món ăn hấp dẫn, thường được làm giòn ngoài, mềm trong. Mực vòng được ướp gia vị, sau đó chiên cho đến khi da và thịt chín vàng. Nước sốt chấm thường sử dụng mayonnaise, tương ớt, tương cà, dầu mè và nước cốt chanh."
    }
];

// Function để hiển thị danh sách các món ăn
function renderRecipes() {
    const recipeList = document.getElementById("recipe-list");

    recipesData.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe");

        const recipeImage = document.createElement("img");
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.name;

        const recipeTitle = document.createElement("h3");
        recipeTitle.textContent = recipe.name;

        const recipeDescription = document.createElement("p");
        recipeDescription.textContent = recipe.description;

        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(recipeTitle);
        recipeCard.appendChild(recipeDescription);

        // Sự kiện khi click vào món ăn để hiển thị chi tiết
        recipeCard.addEventListener("click", () => {
            displayRecipeDetails(recipe);
        });

        recipeList.appendChild(recipeCard);
    });
}

// Function để hiển thị chi tiết món ăn khi click vào
function displayRecipeDetails(recipe) {
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("recipe-details");

    // Xóa nội dung cũ trong modal nếu có
    modalContent.innerHTML = "";

    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipe.name;

    const recipeDescription = document.createElement("p");
    recipeDescription.textContent = recipe.description;

    modalContent.appendChild(recipeImage);
    modalContent.appendChild(recipeTitle);
    modalContent.appendChild(recipeDescription);

    // Hiển thị modal
    modal.style.display = "flex";

    // Đóng modal khi click vào nút đóng
    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Gọi hàm renderRecipes để hiển thị danh sách món ăn khi trang được tải
document.addEventListener("DOMContentLoaded", () => {
    renderRecipes();
});
