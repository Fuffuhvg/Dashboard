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

document.addEventListener('DOMContentLoaded', function () {
  // Initial data
  var weeklyData = [4, 3, 10, 9, 29, 19, 22];
  var monthlyData = [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5];

  var options = {
    series: [{
      name: 'Sales',
      data: monthlyData // Initial data shown is monthly
    }],
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      type: 'category',
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Monthly categories initially
      tickAmount: 12,
    },
    title: {
      text: 'Forecast',
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

  // Switch between weekly and monthly data
  document.getElementById('weeklyBtn').addEventListener('click', function () {
    chart.updateSeries([{
      data: weeklyData
    }]);
    chart.updateOptions({
      xaxis: {
        categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'] // Adjusted for weekly data
      }
    });
  });

  document.getElementById('monthlyBtn').addEventListener('click', function () {
    chart.updateSeries([{
      data: monthlyData
    }]);
    chart.updateOptions({
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] // Reset to monthly categories
      }
    });
  });
});
