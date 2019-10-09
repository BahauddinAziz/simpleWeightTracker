//google charts API

function charts(){
  if(weightData[1] != undefined){
  console.log("im");
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  }
}

function drawChart() {
    
    var getData = JSON.parse(window.localStorage.getItem("weights"));
    data = google.visualization.arrayToDataTable(getData);  
    var options = {
    title: 'Weight Tracker',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}