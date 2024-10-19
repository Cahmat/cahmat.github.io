function trialMain_audio_spatial(params, bloc_params) {
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

        // First spatial cue
        {
            type: jsPsychImageKeyboardResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('spc_name_0'),
            choices: [],
            trial_duration: jsPsych.timelineVariable('t_spc'),
            post_trial_gap: jsPsych.timelineVariable('t_spc_gap'),
        },

        // Second spatial cue
        {
            type: jsPsychImageKeyboardResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('spc_name_1'),
            choices: [],
            trial_duration: jsPsych.timelineVariable('t_spc'),
            post_trial_gap: jsPsych.timelineVariable('t_spc_gap'),
        },

        // Third spatial cue
        {
            type: jsPsychImageKeyboardResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('spc_name_2'),
            choices: [],
            trial_duration: jsPsych.timelineVariable('t_spc'),
            post_trial_gap: jsPsych.timelineVariable('t_spc_gap'),
        },

        // Fourth spatial cue
        {
            type: jsPsychImageKeyboardResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('spc_name_3'),
            choices: [],
            trial_duration: jsPsych.timelineVariable('t_spc'),
            post_trial_gap: jsPsych.timelineVariable('t_spc_gap'),
        },

        // First sound
        {
            type: jsPsychAudioButtonResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('snd_name_0'),
            choices: [],
            button_html: '<button class="jspsych-btn" style="background-color:black; border-color:black"><img src="%choice%" /></button>',
            trial_duration: bloc_params.t_snd,
            post_trial_gap: bloc_params.t_isi - bloc_params.t_snd,
        },

        // Second sound
        {
            type: jsPsychAudioButtonResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('snd_name_1'),
            choices: [],
            button_html: '<button class="jspsych-btn" style="background-color:black; border-color:black"><img src="%choice%" /></button>',
            trial_duration: bloc_params.t_snd,
            post_trial_gap: bloc_params.t_isi - bloc_params.t_snd,
        },

        // Third sound
        {
            type: jsPsychAudioButtonResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('snd_name_2'),
            choices: [],
            button_html: '<button class="jspsych-btn" style="background-color:black; border-color:black"><img src="%choice%" /></button>',
            trial_duration: bloc_params.t_snd,
            post_trial_gap: bloc_params.t_isi - bloc_params.t_snd,
        },

        // Fourth sound
        {
            type: jsPsychAudioButtonResponse,
            response_ends_trial: false,
            stimulus: jsPsych.timelineVariable('snd_name_3'),
            choices: [],
            button_html: '<button class="jspsych-btn" style="background-color:black; border-color:black"><img src="%choice%" /></button>',
            trial_duration: bloc_params.t_snd,
            post_trial_gap: bloc_params.t_isi - bloc_params.t_snd,
        },

        // Response
        {
            type: jsPsychHtmlButtonResponse,
            prompt: '<p>Which alien produced the sequence?</p>',
            stimulus: '',
            button_html: '<button class="jspsych-btn"><img src="%choice%" /></button>',
            choices: params.buttons,
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
                generalization: jsPsych.timelineVariable('generalization'),
                feedback: jsPsych.timelineVariable('feedback'),
                spc_before_snd: jsPsych.timelineVariable('spc_before_snd'),
                trans_x: jsPsych.timelineVariable('trans_x'),
                trans_y: jsPsych.timelineVariable('trans_x'),
                rot_0: jsPsych.timelineVariable('rot_0'),
                rot_pi: jsPsych.timelineVariable('rot_pi'),
                rot_pi_2: jsPsych.timelineVariable('rot_pi_2'),
                rot_minus_pi_2: jsPsych.timelineVariable('rot_minus_pi_2'),
                mirror_x: jsPsych.timelineVariable('mirror_x'),
                mirror_y: jsPsych.timelineVariable('mirror_y'),
                extra: jsPsych.timelineVariable('extra'),
                correct_sequence_category: jsPsych.timelineVariable('category'),
                correct_response: jsPsych.timelineVariable('correct_response'),
                response_mapping_0: params.response_mapping[0],
                response_mapping_1: params.response_mapping[1],
                response_mapping_2: params.response_mapping[2],
                x0: jsPsych.timelineVariable('x0'),
                y0: jsPsych.timelineVariable('y0'),
                x1: jsPsych.timelineVariable('x1'),
                y1: jsPsych.timelineVariable('y1'),
                x2: jsPsych.timelineVariable('x2'),
                y2: jsPsych.timelineVariable('y2'),
                x3: jsPsych.timelineVariable('x3'),
                y3: jsPsych.timelineVariable('y3')
            },
            on_finish: function(data) {
                // Score the response as correct or incorrect
                data.response_category = params.response_mapping[data.response]
                data.response_accuracy = data.response_category == jsPsych.timelineVariable('category')
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
                last_trial_feedback = jsPsych.data.get().last(1).values()[0].feedback
                if (last_trial_feedback == 'False') {
                    return `<p><b> NO FEEDBACK </b></p>`
                } else {
                    if (last_trial_correct) {
                        return `<p style="color:green"><b>CORRECT ! </b></p>`;
                    } else {
                        return `<p style="color:red"><b>WRONG</b></p>`;
                    }
                }
            },
            button_html: function() {
                let last_trial_correct = jsPsych.data.get().last(1).values()[0].response_accuracy
                let last_trial_feedback = jsPsych.data.get().last(1).values()[0].feedback
                let last_response = jsPsych.data.get().last(1).values()[0].response
                let correct_response = jsPsych.data.get().last(1).values()[0].correct_response
                let html_button_strings = []
                if (last_trial_feedback == 'False') {
                    for (const [i, choice] of params.buttons.entries()) {
                        html_button_strings.push('<button class="jspsych-btn""><img src="%choice%" /></button>')
                    }
                } else {
                    for (const [i, choice] of params.buttons.entries()) {
                        if (i == correct_response) {
                            html_button_strings.push('<button class="jspsych-btn" style="background-color:green"><img src="%choice%" /></button>')
                        } else if (i == last_response) {
                            html_button_strings.push('<button class="jspsych-btn" style="background-color:red"><img src="%choice%" /></button>')
                        } else {
                            html_button_strings.push('<button class="jspsych-btn""><img src="%choice%" /></button>')
                        }
                    }
                }
                return html_button_strings
            },
            choices: params.buttons,
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

function trialMains_audio_spatial(params, bloc_params) {
    let bloc = {
        timeline: trialMain_audio_spatial(params, bloc_params),
        timeline_variables: bloc_params.trials,
        sample: {
            type: 'fixed-repetitions',
            size: 1,
        }
    }
    return bloc
}

