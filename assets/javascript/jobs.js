// SETUP VARIABLES
// =========================================

// Search Parameters
var jobTitle = "";
var location = "";

var numResults = 0;
var startYear = 0;
var endYear = 0;

// URL Base
var queryURLBase = "https://jobs.github.com/positions.json?" ;

console.log(queryURLBase);
/*
// FUNCTIONS
// =========================================

function runQuery(numArticles, queryURL) {

    // AJAX Function
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (JobData) {

        // Logging to Console
        console.log("------------------");
        console.log(queryURL);
        console.log("------------------");
        console.log(numArticles);
        console.log(JobData);

        /*
         // Clear the wells from the previous run
         $("#well-section").empty();
 
         for (var i = 0; i < numArticles; i++) {
 
             // Start Dumping to HTML Here
             var wellSection = $("<div>");
             wellSection.addClass("well");
             wellSection.attr("id", "article-well-" + i);
             $("#well-section").append(wellSection);
 
             // Check if things exist
             if (NYTData.response.docs[i].headline !== "null") {
                 console.log(NYTData.response.docs[i].headline.main);
                 $("#article-well-" + i)
                     .append("<h3>" + NYTData.response.docs[i].headline.main + "</h3>");
             }
 
             // Check if the byline
             if (NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.original) {
                 console.log(NYTData.response.docs[i].byline.original);
                 $("#article-well-" + i).append("<h5>" + NYTData.response.docs[i].byline.original + "</h5>");
             }
 
             // Attach the content to the appropriate well
             $("#article-well-" + i).append("<h5>" + NYTData.response.docs[i].section_name + "</h5>");
             $("#article-well-" + i).append("<h5>" + NYTData.response.docs[i].pub_date + "</h5>");
             $("#article-well-" + i)
                 .append(
                 "<a href=" + NYTData.response.docs[i].web_url + ">" +
                 NYTData.response.docs[i].web_url + "</a>"
                 );
 
             console.log(NYTData.response.docs[i].section_name);
             console.log(NYTData.response.docs[i].pub_date);
             console.log(NYTData.response.docs[i].web_url);
         

    });

}

*/

// https://jobs.github.com/positions.json?description=java&location=palo+alto
// MAIN PROCESSES
// =========================================

/*

$("#search-btn").on("click", function (event) {
    // This line allows us to take advantage of the HTML "submit" property
    // This way we can hit enter on the keyboard and it registers the search
    // (in addition to clicks).
    event.preventDefault();

    console.log(" I am after Click Search Btn");

    // Get Job Title value from the Form
    queryTerm = "description=" + $("#jobTitle").val().trim();
    console.log("queryTerm =  " + queryTerm);

    // Get Job Type value from the Form
    queryTerm = queryTerm + "&type=" + $("#jobType").val().trim();
    console.log("Job Type =  " + queryTerm);
    // Get Job Type value

    // Get Job Location value from the Form
    queryTerm = queryTerm + "&location=" + $("#location").val().trim();
    console.log("Job Location =  " + queryTerm);
    // Get Job Type value

    // Add in the Search Term
    var newURL = queryURLBase + queryTerm;
    console.log("newURL =  " + newURL);

    // Get the Number of Records
    numResults = $("#num-records").val();

    // Send the AJAX Call the newly assembled URL
   // runQuery(numResults, newURL);

}); 
*/

// 1. Retrieve user inputs and convert to variables
// 2. Use those variable to run an AJAX call to the New York Times.
// 3. Break down the NYT Object into useable fields
// 4. Dynamically generate html content

// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive.
