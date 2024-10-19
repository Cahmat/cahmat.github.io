function trialMain_unique_sound_space_mapping(params, bloc_params) {
    let timeline = [
        // Preload stimuli
        {
            type: jsPsychPreload,
            audio: [
                params.sound_correct,
                params.sound_wrong
            ],
            images: params.buttons,
        },

        // Loading screen
        {
            type: jsPsychHtmlKeyboardResponse,
            response_ends_trial: false,
            stimulus: '',
            choices: [],
            prompt: 'Loading ...',
            trial_duration: bloc_params.t_start,
        },

        // Present sound
        {
            type: jsPsychAudioButtonResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('snd'),
            choices: [],
            button_html: '<button class="jspsych-btn" style="background-color:black; border-color:black"><img src="%choice%" /></button>',
            trial_duration: bloc_params.t_snd,
            post_trial_gap: bloc_params.t_isi - bloc_params.t_snd,
        },

        // Response
        {
            type: jsPsychHtmlButtonResponse,
            prompt: `<p style="position:absolute; text-align:center; top:21%; left:39%"> Which star position corresponds to the sound?</p>`,
            stimulus: `<img src="${bloc_params.grid_spc}" 
                alt="grid_spc" style="position:absolute; 
                left:${bloc_params.grid_spc_position.left}px; 
                top:${bloc_params.grid_spc_position.top}px;
                width:${bloc_params.grid_spc_size}px;
                height:${bloc_params.grid_spc_size}px"></img>`,
            button_html: function() {
                html_star_strings = []
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        html_star_string = `<button class="jspsych-btn" 
                            style="position:absolute; 
                                left:${bloc_params.star_spc_positions[j*params.size_dimensions+i].left}px; 
                                top:${bloc_params.star_spc_positions[j*params.size_dimensions+i].top}px; 
                                width:${bloc_params.star_spc_size}px; 
                                height:${bloc_params.star_spc_size}px">
                            <img src="%choice%" />
                            </button>`
                        html_star_strings.push(html_star_string)
                    }
                }
                return html_star_strings
            }, 
            choices: function() {
                stars = []
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        stars.push(bloc_params.star_spc)
                    }
                }
                return stars
            },
            response_ends_trial: true,
            data: {
                // Put all variables to save here
                id: params.id,
                sex: participant_gender,
                age: participant_age,
                turker: participant_turker,
                sound_system: participant_sound_system,
                task: task_name,
                task_version: task_version,
                bloc_index: bloc_params.bloc_index,
                bloc_type: bloc_params.bloc_type,
                bloc_section: bloc_params.section,
                bloc_n_trials: bloc_params.n_trials,
                time: new Date().getTime(),
                trial_response: true,
                dim_x: jsPsych.timelineVariable('dim_x_snd'),
                dim_y: jsPsych.timelineVariable('dim_y_snd'),
                dim_x_snd: jsPsych.timelineVariable('dim_x_snd'),
                dim_y_snd: jsPsych.timelineVariable('dim_y_snd'),
                dim_x_spc: jsPsych.timelineVariable('dim_x_spc'),
                dim_y_spc: jsPsych.timelineVariable('dim_y_spc'),
                feedback: jsPsych.timelineVariable('feedback'),
                correct_response: jsPsych.timelineVariable('correct_response'),
                x0: jsPsych.timelineVariable('x'),
                y0: jsPsych.timelineVariable('y'),
            },
            on_finish: function(data) {
                // Score the response as correct or incorrect
                data.response_x = data.response % params.size_dimensions
                data.response_y = params.size_dimensions - 1 - Math.floor(data.response / params.size_dimensions)
                data.response_xy = (data.response % params.size_dimensions).toString() + (params.size_dimensions - 1 - Math.floor(data.response / params.size_dimensions)).toString()
                data.response_accuracy = data.response_xy == jsPsych.timelineVariable('correct_response')
            }
        },

        // Feedback
        {
            type: jsPsychAudioButtonResponse,
            trial_duration: bloc_params.t_feedback,
            response_ends_trial: false,
            stimulus: function() {
                last_trial_correct = jsPsych.data.get().last(1).values()[0].response_accuracy
                last_trial_feedback = jsPsych.data.get().last(1).values()[0].feedback
                if (last_trial_feedback == 'False') {
                    return params.sound_silence
                } else {
                    if (last_trial_correct) {
                        return params.sound_correct
                    } else {
                        return params.sound_wrong
                    }
                }
            },
            prompt: function() {
                last_trial_correct = jsPsych.data.get().last(1).values()[0].response_accuracy
                if (last_trial_correct) {
                    return `<p style="position:absolute; text-align:center; top:21%; left:47%; color:green"><b>CORRECT ! </b></p>`;
                } else {
                    return `<p style="position:absolute; text-align:center; top:21%; left:47%; color:red"><b> WRONG </b></p>`;
                } 
            },
            button_html: function() {
                html_star_strings = []
                let last_trial_correct = jsPsych.data.get().last(1).values()[0].response_accuracy
                let last_response = jsPsych.data.get().last(1).values()[0].response_xy
                let correct_response = jsPsych.data.get().last(1).values()[0].correct_response
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        star_xy = j.toString() + (params.size_dimensions - 1 - i).toString()
                        if (star_xy == correct_response) {
                            background_color = 'green'
                        } else if (star_xy == last_response) {
                            background_color = 'red'
                        } else {
                            background_color = 'auto'
                        }
                        html_star_string = `<button class="jspsych-btn" 
                            style="position:absolute; 
                                left:${bloc_params.star_spc_positions[j*params.size_dimensions+i].left}px; 
                                top:${bloc_params.star_spc_positions[j*params.size_dimensions+i].top}px; 
                                width:${bloc_params.star_spc_size}px; 
                                height:${bloc_params.star_spc_size}px;
                                background-color:${background_color}">
                            <img src="%choice%" />
                            </button>`
                        html_star_strings.push(html_star_string)
                    }
                }
                return html_star_strings
            },
            choices: function() {
                stars = []
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        stars.push(bloc_params.star_spc)
                    }
                }
                return stars
            },
            on_finish: function() {
                // At the end of each trial, update the progress bar
                // based on the current value and the proportion to update for each trial
                var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
                jsPsych.setProgressBar(curr_progress_bar_value + (1 / (params.n_trials_total)));
            },
        }
    ]
    return timeline
}

function trialMains_unique_sound_space_mapping(params, bloc_params) {
    let bloc = {
        timeline: trialMain_unique_sound_space_mapping(params, bloc_params),
        timeline_variables: bloc_params.trials,
        sample: {
            type: 'fixed-repetitions',
            size: 1,
        }
    }
    return bloc
}

