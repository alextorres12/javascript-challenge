// from data.js
var tableData = data;
console.log("data :: ", data);
// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", filterData);
form.on("submit", filterData);

// Function to filter data
function filterData() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  var inputValue = d3.select("#datetime").property("value");

  console.log("you clicked the button");
  console.log("you entered: ", inputValue);
};
const tableBody = d3.select("#ufo-table tbody");

// tableBody.html = "";
let tableRow = tableBody.append("tr");
const col2Data = {
  Date: "datetime",
  City: "city",
  State: "state",
  Country: "country",
  Shape: "shape",
  Duration: "durationMinutes",
  Comments: "comments",
};

const cols = [
  "Date",
  "City",
  "State",
  "Country",
  "Shape",
  "Duration",
  "Comments",
];

data.forEach((dataRow) => {
  let tableRow = tableBody.append("tr");
  cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
});
