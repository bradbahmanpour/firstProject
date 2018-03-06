/// SETUP VARIABLES
// =========================================

// Search Parameters
var jobTitle = "";
var jobLocation = "";
var jobType = "";
var yourJobType = "";
var jobsPicked = [];

var numResults = 0;
var startYear = 0;
var endYear = 0;
var checkmark = true;



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
        global: true
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
        if (JobData.length < numResults) {
            numResults = JobData.length;
        }

        for (var i = 0; i < numResults; i++) {
            // Start Dumping to HTML Here
            var articleCount = i + 1;
            var wellSection = $("<div>");
            wellSection.addClass("well");
            wellSection.attr("id", "article-well-" + i);
            $("#well-section").append(wellSection);

            // Check if things exist
            if (JobData[i].title != null) {
                console.log(" Job Title : " + JobData[i].title);
                $("#article-well-" + i).append("<h4>" + " <span class='numberLabel'>" + articleCount + "</span> " + " Job Title: " 
                +  JobData[i].title + "</h4>" + "<label for='myJobs'>Add to my Job List: </label>" + 
                "<input type='checkbox' class='form-control pickedItem' id='pick" + [i] + "'><label for='pick" + [i] + "'></label>");
                $("#article-well-" + i).attr("data-title", JobData[i].title);
                $("#article-well-" + i).attr("data-picked", "false");
            }

            // Check if things exist
            console.log(" Job Type: " + JobData[i].type);
            if (JobData[i].type != "") {
                console.log(" Job Type: " + JobData[i].type);
                $("#article-well-" + i).append("<h5>Job Type: " + JobData[i].type + "</h5>");
            }

            // Check if things exist
            if (JobData[i].reated_at != null) {
                console.log(" Job created Date : " + JobData[i].created_at);
                $("#article-well-" + i).append("<h5>Published Date: " + JobData[i].created_at + "</h5>");
            }

            // Check if things exist
            if (JobData[i].company != null) {
                console.log(" Company Name: " + JobData[i].company);
                $("#article-well-" + i).append("<h5>Company Name: " + JobData[i].company + "</h5>");
                $("#article-well-" + i).attr("data-company", JobData[i].company);
            }

            if (JobData[i].company != null) {
                console.log(" Company Address: " + JobData[i].location);
                $("#article-well-" + i).append("<h5>Job Location: " + JobData[i].location + "</h5>");
                $("#article-well-" + i).attr("data-location", JobData[i].location);
            }

            // Check if things exist
            if (JobData[i].company_url != null) {
                console.log(" Company Website: " + JobData[i].company_url);
<<<<<<< HEAD
                $("#article-well-" + i).append("<h3>Company Website:  " + "<a target='_blank' href=" + JobData[i].company_url + ">" + JobData[i].company_url + "</a>" + "</h3>");
=======
                $("#article-well-" + i).append("<h5>Company Website:  " + "<a href=" + JobData[i].company_url + ">" +
                    JobData[i].company_url + "</a>" + "</h5>");
>>>>>>> f4492fa472d910c4205bc76af8f900f8ef442d64
            }

            // Check if things exist
            if (JobData[i].how_to_apply != null) {
                console.log(" Apply for the Job: " + JobData[i].how_to_apply);
                $("#article-well-" + i).append("<h5>" + JobData[i].how_to_apply + "</h5>");
            }
            

            // Check if things exist

            if (JobData[i].description != null) {
                $("#article-well-" + i).append("<h5> Job Description: " + "</h5>");
                console.log(" Job Description: " + JobData[i].description);
                $("#article-well-" + i).append("<h6>" + JobData[i].description + "</h6>");
            }

        }
    });

}

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

    if ($('#jobType').prop('checked')) {
        // something when checked
        yourJobType = "fulltime";
    } else {
        // something else when not
        yourJobType = "parttime";
    }

    /*  yourJobType = $("#jobType").val().trim().toLowerCase();
      yourJobType = yourJobType.replace(/ +/g, ''); // removing space between the string
    */
    console.log("Job Type =  " + yourJobType);

    if (yourJobType === "fulltime") {
        queryTerm = queryTerm + "&full_time=true";
    } else if (yourJobType === "parttime") {
        queryTerm = queryTerm + "&full_time=false";
    }

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

$("#clear-btn").on("click", function (event) {
    // This code will clear the input fields in the Search Form

    event.preventDefault();

    $("#jobTitle").val('');
    $("#jobType").val('');
    $("#jobLocation").val('');

});
// 1. Retrieve user inputs and convert to variables
// 2. Use those variable to run an AJAX call to the New York Times.
// 3. Break down the NYT Object into useable fields
// 4. Dynamically generate html content

// 5. Dealing with "edge cases" -- bugs or situations that are not intuitive.
$(document).on("click", ".pickedItem", function() {
var picked = $(this).parent().attr("data-picked");
var jobNotes = {title:$(this).parent().attr("data-title"), 
company:$(this).parent().attr("data-company"), location:$(this).parent().attr("data-location")};   

if(picked === "false") {

    jobsPicked.push(jobNotes);
    console.log(jobNotes);
    console.log($(this).parent().attr("data-title"));
    console.log($(this).parent().attr("data-company"));
    console.log($(this).parent().attr("data-location"));

    sessionStorage.clear();
   
    sessionStorage.setItem("data-title", JSON.stringify(jobsPicked));
    $(this).parent().attr("data-picked", "true");
    }

    else{
        $(this).parent().attr("data-picked", "false");
        for (var i = 0; i < jobsPicked.length; i++) {
                if (jobNotes.title === jobsPicked[i].title) {
                    jobsPicked.splice(i)
                    sessionStorage.setItem("data-title", JSON.stringify(jobsPicked));
                }
        }
    
    }

    console.log(sessionStorage);
    

});

//line is here for merge