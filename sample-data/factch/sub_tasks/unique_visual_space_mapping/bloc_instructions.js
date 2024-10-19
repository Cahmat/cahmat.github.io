function build_blocInstructions_unique_visual_space_mapping(params, bloc_params) {
    let bloc = {
        timeline: [{
            type: jsPsychHtmlButtonResponse,
            stimulus: `<b> <font size="+20"> SECTION ${bloc_params.section} </font></b>`,
            choices: [],
            trial_duration: 2000,
        }, 
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: bloc_params.instructions,
            button_html: `<button class="jspsych-btn"><img src="%choice%" style="width:${params.width/4}px" /></button>`,
            choices: [bloc_params.img_instructions],
        }],
        on_start: function() {
            saveData(params, jsPsych.data.get().csv(), temporary = true)
        },
    }
    return bloc
}