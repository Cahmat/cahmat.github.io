// Declare parameters to be collected in the first HTML pages (consent form)
var participant_age = NaN
var participant_gender = NaN
var participant_turker = NaN

// Intialize JsPsych
const jsPsych = initJsPsych({
    // Initialize progress bar 
    show_progress_bar: true,
    auto_update_progress_bar: false,

    // Save data on start to create a temporary file
    on_start: function() {
        logStart(params.task, params.id)
        saveData(params, jsPsych.data.get().csv(), temporary = true)
    },

    // Save the data in jsPsych is closed
    on_finish: function() {
        // Save the data at the end of the experiment
        saveData(params, jsPsych.data.get().csv(), temporary = false)
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

    // Load timeline (sequence of blocs)
    const timeline = returnTimeline(params)

    // Run timeline
    experiment_running = true
    jsPsych.run(
        timeline
    )
}

// Terminate experiment if the participant exit in fullscreen
function finishExperimentResize() {
    if (experiment_running) {
        saveData(params, jsPsych.data.get().csv(), temporary = false, resize = true)
        writeHeader(task_name)
        goWebsite(html_errscreen)
    }
}