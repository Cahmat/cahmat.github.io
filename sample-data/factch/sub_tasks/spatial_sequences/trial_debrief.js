function trialDebrief_spatial(params, bloc_params) {
    let bloc = {
        type: jsPsychHtmlButtonResponse,
        choices: function() {
            if (bloc_params.bloc_index == params.n_blocs_total - 2) {
                return ['END EXPERIMENT']
            } else if (bloc_params.bloc_index_in_section < bloc_params.n_blocs_per_section - 1) {
                return ['NEXT BLOC']
            } else {
                return ['NEXT SECTION']
            }
        },
        stimulus: function() {

            let trials = jsPsych.data.get().filter({
                trial_response: true,
                feedback: "True",
                bloc_index: bloc_params.bloc_index
            })
            let correct_trials = trials.filter({
                response_accuracy: true,
                feedback: "True"
            })
            let accuracy = Math.round(correct_trials.count() / trials.count() * 100)

            let bonus = ((accuracy * bloc_params.bonus_per_bloc) / 100).toFixed(2) * 1
            params.total_bonus = params.total_bonus * 1 + bonus
            params.total_bonus = params.total_bonus.toFixed(2)

            let prob_population = ((1 / Math.PI) * Math.atan((accuracy - 50) / 15) + 0.59).toFixed(2) * 100

            let var_text = ``
            if (accuracy < 40) {
                var_text =
                    `<b>It is normal to struggle to learn the sequences. Don't worry, this is a difficult task! <br>
                Continue to pay attention to the sequences, you will eventually understand the regularities.</b>`
            } else {
                if (accuracy < 55) {
                    var_text =
                        `<b>Good, you are starting to learn the sequences and understand the rules. Keep on going, this is a difficult task! <br>
                        Continue to pay attention to the sequences, your performances will surely improve.</b>`
                } else {
                    if (accuracy < 70) {
                        var_text =
                            `<b>Very good, you are already classifying the sequence quite well. Keep on going! <br>
                            Continue to pay attention to the sequences, your performances can still improve!</b>`
                    } else {
                        var_text =
                            `<b>Excellent, your performances are very good! Keep on going! <br>
                            Continue to pay attention to the sequences, you are doing a great job!</b>`
                    }
                }
            }

            if (bloc_params.bloc_index == params.n_blocs_total - 2) {
                return `<p align='left'>
                        <b>INTERIM SUMMARY</b><br> 
                        You responded correctly on <b>${accuracy} %</b> of the trials. <br>
                        You secured a bonus of <b>&#163 ${bonus}</b> in this block. <br> 
                        Your total bonus so far is <b>&#163 ${params.total_bonus}</b>. Congrats!<br>
                        Your performance in this block was better that ${prob_population}% of the participants. <br>
                        <br>
                        Click here to finish the experiment!
                    </p>`
            } else if (bloc_params.bloc_index_in_section < bloc_params.n_blocs_per_section - 1) {
                return `<p align='left'>
                        <b>INTERIM SUMMARY</b><br> 
                        You responded correctly on <b>${accuracy} %</b> of the trials. <br>
                        You secured a bonus of <b>&#163 ${bonus}</b> in this block. <br> 
                        Your total bonus so far is <b>&#163 ${params.total_bonus}</b>. Congrats!<br>
                        Your performance in this block was better that ${prob_population}% of the participants. <br>
                        <br>
                        ${var_text}<br>
                        <br>
                        <b>You can have a short break if you want to.</b><br>
                        Click here to go to the next bloc!
                    </p>`
            } else {
                return `<p align='left'>
                        <b>INTERIM SUMMARY</b><br> 
                        You responded correctly on <b>${accuracy} %</b> of the trials. <br>
                        You secured a bonus of <b>&#163 ${bonus}</b> in this block. <br> 
                        Your total bonus so far is <b>&#163 ${params.total_bonus}</b>. Congrats!<br>
                        Your performance in this block was better that ${prob_population}% of the participants. <br>
                        <br>
                        Click here to go to the next section!
                    </p>`
            }

        },
        on_finish: function(data) {
            data.total_bonus = params.total_bonus
            data.turker = participant_turker
            saveData(params, jsPsych.data.get().filter({
                bloc_index: bloc_params.bloc_index
            }).csv(), temporary = false, resize = false, bloc = true, bloc_index = bloc_params.bloc_index)
            saveData(params, jsPsych.data.get().csv(), temporary = true)
        }
    }
    return bloc
}