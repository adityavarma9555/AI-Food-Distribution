document.addEventListener("DOMContentLoaded", function () {

    console.log("FoodBridge AI Food Distribution loaded!");

    // Button click effect
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {
            console.log("Button clicked:", button.innerText);
        });

    });


    // Simple AI matching demo
    const matchScore = document.querySelector(".score strong");

    if (matchScore) {
        let score = 94;

        setTimeout(function () {
            matchScore.innerText = score + "%";
        }, 500);
    }


    // Scroll animation
    const cards = document.querySelectorAll(
        ".step-card, .match-box, .stat"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    cards.forEach(function (card) {
        observer.observe(card);
    });

});