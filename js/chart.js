document.addEventListener('DOMContentLoaded', function () {
  const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
        name: 'Products',
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#ff0000', 'var(--text-color)', '#ff0000', 'var(--text-color)', '#ff0000'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: 'var(--text-color)',
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      labels: {
        colors: 'var(--text-color)',
      },
      show: true,
      position: 'top',
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2,
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    xaxis: {
      categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
      title: {
        style: {
          color: 'var(--text-color)',
        },
      },
      axisBorder: {
        show: true,
        color: 'var(--text-color)',
      },
      axisTicks: {
        show: true,
        color: '#55596e',
      },
      labels: {
        style: {
          colors: 'var(--text-color)',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: 'var(--text-color)',
        },
      },
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        style: {
          colors: 'var(--text-color)',
        },
      },
    },
  };

  const barChart = new ApexCharts(document.querySelector('#bar-charts'), barChartOptions);
  barChart.render();




// LINE CHART
const lineChartsoptions = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 155, 160, 165]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
tooltip: {
  shared: true,
  intersect: false,
  theme: 'dark',
},

stroke: {
  curve: 'smooth'
},
title: {
  text: 'Product Trends by Month',
  style: {
    color: 'var(--text-color)',
  },
  align: 'left'
},
colors: ['#ff0000'],

grid: {
  row: {
    colors: ['var(--text-color)', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  labels: {
    style: {
      colors: 'var(--text-color)',
    },
  },
},

yaxis: {
  title: {
    text: 'Quantity',
    style: {
      color: 'var(--text-color)',
    },
  },

  labels: {
    style: {
      colors: 'var(--text-color)',
    },
  },
},
};

const lineChart = new ApexCharts(document.querySelector("#line-charts"), lineChartsoptions);
lineChart.render();

});


// analysis chart
window.onload = function() {
  var options = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      }
    },
    colors: ['#ff0000'],
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  };

  var chart = new ApexCharts(document.querySelector("#horizontal-bar-charts"), options);
  chart.render();
};


//gradient-line
document.addEventListener('DOMContentLoaded', function () {
  // Define monthly data
  var monthlyData = [100, 300, 130, 93, 29, 169, 252, 96, 126, 77, 139, 56];

  // Initial chart options
  var options = {
    series: [{
      name: 'Sales',
      data: monthlyData // Initial data shown is for monthly data
    }],
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'linear',
        speed: 800
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: generateMonthLabels(), // Initial x-axis labels are monthly
      tickAmount: monthlyData.length,
    },
    title: {
      text: 'Monthly Sales',
      align: 'left',
      style: {
        fontSize: "16px",
        color: '#666'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      },
    }
  };

  var chart = new ApexCharts(document.querySelector("#gradient-chart"), options);
  chart.render();

  // Dropdown button functionality
  var dropdown = document.querySelector('.dropdown');
  var dropdownContent = document.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function () {
    dropdown.classList.toggle('active');
  });

  // Dropdown item click functionality
  var dropdownItems = document.querySelectorAll('.dropdown-content a');
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var selectedMonth = item.getAttribute('data-month');
      var selectedData = calculateWeeklyData(monthlyData, selectedMonth);
      var numOfWeeks = selectedData.length;
      var weekLabels = generateWeekLabels(numOfWeeks);
      
      // Update chart with weekly data
      chart.updateSeries([{
        name: 'Sales',
        data: selectedData
      }]);
      
      // Update x-axis options
      chart.updateOptions({
        xaxis: {
          categories: weekLabels,
          tickAmount: numOfWeeks
        }
      });
      
      dropdown.classList.remove('active');
    });
  });

  // Switch to monthly data
  document.getElementById('monthlyBtn').addEventListener('click', function () {
    chart.updateSeries([{
      name: 'Sales',
      data: monthlyData
    }]);
    chart.updateOptions({
      xaxis: {
        categories: generateMonthLabels(),
        tickAmount: monthlyData.length
      }
    });
    dropdown.classList.remove('active');
  });

  // Helper function to calculate weekly data based on monthly totals
  function calculateWeeklyData(monthlyData, selectedMonth) {
    var numOfWeeks = getNumOfWeeks(selectedMonth); // Get number of weeks for selected month
    var monthlyTotal = monthlyData[getMonthIndex(selectedMonth)];
    var weeklyData = [];

    // Distribute monthly total across weeks of selected month
    switch (selectedMonth) {
      case 'January':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [20, 30, 10, 40]); // Example distribution for January
        break;
      case 'February':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [10, 20, 30, 40]); // Example distribution for February
        break;
      case 'March':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [25, 15, 30, 30]); // Example distribution for March
        break;
      case 'April':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [30, 10, 20, 40]); // Example distribution for April
        break;
      case 'May':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [15, 25, 25, 35]); // Example distribution for May
        break;
      case 'June':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [40, 30, 20, 10]); // Example distribution for June
        break;
      case 'July':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [5, 20, 30, 45]); // Example distribution for July
        break;
      case 'August':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [35, 25, 15, 25]); // Example distribution for August
        break;
      case 'September':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [30, 40, 10, 20]); // Example distribution for September
        break;
      case 'October':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [10, 30, 30, 30]); // Example distribution for October
        break;
      case 'November':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [20, 40, 20, 20]); // Example distribution for November
        break;
      case 'December':
        weeklyData = distributeUnevenly(monthlyTotal, numOfWeeks, [25, 25, 25, 25]); // Example distribution for December
        break;
      default:
        weeklyData = distributeEvenly(monthlyTotal, numOfWeeks); // Default even distribution
        break;
    }

    return weeklyData;
  }

  // Helper function to distribute weekly data evenly
  function distributeEvenly(monthlyTotal, numOfWeeks) {
    var weeklyData = [];
    for (var i = 0; i < numOfWeeks; i++) {
      var weeklyValue = Math.round(monthlyTotal / numOfWeeks);
      weeklyData.push(weeklyValue);
    }
    return weeklyData;
  }

  // Helper function to distribute weekly data unevenly based on provided distribution
  function distributeUnevenly(monthlyTotal, numOfWeeks, distribution) {
    var weeklyData = [];
    for (var i = 0; i < numOfWeeks; i++) {
      var weeklyValue = Math.round(monthlyTotal * (distribution[i] / 100));
      weeklyData.push(weeklyValue);
    }
    return weeklyData;
  }

  // Helper function to generate week labels based on number of weeks
  function generateWeekLabels(numOfWeeks) {
    var weekLabels = [];
    for (var i = 1; i <= numOfWeeks; i++) {
      weekLabels.push('Week ' + i);
    }
    return weekLabels;
  }

  // Helper function to generate month labels
  function generateMonthLabels() {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  }

  // Helper function to get index of month in array
  function getMonthIndex(month) {
    return generateMonthLabels().indexOf(month);
  }

  // Helper function to get number of weeks for a given month
  function getNumOfWeeks(month) {
    switch (month) {
      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
        return 5; // Example: 5 weeks for months with 31 days
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        return 4; // Example: 4 weeks for months with 30 days
      case 'February':
        return 4; // Example: 4 weeks for February (adjust as needed)
      default:
        return 0; // Default to 0 if month not recognized
    }
  }
});












