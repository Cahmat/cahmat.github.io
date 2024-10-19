function buildBloc_counting_spatial_instructions(params, bloc_params) {
	return build_blocInstructions_counting_spatial(params, bloc_params)
}

function buildBloc_counting_spatial(params, bloc_params) {
	return build_blocMain_counting_spatial(params, bloc_params)
}

function buildBlocParams_counting_spatial_instructions(params, bloc_params) {
	bloc_params.instructions = `<p align='left'>
			                    <b>SECTION ${bloc_params.section} </b><br>
			                    You have been recruited to participate in a mission on planet Zflkd-07. As part of your training, you will have to do the following preparation: <br> 
			                    <br>
			                    <b> Your task is to identify the aliens on the planet by looking at the sequences of spatial location that they produce.</b><br> 
			                    <br>
			                    The task is segmented into ${params.n_blocs_per_section[bloc_params.section] - 1} block(s) of ~ 6 minutes. Do not hesitate to take small breaks between each block. <br> 
			                    You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> bonus per block, depending on your performance. <br>
			                    Click on the cosmonaut to read further instructions and start the first block ! Good luck !
			                    </p>`
	bloc_params.img_instructions = params.img_cosmonaut_walking_gif
	return params, bloc_params
}

function buildBlocParams_counting_spatial(params, bloc_params) {

	// Timing parameters
	bloc_params.t_isi = 2000 // Inter-stimulus interval
	bloc_params.t_start = 500 // "Loading" screen
	bloc_params.t_feedback = 800 // Feedback 
	bloc_params.t_spc = 500 // Show spatial image
	bloc_params.t_spc_gap = 0 // Gap between spatial sequence

	// Select n_trials sequences
	n_counts = 3
	n_repetitions_per_counts = Math.ceil(bloc_params.n_trials / n_counts)
	bloc_params.trials = []
	for (i = 0; i < n_counts; i++) {
		for (j = 0; j < n_repetitions_per_counts; j++) {
			
			// Trial random variables 
			trial = {
				x: jsPsych.randomization.sampleWithReplacement(Array.from({length: params.size_dimensions}, (x, i) => i), 1)[0],
				y: jsPsych.randomization.sampleWithReplacement(Array.from({length: params.size_dimensions}, (x, i) => i), 1)[0],
				category: (i+1).toString(),
			}
			bloc_params.trials.push(trial)
		}
	}

	// Add relevant parameters to the sequences dictionnary for this bloc
	for (trial of bloc_params.trials) {

		// Correct response 
		trial.correct_response = params.response_mapping_counting.findIndex((x) => x == trial.category)

		// Spatial coordinates
		trial.x0 = trial.x
		trial.y0 = trial.y
		trial.x1 = trial.x
		trial.y1 = trial.y
		trial.x2 = trial.x
		trial.y2 = trial.y
		trial.x3 = trial.x
		trial.y3 = trial.y

		// Spatial images
		trial.spc_name_0 = params.stim_set_path_spc + params.stim_set_spc + '/set_0/' + trial.x0 + trial.y0 + '.png'
		trial.spc_name_1 = params.stim_set_path_spc + params.stim_set_spc + '/set_0/' + trial.x1 + trial.y1 + '.png'
		trial.spc_name_2 = params.stim_set_path_spc + params.stim_set_spc + '/set_0/' + trial.x2 + trial.y2 + '.png'
		trial.spc_name_3 = params.stim_set_path_spc2 + params.stim_set_spc + '/set_0/' + trial.x3 + trial.y3 + '.png'
		if (trial.category == '1'){
			trial.spc_name_1 = params.stim_set_path_spc2 + params.stim_set_spc + '/set_0/' + trial.x1 + trial.y1 + '.png'
			trial.spc_name_2 = params.stim_set_path_spc2 + params.stim_set_spc + '/set_0/' + trial.x2 + trial.y2 + '.png'
		}
		if (trial.category == '2'){
			trial.spc_name_2 = params.stim_set_path_spc2 + params.stim_set_spc + '/set_0/' + trial.x2 + trial.y2 + '.png'
		}
		trial.t_spc = bloc_params.t_spc
		trial.t_spc_gap = bloc_params.t_spc_gap

		// Generalization trial or not (control presence of feedback)
		trial.generalization = 'False'
		trial.feedback = 'True'

		// Stimulus dimensions
		dims_spc = loadCSV(params.stim_set_path_spc + params.stim_set_spc + '/set_0/dimensions.csv')[0]
		trial.dim_x_spc = dims_spc['x']
		trial.dim_y_spc = dims_spc['y']
		trial.dim_x = dims_spc['x']
		trial.dim_y = dims_spc['y']

		// Add stim to array for preloading
		for (spc_name of [trial.spc_name_0, trial.spc_name_1, trial.spc_name_2, trial.spc_name_3]) {
			params.preload_array_img.push(spc_name)
		}
		params.preload_array_img = [...new Set(params.preload_array_img)]

	}

	// Randomize trials
	bloc_params.trials = jsPsych.randomization.repeat(bloc_params.trials, 1)
	bloc_params.trials = bloc_params.trials.slice(0, bloc_params.n_trials)

	// Instructions
	bloc_params.instructions = `<p align='left'> 
	                            <b>INSTRUCTIONS</b><br>
	                            On planet Zflkd-07, there are 3 types of alien. You will look at sequences of 4 spatial locations produced by the aliens. <br>
	                            The 3 different types of aliens produce different sequences of spatial locations using different rules! <br>
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
