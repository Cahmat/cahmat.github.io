function build_blocMain_audio_visual(params, bloc_params) {
    let bloc = {
        timeline: [
            trialStart_audio_visual(params, bloc_params), 
            trialMains_audio_visual(params, bloc_params),
            trialDebrief_audio_visual(params, bloc_params)
        ]
    }
    return bloc
}
