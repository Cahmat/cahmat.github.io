function build_blocEnd(params, bloc_params) {
    let bloc = {
        timeline: [{
                type: jsPsychSurveyText,
                choices: ['End experiment'],
                preamble: function() {

                    // Compute total bonus 
                    // WRITE HERE // 

                    return `<p align='left'>
                        <b>CONCLUSION</b><br> 
                        All done! Thank you very much for your participation! <br>
                        You have earned a total bonus of <b>&#163 ${params.total_bonus}</b>. Congrats! <br>
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