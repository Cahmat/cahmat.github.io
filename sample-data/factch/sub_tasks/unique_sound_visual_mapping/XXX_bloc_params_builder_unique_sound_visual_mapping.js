function buildBloc_unique_sound_visual_mapping_instructions(params, bloc_params) {
	return build_blocInstructions_unique_sound_visual_mapping(params, bloc_params)
}

function buildBloc_unique_sound_visual_mapping(params, bloc_params) {
	return build_blocMain_unique_sound_visual_mapping(params, bloc_params)
}

function buildBlocParams_unique_sound_visual_mapping_instructions(params, bloc_params) {
	bloc_params.instructions = `<p align='left'>
			                    <b>SECTION ${bloc_params.section}</b><br> 
			                    You are in the training center to learn how to establish contact with the aliens on planet Zflkd-07! <br>
			                    These aliens uses strange sounds to communicate. In this section, your goal is to learn to discriminate the alien sounds. <br>
			                    <br>
			                    <b> Your task will be to associate each alien sound with an image on the screen. </b><br>
			                    <br>
			                    This section is segmented into ${params.n_blocs_per_section[bloc_params.section] - 1} block(s) of ~ 3 minutes. Do not hesitate to take small breaks between each block. <br> 
			                    You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> bonus per block, depending on your performance. <br>
			                    </p>`
	bloc_params.img_instructions = params.img_cosmonaut_gif
	return params, bloc_params
}

function buildBlocParams_unique_sound_visual_mapping(params, bloc_params) {

	// Timing parameters
	bloc_params.t_isi = 600 // Inter-stimulus interval
	bloc_params.t_start = 500 // "Loading" screen
	bloc_params.t_feedback = 800 // Feedback 
	bloc_params.t_snd = 500 // Show sound

	// Stimulus dimensions
	dims_img = loadCSV(params.stim_set_path_img + params.stim_set_img + '/set_0/dimensions.csv')[0]
	dim_x_img = dims_img['x']
	dim_y_img = dims_img['y']
	dims_snd = loadCSV(params.stim_set_path_snd + params.stim_set_snd + '/set_0/dimensions.csv')[0]
	dim_x_snd = dims_snd['x']
	dim_y_snd = dims_snd['y']

	// Image response (grid) and buttons
	bloc_params.grid_img = params.stim_set_path_img + 'void_img.png'
	bloc_params.grid_img_size = 0.6 * params.height // Grid should take ~ 50% screen height
	bloc_params.grid_img_size_actual = 0.7 * bloc_params.grid_img_size
	bloc_params.grid_img_size_step = bloc_params.grid_img_size_actual / (params.size_dimensions)
	bloc_params.img_size = 0.7 * bloc_params.grid_img_size_step

	// Grid position
	bloc_params.grid_img_position = {
		left: params.width / 2 - bloc_params.grid_img_size / 2,
		top: params.height / 2 - bloc_params.grid_img_size / 2
	}

	// bloc_params.img_positions
	bloc_params.imgs = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			img = {}
			img.left = params.width / 2 + (-2 + Math.floor(i / 2) * 3 + Math.floor((params.size_dimensions - j - 1) / 2)) * bloc_params.grid_img_size_step - bloc_params.img_size / 2
			img.top = params.height / 2 + (-2 + ([1, 2].includes(i)) * 3 + ([1, 2].includes((params.size_dimensions - j - 1)))) * bloc_params.grid_img_size_step - bloc_params.img_size / 2
			img.img = params.stim_set_path_img + params.stim_set_img + '/set_0/' + i + (params.size_dimensions - j - 1) + '.png'
			bloc_params.imgs.push(img)
		}
	}

	// Get array of images
	list_imgs = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			list_imgs.push(params.stim_set_path_img + params.stim_set_img + '/set_0/' + i + (params.size_dimensions - j - 1) + '.png')
		}
	}

	// Select n_trials sequences
	n_snd = params.size_dimensions * params.size_dimensions
	n_repetitions_of_the_set = Math.ceil(bloc_params.n_trials / n_snd)
	bloc_params.trials = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			for (k = 0; k < n_repetitions_of_the_set; k++) {

				// Trial random variables 
				trial = {
					snd: params.stim_set_path_snd + params.stim_set_snd + '/set_0/' + i + j + '.wav',
					feedback: 'True',
					dim_x_snd: dims_snd['x'],
					dim_y_snd: dims_snd['y'],
					dim_x_img: dims_img['x'],
					dim_y_img: dims_img['y'],
					x: i,
					y: j,
					list_imgs: list_imgs,
					correct_response: i.toString() + j.toString(),
					correct_response_location: i.toString() + j.toString(),
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
	                            On this bloc, you will have to associate each alien sound with an image. <br>
	                            On each trial, you will <b> hear a sound </b> and then you will then have to <b> click on an image </b>.<br>
	                            You will receive feedback on every trial. <br>
	                            You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> in this block, depending on your performance. <br>
	                            <br>
	                            <b>The mapping between the alien sounds and the image is 100% deterministic.</b><br>
	                            This means that once you have learned the mapping, you will reach 100% of correct responses. <br>
	                            Good luck ! 
	                            </p>`
	return params, bloc_params

}

function buildBlocParams_unique_sound_visual_mapping_x(params, bloc_params) {

	// Almost everything is the same as in buildBlocParams_unique_sound_visual_mapping
	params,
	bloc_params = buildBlocParams_unique_sound_visual_mapping(params, bloc_params)

	// Get array of images
	list_imgs = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			list_imgs.push(params.stim_set_path_img + params.stim_set_img + '/set_0/' + i + (params.size_dimensions - j - 1) + '.png')
		}
	}

	// But we have to redo the randomization of the sequences
	// Select n_trials sequences
	n_snd = params.size_dimensions * params.size_dimensions
	n_repetitions_of_the_set = Math.ceil(bloc_params.n_trials / n_snd)
	bloc_params.trials = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			for (k = 0; k < n_repetitions_of_the_set; k++) {
				trial = {
					snd: params.stim_set_path_snd + params.stim_set_snd + '/set_0/' + i + 1 + '.wav', // Fix the y dimension
					feedback: 'True',
					dim_x_snd: dims_snd['x'],
					dim_y_snd: dims_snd['y'],
					dim_x_img: dims_img['x'],
					dim_y_img: dims_img['y'],
					x: i,
					y: 1,
					list_imgs: list_imgs,
					correct_response: i.toString() + '1',
					correct_response_location: i.toString() + '1',
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


function buildBlocParams_unique_sound_visual_mapping_y(params, bloc_params) {

	// Almost everything is the same as in buildBlocParams_unique_sound_visual_mapping
	params,
	bloc_params = buildBlocParams_unique_sound_visual_mapping(params, bloc_params)

	// Get array of images
	list_imgs = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			list_imgs.push(params.stim_set_path_img + params.stim_set_img + '/set_0/' + i + (params.size_dimensions - j - 1) + '.png')
		}
	}

	// But we have to redo the randomization of the sequences
	// Select n_trials sequences
	n_snd = params.size_dimensions * params.size_dimensions
	n_repetitions_of_the_set = Math.ceil(bloc_params.n_trials / n_snd)
	bloc_params.trials = []
	for (i = 0; i < params.size_dimensions; i++) {
		for (j = 0; j < params.size_dimensions; j++) {
			for (k = 0; k < n_repetitions_of_the_set; k++) {
				trial = {
					snd: params.stim_set_path_snd + params.stim_set_snd + '/set_0/' + 1 + j + '.wav', // Fix the x dimension
					feedback: 'True',
					dim_x_snd: dims_snd['x'],
					dim_y_snd: dims_snd['y'],
					dim_x_img: dims_img['x'],
					dim_y_img: dims_img['y'],
					x: 1,
					y: j,
					list_imgs: list_imgs,
					correct_response: '1' + j.toString(),
					correct_response_location: '1' + j.toString()
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