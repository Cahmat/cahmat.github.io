// Declare parameters to be collected in the first HTML pages (consent form)
var participant_age = NaN
var participant_gender = NaN
var participant_turker = NaN

// Intialize JsPsych
const jsPsych = initJsPsych({
    // Initialize progress bar 
    show_progress_bar: true,
    auto_update_progress_bar: false,

    // jsPsych is closed
    on_finish: function() {
        // Finish exp
        experiment_running = false
        // Show verification code at the end of the experiment
        writeHeader(task_name)
        goWebsite(html_vercode)
    }
})

// Function to launch experiment 
// (this is a wrapper to accomodate jsPsych with what has been done in the lab for the consent form, etc. )
function startExperiment() {

    // Initialize random seed with participant ID
    // jsPsych.setSeed(participant_turker)
    Math.seedrandom(participant_turker)

    // Define experiment parameters
    var params = returnExperimentParameters()

    // Load timeline (sequence of blocs)
    const timeline = returnTimeline(params)
    params.participant_age = participant_age
    params.participant_gender = participant_gender
    params.participant_turker = participant_turker
    console.log(params)

    // Run timeline
    experiment_running = true
    jsPsych.run(
        timeline
    )
}

// Terminate experiment if the participant exit in fullscreen
function finishExperimentResize() {
    if (experiment_running) {
        writeHeader(task_name)
        goWebsite(html_errscreen)
    }
}
