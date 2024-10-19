function blocEnd(params) {
    let bloc = {
        timeline: [{
                type: jsPsychSurveyText,
                choices: ['End experiment'],
                preamble: function() {

                    // Compute percentage correct responses
                    let trials = jsPsych.data.get().filter({ trial_response: true })
                    let correct_trials = trials.filter({ correct: true })
                    let accuracy = Math.round(correct_trials.count() / trials.count() * 100)

                    return `<p> All done! Thank you very much for your participation! <br>
                    You have earned a total bonus of <b>${accuracy}%</b>. Congrats! <br>  
                    Click to complete the experiment and access your verification code. </p>`
                },
                on_finish: function(data) {
                    // Save the data at the end of the experiment
                    saveData(params, jsPsych.data.get().csv(), temporary = false)
                    // Finish exp
                    experiment_running = false
                },
                questions: [
                    { prompt: 'Please add a comment or feedback the experiment here if you want to.', rows: 6 }
                ]
            },
            {
                type: jsPsychFullscreen,
                fullscreen_mode: false
            }
        ]
    }
    return bloc
}