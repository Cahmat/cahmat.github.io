function returnExperimentCurriculum(task_version, day = '') {

    exp_curriculums = {

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 1A ////////////////
        ///////////////////////////////////////////////

        'exp1a': [
            // Training audio
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_audio_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_audio',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_audio',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_audio',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_audio',
                'n_trials': 30,
                'section': 1,
            },
            // Generalization audio
            {
                'bloc_type': 'training + generalization_audio_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_audio',
                'n_trials': 30, 
                'section': 2,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 3
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 1B ////////////////
        ///////////////////////////////////////////////

        'exp1b': [
            // Training visual
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_visual_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 1,
            },
            // Generalization visual
            {
                'bloc_type': 'training + generalization_visual_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_visual',
                'n_trials': 30, 
                'section': 2,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 3
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 1C ////////////////
        ///////////////////////////////////////////////

        'exp1c': [
            // Training spatial
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_spatial_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            },
            // Generalization spatial
            {
                'bloc_type': 'training + generalization_spatial_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            }, {
                'bloc_type': 'training + generalization_spatial',
                'n_trials': 30, 
                'section': 2,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 3
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 2A ////////////////
        ///////////////////////////////////////////////

        'exp2a_day1': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_spatial_rotation_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 1,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 5,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp2a_day2': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'training_spatial_rotation_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 10,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 11,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on audio + space
            {
                'bloc_type': 'training_audio_spatial_rotation_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_spatial_rotation',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_spatial_rotation',
                'n_trials': 30,
                'section': 14,
            },
            // Audio-spatial mapping 
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on audio
            {
                'bloc_type': 'training_audio_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Audio-spatial mapping 
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on audio
            {
                'bloc_type': 'training + generalization_audio_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 2B ////////////////
        ///////////////////////////////////////////////

        'exp2b_day1': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_spatial_rotation_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 1,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 5,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp2b_day2': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'training_spatial_rotation_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial_rotation',
                'n_trials': 30,
                'section': 10,
            },
            // Visuo-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48,
                'section': 11,
            },
            // Visuo-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Visuo-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on visual + space
            {
                'bloc_type': 'training_visual_spatial_rotation_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_visual_spatial_rotation',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_visual_spatial_rotation',
                'n_trials': 30,
                'section': 14,
            },
            // Visual-spatial mapping 
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on visual
            {
                'bloc_type': 'training_visual_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Visual-spatial mapping 
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on visual
            {
                'bloc_type': 'training + generalization_visual_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 2C ////////////////
        ///////////////////////////////////////////////

        'exp2c_day1': [
            // Visual training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_visual_rotation_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 1,
            },
            // Audio-visual mapping x
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Audio-visual mapping y
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Audio-visual mapping
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Audio-visual mapping x
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_x',
                'n_trials': 48,
                'section': 5,
            },
            // Audio-visual mapping y
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Audio-visual mapping
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp2c_day2': [
            // Visual training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'training_visual_rotation_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 10,
            },
            // Audio-visual mapping x
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_x',
                'n_trials': 48, 
                'section': 11,
            },
            // Audio-visual mapping y
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Audio-visual mapping
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on audio + visual
            {
                'bloc_type': 'training_audio_visual_rotation_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_visual_rotation',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_visual_rotation',
                'n_trials': 30,
                'section': 14,
            },
            // Audio-visual mapping 
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on visual
            {
                'bloc_type': 'training_audio_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Audio-visual mapping 
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on audio
            {
                'bloc_type': 'training + generalization_audio_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 3A ////////////////
        ///////////////////////////////////////////////

        'exp3a_day1': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_spatial_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 5,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp3a_day2': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'training_spatial_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 10,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 11,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on audio + space
            {
                'bloc_type': 'training_audio_spatial_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_spatial',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_spatial',
                'n_trials': 30,
                'section': 14,
            },
            // Audio-spatial mapping 
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on audio
            {
                'bloc_type': 'training_audio_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Audio-spatial mapping 
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on audio
            {
                'bloc_type': 'training + generalization_audio_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 3B ////////////////
        ///////////////////////////////////////////////

        'exp3b_day1': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_spatial_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 1,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 5,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp3b_day2': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'training_spatial_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'training_spatial',
                'n_trials': 30,
                'section': 10,
            },
            // Visuo-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48,
                'section': 11,
            },
            // Visuo-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Visuo-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on visual + space
            {
                'bloc_type': 'training_visual_spatial_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_visual_spatial',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_visual_spatial',
                'n_trials': 30,
                'section': 14,
            },
            // Visual-spatial mapping 
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on visual
            {
                'bloc_type': 'training_visual_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Visual-spatial mapping 
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on visual
            {
                'bloc_type': 'training + generalization_visual_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],

        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 3C ////////////////
        ///////////////////////////////////////////////

        'exp3c_day1': [
            // Visual training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'training_visual_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 1,
            },
            // Audio-visual mapping x
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Audio-visual mapping y
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Audio-visual mapping
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Audio-visual mapping x
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_x',
                'n_trials': 48,
                'section': 5,
            },
            // Audio-visual mapping y
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Audio-visual mapping
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp3c_day2': [
            // Visual training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'training_visual_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'training_visual',
                'n_trials': 30,
                'section': 10,
            },
            // Audio-visual mapping x
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_x',
                'n_trials': 48, 
                'section': 11,
            },
            // Audio-visual mapping y
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_sound_visual_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Audio-visual mapping
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on audio + visual
            {
                'bloc_type': 'training_audio_visual_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_visual',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_visual',
                'n_trials': 30,
                'section': 14,
            },
            // Audio-visual mapping 
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on visual
            {
                'bloc_type': 'training_audio_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Audio-visual mapping 
            {
                'bloc_type': 'unique_sound_visual_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_sound_visual_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on audio
            {
                'bloc_type': 'training + generalization_audio_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],


        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 4A ////////////////
        ///////////////////////////////////////////////

        'exp4a_day1': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'counting_spatial_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 1,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 5,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp4a_day2': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'counting_spatial_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 10,
            },
            // Audio-spatial mapping x
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_sound_space_mapping_x',
                'n_trials': 48, 
                'section': 11,
            },
            // Audio-spatial mapping y
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_sound_space_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Audio-spatial mapping
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on audio
            {
                'bloc_type': 'training_audio_rotation_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 14,
            },
            // Audio-spatial mapping 
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on audio
            {
                'bloc_type': 'training_audio_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_audio_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Audio-spatial mapping 
            {
                'bloc_type': 'unique_sound_space_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_sound_space_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on audio
            {
                'bloc_type': 'training + generalization_audio_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_audio_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],


        ///////////////////////////////////////////////
        //////////////// EXPERIMENT 4B ////////////////
        ///////////////////////////////////////////////

        'exp4b_day1': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 0,
            }, {
                'bloc_type': 'counting_spatial_instructions',
                'n_trials': 0,
                'section': 1,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 1,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 1,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 2,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 2,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 3,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 3,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 4,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 4,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 5,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 5,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 6,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 6,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 7,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 7,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 7,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 8
            }
        ],

        'exp4b_day2': [
            // Spatial training
            {
                'bloc_type': 'start',
                'n_trials': 0,
                'section': 9,
            }, {
                'bloc_type': 'counting_spatial_instructions',
                'n_trials': 0,
                'section': 10,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 10,
            }, {
                'bloc_type': 'counting_spatial',
                'n_trials': 30,
                'section': 10,
            },
            // Visual-spatial mapping x
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 11,
            }, {
                'bloc_type': 'unique_visual_space_mapping_x',
                'n_trials': 48, 
                'section': 11,
            },
            // Visual-spatial mapping y
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 12,
            }, {
                'bloc_type': 'unique_visual_space_mapping_y',
                'n_trials': 48,
                'section': 12,
            },
            // Visual-spatial mapping
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 13,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 13,
            },
            // Training on visual
            {
                'bloc_type': 'training_visual_rotation_instructions',
                'n_trials': 0,
                'section': 14,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 14,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 14,
            },
            // Visual-spatial mapping 
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 15,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 15,
            },
            // Training on visual
            {
                'bloc_type': 'training_visual_rotation_instructions',
                'n_trials': 0,
                'section': 16,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 16,
            }, {
                'bloc_type': 'training_visual_rotation',
                'n_trials': 30,
                'section': 16,
            },
            // Visual-spatial mapping 
            {
                'bloc_type': 'unique_visual_space_mapping_instructions',
                'n_trials': 0,
                'section': 17,
            }, {
                'bloc_type': 'unique_visual_space_mapping',
                'n_trials': 48,
                'section': 17,
            },
            // Generalization on visual
            {
                'bloc_type': 'training + generalization_visual_rotation_instructions',
                'n_trials': 0,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            }, {
                'bloc_type': 'training + generalization_visual_rotation',
                'n_trials': 30,
                'section': 18,
            },
            // End experiment and review results
            {
                'bloc_type': 'end',
                'n_trials': 0,
                'section': 19
            }
        ],

    }

    if (day != null) {
        return exp_curriculums[task_version + '_day' + day]
    } else {
        return exp_curriculums[task_version]
    }
}
