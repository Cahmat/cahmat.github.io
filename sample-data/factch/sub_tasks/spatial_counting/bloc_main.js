function build_blocMain_counting_spatial(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_counting_spatial(params, bloc_params), 
            trialMains_counting_spatial(params, bloc_params),
            trialDebrief_counting_spatial(params, bloc_params)
        ]
    }
    return bloc
}
