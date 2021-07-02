/////-----------******* Statistics Page Graphs Starts **********-------------/////

///----Statistics page graph 01 geo chart starts-------//
google.charts.load("current", {
  packages: ["geochart"],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  mapsApiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["IN", 900],
  ]);

  var options = {};

  var chart = new google.visualization.GeoChart(
    document.getElementById("regions_div")
  );

  chart.draw(data, options);
}
///----Statistics page graph 01 geo chart ends-------//

///------ Statistics page graph 02 chart_div starts -----------///
google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawAnnotations);

function drawAnnotations() {
  var data = google.visualization.arrayToDataTable([
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ]);

  var data = google.visualization.arrayToDataTable([
    [
      "City",
      "2010 Population",
      { type: "string", role: "annotation" },
      "2000 Population",
      { type: "string", role: "annotation" },
    ],
    ["New York City, NY", 8175000, "8.1M", 8008000, "8M"],
    ["Los Angeles, CA", 3792000, "3.8M", 3694000, "3.7M"],
    ["Chicago, IL", 2695000, "2.7M", 2896000, "2.9M"],
    ["Houston, TX", 2099000, "2.1M", 1953000, "2.0M"],
    ["Philadelphia, PA", 1526000, "1.5M", 1517000, "1.5M"],
  ]);

  var options = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    annotations: {
      alwaysOutside: true,
      textStyle: {
        fontSize: 12,
        auraColor: "none",
        color: "#555",
      },
      boxStyle: {
        stroke: "#ccc",
        strokeWidth: 1,
        gradient: {
          color1: "#f3e5f5",
          color2: "#f3e5f5",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
        },
      },
    },
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
///------ Statistics page graph 02 chart_div ends -----------///

///------ Statistics page graph 03 combo_chart_div starts -----------///
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Month",
      "Bolivia",
      "Ecuador",
      "Madagascar",
      "Papua New Guinea",
      "Rwanda",
      "Average",
    ],
    ["2004/05", 165, 938, 522, 998, 450, 614.6],
    ["2005/06", 135, 1120, 599, 1268, 288, 682],
    ["2006/07", 157, 1167, 587, 807, 397, 623],
    ["2007/08", 139, 1110, 615, 968, 215, 609.4],
    ["2008/09", 136, 691, 629, 1026, 366, 569.6],
  ]);

  var options = {
    title: "Monthly Coffee Production by Country",
    vAxis: { title: "Cups" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("combo_chart_div")
  );
  chart.draw(data, options);
}
///------ Statistics page graph 03 combo_chart_div ends -----------///

///------ Statistics page graph 04 pie chart starts -----------///
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartPieChart);
function drawChartPieChart() {
  var data = google.visualization.arrayToDataTable([
    ["Language", "Speakers (in millions)"],
    ["Assamese", 13],
    ["Bengali", 83],
    ["Bodo", 1.4],
    ["Dogri", 2.3],
    ["Gujarati", 46],
    ["Hindi", 300],
    ["Kannada", 38],
    ["Kashmiri", 5.5],
    ["Konkani", 5],
    ["Maithili", 20],
    ["Malayalam", 33],
    ["Manipuri", 1.5],
    ["Marathi", 72],
    ["Nepali", 2.9],
    ["Oriya", 33],
    ["Punjabi", 29],
    ["Sanskrit", 0.01],
    ["Santhali", 6.5],
    ["Sindhi", 2.5],
    ["Tamil", 61],
    ["Telugu", 74],
    ["Urdu", 52],
  ]);

  var options = {
    title: "Indian Language Use",
    legend: "none",
    pieSliceText: "label",
    slices: {
      4: { offset: 0.2 },
      12: { offset: 0.3 },
      14: { offset: 0.4 },
      15: { offset: 0.5 },
    },
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );
  chart.draw(data, options);
}
///------ Statistics page graph 04 Pie chart ends -----------///

///------ Statistics page graph 05 Line chart starts -----------///
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ]);

  var options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart.draw(data, options);
}
///------ Statistics page graph 05 Line chart ends -----------///
