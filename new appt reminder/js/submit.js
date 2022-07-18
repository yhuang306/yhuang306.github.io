function submit() {
    let remind_type = document.getElementById("remind_type").value;
    let appt_type = document.getElementById("appt_type").value;

    if (remind_type === 'appt_remind'){
        if (appt_type === 'lab')
            location.href = '.../templates/lab.html';
        else if (appt_type === 'f/u')
            location.href = '.../templates/followup.html';
        else if (appt_type === 'shingrix')
            location.href = '.../templates/shingrix.html';
        else
            location.href = '.../templates/labAndShingrix.html';
    }

    else if (remind_type === 'report'){
        location.href = '.../templates/report.html';
    }
    
} 
