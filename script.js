// Function to hide the heading after 7 seconds
function hideHeading() {
    setTimeout(function() {
        var heading = document.getElementById("heading");
        if (heading) {
            heading.style.display = "none";
        }
    }, 10000); // 10 seconds
}

// Function to change images when screen width is below 800px
function changeImages() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth < 800) {
        var lionImage = document.querySelector('img[src="lion.png"][alt="image of lions"]');
        if (lionImage) {
            lionImage.src = "lion.gif";
        }

        var mlkImage = document.querySelector('img[src="ml.png"][alt="Marthin Luther King"]');
        if (mlkImage) {
            mlkImage.src = "mlk.gif";
        }

         var spaceshipImage = document.querySelector('img[src="science.png"][alt="image of spaceship"]');
        if (spaceshipImage) {
            spaceshipImage.src = "star.gif";
        }

         var airBalloonImage = document.querySelector('img[src="hab.png"][alt="hot air balloons"]');
        if (airBalloonImage) {
            airBalloonImage.src = "air.gif";
        }
    }
}

// Call the functions when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    hideHeading(); // Hide the heading after 7 seconds
    changeImages(); // Change images when the screen width is below 800px
});



document.addEventListener("DOMContentLoaded", function() {
    // Hide the h1 after 10 seconds
    setTimeout(function() {
        document.getElementById("heading").style.display = "none";
    }, 10000); // 10 seconds in milliseconds
});

  

