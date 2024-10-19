<!-- Div methods  -->

var html_start = "lib/html/start.html";
var html_infosheet = "lib/html/information_sheet.html";
var html_consentform = "lib/html/consent_form.html";
var html_turkerform = "lib/html/turker_form.html";
var html_instructions = "lib/html/instructions.html";
var html_task = "lib/html/task.html";
var html_errscreen = "lib/html/error_fullscreen.html";
var html_vercode = "lib/php/verification_code.php";
var html_screening_fail = "lib/php/screening_fail.php";

function emptyDiv(divid) {
    document.getElementById(divid).innerHTML = "";
}

function printDiv(divid, webfile) {
    if (typeof(coding) == "undefined") {
        coding = {};
    }
    // webdata
    var webdata = {};
    // webfunc
    var webfunc;
    webfunc = function(data) {
        document.getElementById(divid).innerHTML = data;
        coding.webfile = webfile;
    }
    // send
    $.post(webfile, webdata, webfunc);
}

function hideDiv(element) {
    document.getElementById(element).hidden = true;
}

function showDiv(element) {
    document.getElementById(element).hidden = false;
}

function goWebsite(url) {
    printDiv("webbodyDiv", url);
}

function getTurkerform() {
    participant_age = document.getElementById("ageSelect").value
    participant_gender = document.getElementById("genderSelect").value
    participant_turker = document.getElementById("turkerSelect").value
}
