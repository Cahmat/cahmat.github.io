function build_blocMain_audio(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_audio(params, bloc_params), 
            trialMains_audio(params, bloc_params),
            trialDebrief_audio(params, bloc_params)
        ]
    }
    return bloc
}
