function trialMain(params) {
    let timeline = [
        // Preload stimuli
        {
            type: jsPsychPreload,
            images: jsPsych.timelineVariable('img')
        },

        // Prepare screen
        {
            type: jsPsychHtmlKeyboardResponse,
            response_ends_trial: false,
            stimulus: '+',
            choices: [],
            prompt: 'Wait ...',
            trial_duration: params.t_start,
        },

        // Present image and record response
        {
            type: jsPsychImageKeyboardResponse,
            response_ends_trial: true,
            stimulus: jsPsych.timelineVariable('img'),
            choices: params.response_keys,
            stimulus_width: params.img_width,
            data: {
                // Put all variables to save here
                id: params.id,
                sex: participant_gender,
                age: participant_age,
                turker: participant_turker,
                task: params.task,
                time: new Date().getTime(),
                trial_response: true,
                img: jsPsych.timelineVariable('img'),
                img_category: jsPsych.timelineVariable('img_category')
            },
            on_finish: function(data) {
                data.response_category = params.response_keys_mapping[data.response]
                data.correct = data.response_category == jsPsych.timelineVariable('img_category')
            }
        },

        // Present feedback
        {
            type: jsPsychHtmlKeyboardResponse,
            response_ends_trial: true,
            prompt: 'Press SPACE to continue ...',
            stimulus: function() {
                last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
                if (last_trial_correct) {
                    return `<p style="color:green"><b>CORRECT! </b></p>`;
                } else {
                    return `<p style="color:red"><b>WRONG</b></p>`;
                }
            },
            choices: [' '],
            on_finish: function() {
                // At the end of each trial, update the progress bar
                // based on the current value and the proportion to update for each trial
                var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
                jsPsych.setProgressBar(curr_progress_bar_value + (1 / (params.n_trials)));
            },
        }
    ]
    return timeline
}

function blocMain(params) {
    let bloc = {
        timeline: trialMain(params),
        timeline_variables: params.imgs,
        sample: {
            type: 'with-replacement',
            size: params.n_trials,
        }
    }
    return bloc
}
