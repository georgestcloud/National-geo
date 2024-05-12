document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenWidth < 800) {
        document.getElementById("heading").style.display = "none";
      }
    }, 7000); // 7 seconds
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    // Get all panel items
    const panels = document.querySelectorAll('.panel');
  
    // Variable to keep track of the current panel
    let currentPanelIndex = 0;
  
    // Function to slide to the next panel
    function slideNext() {
      if (currentPanelIndex < panels.length - 1) {
        currentPanelIndex++;
        slideTo(currentPanelIndex);
      }
    }
  
    
  
// Get all panels
const panels = document.querySelectorAll('.panel');

// Current active panel index
let activePanelIndex = 0;

// Function to switch to the next panel
function nextPanel() {
  // Hide the current active panel
  panels[activePanelIndex].style.display = 'none';

  // Increment the active panel index
  activePanelIndex++;

  // If the index exceeds the number of panels, loop back to the first panel
  if (activePanelIndex >= panels.length) {
    activePanelIndex = 0;
  }

  // Show the new active panel
  panels[activePanelIndex].style.display = 'block';
}

// Function to switch to the previous panel
function prevPanel() {
  // Hide the current active panel
  panels[activePanelIndex].style.display = 'none';

  // Decrement the active panel index
  activePanelIndex--;

  // If the index is less than 0, loop to the last panel
  if (activePanelIndex < 0) {
    activePanelIndex = panels.length - 1;
  }

  // Show the new active panel
  panels[activePanelIndex].style.display = 'block';
}

// Initially show the first panel
panels[activePanelIndex].style.display = 'block';

    




  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var heading = document.getElementById("heading");
      if (heading) {
        heading.style.display = "none";
      }
    }, 10000); // 10000 milliseconds = 10 seconds
  });

  


  document.addEventListener("DOMContentLoaded", function() {
    const panels = document.querySelector('.panels');
    const slideNextBtn = document.querySelector('.slide-next-btn');
    const panelItems = document.querySelectorAll('.panel');
  
    let currentPanelIndex = 0;
  
    // Function to slide to the next panel
    function slideNext() {
      currentPanelIndex = (currentPanelIndex + 1) % panelItems.length;
      const newPosition = currentPanelIndex * -100;
      panels.style.transform = `translateX(${newPosition}%)`;
    }
  
    // Attach click event to slide next button
    slideNextBtn.addEventListener('click', slideNext);
  
    // Show slide next button for screens below 800px
    if (window.innerWidth <= 800) {
      slideNextBtn.style.display = 'block';
    }
  });
  