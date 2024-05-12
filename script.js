document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (screenWidth < 800) {
            document.getElementById("heading").style.display = "none";
            document.getElementById("image").src = "lion.gif"; // Change image source to "lion.gif"
        }
    }, 7000); // 7 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    // Hide the h1 after 10 seconds
    setTimeout(function() {
        document.getElementById("heading").style.display = "none";
    }, 10000); // 10 seconds in milliseconds
});

  

