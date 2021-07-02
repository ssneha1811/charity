///-----------******* Donation Page Graphs Starts **********-------------/////

//--------Donation page graph 01 ---- calendar graph.. Donation made till date starts
google.charts.load("current", { packages: ["calendar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: "date", id: "Date" });
  dataTable.addColumn({ type: "number", id: "Won/Loss" });
  dataTable.addRows([
    [new Date(), 7],
    [new Date(2021, 3, 14), 4],
    [new Date(2021, 3, 15), 0],
    [new Date(2021, 3, 16), 2],
    [new Date(2021, 3, 17), 4],
    // Many rows omitted for brevity.
    [new Date(2020, 9, 4), 2],
    [new Date(2020, 9, 5), 1],
    [new Date(2020, 9, 12), 5],
    [new Date(2020, 9, 13), 7],
    [new Date(2020, 9, 19), 1],
    [new Date(2020, 9, 23), 0],
    [new Date(2020, 9, 24), 7],
    [new Date(2020, 9, 30), 8],
  ]);

  var chart = new google.visualization.Calendar(
    document.getElementById("calendar_basic")
  );

  var options = {
    title: "Red Sox Attendance",
    height: 350,
  };

  chart.draw(dataTable, options);
}
//--------Donation page graph 01 ---- calendar graph.. Donation made till date ends

//---  Donation page graph 02 chart div google map starts
google.charts.load("current", {
  packages: ["map"],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey: "AIzaSyD8TXr00_qFXTgED1LPrgF67lYvrfiyyLI",
});
// google.charts.setOnLoadCallback(drawMap);

function drawMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Population"],
    ["China", "China: 1,363,800,000"],
    ["India", "India: 1,242,620,000"],
    ["US", "US: 317,842,000"],
    ["Indonesia", "Indonesia: 247,424,598"],
    ["Brazil", "Brazil: 201,032,714"],
    ["Pakistan", "Pakistan: 186,134,000"],
    ["Nigeria", "Nigeria: 173,615,000"],
    ["Bangladesh", "Bangladesh: 152,518,015"],
    ["Russia", "Russia: 146,019,512"],
    ["Japan", "Japan: 127,120,000"],
  ]);

  var options = {
    showTooltip: true,
    showInfoWindow: true,
  };

  var map = new google.visualization.Map(
    document.getElementById("map_chart_div")
  );

  map.draw(data, options);
}
//---  Donation page graph 02 chart div google map ends
