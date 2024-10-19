function build_blocMain_visual_spatial(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_visual_spatial(params, bloc_params), 
            trialMains_visual_spatial(params, bloc_params),
            trialDebrief_visual_spatial(params, bloc_params)
        ]
    }
    return bloc
}
