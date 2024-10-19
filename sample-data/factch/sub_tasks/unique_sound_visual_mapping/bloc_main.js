function build_blocMain_unique_sound_visual_mapping(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_unique_sound_visual_mapping(params, bloc_params), 
            trialMains_unique_sound_visual_mapping(params, bloc_params),
            trialDebrief_unique_sound_visual_mapping(params, bloc_params)
        ]
    }
    return bloc
}
