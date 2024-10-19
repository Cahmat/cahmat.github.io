function blocStart(params) {
    let bloc = {
        timeline: [
            {
                type: jsPsychHtmlButtonResponse,
                stimulus: 'Click to start the experiment',
                choices: ['Start']
            },
            {
                type: jsPsychHtmlButtonResponse,
                stimulus: params.text_instruction,
                choices: ['Go!']
            }
        ],
        on_start: function() {
            saveData(params, jsPsych.data.get().csv(), temporary=true)
        }
    }
    return bloc
}
