function saveData(params, data, temporary = true, resize = false) {
    // Set the data to be saved
    const alldata = {
        id: params.id,
        task: params.task,
        path: function() {
            if (resize) {
                return params.resize_path_data
            } else {
                if (temporary) {
                    return params.temp_path_data
                } else {
                    return params.path_data
                }
            }
        },
        data: data,
    }

    // Send it to the back-end (Perl)
    logWrite(alldata)
}
