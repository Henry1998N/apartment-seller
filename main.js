$("button").on("click", function () {
  let address = $("#addr-input").val();
  let minPrice = $("#min-p-input").val();
  let maxPrice = $("#max-p-input").val();
  let minRooms = $("#min-r-input").val();
  let maxRooms = $("#max-r-input").val();
  let immediate = $("#immed-y");
  let parking = $("#park-y");

  let relevantApts = findRelevantApts(
    address,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    immediate,
    parking
  );
  renderApts(relevantApts);
});
Handlebars.registerHelper("formatCurrency", function (value) {
  return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
});

const source = $("#apartments-template").html();
const template = Handlebars.compile(source);
const renderApts = function (apartments) {
  $("#results").empty();
  console.log(apartments); //array of apartments to render

  let newHTML = template({ data: apartments });
  $("#results").append(newHTML);
  //Your code goes here.
};
// Handlebars.registerHelper("arraySize", function (data) {
//   return data.length;
// });

renderApts(apartments); //renders apartments when page loads
