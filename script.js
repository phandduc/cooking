document.addEventListener("DOMContentLoaded", function () {
    const foodSuggestions = [
        {
            image: "background.jpeg",
            name: "Tart Trứng Bồ Đào Nha",
            description: "Một món bánh thơm ngon, béo ngậy với lớp vỏ giòn tan.",
            link: "tart-trung.html"
        },
        {
            image: "Tiramisu-Tart.jpg",
            name: "Tiramisu",
            description: "Hương vị kết hợp hoàn hảo giữa cà phê và kem phô mai.",
            link: "tiramisu.html"
        },
        {
            image: "Banh-mousse-dau-tay.webp",
            name: "Mousse Dâu Tây",
            description: "Sự kết hợp hoàn hảo giữa dâu tây và chocolate trắng.",
            link: "mousse-dau-tay.html"
        }
    ];

    let currentIndex = 0;
    const suggestionBox = document.getElementById("food-suggestion-box");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateFoodSuggestion() {
        const food = foodSuggestions[currentIndex];
        suggestionBox.innerHTML = `
            <div class="food-box">
                <a href="${food.link}" style="text-decoration: none;">
                    <img src="${food.image}" alt="${food.name}">
                    <h3>${food.name}</h3>
                    <p>${food.description}</p>
                </a>
            </div>
        `;
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + foodSuggestions.length) % foodSuggestions.length;
        updateFoodSuggestion();
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % foodSuggestions.length;
        updateFoodSuggestion();
    });

    updateFoodSuggestion();
    setInterval(() => {
        currentIndex = (currentIndex + 1) % foodSuggestions.length;
        updateFoodSuggestion();
    }, 4000);
});
document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.querySelector(".menu-container");
    const menuButton = document.querySelector(".menu-button"); // Nút mở menu

    // Sự kiện click vào nút menu
    menuButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
        menuContainer.classList.toggle("active"); // Bật/tắt menu
    });

    // Sự kiện click bên ngoài menu để đóng
    document.addEventListener("click", function (event) {
        if (!menuContainer.contains(event.target)) {
            menuContainer.classList.remove("active"); // Đóng menu nếu bấm ra ngoài
        }
    });
});
