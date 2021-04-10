// begin creating parameters for SVG
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("assets/data/data.csv").then(function(stateData) {
  // print the data to see what's up
  statesData = stateData;
  console.log(statesData);

  // Parse Data/Cast as numbers
  statesData.forEach(function(data) {
    data.healthcare = +data.healthcare;
    data.poverty = +data.poverty;
    var abbrevs = data.abbr;
  });

  // Create Scale Functions
  var xLinearScale = d3.scaleLinear()
      .domain(d3.extent(statesData, d => d.poverty))
      .range([0, width]);

  var yLinearScale = d3.scaleLinear()
      .domain(d3.extent(statesData, d => d.healthcare))
      .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);
  
});