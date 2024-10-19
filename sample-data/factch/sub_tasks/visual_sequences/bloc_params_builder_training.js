function buildBloc_training_visual_instructions(params, bloc_params) {
	return build_blocInstructions_visual(params, bloc_params)
}

function buildBloc_training_visual(params, bloc_params) {
	return build_blocMain_visual(params, bloc_params)
}

function buildBlocParams_training_visual_instructions(params, bloc_params) {
	bloc_params.instructions = `<p align='left'>
			                    <b>SECTION ${bloc_params.section} </b><br>
			                    You have been recruited to participate in a mission on planet Zflkd-07. As part of your training, you will have to do the following preparation: <br> 
			                    <br>
			                    <b> Your task is to identify the aliens on the planet by looking at the sequences of images that they produce.</b><br> 
			                    <br>
			                    The task is segmented into ${params.n_blocs_per_section[bloc_params.section] - 1} block(s) of ~ 6 minutes. Do not hesitate to take small breaks between each block. <br> 
			                    You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> bonus per block, depending on your performance. <br>
			                    Click on the cosmonaut to read further instructions and start the first block ! Good luck !
			                    </p>`
	bloc_params.img_instructions = params.img_cosmonaut_walking_gif
	return params, bloc_params
}

function buildBlocParams_training_visual(params, bloc_params) {

	// Timing parameters
	bloc_params.t_isi = 2000 // Inter-stimulus interval
	bloc_params.t_start = 500 // "Loading" screen
	bloc_params.t_feedback = 800 // Feedback 
	bloc_params.t_img = 500 // Show visual image
	bloc_params.t_img_gap = 0 // Gap between visual sequence

	// Select n_trials sequences
	bloc_params.trials = params.randomized_seqs[bloc_params.bloc_type].splice(0, bloc_params.n_trials)

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

		// visual images
		trial.img_name_0 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x0 + trial.y0 + '.png'
		trial.img_name_1 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x1 + trial.y1 + '.png'
		trial.img_name_2 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x2 + trial.y2 + '.png'
		trial.img_name_3 = params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/' + trial.x3 + trial.y3 + '.png'
		trial.t_img = bloc_params.t_img
		trial.t_img_gap = bloc_params.t_img_gap

		// Generalization trial or not (control presence of feedback)
		trial.generalization = 'False'
		trial.feedback = 'True'

		// Stimulus dimensions
		dims_img = loadCSV(params.stim_set_path_img + params.stim_set_img + '/' + stim_set_gen + '/dimensions.csv')[0]
		trial.dim_x_img = dims_img['x']
		trial.dim_y_img = dims_img['y']

		// Add stim to array for preloading
		for (img_name of [trial.img_name_0, trial.img_name_1, trial.img_name_2, trial.img_name_3]) {
			params.preload_array_img.push(img_name)
		}
		params.preload_array_img = [...new Set(params.preload_array_img)]
	}

	bloc_params.instructions = `<p align='left'> 
	                            <b>INSTRUCTIONS</b><br>
	                            On planet Zflkd-07, there are 3 types of alien. You will look at sequences of 4 images produced by the aliens. <br>
	                            The 3 different types of aliens produce different sequences of images using different rules! <br>
	                            <br>
	                            <b>Your task is to identify which type of alien is producing each sequence. </b><br>
	                            <br>
	                            You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> in this block, depending on your performance. <br>
	                            <br>
	                            <b>The rules used by the aliens to produce the sequences are 100% deterministic.</b><br>
	                            This means that once you have discovered the rules, you will reach 100% of correct responses. <br>
	                            Good luck ! 
	                            </p>`

	return params, bloc_params

}