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
    colors: ['#ff0000', '#000000', '#ff0000', '#000000', '#ff0000'],
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
      borderColor: '#000000',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#000000',
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
          color: '#000000',
        },
      },
      axisBorder: {
        show: true,
        color: '#000000',
      },
      axisTicks: {
        show: true,
        color: '#55596e',
      },
      labels: {
        style: {
          colors: '#000000',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: '#000000',
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
          colors: '#000000',
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
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
  align: 'left'
},
colors: ['#ff0000'],

grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
}
};

const lineChart = new ApexCharts(document.querySelector("#line-charts"), lineChartsoptions);
lineChart.render();

});
