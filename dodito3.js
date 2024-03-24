document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".count");

    counters.forEach(function(counter) {
        let count = 0;

        function updateCount() {
            counter.textContent = count;
        }

        updateCount();

        const increaseButton = counter.nextElementSibling;
        const decreaseButton = counter.previousElementSibling;

        increaseButton.addEventListener("click", function() {
            count++;
            updateCount();
        });

        decreaseButton.addEventListener("click", function() {
            if (count > 0) {
                count--;
                updateCount();
            }
        });
    });
});
