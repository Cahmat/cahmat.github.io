function trialMain_unique_sound_visual_mapping(params, bloc_params) {
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
            prompt: `<p style="position:absolute; text-align:center; top:21%; left:39%"> Which image corresponds to the sound?</p>`,
            stimulus: `<img src="${bloc_params.grid_img}" 
                alt="grid_img" style="position:absolute; 
                left:${bloc_params.grid_img_position.left}px; 
                top:${bloc_params.grid_img_position.top}px;
                width:${bloc_params.grid_img_size}px;
                height:${bloc_params.grid_img_size}px"></img>`,
            button_html: function() {
                html_strings = []
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        html_string = `<button class="jspsych-btn" 
                            style="position:absolute; 
                                left:${bloc_params.imgs[i*params.size_dimensions+j].left}px; 
                                top:${bloc_params.imgs[i*params.size_dimensions+j].top}px; 
                                width:${bloc_params.img_size}px; 
                                height:${bloc_params.img_size}px;
                                padding: 1px 1px;">
                            <img src="%choice%" style="width:${bloc_params.img_size}px; height:${bloc_params.img_size}px" />
                            </button>`
                        html_strings.push(html_string)
                    }
                }
                return html_strings
            }, 
            choices: function() {
                imgs = []
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        imgs.push(jsPsych.timelineVariable('list_imgs')[i*params.size_dimensions+j])
                    }
                }
                return imgs
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
                dim_x_img: jsPsych.timelineVariable('dim_x_img'),
                dim_y_img: jsPsych.timelineVariable('dim_y_img'),
                feedback: jsPsych.timelineVariable('feedback'),
                correct_response: jsPsych.timelineVariable('correct_response'),
                x0: jsPsych.timelineVariable('x'),
                y0: jsPsych.timelineVariable('y'),
            },
            on_finish: function(data) {
                // Score the response as correct or incorrect
                data.response_img = jsPsych.timelineVariable('list_imgs')[data.response]
                data.response_x = data.response_img[data.response_img.length-6]
                data.response_y = data.response_img[data.response_img.length-5]
                data.response_xy = data.response_x + data.response_y
                data.response_accuracy = data.response_img == jsPsych.timelineVariable('correct_response')
                data.correct_response_location = list_imgs.findIndex(element => element == jsPsych.timelineVariable('correct_response'))
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
                html_strings = []
                let correct_response = jsPsych.data.get().last(1).values()[0].correct_response
                let last_response_img = jsPsych.data.get().last(1).values()[0].response_img

                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        if (jsPsych.timelineVariable('list_imgs')[i*params.size_dimensions+j] == jsPsych.timelineVariable('correct_response')) {
                            background_color = 'green'
                        } else if (jsPsych.timelineVariable('list_imgs')[i*params.size_dimensions+j] == last_response_img) {
                            background_color = 'red'
                        } else {
                            background_color = 'auto'
                        }
                        html_string = `<button class="jspsych-btn" 
                            style="position:absolute; 
                                left:${bloc_params.imgs[i*params.size_dimensions+j].left}px; 
                                top:${bloc_params.imgs[i*params.size_dimensions+j].top}px; 
                                width:${bloc_params.img_size}px; 
                                height:${bloc_params.img_size}px;
                                padding: 1px 1px;
                                background-color:${background_color}">
                            <img src="%choice%" style="width:${bloc_params.img_size}px; height:${bloc_params.img_size}px" />
                            </button>`
                        html_strings.push(html_string)
                    }
                }
                return html_strings
            },
            choices: function() {
                imgs = []
                for (i = 0; i < params.size_dimensions; i++) {
                    for (j = 0; j < params.size_dimensions; j++) {
                        imgs.push(jsPsych.timelineVariable('list_imgs')[i*params.size_dimensions+j])
                    }
                }
                return imgs
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

function trialMains_unique_sound_visual_mapping(params, bloc_params) {
    let bloc = {
        timeline: trialMain_unique_sound_visual_mapping(params, bloc_params),
        timeline_variables: bloc_params.trials,
        sample: {
            type: 'fixed-repetitions',
            size: 1,
        }
    }
    return bloc
}

