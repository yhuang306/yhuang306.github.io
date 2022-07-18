function submit() {
    let text = document.getElementById("te").value; 
	let fname = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    text = text.replace(/name/g, fname);
    text = text.replace(/date/g, date);
    text = text.replace(/time/g, time);

    document.getElementById("te").value = text; 
}

function report_submit() {
    let text = document.getElementById("te").value; 
	let fname = document.getElementById("name").value;

    text = text.replace("name", fname);

    document.getElementById("te").value = text; 
}

