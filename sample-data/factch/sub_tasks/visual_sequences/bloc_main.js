function build_blocMain_visual(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_visual(params, bloc_params), 
            trialMains_visual(params, bloc_params),
            trialDebrief_visual(params, bloc_params)
        ]
    }
    return bloc
}
