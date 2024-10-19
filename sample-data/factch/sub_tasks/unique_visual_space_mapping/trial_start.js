function trialStart_unique_visual_space_mapping(params, bloc_params) {
    let bloc = {
        timeline: [
            {
                type: jsPsychHtmlButtonResponse,
                stimulus: bloc_params.instructions, 
                choices: ["LET'S DO IT!"]
            },
            {
                type: jsPsychHtmlButtonResponse,
                stimulus: `<p align='left'>
                    <b> BLOC ${bloc_params.bloc_index_in_section}/${bloc_params.n_blocs_per_section - 1}</b>
                    </p>`, 
                choices: ["READY"]
            }
        ]
    }
    return bloc
}