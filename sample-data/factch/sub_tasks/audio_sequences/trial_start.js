function trialStart_audio(params, bloc_params) {
    let bloc = {
        timeline: [{
            type: jsPsychHtmlButtonResponse,
            stimulus: bloc_params.instructions,
            choices: ["LET'S DO IT!"]
        }, {
            type: jsPsychHtmlButtonResponse,
            stimulus: `<p align='left'>
                    <b> BLOC ${bloc_params.bloc_index_in_section}/${bloc_params.n_blocs_per_section - 1}</b>
                    </p>`,
            choices: ["READY"]
        }, {
            type: jsPsychImageButtonResponse,
            stimulus: params.img_disclaimer,
            prompt: `<p align='left'>
                 <b>THE TASK IS HARD. DON'T WORRY!</b><br>
                 It can be difficult to identify the aliens. This is why the experiment is composed of multiple blocks. <br>
                 It is <b>absolutely normal</b> to struggle at the beginning. <br>
                 Stay focused, try your best. Your performances will improve in the course of the experiment. <br>
                 <b>Always remember: once you have discovered the rules to identify the aliens, your performances will reach 100%! </b>
                 </p>`,
            choices: ["LET'S GO!"]
        }]
    }
    return bloc
}