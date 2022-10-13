let username = document.getElementById('name');
let output = document.getElementById('output');
let language = document.getElementById('language');
let time = document.getElementById('time');
let day = document.getElementById('day');
let am_pm = document.getElementById('am_pm');
let needLab = document.getElementById('lab');
let newPt = document.getElementById('newPatient');


function generate() {
    let chineseString = `${username.value} 您好! 丁华医生诊所通知您, 您的报告出来了需要回来。请尽快致电诊所预约时间, 电话是718-886-8998。 请回复 1 确认收到短信。`;
    let englishString = `Hello ${username.value}! This is Dr. Ding Hua's office to informs you that your report has come out and you need to come back. Please call the clinic as soon as possible to make an appointment at 718-886-8998. Please reply 1 to confirm receipt of this text message.`;
    if(language.value === 'chinese')
        output.innerHTML = chineseString;
    else {
        output.innerHTML = englishString;
    }
}

function apptGenerate() {

    if(language.value === 'chinese') {
        output.innerHTML = `${username.value} 您好! 丁华医生诊所提醒您跟我们预约了${replaceDay()}. ${need_Lab()} ${new_patient()} 如果迟到超过15分钟将视为没有预约, 变成排队等. 如果早到有可能会等到您的预约时间. 所以建议准时到就好. 请回复 1 确认预约. 请回复 2 取消预约. 然后有任何问题可以给我们回电话 718-886-8998. 谢谢！`
    }
    else {
        output.innerHTML = `Hello ${username.value}! This is Dr. Ding's office to remind you that your appointment is on ${replaceDay()}. ${need_Lab()} ${new_patient()} If you are more than 15 minutes late, you will be considered as no appointment and have to wait in line. If you come early, you may have to wait until your appointment time depending on how busy we are. Therefore, we strongly recommend you arrive on time. Please reply 1 to confirm the appointment, reply 2 to cancel the appointment and call us at 718-886-8998 to reschedule. Thank you!`
    }
    
}

function replaceDay () {
    if(language.value === 'chinese'){
        if(day.value === 'tomorrow') {
            if(am_pm.value === 'am') {
                return time.value.replace("T", "明天上午");
            }
            else {
                return time.value.replace("T", "明天下午");
            }
            
        } 
        else if(day.value === 'saturday') {
            if(am_pm.value === 'am') {
                return time.value.replace("T", "周六上午");
            }
            else {
                return time.value.replace("T", "周六下午");
            }
            
        } 
        else if(day.value === 'monday') {
            if(am_pm.value === 'am') {
                return apptTime = time.value.replace("T", "周一上午");
            }
            else {
                return time.value.replace("T", "周一下午");
            }
        } 
    }
    else if(language.value === 'english'){
        let apptTime;
        if(day.value === 'tomorrow') {
            if(am_pm.value === 'am') {
                apptTime = time.value.replace("T", " tomorrow ");
                return apptTime + 'AM';
            }
            else {
                apptTime = time.value.replace("T", " tomorrow ");
                return apptTime + 'PM';
            } 
        } 
        else if(day.value === 'saturday') {
            if(am_pm.value === 'am') {
                apptTime = time.value.replace("T", " Saturday ");
                return apptTime + 'AM';
            }
            else {
                apptTime = time.value.replace("T", " Saturday ");
                return apptTime + 'PM';
            }
        }
        else if(day.value === 'monday') {
            if(am_pm.value === 'am') {
                apptTime = time.value.replace("T", " Monday ");
                return apptTime + 'AM';
            }
            else {
                apptTime = time.value.replace("T", " Monday ");
                return apptTime + 'PM';
            }
        } 
    } 
}

function need_Lab() {
    if(language.value === 'chinese') {
        if(needLab.value === 'yes') {
            return "因为要抽血, 所以记得空腹4个小时,但是可以喝水."
        }
        else {
            return '';
        }
    }
    else if(language.value === 'english') {
        if(needLab.value === 'yes') {
            return "Remember to fast for 4 hours, you can drink water."
        }
        else {
            return '';
        }
    }
}

function new_patient() {
    if(language.value === 'chinese') {
        if(newPt.value === 'yes'){
            return "因为是新病人, 请带上医疗保险卡还有ID. 如果有在用药, 都请带过来. 我们的地址是13620 38TH AVE SUITE 6D FLUSHING, NY 11354."
        }
        else {
            return '';
        }
    }
    else if(language.value === 'english') {
        if(newPt.value === 'yes'){
            return "Please bring your insurance card, photo ID, and any medicines you are on. Our address is 13620 38TH AVE SUITE 6D FLUSHING, NY 11354."
        }
        else {
            return '';
        }
    }
}
