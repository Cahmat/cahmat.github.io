function buildBloc_training_generalization_visual_spatial_instructions(params, bloc_params) {
	return build_blocInstructions_visual_spatial(params, bloc_params)
}

function buildBloc_training_generalization_visual_spatial(params, bloc_params) {
	return build_blocMain_visual_spatial(params, bloc_params)
}

function buildBlocParams_training_generalization_visual_spatial_instructions(params, bloc_params) {
	bloc_params.instructions = `<p align='left'>
			                    <b>SECTION ${bloc_params.section} </b><br>
			                    Problem! Interferences with the communicating device! <br> 
			                    <br>
			                    <b> Your task is to identify the aliens on the planet by looking at sequences of images that they produce.</b><br> 
                                <b> However, on some trials, there will be "perturbations". The sequences of images will be corrupted, sometimes greatly. <br> 
			                    <br>
			                    The task is segmented into ${params.n_blocs_per_section[bloc_params.section] - 1} block(s) of ~ 6 minutes. Do not hesitate to take small breaks between each block. <br> 
			                    You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> bonus per block, depending on your performance. <br>
			                    Click on the planet to read further instructions and start the first block ! Good luck !
			                    </p>`
	bloc_params.img_instructions = params.img_planet_perturbation_gif
	return params, bloc_params
}

function buildBlocParams_training_generalization_visual_spatial(params, bloc_params) {

	// Timing parameters
	bloc_params.t_isi = 2000 // Inter-stimulus interval
	bloc_params.t_start = 500 // "Loading" screen
	bloc_params.t_feedback = 800 // Feedback 
	bloc_params.t_img = 500 // Show images
	bloc_params.t_spc = 500 // Show spatial image
	bloc_params.t_spc_gap = 0 // Gap between spatial sequence

	// Select n_trials sequences
	bloc_params.trials = params.randomized_seqs[bloc_params.bloc_type].splice(0, bloc_params.n_trials)

	// // Create random array with pseudorandom (7*True, 8*False // 8*True, 7*False)
	i_mid = Math.ceil(bloc_params.n_trials / 2)
	i_quart = Math.floor(i_mid / 2)
	spc_before_img_1 = Array(i_quart).fill('True').concat(Array(i_mid - i_quart).fill('False'))
	spc_before_img_2 = Array(i_quart).fill('False').concat(Array(i_mid - i_quart).fill('True'))
	spc_before_img_1 = jsPsych.randomization.repeat(spc_before_img_1, 1)
	spc_before_img_2 = jsPsych.randomization.repeat(spc_before_img_2, 1)
	spc_before_img = spc_before_img_1.concat(spc_before_img_2)
	i_spc_before_img = 0 // Counter variable

	// Add relevant parameters to the sequences dictionnary for this bloc
	for (trial of bloc_params.trials) {

		// Correct response 
		trial.correct_response = params.response_mapping.findIndex((x) => x == trial.category)

		// Stimulus paths
		stim_set_gen = ''
		if (trial.extra == 'True') {
			stim_set_gen = 'set_1'
		} else {
			stim_set_gen = 'set_0'
		}

		// Spatial images
		trial.spc_name_0 = params.stim_set_path_spc + params.stim_set_spc + '/' + stim_set_gen + '/' + trial.x0 + trial.y0 + '.png'
		trial.spc_name_1 = params.stim_set_path_spc + params.stim_set_spc + '/' + stim_set_gen + '/' + trial.x1 + trial.y1 + '.png'
		trial.spc_name_2 = params.stim_set_path_spc + params.stim_set_spc + '/' + stim_set_gen + '/' + trial.x2 + trial.y2 + '.png'
		trial.spc_name_3 = params.stim_set_path_spc + params.stim_set_spc + '/' + stim_set_gen + '/' + trial.x3 + trial.y3 + '.png'
		trial.t_spc = bloc_params.t_spc
		trial.t_spc_gap = bloc_params.t_spc_gap

		// Images 
		trial.img_name_0 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x0 + trial.y0 + '.png'
		trial.img_name_1 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x1 + trial.y1 + '.png'
		trial.img_name_2 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x2 + trial.y2 + '.png'
		trial.img_name_3 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x3 + trial.y3 + '.png'

		// Generalization trial or not (control presence of feedback)
		if (trial.generalization == 'True') {
			trial.feedback = 'False'
			trial.spc_name_0 = params.stim_set_path_spc + 'void_spc.png'
			trial.spc_name_1 = params.stim_set_path_spc + 'void_spc.png'
			trial.spc_name_2 = params.stim_set_path_spc + 'void_spc.png'
			trial.spc_name_3 = params.stim_set_path_spc + 'void_spc.png'
			trial.t_spc = 0
			trial.t_spc_gap = 0
			trial.spc_before_img = 'False'
		} else {
			trial.feedback = 'True'
		}

		// Remove spatial images for half of the training trials
		if (trial.generalization == 'False') {
			if (spc_before_img[i_spc_before_img] == 'False') {
				trial.spc_name_0 = params.stim_set_path_spc + 'void_spc.png'
				trial.spc_name_1 = params.stim_set_path_spc + 'void_spc.png'
				trial.spc_name_2 = params.stim_set_path_spc + 'void_spc.png'
				trial.spc_name_3 = params.stim_set_path_spc + 'void_spc.png'
				trial.t_spc = 0
				trial.t_spc_gap = 0
				trial.spc_before_img = 'False'
			} else {
				trial.spc_before_img = 'True'
			}
			i_spc_before_img += 1
		}

		// Stimulus dimensions
		dims_spc = loadCSV(params.stim_set_path_spc + params.stim_set_spc + '/' + stim_set_gen + '/dimensions.csv')[0]
		trial.dim_x_spc = dims_spc['x']
		trial.dim_y_spc = dims_spc['y']
		dims_img = loadCSV(params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/dimensions.csv')[0]
		trial.dim_x_img = dims_img['x']
		trial.dim_y_img = dims_img['y']

		// Add stim to array for preloading
		for (spc_name of [trial.spc_name_0, trial.spc_name_1, trial.spc_name_2, trial.spc_name_3]) {
			params.preload_array_img.push(spc_name)
		}
		for (img_name of [trial.img_name_0, trial.img_name_1, trial.img_name_2, trial.img_name_3]) {
			params.preload_array_img.push(img_name)
		}
		params.preload_array_img = [...new Set(params.preload_array_img)]
	}

	bloc_params.instructions = `<p align='left'> 
	                            <b>INSTRUCTIONS</b><br>
	                            On this planet, there are 3 types of alien. You will look at sequences of 4 images produced by the aliens. <br>
	                            All aliens use the same basic images. However, they produce different sequences of images using different rules! <br>
	                            Some sequences are preceeded by a cueing sequence of 4 spatial location (red star) that is here to help you. <br>
	                            <br>
	                            <b>Your task is to identify which type of alien is producing the sequence. </b><br>
                                <b>However, on some trials, there will be "perturbations". The sequences of images will be corrupted, sometimes greatly. <br> 
                                During the perturbation trials, the task will remain the same: you have to identify which creature is producing the sequence. </b><br>
	                            <br>
	                            You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> in this block, depending on your performance. <br>
	                            <br>
	                            <b>The rules used by the aliens to produce the sequences are 100% deterministic.</b><br>
	                            This means that once you have discovered the rules, you will reach 100% of correct responses. <br>
	                            Good luck ! 
	                            </p>`

	return params, bloc_params

}