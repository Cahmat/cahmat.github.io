function build_blocMain_spatial(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_spatial(params, bloc_params), 
            trialMains_spatial(params, bloc_params),
            trialDebrief_spatial(params, bloc_params)
        ]
    }
    return bloc
}
