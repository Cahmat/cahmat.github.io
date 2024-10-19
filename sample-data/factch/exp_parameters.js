function returnExperimentParameters() {

    //////////////////////////////////////////////////
    // FIXED PARAMETERS + INITIATE RANDOM VARIABLES //
    //////////////////////////////////////////////////

    let params = {

        // General parameters
        task: task_name,
        task_version: task_version,
        day: day,
        id: jsPsych.randomization.randomID(10),
        participant_turker: participant_turker,
        date: date.getFullYear() + "_" + (date.getMonth() + 1) + "_" + date.getDate() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds(),

        // Path to save the data
        path_data: 'tasks/jacques/multiGeometry_Curriculum/data/', // Try '../../../data/'
        temp_path_data: 'tasks/jacques/multiGeometry_Curriculum/data/temp/', // Try '../../../data/temp/'
        resize_path_data: 'tasks/jacques/multiGeometry_Curriculum/data/resize/', // Try '../../../data/resize/'
        bloc_path_data: 'tasks/jacques/multiGeometry_Curriculum/data/bloc/', // Try '../../../data/resize/'

        // Structure of the experiment
        exp_structure: returnExperimentCurriculum(task_version, day),

        // Choose stimulus sets
        stim_set_spc: 0, //jsPsych.randomization.sampleWithReplacement(Array.from({
            // length: 16
        //}, (x, i) => i), 1)[0], // Carefull this fixes the stim_set for spc
        stim_set_img: jsPsych.randomization.sampleWithReplacement(Array.from({
            length: 16
        }, (x, i) => i), 1)[0],
        stim_set_snd: jsPsych.randomization.sampleWithReplacement(Array.from({
            length: 16
        }, (x, i) => i), 1)[0],
        stim_set_path_spc: 'stim/stim_sets_spc/set_',
        stim_set_path_spc2: 'stim/stim_sets_spc2/set_',
        stim_set_path_snd: 'stim/stim_sets_snd/set_',
        stim_set_path_img: 'stim/stim_sets_img/set_',

        // Response keys
        response_mapping: jsPsych.randomization.repeat(['zorro', 'butterfly', 'square'], 1),
        response_mapping_counting: jsPsych.randomization.repeat(['1', '2', '3'], 1),

        // Recover sequences from CSV files
        seqs: {
            'basic': loadCSV('stim/sequences/basic.csv'),
            'extra': loadCSV('stim/sequences/extra.csv'),
            'extra_mirror_x': loadCSV('stim/sequences/extra_mirror_x.csv'),
            'extra_mirror_y': loadCSV('stim/sequences/extra_mirror_y.csv'),
            'extra_rot_pi_2': loadCSV('stim/sequences/extra_rot_pi_2.csv'),
            'extra_rot_minus_pi_2': loadCSV('stim/sequences/extra_rot_minus_pi_2.csv'),
            'extra_rot_pi': loadCSV('stim/sequences/extra_rot_pi.csv'),
            'extra_rot_pi_2_mirror_x': loadCSV('stim/sequences/extra_rot_pi_2_mirror_x.csv'),
            'extra_rot_pi_2_mirror_y': loadCSV('stim/sequences/extra_rot_pi_2_mirror_y.csv'),
            'mirror_x': loadCSV('stim/sequences/mirror_x.csv'),
            'mirror_y': loadCSV('stim/sequences/mirror_y.csv'),
            'rot_minus_pi_2': loadCSV('stim/sequences/rot_minus_pi_2.csv'),
            'rot_pi': loadCSV('stim/sequences/rot_pi.csv'),
            'rot_pi_2': loadCSV('stim/sequences/rot_pi_2.csv'),
            'rot_pi_2_mirror_x': loadCSV('stim/sequences/rot_pi_2_mirror_x.csv'),
            'rot_pi_2_mirror_y': loadCSV('stim/sequences/rot_pi_2_mirror_y.csv'),
        },

        // Number and size of stimuli dimensions
        n_dimensions: 2,
        size_dimensions: 4,
        n_categories: 3,

        // Sequence type in each bloc with the ratio of each
        seq_type_ratios_basis: {
            'training_rotation': {
                'training': {
                    'basic': 1 / 2,
                    'rot_pi_2': 1 / 2,
                },
                'generalization': {}
            },
            'training + generalization_rotation': {
                'training': {
                    'basic': 1 / 4,
                    'rot_pi_2': 1 / 4,
                },
                'generalization': {
                    'extra': 1 / 12,
                    'extra_rot_pi_2': 1 / 12,
                    'extra_rot_minus_pi_2': 1 / 12,
                    'extra_rot_pi': 1 / 12,
                    //'mirror_x': 1 / 20,
                    //'mirror_y': 1 / 20,
                    'rot_minus_pi_2': 1 / 12,
                    'rot_pi': 1 / 12,
                    //'rot_pi_2_mirror_x': 1 / 20,
                    //'rot_pi_2_mirror_y': 1 / 20,
                }
            },
            'training_basic': {
                'training': {
                    'basic': 1,
                },
                'generalization': {}
            },
            'training + generalization_basic': {
                'training': {
                    'basic': 1 / 2,
                },
                'generalization': {
                    'extra': 1 / 14,
                    'extra_rot_pi_2': 1 / 14,
                    'extra_rot_minus_pi_2': 1 / 14,
                    'extra_rot_pi': 1 / 14,
                    //'mirror_x': 1 / 20,
                    //'mirror_y': 1 / 20,
                    'rot_minus_pi_2': 1 / 14,
                    'rot_pi_2': 1 / 14,
                    'rot_pi': 1 / 14,
                    //'rot_pi_2_mirror_x': 1 / 20,
                    //'rot_pi_2_mirror_y': 1 / 20,
                }
            },
        },

        seq_type_ratios: {
            'training_visual_rotation': 'training_rotation',
            'training + generalization_visual_rotation': 'training + generalization_rotation',
            'training_visual': 'training_basic',
            'training + generalization_visual': 'training + generalization_basic',

            'training_spatial_rotation': 'training_rotation',
            'training + generalization_spatial_rotation': 'training + generalization_rotation',
            'training_spatial': 'training_basic',
            'training + generalization_spatial': 'training + generalization_basic',

            'training_audio_rotation': 'training_rotation',
            'training + generalization_audio_rotation': 'training + generalization_rotation',
            'training_audio': 'training_basic',
            'training + generalization_audio': 'training + generalization_basic',

            'training_audio_spatial_rotation': 'training_rotation',
            'training + generalization_audio_spatial_rotation': 'training + generalization_rotation',
            'training_audio_spatial': 'training_basic',
            'training + generalization_audio_spatial': 'training + generalization_basic',

            'training_audio_visual_rotation': 'training_rotation',
            'training + generalization_audio_visual_rotation': 'training + generalization_rotation',
            'training_audio_visual': 'training_basic',
            'training + generalization_audio_visual': 'training + generalization_basic',

            'training_visual_spatial_rotation': 'training_rotation',
            'training + generalization_visual_spatial_rotation': 'training + generalization_rotation',
            'training_visual_spatial': 'training_basic',
            'training + generalization_visual_spatial': 'training + generalization_basic',
        },

        // Builder function of each bloc type
        bloc_builder_fun: {
            'start': build_blocStart,

            'counting_spatial_instructions': buildBloc_counting_spatial_instructions,
            'counting_spatial': buildBloc_counting_spatial,

            'unique_sound_space_mapping_instructions': buildBloc_unique_sound_space_mapping_instructions,
            'unique_sound_space_mapping': buildBloc_unique_sound_space_mapping,
            'unique_sound_space_mapping_x': buildBloc_unique_sound_space_mapping,
            'unique_sound_space_mapping_y': buildBloc_unique_sound_space_mapping,

            'unique_sound_visual_mapping_instructions': buildBloc_unique_sound_visual_mapping_instructions,
            'unique_sound_visual_mapping': buildBloc_unique_sound_visual_mapping,
            'unique_sound_visual_mapping_x': buildBloc_unique_sound_visual_mapping,
            'unique_sound_visual_mapping_y': buildBloc_unique_sound_visual_mapping,

            'unique_visual_space_mapping_instructions': buildBloc_unique_visual_space_mapping_instructions,
            'unique_visual_space_mapping': buildBloc_unique_visual_space_mapping,
            'unique_visual_space_mapping_x': buildBloc_unique_visual_space_mapping,
            'unique_visual_space_mapping_y': buildBloc_unique_visual_space_mapping,

            'training_spatial_instructions': buildBloc_training_spatial_instructions,
            'training_spatial': buildBloc_training_spatial,
            'training + generalization_spatial_instructions': buildBloc_training_generalization_spatial_instructions,
            'training + generalization_spatial': buildBloc_training_generalization_spatial,

            'training_visual_instructions': buildBloc_training_visual_instructions,
            'training_visual': buildBloc_training_visual,
            'training + generalization_visual_instructions': buildBloc_training_generalization_visual_instructions,
            'training + generalization_visual': buildBloc_training_generalization_visual,

            'training_audio_instructions': buildBloc_training_audio_instructions,
            'training_audio': buildBloc_training_audio,
            'training + generalization_audio_instructions': buildBloc_training_generalization_audio_instructions,
            'training + generalization_audio': buildBloc_training_generalization_audio,

            'training_audio_spatial_instructions': buildBloc_training_audio_spatial_instructions,
            'training_audio_spatial': buildBloc_training_audio_spatial,
            'training + generalization_audio_spatial_instructions': buildBloc_training_generalization_audio_spatial_instructions,
            'training + generalization_audio_spatial': buildBloc_training_generalization_audio_spatial,

            'training_visual_spatial_instructions': buildBloc_training_visual_spatial_instructions,
            'training_visual_spatial': buildBloc_training_visual_spatial,
            'training + generalization_visual_spatial_instructions': buildBloc_training_generalization_visual_spatial_instructions,
            'training + generalization_visual_spatial': buildBloc_training_generalization_visual_spatial,

            'training_audio_visual_instructions': buildBloc_training_audio_visual_instructions,
            'training_audio_visual': buildBloc_training_audio_visual,
            'training + generalization_audio_visual_instructions': buildBloc_training_generalization_audio_visual_instructions,
            'training + generalization_audio_visual': buildBloc_training_generalization_audio_visual,

            'training_spatial_rotation_instructions': buildBloc_training_spatial_instructions,
            'training_spatial_rotation': buildBloc_training_spatial,
            'training + generalization_spatial_rotation_instructions': buildBloc_training_generalization_spatial_instructions,
            'training + generalization_spatial_rotation': buildBloc_training_generalization_spatial,

            'training_visual_rotation_instructions': buildBloc_training_visual_instructions,
            'training_visual_rotation': buildBloc_training_visual,
            'training + generalization_visual_rotation_instructions': buildBloc_training_generalization_visual_instructions,
            'training + generalization_visual_rotation': buildBloc_training_generalization_visual,

            'training_audio_rotation_instructions': buildBloc_training_audio_instructions,
            'training_audio_rotation': buildBloc_training_audio,
            'training + generalization_audio_rotation_instructions': buildBloc_training_generalization_audio_instructions,
            'training + generalization_audio_rotation': buildBloc_training_generalization_audio,

            'training_audio_spatial_rotation_instructions': buildBloc_training_audio_spatial_instructions,
            'training_audio_spatial_rotation': buildBloc_training_audio_spatial,
            'training + generalization_audio_spatial_rotation_instructions': buildBloc_training_generalization_audio_spatial_instructions,
            'training + generalization_audio_spatial_rotation': buildBloc_training_generalization_audio_spatial,

            'training_visual_spatial_rotation_instructions': buildBloc_training_visual_spatial_instructions,
            'training_visual_spatial_rotation': buildBloc_training_visual_spatial,
            'training + generalization_visual_spatial_rotation_instructions': buildBloc_training_generalization_visual_spatial_instructions,
            'training + generalization_visual_spatial_rotation': buildBloc_training_generalization_visual_spatial,

            'training_audio_visual_rotation_instructions': buildBloc_training_audio_visual_instructions,
            'training_audio_visual_rotation': buildBloc_training_audio_visual,
            'training + generalization_audio_visual_rotation_instructions': buildBloc_training_generalization_audio_visual_instructions,
            'training + generalization_audio_visual_rotation': buildBloc_training_generalization_audio_visual,

            'end': build_blocEnd,
        },

        // Monetary reward
        total_bonus: 0, // Initiate total bonus
        bonus_per_bloc: 0.25,

        // Interactive sounds and images
        sound_correct: 'stim/stim_global/correct.wav',
        sound_wrong: 'stim/stim_global/wrong.wav',
        sound_silence: 'stim/stim_global/silence.wav',
        img_disclaimer: 'stim/stim_global/disclaimer.png',
        img_planet_gif: 'stim/stim_global/planet.gif',
        img_planet_perturbation_gif: 'stim/stim_global/planet_perturbation.gif',
        img_cosmonaut_gif: 'stim/stim_global/cosmonaut.gif',
        img_cosmonaut_walking_gif: 'stim/stim_global/cosmonaut_walking.gif',
        buttons: [
            'stim/stim_global/button1.png',
            'stim/stim_global/button2.png',
            'stim/stim_global/button3.png',
        ],
        buttons_counting: [
            'stim/stim_global/button4.png',
            'stim/stim_global/button5.png',
            'stim/stim_global/button6.png',
        ],

        // Window size
        width: screen.width,
        height: screen.height,

        // Preload arrays
        preload_array_img: [],
        preload_array_snd: [],
    }


    /////////////////////////////////////////////////
    // UPDATED PARAMETERS (ASSIGN VALUES TO BLOCS) //
    /////////////////////////////////////////////////

    // Change folder for exp2c and exp3c
    if (task_version == 'exp2c' || task_version == 'exp3c'){
        params.stim_set_img = 14
    }
    
    // Get a list of bloc types 
    params.bloc_types = []
    for (const bloc_dict of params.exp_structure) {
        params.bloc_types.push(bloc_dict['bloc_type'])
    }

    // Get unique values of bloc types
    params.unique_bloc_types = [...new Set(params.bloc_types)]

    // Get total number of trials per bloc type
    params.n_trials_per_bloc_type = {}
    params.n_blocs_per_bloc_type = {}
    params.n_trials_total = 0
    params.bloc_index_in_section = []
    params.n_blocs_per_section = {}
    for (const bloc_dict of params.exp_structure) {
        if (!(bloc_dict['bloc_type'] in params.n_trials_per_bloc_type)) {
            params.n_trials_per_bloc_type[bloc_dict['bloc_type']] = 0
            params.n_blocs_per_bloc_type[bloc_dict['bloc_type']] = 0
        }
        params.n_trials_per_bloc_type[bloc_dict['bloc_type']] += bloc_dict['n_trials']
        params.n_blocs_per_bloc_type[bloc_dict['bloc_type']] += 1
        params.n_trials_total += bloc_dict['n_trials']
        if (!(bloc_dict['section'] in params.n_blocs_per_section)) {
            params.n_blocs_per_section[bloc_dict['section']] = 0
        }
        params.bloc_index_in_section.push(params.n_blocs_per_section[bloc_dict['section']])
        params.n_blocs_per_section[bloc_dict['section']] += 1
    }

    // Update n_blocs parameters
    params.n_blocs_total = params.bloc_types.length

    // Randomized the order of all sequence across all blocs of the same bloc type
    // Tricky here, we want to randomized across all instance of the same bloc type
    params.randomized_seqs = {}
    for (const bloc_type of params.unique_bloc_types) {
        if (!(bloc_type in params.seq_type_ratios)) {
            continue
        }
        params.randomized_seqs[bloc_type] = randomizedSeqsAcrossBlocType(
            params.seq_type_ratios_basis[params.seq_type_ratios[bloc_type]],
            params.seqs,
            params.n_trials_per_bloc_type[bloc_type],
            params.n_blocs_per_bloc_type[bloc_type],
            params.n_categories,
            params.size_dimensions
        )
    }



    ////////////////////////////////////////////////
    ///// ASSIGN TRIAL VARIABLES TO EVERY BLOC /////
    ////////////////////////////////////////////////

    // Create a list of bloc_params dictionaries (one for each bloc)
    params.bloc_params = []

    // Loop across blocs
    for (var i = 0; i < params.n_blocs_total; i++) {

        // Initiate bloc_params dictionary
        bloc_params = {
            bloc_type: params.bloc_types[i],
            bloc_index: i,
            bloc_index_in_section: params.bloc_index_in_section[i],
            n_blocs_per_section: params.n_blocs_per_section[params.exp_structure[i]['section']],
            n_trials: params.exp_structure[i]['n_trials'],
            section: params.exp_structure[i]['section'],
            bonus_per_bloc: params.bonus_per_bloc,
        }

        // Populate bloc_params
        // This is a different operation for each bloc type
        params, bloc_params = buildBlocParams(params, bloc_params)

        // Append bloc_params dictionary to params.bloc_params list
        params.bloc_params.push(bloc_params)
    }

    return params
}
