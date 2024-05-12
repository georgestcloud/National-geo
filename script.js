document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth < 800) {
            document.getElementById("heading").style.display = "none";
            var imageElement = document.querySelector('img[src="lion.png"][alt="image of lions"]');
            if (imageElement) {
                imageElement.classList.add("eze");
                imageElement.src = "lion.gif";
            }
        }
    }, 7000); // 7 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    // Hide the h1 after 10 seconds
    setTimeout(function() {
        document.getElementById("heading").style.display = "none";
    }, 10000); // 10 seconds in milliseconds
});

  

