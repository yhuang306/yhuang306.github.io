function submit() {
    let remind_type = document.getElementById("remind_type").value;
    let appt_type = document.getElementById("appt_type").value;

    if (remind_type === 'appt_remind'){
        if (appt_type === 'lab')
            window.location.href = '../templates/lab.html';
        else if (appt_type === 'f/u')
            window.location.href = '../templates/followup.html';
        else if (appt_type === 'shingrix')
            window.location.href = '../templates/shingrix.html';
        else
            window.location.href = '../templates/labAndShingrix.html';
    }

    else if (remind_type === 'report'){
        window.location.href = '../templates/report.html';
    }
    else{
        window.location.href = "result.html";
    }
    
} 
