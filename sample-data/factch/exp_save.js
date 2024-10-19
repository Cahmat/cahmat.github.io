function saveData(params, data, temporary = true, resize = false, bloc = false, bloc_index = false) { 

    // Set the data to be saved
    var alldata = {
        id: params.participant_turker + '_' + params.date,
        task: params.task,
        path: params.path_data,
        data: data
    }

    if (resize) {
        alldata.path = params.resize_path_data
    }

    if (temporary) {
        alldata.path = params.temp_path_data
    }

    if (bloc) {
        alldata.id = params.participant_turker + '_' + params.date + '_' + bloc_index
        alldata.path = params.bloc_path_data
    }

    // Send it to the back-end (Perl)
    logWrite(alldata)
}