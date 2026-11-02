$(document).ready(function () {
    // Task 0
    console.log("jQuery is ready!");

    // Task 1: change text with selectors
    $("body").css("background-color", "#79b0ea");
    $("h1").text("Welcome to My Portfolio!");
    $("h1").css("color", "blue");
    $("#headline").text("Future Full-Stack Developer");
    $(".intro").html("I study <b>web development</b> and love building websites.");


    // Task 1: theme buttons with .css()
    $("#dark-btn").click(function () {
        $("body").css({
            "background-color": "#222",
            "color": "white"
        });
    });

    $("#light-btn").click(function () {
        $("body").css({
            "background-color": "white",
            "color": "black"
        });
    });
});

//task2
$("#hide-btn").click(function () {
    $("#facts").hide();
});

$("#show-btn").click(function () {
    $("#facts").show();
});

$("#toggle-btn").click(function () {
    $("#facts").toggle();
});

// Task 3: Fade methods
$("#fade-out-btn").click(function () {
    $("#gallery img").fadeOut(1000);
});

$("#fade-in-btn").click(function () {
    $("#gallery img").fadeIn(1000);
});

$("#fade-toggle-btn").click(function () {
    $("#gallery img").fadeToggle(1000);
});
// Task 4: Slide methods
$("#music-title").click(function () {
    $("#music-panel").slideToggle(500);
});

$("#movie-title").click(function () {
    $("#movie-panel").slideToggle(500);
});

$("#subject-title").click(function () {
    $("#subject-panel").slideToggle(500);
});
$("#open-all-btn").click(function () {
    $(".panel").slideDown(500);
});

$("#close-all-btn").click(function () {
    $(".panel").slideUp(500);
});

// Task 5: Add and remove skills
$("#add-skill-btn").click(function () {
    var skill = $("#skill-input").val().trim();

    if (skill === "") {
        alert("Please enter a skill!");
        return;
    }

    $("#skill-list").append("<li>" + skill + "</li>");
    $("#skill-input").val("");
});

$("#prepend-skill-btn").click(function () {
    var skill = $("#skill-input").val().trim();

    if (skill === "") {
        alert("Please enter a skill!");
        return;
    }

    $("#skill-list").prepend("<li>" + skill + "</li>");
    $("#skill-input").val("");
});

$("#remove-skill-btn").click(function () {
    $("#skill-list li").last().remove();
});

//task 6
$("#change-link-btn").click(function () {
    $("#social-link").attr("href", " https://t.me/Nrblsn");
});

// Task 7: Live form
$("#name-input").on("input", function () {
    var name = $("#name-input").val();
    $("#name-output").text(name);
});

$("#email-input").on("input", function () {
    var email = $("#email-input").val();
    $("#email-output").text(email);
});

//task 8 animation

var animated = false;

$("#animate-skills-btn").click(function () {
    if (animated === false) {

        $("#bar-html").animate({ width: "90%" }, 1000);
        $("#bar-css").animate({ width: "75%" }, 1000);
        $("#bar-js").animate({ width: "68%" }, 1000);
        $("#bar-jquery").animate({ width: "60%" }, 1000);
        animated = true;
    } else {

        $(".bar").animate({ width: "0%" }, 1000);
        animated = false;
    }
});