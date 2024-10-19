function returnExperimentParameters() {
    let params = {

        // General parameters
        task: task_name,
        id: jsPsych.randomization.randomID(10),

        // Path to save the data
        path_data: 'tasks/jacques/basic_jsPsych/data/',
        temp_path_data: 'tasks/jacques/basic_jsPsych/data/temp/',
        resize_path_data: 'tasks/jacques/basic_jsPsych/data/resize/',

        // Stimuli
        imgs: [
            { img: 'stim/smile.png',    img_category: 'smile' },
            { img: 'stim/no_smile.png', img_category: 'no_smile' }
        ],
        img_width: 400,

        // Response keys
        response_keys: ['ArrowLeft', 'ArrowRight'],
        response_keys_mapping: {
            'arrowleft': 'smile',
            'arrowright': 'no_smile',
        },

        // Trials
        n_trials: 10,

        // Timing parameters (in ms)
        t_start: 500,

        // Instruction text
        text_instruction: 'Press LEFT ARROW for a SMILE and RIGHT ARROW for NO SMILE'
    }
    return params
}