function buildBloc_unique_visual_space_mapping_instructions(params, bloc_params) {
	return build_blocInstructions_unique_visual_space_mapping(params, bloc_params)
}

function buildBloc_unique_visual_space_mapping(params, bloc_params) {
	return build_blocMain_unique_visual_space_mapping(params, bloc_params)
}

function buildBlocParams_unique_visual_space_mapping_instructions(params, bloc_params) {
	bloc_params.instructions = `<p align='left'>
			                    <b>SECTION ${bloc_params.section}</b><br> 
			                    You are in the training center to learn how to establish contact with the aliens on planet Zflkd-07! <br>
			                    These aliens uses strange images to communicate. In this section, your goal is to learn to discriminate the alien images. <br>
			                    <br>
			                    <b> Your task will be to associate each alien image with a spatial location on the screen. </b><br>
			                    <br>
			                    This section is segmented into ${params.n_blocs_per_section[bloc_params.section] - 1} block(s) of ~ 3 minutes. Do not hesitate to take small breaks between each block. <br> 
			                    You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> bonus per block, depending on your performance. <br>
			                    </p>`
	bloc_params.img_instructions = params.img_cosmonaut_gif
	return params, bloc_params
}

function buildBlocParams_unique_visual_space_mapping(params, bloc_params) {

	// Timing parameters
	bloc_params.t_isi = 600 // Inter-stimulus interval
	bloc_params.t_start = 500 // "Loading" screen
	bloc_params.t_feedback = 800 // Feedback 
	bloc_params.t_img = 500 // Show image

	// Stimulus dimensions
	dims_spc = loadCSV(params.stim_set_path_spc + params.stim_set_spc + '/set_0/dimensions.csv')[0]
	dim_x_spc = dims_spc['x']
	dim_y_spc = dims_spc['y']
	dims_img = loadCSV(params.stim_set_path_img + params.stim_set_img + '/set_0/dimensions.csv')[0]
	dim_x_img = dims_img['x']
	dim_y_img = dims_img['y']

	// Image response (grid) and buttons
	bloc_params.grid_spc = params.stim_set_path_spc + 'grid_spc.png'
	bloc_params.star_spc = params.stim_set_path_spc + 'star_spc.png'
	bloc_params.grid_spc_size = 0.6 * params.height // Grid should take ~ 50% screen height
	bloc_params.grid_spc_size_actual = 0.7 * bloc_params.grid_spc_size
	bloc_params.grid_spc_size_step = bloc_params.grid_spc_size_actual / (params.size_dimensions)
	bloc_params.star_spc_size = 0.7 * bloc_params.grid_spc_size_step

	// Grid position
	bloc_params.grid_spc_position = {
		left: params.width / 2 - bloc_params.grid_spc_size / 2,
		top: params.height / 2 - bloc_params.grid_spc_size / 2
	}

	//bloc_params.star_positions
	bloc_params.star_spc_positions = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			star_spc_position = {}
			star_spc_position.left = params.width / 2 + (-1.5 + i) * bloc_params.grid_spc_size_step - bloc_params.star_spc_size / 2
			star_spc_position.top = params.height / 2 + (-1.5 + j) * bloc_params.grid_spc_size_step - bloc_params.star_spc_size / 2
			bloc_params.star_spc_positions.push(star_spc_position)
		}
	}

	// Select n_trials sequences
	n_img = params.size_dimensions * params.size_dimensions
	n_repetitions_of_the_set = Math.ceil(bloc_params.n_trials / n_img)
	bloc_params.trials = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			for (k = 0; k < n_repetitions_of_the_set; k++) {
				trial = {
					img: params.stim_set_path_img + params.stim_set_img + '/set_0/' + i + j + '.png',
					spc: params.stim_set_path_spc + params.stim_set_spc + '/set_0/' + i + j + '.png',
					feedback: 'True',
					dim_x_img: dims_img['x'],
					dim_y_img: dims_img['y'],
					dim_x_spc: dims_spc['x'],
					dim_y_spc: dims_spc['y'],
					x: i,
					y: j,
					correct_response: i.toString() + j.toString() // Probably something like i * size_dimensions + j
				}
				bloc_params.trials.push(trial)
			}
		}
	}

	// Randomize trials
	bloc_params.trials = jsPsych.randomization.repeat(bloc_params.trials, 1)
	bloc_params.trials = bloc_params.trials.slice(0, bloc_params.n_trials)

	// Instructions before each bloc
	bloc_params.instructions = `<p align='left'> 
	                            <b>INSTRUCTIONS</b><br>
	                            On this bloc, you will have to associate each alien image with a spatial location. <br>
	                            On each trial, you will <b> see an image </b> and then you will then have to <b> click on a spatial location </b>.<br>
	                            You will receive feedback on every trial. <br>
	                            You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> in this block, depending on your performance. <br>
	                            <br>
	                            <b>The mapping between the alien images and the spatial locations is 100% deterministic.</b><br>
	                            This means that once you have learned the mapping, you will reach 100% of correct responses. <br>
	                            Good luck ! 
	                            </p>`
	return params, bloc_params

}

function buildBlocParams_unique_visual_space_mapping_x(params, bloc_params) {

	// Almost everything is the same as in buildBlocParams_unique_visual_space_mapping
	params,
	bloc_params = buildBlocParams_unique_visual_space_mapping(params, bloc_params)

	// But we have to redo the randomization of the sequences
	// Select n_trials sequences
	n_img = params.size_dimensions * params.size_dimensions
	n_repetitions_of_the_set = Math.ceil(bloc_params.n_trials / n_img)
	bloc_params.trials = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			for (k = 0; k < n_repetitions_of_the_set; k++) {
				trial = {
					img: params.stim_set_path_img + params.stim_set_img + '/set_0/' + i + 1 + '.png', // Fix the y dimension
					spc: params.stim_set_path_spc + params.stim_set_spc + '/set_0/' + i + 1 + '.png', // Fix the y dimension
					feedback: 'True',
					dim_x_img: dims_img['x'],
					dim_y_img: dims_img['y'],
					dim_x_spc: dims_spc['x'],
					dim_y_spc: dims_spc['y'],
					x: i,
					y: 1,
					correct_response: i.toString() + '1'
				}
				bloc_params.trials.push(trial)
			}
		}
	}

	// Randomize trials
	bloc_params.trials = jsPsych.randomization.repeat(bloc_params.trials, 1)
	bloc_params.trials = bloc_params.trials.slice(0, bloc_params.n_trials)
	return params,
	bloc_params
}


function buildBlocParams_unique_visual_space_mapping_y(params, bloc_params) {

	// Almost everything is the same as in buildBlocParams_unique_visual_space_mapping
	params,
	bloc_params = buildBlocParams_unique_visual_space_mapping(params, bloc_params)

	// But we have to redo the randomization of the sequences
	// Select n_trials sequences
	n_img = params.size_dimensions * params.size_dimensions
	n_repetitions_of_the_set = Math.ceil(bloc_params.n_trials / n_img)
	bloc_params.trials = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			for (k = 0; k < n_repetitions_of_the_set; k++) {
				trial = {
					img: params.stim_set_path_img + params.stim_set_img + '/set_0/' + 1 + j + '.png', // Fix the x dimension
					spc: params.stim_set_path_spc + params.stim_set_spc + '/set_0/' + 1 + j + '.png', // Fix the x dimension
					feedback: 'True',
					dim_x_img: dims_img['x'],
					dim_y_img: dims_img['y'],
					dim_x_spc: dims_spc['x'],
					dim_y_spc: dims_spc['y'],
					x: 1,
					y: j,
					correct_response: '1' + j.toString() 
				}
				bloc_params.trials.push(trial)
			}
		}
	}

	// Randomize trials
	bloc_params.trials = jsPsych.randomization.repeat(bloc_params.trials, 1)
	bloc_params.trials = bloc_params.trials.slice(0, bloc_params.n_trials)
	return params,
	bloc_params
}