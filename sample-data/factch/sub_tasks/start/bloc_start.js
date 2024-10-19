function build_blocStart(params, bloc_params) {
    let bloc = {
        timeline: [
            // Preload stimuli
            {
                type: jsPsychPreload,
                images: params.preload_array_img,
                sounds: params.preload_array_snd,
            },
        ],
        on_start: function() {
            saveData(params, jsPsych.data.get().csv(), temporary = true)
        }
    }
    return bloc
}