// from data.js
var tableData = data;
console.log("data :: ", data);
const tableBody = d3.select("#ufo-table tbody");
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

  // Gets value from input field
  var inputValue = d3.select("#datetime").property("value");
  console.log(inputValue);

  // Filters data according to date
  filteredData = data.filter(sighting => sighting.datetime === inputValue)

  // Clears Table Body
  tableBody.html = "";
  
  // Re-populates table with filtered data
  filteredData.forEach((dataRow) => {
    let tableRow = tableBody.append("tr");
    cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
  });

};



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
