//visibility
document.addEventListener("DOMContentLoaded", function() {
  function addStyles() {
    // Create a style element
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      }
      #dashboard {
        display: none;
      }
      #notCompatible {
        text-align: center;
        padding: 20px;
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        border-radius: 5px;
        margin-top: 20px;
      }
    `;
    document.head.appendChild(style);
  }

  function checkDeviceCompatibility() {
    const dashboard = document.getElementById('dashboard');

    // Log to debug
    console.log('Checking device compatibility. Window width:', window.innerWidth);

    // Remove any existing compatibility message
    const existingMessage = document.getElementById('notCompatible');
    if (existingMessage) {
      existingMessage.remove();
    }

    if (window.innerWidth >= 1145) {
      dashboard.style.display = 'block';
    } else {
      dashboard.style.display = 'none';

      // Create and display the compatibility message
      const notCompatible = document.createElement('div');
      notCompatible.id = 'notCompatible';
      notCompatible.innerHTML = '<h1>Device not compatible</h1>';
      document.body.appendChild(notCompatible);

      // Log to debug
      console.log('Device width is less than 1145px. Compatibility message displayed.');
    }
  }

  // Add CSS styles
  addStyles();

  // Initial check
  checkDeviceCompatibility();

  // Add event listener for window resize
  window.addEventListener('resize', checkDeviceCompatibility);
});






//login & logout js
const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnlogin-popup');

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});



//sidebar js
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme");

// date js
function searchData() {
  // Get the values from the date input fields
  const startDate = document.getElementById('startDateInput').value;
  const endDate = document.getElementById('endDateInput').value;

  // Check if both dates are provided
  if (!startDate || !endDate) {
      alert("Please provide both start and end dates.");
      return;
  }

  // Convert dates to a suitable format if needed
  // For example, converting to timestamps
  const startTimestamp = new Date(startDate).getTime();
  const endTimestamp = new Date(endDate).getTime();

  // Make sure the start date is before the end date
  if (startTimestamp > endTimestamp) {
      alert("The start date must be before the end date.");
      return;
  }

  // Now you can use these dates to query your data
  // This could involve making an API call or filtering data in your application
  fetch(`/api/search?start=${startDate}&end=${endDate}`)
      .then(response => response.json())
      .then(data => {
          // Handle the data
          console.log(data);
          // Update your charts, tables, etc. with the fetched data
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
}




//table
$(window).on("load resize ", function() {
  var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
  $('.tbl-header').css({'padding-right':scrollWidth});
}).resize();
