// Define main experimental timeline
// This adds all the trials to a timeline array
function returnTimeline(params) {
    let timeline = []

    // Loop across blocs 
    for (i=0; i<params.n_blocs_total; i++) {

        // Each bloc is different so we call a builder for returning the trials sequence
        bloc_builder_fun = params.bloc_builder_fun[params.bloc_types[i]]

        // Get sequence of trials
        bloc_timeline = bloc_builder_fun(params, params.bloc_params[i])

        // Append to the full timeline
        timeline.push(bloc_timeline)
    }

    // Return
    return timeline
}
