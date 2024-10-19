function randomizedSeqsAcrossBlocType(seq_type_ratios, seqs, n_trials, n_blocs, n_categories, size_dimensions) {

	// Add sequences to a big array
	all_seqs = []

	// Get number of trials per blocs
	n_trials_per_bloc = Math.round(n_trials / n_blocs)

	// Get all training seqs
	all_seqs_training = []
	training_ratio = 0
	for (const seq_type in seq_type_ratios['training']) {

		// Get the number of trials of each category
		ratio = seq_type_ratios['training'][seq_type]
		training_ratio += ratio
		n_trials_per_category = Math.max(Math.round(ratio * n_trials / n_categories), 1)
		n_shifts = (size_dimensions - 1) ** 2

		// Add "n_trials_per_category" of each category
		for (var i = 0; i < n_categories; i++) {
			for (var j = 0; j < n_trials_per_category; j++) {
				seq = jsPsych.randomization.sampleWithoutReplacement(
					seqs[seq_type].slice(i * n_shifts, (i + 1) * n_shifts),
					1
				)
				seq[0].generalization = 'False'
				all_seqs_training.push(seq)
			}
		}
	}

	// Get all generalization seqs
	all_seqs_generalization = []
	generalization_ratio = 0
	for (const seq_type in seq_type_ratios['generalization']) {

		// Get the number of trials of each category
		ratio = seq_type_ratios['generalization'][seq_type]
		generalization_ratio += ratio
		n_trials_per_category = Math.max(Math.round(ratio * n_trials / n_categories), 1)
		n_shifts = (size_dimensions - 1) ** 2

		// Add "n_trials_per_category" of each category
		for (var i = 0; i < n_categories; i++) {
			for (var j = 0; j < n_trials_per_category; j++) {
				seq = jsPsych.randomization.sampleWithoutReplacement(
					seqs[seq_type].slice(i * n_shifts, (i + 1) * n_shifts),
					1
				)
				seq[0].generalization = 'True'
				all_seqs_generalization.push(seq)
			}
		}
	}

	// Shuffle the arrays
	all_seqs_training = all_seqs_training.flat()
	all_seqs_training = jsPsych.randomization.repeat(all_seqs_training, 1)
	all_seqs_generalization = all_seqs_generalization.flat()
	all_seqs_generalization = jsPsych.randomization.repeat(all_seqs_generalization, 1)

	// Add arrays in blocs
	for (i = 0; i < n_blocs; i++){
		bloc_seqs_training = all_seqs_training.splice(0, Math.round(training_ratio * n_trials_per_bloc))
		bloc_seqs_generalization = all_seqs_generalization.splice(0, Math.round(generalization_ratio * n_trials_per_bloc))
		bloc_seqs = bloc_seqs_training.concat(bloc_seqs_generalization)
		bloc_seqs = jsPsych.randomization.repeat(bloc_seqs, 1)
		all_seqs.push(bloc_seqs)
	}

	// Return 
	return all_seqs.flat()
}

function buildBlocParams(params, bloc_params) {

	// All bloc types are different 
	// Check the bloc type and populate bloc_params accordingly

	// Start
	if (bloc_params.bloc_type == 'start') {
		return params, bloc_params
	}

	// Counting spatial : instructions
	if (bloc_params.bloc_type == 'counting_spatial_instructions') {
		return buildBlocParams_counting_spatial_instructions(params, bloc_params)
	}

	// Counting spatial
	if (bloc_params.bloc_type == 'counting_spatial') {
		return buildBlocParams_counting_spatial(params, bloc_params)
	}

	// Unique sound to space mapping : instructions
	if (bloc_params.bloc_type == 'unique_sound_space_mapping_instructions') {
		return buildBlocParams_unique_sound_space_mapping_instructions(params, bloc_params)
	}

	// Unique sound to space mapping x
	if (bloc_params.bloc_type == 'unique_sound_space_mapping_x') {
		return buildBlocParams_unique_sound_space_mapping_x(params, bloc_params)
	}

	// Unique sound to space mapping y
	if (bloc_params.bloc_type == 'unique_sound_space_mapping_y') {
		return buildBlocParams_unique_sound_space_mapping_y(params, bloc_params)
	}

	// Unique sound to space mapping
	if (bloc_params.bloc_type == 'unique_sound_space_mapping') {
		return buildBlocParams_unique_sound_space_mapping(params, bloc_params)
	}


	// Unique images to space mapping : instructions
	if (bloc_params.bloc_type == 'unique_visual_space_mapping_instructions') {
		return buildBlocParams_unique_visual_space_mapping_instructions(params, bloc_params)
	}

	// Unique image to space mapping x
	if (bloc_params.bloc_type == 'unique_visual_space_mapping_x') {
		return buildBlocParams_unique_visual_space_mapping_x(params, bloc_params)
	}

	// Unique image to space mapping y
	if (bloc_params.bloc_type == 'unique_visual_space_mapping_y') {
		return buildBlocParams_unique_visual_space_mapping_y(params, bloc_params)
	}

	// Unique image to space mapping
	if (bloc_params.bloc_type == 'unique_visual_space_mapping') {
		return buildBlocParams_unique_visual_space_mapping(params, bloc_params)
	}


	// Unique sound to visual mapping : instructions
	if (bloc_params.bloc_type == 'unique_sound_visual_mapping_instructions') {
		return buildBlocParams_unique_sound_visual_mapping_instructions(params, bloc_params)
	}

	// Unique sound to visual mapping x
	if (bloc_params.bloc_type == 'unique_sound_visual_mapping_x') {
		return buildBlocParams_unique_sound_visual_mapping_x(params, bloc_params)
	}

	// Unique sound to visual mapping y
	if (bloc_params.bloc_type == 'unique_sound_visual_mapping_y') {
		return buildBlocParams_unique_sound_visual_mapping_y(params, bloc_params)
	}

	// Unique sound to visual mapping
	if (bloc_params.bloc_type == 'unique_sound_visual_mapping') {
		return buildBlocParams_unique_sound_visual_mapping(params, bloc_params)
	}

	// Training spatial with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_spatial_rotation_instructions') {
		return buildBlocParams_training_spatial_instructions(params, bloc_params)
	}

	// Training spatial with rotation during training
	if (bloc_params.bloc_type == 'training_spatial_rotation') {
		return buildBlocParams_training_spatial(params, bloc_params)
	}

	// Generalization spatial with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_spatial_rotation_instructions') {
		return buildBlocParams_training_generalization_spatial_instructions(params, bloc_params)
	}

	// Generalization spatial with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_spatial_rotation') {
		return buildBlocParams_training_generalization_spatial(params, bloc_params)
	}


	// Training visual with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_visual_rotation_instructions') {
		return buildBlocParams_training_visual_instructions(params, bloc_params)
	}

	// Training visual with rotation during training
	if (bloc_params.bloc_type == 'training_visual_rotation') {
		return buildBlocParams_training_visual(params, bloc_params)
	}

	// Generalization visual with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_visual_rotation_instructions') {
		return buildBlocParams_training_generalization_visual_instructions(params, bloc_params)
	}

	// Generalization visual with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_visual_rotation') {
		return buildBlocParams_training_generalization_visual(params, bloc_params)
	}


	// Training audio with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_audio_rotation_instructions') {
		return buildBlocParams_training_audio_instructions(params, bloc_params)
	}

	// Training audio with rotation during training
	if (bloc_params.bloc_type == 'training_audio_rotation') {
		return buildBlocParams_training_audio(params, bloc_params)
	}

	// Generalization audio with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_audio_rotation_instructions') {
		return buildBlocParams_training_generalization_audio_instructions(params, bloc_params)
	}

	// Generalization audio with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_audio_rotation') {
		return buildBlocParams_training_generalization_audio(params, bloc_params)
	}


	// Training audio + spatial with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_audio_spatial_rotation_instructions') {
		return buildBlocParams_training_audio_spatial_instructions(params, bloc_params)
	}

	// Training audio + spatial with rotation during training
	if (bloc_params.bloc_type == 'training_audio_spatial_rotation') {
		return buildBlocParams_training_audio_spatial(params, bloc_params)
	}

	// Generalization audio + spatial with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_audio_spatial_rotation_instructions') {
		return buildBlocParams_training_generalization_audio_spatial_instructions(params, bloc_params)
	}

	// Generalization audio + spatial with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_audio_spatial_rotation') {
		return buildBlocParams_training_generalization_audio_spatial(params, bloc_params)
	}


	// Training visual + spatial with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_visual_spatial_rotation_instructions') {
		return buildBlocParams_training_visual_spatial_instructions(params, bloc_params)
	}

	// Training visual + spatial with rotation during training
	if (bloc_params.bloc_type == 'training_visual_spatial_rotation') {
		return buildBlocParams_training_visual_spatial(params, bloc_params)
	}

	// Generalization visual + spatial with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_visual_spatial_rotation_instructions') {
		return buildBlocParams_training_generalization_visual_spatial_instructions(params, bloc_params)
	}

	// Generalization visual + spatial with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_visual_spatial_rotation') {
		return buildBlocParams_training_generalization_visual_spatial(params, bloc_params)
	}


	// Training audio + visual with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_audio_visual_rotation_instructions') {
		return buildBlocParams_training_audio_visual_instructions(params, bloc_params)
	}

	// Training audio + visual with rotation during training
	if (bloc_params.bloc_type == 'training_audio_visual_rotation') {
		return buildBlocParams_training_audio_visual(params, bloc_params)
	}

	// Generalization audio + visual with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_audio_visual_rotation_instructions') {
		return buildBlocParams_training_generalization_audio_visual_instructions(params, bloc_params)
	}

	// Generalization audio + visual with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_audio_visual_rotation') {
		return buildBlocParams_training_generalization_audio_visual(params, bloc_params)
	}



	// Training spatial with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_spatial_instructions') {
		return buildBlocParams_training_spatial_instructions(params, bloc_params)
	}

	// Training spatial with rotation during training
	if (bloc_params.bloc_type == 'training_spatial') {
		return buildBlocParams_training_spatial(params, bloc_params)
	}

	// Generalization spatial with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_spatial_instructions') {
		return buildBlocParams_training_generalization_spatial_instructions(params, bloc_params)
	}

	// Generalization spatial with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_spatial') {
		return buildBlocParams_training_generalization_spatial(params, bloc_params)
	}


	// Training visual with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_visual_instructions') {
		return buildBlocParams_training_visual_instructions(params, bloc_params)
	}

	// Training visual with rotation during training
	if (bloc_params.bloc_type == 'training_visual') {
		return buildBlocParams_training_visual(params, bloc_params)
	}

	// Generalization visual with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_visual_instructions') {
		return buildBlocParams_training_generalization_visual_instructions(params, bloc_params)
	}

	// Generalization visual with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_visual') {
		return buildBlocParams_training_generalization_visual(params, bloc_params)
	}


	// Training audio with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_audio_instructions') {
		return buildBlocParams_training_audio_instructions(params, bloc_params)
	}

	// Training audio with rotation during training
	if (bloc_params.bloc_type == 'training_audio') {
		return buildBlocParams_training_audio(params, bloc_params)
	}

	// Generalization audio with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_audio_instructions') {
		return buildBlocParams_training_generalization_audio_instructions(params, bloc_params)
	}

	// Generalization audio with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_audio') {
		return buildBlocParams_training_generalization_audio(params, bloc_params)
	}


	// Training audio + spatial with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_audio_spatial_instructions') {
		return buildBlocParams_training_audio_spatial_instructions(params, bloc_params)
	}

	// Training audio + spatial with rotation during training
	if (bloc_params.bloc_type == 'training_audio_spatial') {
		return buildBlocParams_training_audio_spatial(params, bloc_params)
	}

	// Generalization audio + spatial with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_audio_spatial_instructions') {
		return buildBlocParams_training_generalization_audio_spatial_instructions(params, bloc_params)
	}

	// Generalization audio + spatial with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_audio_spatial') {
		return buildBlocParams_training_generalization_audio_spatial(params, bloc_params)
	}


	// Training visual + spatial with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_visual_spatial_instructions') {
		return buildBlocParams_training_visual_spatial_instructions(params, bloc_params)
	}

	// Training visual + spatial with rotation during training
	if (bloc_params.bloc_type == 'training_visual_spatial') {
		return buildBlocParams_training_visual_spatial(params, bloc_params)
	}

	// Generalization visual + spatial with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_visual_spatial_instructions') {
		return buildBlocParams_training_generalization_visual_spatial_instructions(params, bloc_params)
	}

	// Generalization visual + spatial with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_visual_spatial') {
		return buildBlocParams_training_generalization_visual_spatial(params, bloc_params)
	}


	// Training audio + visual with rotation during training : instructions
	if (bloc_params.bloc_type == 'training_audio_visual_instructions') {
		return buildBlocParams_training_audio_visual_instructions(params, bloc_params)
	}

	// Training audio + visual with rotation during training
	if (bloc_params.bloc_type == 'training_audio_visual') {
		return buildBlocParams_training_audio_visual(params, bloc_params)
	}

	// Generalization audio + visual with rotation during training trials : instructions
	if (bloc_params.bloc_type == 'training + generalization_audio_visual_instructions') {
		return buildBlocParams_training_generalization_audio_visual_instructions(params, bloc_params)
	}

	// Generalization audio + visual with rotation during training trials
	if (bloc_params.bloc_type == 'training + generalization_audio_visual') {
		return buildBlocParams_training_generalization_audio_visual(params, bloc_params)
	}


	// End
	if (bloc_params.bloc_type == 'end') {
		return params, bloc_params
	}

}