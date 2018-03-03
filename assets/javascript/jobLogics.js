/// SETUP VARIABLES
// =========================================

// Search Parameters
var jobTitle = "";
var jobLocation = "";
var jobType = "";

var numResults = 0;
var startYear = 0;
var endYear = 0;

// URL Base
var queryURLBase = "https://jobs.github.com/positions.json?";

console.log(queryURLBase);

// FUNCTIONS
// =========================================

function runQuery(numResults, queryURL) {

    // AJAX Function
    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: 'jsonp',
        global : true
    }).then(function (JobData) {

        // Logging to Console
        console.log("------------------");
        console.log(queryURL);
        console.log("------------------");
        console.log(numResults);
        console.log(JobData);
        console.log("JobData.length=" + JobData.length);

        


        // Clear the wells from the previous run
        $("#well-section").empty();

     /*  if (JobData.length == 0) {
            console.log(" There is no Job with those condition available at this time");
        } */

        // replace numArcticle with number of jobs founded if the number of jobs are less than the display number
        if(JobData.length < numResults) {
            numResults = JobData.length;
        }
      
        for (var i = 0; i < numResults; i++) {

       
        
        
        
        
       

             // Start Dumping to HTML Here
            var wellSection = $("<div>");
            wellSection.addClass("well");
            wellSection.attr("id", "article-well-" + i);
            $("#well-section").append(wellSection);

            // Check if things exist
            if (JobData[i].title !== "null") {
                console.log(" Job Title : " + JobData[i].title);
                $("#article-well-" + i).append("<h2>Job Title: " + JobData[i].title + "</h2>");
            }

            // Check if things exist
            if (JobData[i].type !== "null") {
                console.log(" Job Type: " + JobData[i].type);
                $("#article-well-" + i).append("<h3>Job Type: " + JobData[i].type + "</h3>");
            }

            // Check if things exist
            if (JobData[i].reated_at !== "null") {
                console.log(" Job created Date : " + JobData[i].created_at);
                $("#article-well-" + i).append("<h3>Published Date: " + JobData[i].created_at + "</h3>");
            }

             // Check if things exist
             if (JobData[i].company !== "null") {
                console.log(" Company Name: " + JobData[i].company);
                $("#article-well-" + i).append("<h3>Company Name: " + JobData[i].company + "</h3>");
            }

             // Check if things exist
             if (JobData[i].company_url !== "null") {
                console.log(" Company Website: " + JobData[i].company_url);
                $("#article-well-" + i).append("<h3>Company's Website:  " + "<a href=" + JobData[i].company_url + ">" +
                JobData[i].company_url + "</a>" + "</h3>");
            }

            // Check if things exist
            if (JobData[i].how_to_apply !== "null") {
                console.log(" Apply for the Job: " + JobData[i].how_to_apply);
                $("#article-well-" + i).append("<h3>" + JobData[i].how_to_apply+ "</h3>");
            }

            // Check if things exist

            if (JobData[i].description!== "null") {
                $("#article-well-" + i).append("<h3> Job Description: "+ "</h3>");
                console.log(" Job Description: " + JobData[i].description);
                $("#article-well-" + i).append("<h4>" + JobData[i].description + "</h4>");
            }

           

        } 
    });

}



// https://jobs.github.com/positions.json?description=java&location=palo+alto
// MAIN PROCESSES
// =========================================



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
    queryTerm = queryTerm + "&location=" + $("#jobLocation").val().trim();
    console.log("Job Location =  " + queryTerm);
    // Get Job Type value

    // Add in the Search Term
    var newURL = queryURLBase + queryTerm;
    console.log("newURL =  " + newURL);

    // Get the Number of Records
    numResults = $("#num-records").val();

    // Send the AJAX Call the newly assembled URL
    runQuery(numResults, newURL);

});


// 1. Retrieve user inputs and convert to variables
// 2. Use those variable to run an AJAX call to the New York Times.
// 3. Break down the NYT Object into useable fields
// 4. Dynamically generate html content

// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive.
