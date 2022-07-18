function submit() {
    let remind_type = document.getElementById("remind_type").value;
    let appt_type = document.getElementById("appt_type").value;

    if (remind_type === 'appt_remind'){
        if (appt_type === 'lab')
            location.href = 'yhuang306.github.io/new _appt _reminder/templates/lab.html';
        else if (appt_type === 'f/u')
            location.href = 'yhuang306.github.io/new _appt _reminder/templates/followup.html';
        else if (appt_type === 'shingrix')
            location.href = 'yhuang306.github.io/new _appt _reminder/templates/shingrix.html';
        else
            location.href = 'yhuang306.github.io/new _appt _reminder/templates/labAndShingrix.html';
    }

    else if (remind_type === 'report'){
        location.href = 'yhuang306.github.io/new _appt _reminder/templates/report.html';
    }
    else{
        location.href = "result.html";
    }
    
} 
