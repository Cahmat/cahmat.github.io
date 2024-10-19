function buildBloc_training_audio_instructions(params, bloc_params) {
	return build_blocInstructions_audio(params, bloc_params)
}

function buildBloc_training_audio(params, bloc_params) {
	return build_blocMain_audio(params, bloc_params)
}

function buildBlocParams_training_audio_instructions(params, bloc_params) {
	bloc_params.instructions = `<p align='left'>
			                    <b>SECTION ${bloc_params.section} </b><br>
			                    You've made great progress! You are on planet Zflkd-07 establishing communication with the aliens. <br> 
			                    <br>
			                    <b> Your task is to identify the aliens on the planet by listening to sequences of sounds that they produce.</b><br> 
			                    <br>
			                    The task is segmented into ${params.n_blocs_per_section[bloc_params.section] - 1} block(s) of ~ 6 minutes. Do not hesitate to take small breaks between each block. <br> 
			                    You can earn up to &#163 ${bloc_params.bonus_per_bloc}</b> bonus per block, depending on your performance. <br>
			                    Click on the planet to read further instructions and start the first block ! Good luck !
			                    </p>`
	bloc_params.img_instructions = params.img_planet_gif
	return params, bloc_params
}

function buildBlocParams_training_audio(params, bloc_params) {

	// Timing parameters
	bloc_params.t_isi = 2000 // Inter-stimulus interval (was 600)
	bloc_params.t_start = 500 // "Loading" screen
	bloc_params.t_feedback = 800 // Feedback 
	bloc_params.t_snd = 500 // Show sound

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

		// Spatial images
		trial.snd_name_0 = params.stim_set_path_snd + params.stim_set_snd + '/' + stim_set_gen + '/' + trial.x0 + trial.y0 + '.wav'
		trial.snd_name_1 = params.stim_set_path_snd + params.stim_set_snd + '/' + stim_set_gen + '/' + trial.x1 + trial.y1 + '.wav'
		trial.snd_name_2 = params.stim_set_path_snd + params.stim_set_snd + '/' + stim_set_gen + '/' + trial.x2 + trial.y2 + '.wav'
		trial.snd_name_3 = params.stim_set_path_snd + params.stim_set_snd + '/' + stim_set_gen + '/' + trial.x3 + trial.y3 + '.wav'
		trial.t_snd = bloc_params.t_snd

		// Generalization trial or not (control presence of feedback)
		trial.generalization = 'False'
		trial.feedback = 'True'

		// Stimulus dimensions
		dims_snd = loadCSV(params.stim_set_path_snd + params.stim_set_snd + '/' + stim_set_gen + '/dimensions.csv')[0]
		trial.dim_x_snd = dims_snd['x']
		trial.dim_y_snd = dims_snd['y']

		// Add stim to array for preloading
		for (snd_name of [trial.snd_name_0, trial.snd_name_1, trial.snd_name_2, trial.snd_name_3]) {
			params.preload_array_snd.push(snd_name)
		}
		params.preload_array_snd = [...new Set(params.preload_array_snd)]
	}

	bloc_params.instructions = `<p align='left'> 
	                            <b>INSTRUCTIONS</b><br>
	                            On planet Zflkd-07, there are 3 types of alien. You will listen to sequences of 4 sounds produced by the aliens. <br>
	                            The 3 different types of aliens produce different sequences of sounds using different rules! <br>
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