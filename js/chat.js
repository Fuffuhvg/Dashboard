var xValues = ["A", "B", "C", "D", "E"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "black","red","black","red"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "BEST SELLING PRODUCT BY QUANTITY"
    }
  }
});



// Data for the line chart
var lineXValues = ["January", "February", "March", "April", "May"];
var lineYValues = [10000, 15000, 13000, 18000, 16000];

new Chart("myLineChart", {
  type: "line",
  data: {
    labels: lineXValues,
    datasets: [{
      label: 'Sales Amount (KSHS)',
      fill: false,
      borderColor: "black",
      data: lineYValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "TOTAL SALES BY PRODUCT QUANTITY + AMOUNT OVER TIME"
    }
  }
});



