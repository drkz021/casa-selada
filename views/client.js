const socket = io.connect(window.location.origin)

const fanController = document.querySelector("#switch");
const lightController = document.querySelector("#switch1");
const pumpController = document.querySelector("#switch2");
const mistController = document.querySelector("#switch3");
const aeratorController = document.querySelector("#switch4");


const water_tempValue = document.querySelector("#WaterTemp");

const ph_Value = document.querySelector("#phVal");

const ec_Value = document.querySelector("#EcVal");

const humid_Value = document.querySelector("#Humid");

const room_tempValue = document.querySelector("#RoomTemp");


var timeOnController = document.getElementById("time-on");
var timeOffController = document.getElementById("time-off");
var everydayController = document.getElementById('select-all');
var mondayController = document.getElementById('Monday');
var tuesdayController = document.getElementById('Tuesday');
var wednesdayController = document.getElementById('Wednesday');
var thursdayController = document.getElementById('Thursday');
var fridayController = document.getElementById('Friday');
var saturdayController = document.getElementById('Saturday');
var sundayController = document.getElementById('Sunday');
var checkboxes = document.querySelector('input[type="checkbox"]');
var resetButton = document.querySelector('.reset');


var timeOnController1 = document.getElementById("time-on1");
var timeOffController1 = document.getElementById("time-off1");
var everydayController1 = document.getElementById('select-all1');
var mondayController1 = document.getElementById('Monday1');
var tuesdayController1 = document.getElementById('Tuesday1');
var wednesdayController1 = document.getElementById('Wednesday1');
var thursdayController1 = document.getElementById('Thursday1');
var fridayController1 = document.getElementById('Friday1');
var saturdayController1 = document.getElementById('Saturday1');
var sundayController1 = document.getElementById('Sunday1');
var checkboxes1 = document.querySelector('input[type="checkbox"]');
var resetButton1 = document.querySelector('.reset1');

var timeOnController2 = document.getElementById("time-on2");
var timeOffController2 = document.getElementById("time-off2");
var everydayController2 = document.getElementById('select-all2');
var mondayController2 = document.getElementById('Monday2');
var tuesdayController2 = document.getElementById('Tuesday2');
var wednesdayController2 = document.getElementById('Wednesday2');
var thursdayController2 = document.getElementById('Thursday2');
var fridayController2 = document.getElementById('Friday2');
var saturdayController2 = document.getElementById('Saturday2');
var sundayController2 = document.getElementById('Sunday2');
var checkboxes2 = document.querySelector('input[type="checkbox"]');
var resetButton2 = document.querySelector('.reset2');


var timeOnController3 = document.getElementById("time-on3");
var timeOffController3 = document.getElementById("time-off3");
var everydayController3 = document.getElementById('select-all3');
var mondayController3 = document.getElementById('Monday3');
var tuesdayController3 = document.getElementById('Tuesday3');
var wednesdayController3 = document.getElementById('Wednesday3');
var thursdayController3 = document.getElementById('Thursday3');
var fridayController3 = document.getElementById('Friday3');
var saturdayController3 = document.getElementById('Saturday3');
var sundayController3 = document.getElementById('Sunday3');
var checkboxes3 = document.querySelector('input[type="checkbox"]');
var resetButton3 = document.querySelector('.reset3');

var timeOnController4 = document.getElementById("time-on4");
var timeOffController4 = document.getElementById("time-off4");
var everydayController4 = document.getElementById('select-all4');
var mondayController4 = document.getElementById('Monday4');
var tuesdayController4 = document.getElementById('Tuesday4');
var wednesdayController4 = document.getElementById('Wednesday4');
var thursdayController4 = document.getElementById('Thursday4');
var fridayController4 = document.getElementById('Friday4');
var saturdayController4 = document.getElementById('Saturday4');
var sundayController4 = document.getElementById('Sunday4');
var checkboxes4 = document.querySelector('input[type="checkbox"]');
var resetButton4 = document.querySelector('.reset4');



var growButton = document.querySelector('#grow');
var waterButton = document.querySelector('#water');
var mistButton = document.querySelector('#mist');
var fanButton = document.querySelector('#fan');
var aeratorButton = document.querySelector('#aerator');


const growLightForm = document.getElementById("grow-light-form");
const waterPumpForm = document.getElementById("water-pump-form");
const mistForm = document.getElementById("mist-form");
const fanForm = document.getElementById("fan-form");
const aeratorForm = document.getElementById("aerator-form");



growLightForm.style.display = "block";
waterPumpForm.style.display = "none";
mistForm.style.display = "none";
fanForm.style.display = "none";
aeratorForm.style.display = "none";

// growButton.style.backgroundColor = 'red';
// waterButton.style.backgroundColor = '#04AA6D';
// mistButton.style.backgroundColor = '#04AA6D';

//FORM #1 Gwo lights
timeOnController.addEventListener('change', function () {
    socket.emit('timeOn', timeOnController.value);
    console.log('time On: ' + timeOnController.value);


});

timeOffController.addEventListener('change', function () {
    socket.emit('timeOff', timeOffController.value);
    console.log('time Off: ' + timeOffController.value);
    // location.reload();
});

everydayController.addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
    socket.emit('everyday', everydayController.checked);
});

mondayController.addEventListener('change', function () {
    socket.emit('monday', mondayController.checked);
    console.log(mondayController.checked)
});

tuesdayController.addEventListener('change', function () {
    socket.emit('tuesday', tuesdayController.checked);
    console.log(tuesdayController.checked)
});
wednesdayController.addEventListener('change', function () {
    socket.emit('wednesday', wednesdayController.checked);
    console.log(wednesdayController.checked)
});
thursdayController.addEventListener('change', function () {
    socket.emit('thursday', thursdayController.checked);
    console.log(thursdayController.checked)
});
fridayController.addEventListener('change', function () {
    socket.emit('friday', fridayController.checked);
    console.log(fridayController.checked)
});
saturdayController.addEventListener('change', function () {
    socket.emit('saturday', saturdayController.checked);
    console.log(saturdayController.checked)
});
sundayController.addEventListener('change', function () {
    socket.emit('sunday', sundayController.checked);
    console.log(sundayController.checked)
});

socket.on('updatedTimeOn', function (args) {
    timeOnController.value = args;

});
socket.on('updatedTimeOff', function (args) {
    timeOffController.value = args;

});

socket.on('updatedMonday', function (args) {
    if (args == 1) {
        mondayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        mondayController.removeAttribute('Checked');
        // mondayController.value = false;
    }


});

socket.on('updatedTuesday', function (args) {
    if (args == 1) {
        tuesdayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        tuesdayController.removeAttribute('Checked');
        // mondayController.value = false;
    }


});


socket.on('updatedWednesday', function (args) {
    if (args == 1) {
        wednesdayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        wednesdayController.removeAttribute('Checked');
        // mondayController.value = false;
    }

});

socket.on('updatedThursday', function (args) {
    if (args == 1) {
        thursdayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        thursdayController.removeAttribute('Checked');
        // mondayController.value = false;
    }

});

socket.on('updatedFriday', function (args) {
    if (args == 1) {
        fridayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        fridayController.removeAttribute('Checked');
        // mondayController.value = false;
    }
});

socket.on('updatedSaturday', function (args) {
    if (args == 1) {
        saturdayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        saturdayController.removeAttribute('Checked');
        // mondayController.value = false;
    }
});


socket.on('updatedSunday', function (args) {
    if (args == 1) {
        sundayController.setAttribute('Checked', 'Checked');
        //mondayController.value = true;   
    } else {
        sundayController.removeAttribute('Checked');
        // mondayController.value = false;
    }
});

socket.on('updatedEveryday', function (args) {
    if (args == 1) {
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }

        //mondayController.value = true;   
    } else {
        selectAll.removeAttribute('Checked');
        // mondayController.value = false;
    }
});




//FORM #2 water pump
timeOnController1.addEventListener('change', function () {
    socket.emit('timeOn1', timeOnController1.value);
    console.log('time On: ' + timeOnController1.value);


});

timeOffController1.addEventListener('change', function () {
    socket.emit('timeOff1', timeOffController1.value);
    console.log('time Off: ' + timeOffController1.value);
    // location.reload();
});

everydayController1.addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
    socket.emit('everyday1', everydayController1.checked);
});

mondayController1.addEventListener('change', function () {
    socket.emit('monday1', mondayController1.checked);
    console.log(mondayController1.checked)
});

tuesdayController1.addEventListener('change', function () {
    socket.emit('tuesday1', tuesdayController1.checked);
    console.log(tuesdayController1.checked)
});
wednesdayController1.addEventListener('change', function () {
    socket.emit('wednesday1', wednesdayController1.checked);
    console.log(wednesdayController1.checked)
});
thursdayController1.addEventListener('change', function () {
    socket.emit('thursday1', thursdayController1.checked);
    console.log(thursdayController1.checked)
});
fridayController1.addEventListener('change', function () {
    socket.emit('friday1', fridayController1.checked);
    console.log(fridayController1.checked)
});
saturdayController1.addEventListener('change', function () {
    socket.emit('saturday1', saturdayController1.checked);
    console.log(saturdayController1.checked)
});
sundayController1.addEventListener('change', function () {
    socket.emit('sunday1', sundayController1.checked);
    console.log(sundayController1.checked)
});

socket.on('updatedTimeOn1', function (args) {
    timeOnController1.value = args;

});
socket.on('updatedTimeOff1', function (args) {
    timeOffController1.value = args;

});

socket.on('updatedMonday1', function (args) {
    if (args == 1) {
        mondayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        mondayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }


});

socket.on('updatedTuesday1', function (args) {
    if (args == 1) {
        tuesdayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        tuesdayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }


});


socket.on('updatedWednesday1', function (args) {
    if (args == 1) {
        wednesdayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        wednesdayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }

});

socket.on('updatedThursday1', function (args) {
    if (args == 1) {
        thursdayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        thursdayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }

});

socket.on('updatedFriday1', function (args) {
    if (args == 1) {
        fridayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        fridayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }
});

socket.on('updatedSaturday1', function (args) {
    if (args == 1) {
        saturdayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        saturdayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }
});


socket.on('updatedSunday1', function (args) {
    if (args == 1) {
        sundayController1.setAttribute('Checked', 'Checked');
        //mondayController1.value = true;   
    } else {
        sundayController1.removeAttribute('Checked');
        // mondayController1.value = false;
    }
});

socket.on('updatedEveryday1', function (args) {
    if (args == 1) {
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }

        //mondayController1.value = true;   
    } else {
        selectAll.removeAttribute('Checked');
        // mondayController1.value = false;
    }
});

//FORM #3 mist
timeOnController2.addEventListener('change', function () {
    socket.emit('timeOn2', timeOnController2.value);
    console.log('time On: ' + timeOnController2.value);


});

timeOffController2.addEventListener('change', function () {
    socket.emit('timeOff2', timeOffController2.value);
    console.log('time Off: ' + timeOffController2.value);
    // location.reload();
});

everydayController2.addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
    socket.emit('everyday2', everydayController2.checked);
});

mondayController2.addEventListener('change', function () {
    socket.emit('monday2', mondayController2.checked);
    console.log(mondayController2.checked)
});

tuesdayController2.addEventListener('change', function () {
    socket.emit('tuesday2', tuesdayController2.checked);
    console.log(tuesdayController2.checked)
});
wednesdayController2.addEventListener('change', function () {
    socket.emit('wednesday2', wednesdayController2.checked);
    console.log(wednesdayController2.checked)
});
thursdayController2.addEventListener('change', function () {
    socket.emit('thursday2', thursdayController2.checked);
    console.log(thursdayController2.checked)
});
fridayController2.addEventListener('change', function () {
    socket.emit('friday2', fridayController2.checked);
    console.log(fridayController2.checked)
});
saturdayController2.addEventListener('change', function () {
    socket.emit('saturday2', saturdayController2.checked);
    console.log(saturdayController2.checked)
});
sundayController2.addEventListener('change', function () {
    socket.emit('sunday2', sundayController2.checked);
    console.log(sundayController2.checked)
});

socket.on('updatedTimeOn2', function (args) {
    timeOnController2.value = args;

});
socket.on('updatedTimeOff2', function (args) {
    timeOffController2.value = args;

});

socket.on('updatedMonday2', function (args) {
    if (args == 1) {
        mondayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        mondayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }


});

socket.on('updatedTuesday2', function (args) {
    if (args == 1) {
        tuesdayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        tuesdayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }


});


socket.on('updatedWednesday2', function (args) {
    if (args == 1) {
        wednesdayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        wednesdayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }

});

socket.on('updatedThursday2', function (args) {
    if (args == 1) {
        thursdayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        thursdayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }

});

socket.on('updatedFriday2', function (args) {
    if (args == 1) {
        fridayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        fridayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }
});

socket.on('updatedSaturday2', function (args) {
    if (args == 1) {
        saturdayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        saturdayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }
});


socket.on('updatedSunday2', function (args) {
    if (args == 1) {
        sundayController2.setAttribute('Checked', 'Checked');
        //mondayController2.value = true;   
    } else {
        sundayController2.removeAttribute('Checked');
        // mondayController2.value = false;
    }
});

socket.on('updatedEveryday2', function (args) {
    if (args == 1) {
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }

        //mondayController2.value = true;   
    } else {
        selectAll.removeAttribute('Checked');
        // mondayController2.value = false;
    }
});


//Form4 FAN
timeOnController3.addEventListener('change', function () {
    socket.emit('timeOn3', timeOnController3.value);
    console.log('time On: ' + timeOnController3.value);


});

timeOffController3.addEventListener('change', function () {
    socket.emit('timeOff3', timeOffController3.value);
    console.log('time Off: ' + timeOffController3.value);
    // location.reload();
});

everydayController3.addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
    socket.emit('everyday3', everydayController3.checked);
});

mondayController3.addEventListener('change', function () {
    socket.emit('monday3', mondayController3.checked);
    console.log(mondayController3.checked)
});

tuesdayController3.addEventListener('change', function () {
    socket.emit('tuesday3', tuesdayController3.checked);
    console.log(tuesdayController3.checked)
});
wednesdayController3.addEventListener('change', function () {
    socket.emit('wednesday3', wednesdayController3.checked);
    console.log(wednesdayController3.checked)
});
thursdayController3.addEventListener('change', function () {
    socket.emit('thursday3', thursdayController3.checked);
    console.log(thursdayController3.checked)
});
fridayController3.addEventListener('change', function () {
    socket.emit('friday3', fridayController3.checked);
    console.log(fridayController3.checked)
});
saturdayController3.addEventListener('change', function () {
    socket.emit('saturday3', saturdayController3.checked);
    console.log(saturdayController3.checked)
});
sundayController3.addEventListener('change', function () {
    socket.emit('sunday3', sundayController3.checked);
    console.log(sundayController3.checked)
});

socket.on('updatedTimeOn3', function (args) {
    timeOnController3.value = args;

});
socket.on('updatedTimeOff3', function (args) {
    timeOffController3.value = args;

});

socket.on('updatedMonday3', function (args) {
    if (args == 1) {
        mondayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        mondayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }


});

socket.on('updatedTuesday3', function (args) {
    if (args == 1) {
        tuesdayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        tuesdayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }


});


socket.on('updatedWednesday3', function (args) {
    if (args == 1) {
        wednesdayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        wednesdayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }

});

socket.on('updatedThursday3', function (args) {
    if (args == 1) {
        thursdayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        thursdayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }

});

socket.on('updatedFriday3', function (args) {
    if (args == 1) {
        fridayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        fridayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});

socket.on('updatedSaturday3', function (args) {
    if (args == 1) {
        saturdayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        saturdayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});


socket.on('updatedSunday3', function (args) {
    if (args == 1) {
        sundayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        sundayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});

socket.on('updatedEveryday3', function (args) {
    if (args == 1) {
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }

        //mondayController3.value = true;   
    } else {
        selectAll.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});






//Form5 Aerator
timeOnController4.addEventListener('change', function () {
    socket.emit('timeOn4', timeOnController4.value);
    console.log('time On: ' + timeOnController4.value);


});

timeOffController4.addEventListener('change', function () {
    socket.emit('timeOff4', timeOffController4.value);
    console.log('time Off: ' + timeOffController4.value);
    // location.reload();
});

everydayController4.addEventListener('change', function () {
    var checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
    socket.emit('everyday4', everydayController4.checked);
});

mondayController4.addEventListener('change', function () {
    socket.emit('monday4', mondayController4.checked);
    console.log(mondayController4.checked)
});

tuesdayController4.addEventListener('change', function () {
    socket.emit('tuesday4', tuesdayController3.checked);
    console.log(tuesdayController4.checked)
});
wednesdayController4.addEventListener('change', function () {
    socket.emit('wednesday4', wednesdayController4.checked);
    console.log(wednesdayController4.checked)
});
thursdayController4.addEventListener('change', function () {
    socket.emit('thursday4', thursdayController4.checked);
    console.log(thursdayController4.checked)
});
fridayController4.addEventListener('change', function () {
    socket.emit('friday4', fridayController4.checked);
    console.log(fridayController4.checked)
});
saturdayController4.addEventListener('change', function () {
    socket.emit('saturday4', saturdayController4.checked);
    console.log(saturdayController4.checked)
});
sundayController4.addEventListener('change', function () {
    socket.emit('sunday4', sundayController4.checked);
    console.log(sundayController4.checked)
});

socket.on('updatedTimeOn4', function (args) {
    timeOnController4.value = args;

});
socket.on('updatedTimeOff4', function (args) {
    timeOffController4.value = args;

});

socket.on('updatedMonday4', function (args) {
    if (args == 1) {
        mondayController4.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        mondayController4.removeAttribute('Checked');
        // mondayController3.value = false;
    }


});

socket.on('updatedTuesday4', function (args) {
    if (args == 4) {
        tuesdayController4.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        tuesdayController4.removeAttribute('Checked');
        // mondayController3.value = false;
    }


});


socket.on('updatedWednesday4', function (args) {
    if (args == 1) {
        wednesdayController4.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        wednesdayController4.removeAttribute('Checked');
        // mondayController3.value = false;
    }

});

socket.on('updatedThursday4', function (args) {
    if (args == 1) {
        thursdayController4.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        thursdayController4.removeAttribute('Checked');
        // mondayController3.value = false;
    }

});

socket.on('updatedFriday4', function (args) {
    if (args == 1) {
        fridayController4.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        fridayController4.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});

socket.on('updatedSaturday4', function (args) {
    if (args == 1) {
        saturdayController3.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        saturdayController3.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});


socket.on('updatedSunday4', function (args) {
    if (args == 1) {
        sundayController4.setAttribute('Checked', 'Checked');
        //mondayController3.value = true;   
    } else {
        sundayController4.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});

socket.on('updatedEveryday4', function (args) {
    if (args == 1) {
        for (var checkbox of checkboxes) {
            checkbox.checked = this.checked;
        }

        //mondayController3.value = true;   
    } else {
        selectAll.removeAttribute('Checked');
        // mondayController3.value = false;
    }
});


growButton.addEventListener('click',function () {
    socket.emit('nav1',1)
});

waterButton.addEventListener('click',function () {
    socket.emit('nav2',2)
});


mistButton.addEventListener('click',function () {
    socket.emit('nav3',3)
});


fanButton.addEventListener('click',function () {
    socket.emit('nav4',4)
});

aeratorButton.addEventListener('click',function () {
    socket.emit('nav5',5)
});

resetButton.addEventListener('click',function () {
    socket.emit('reset',true)
});
resetButton1.addEventListener('click',function () {
    socket.emit('reset1',true)
});

resetButton2.addEventListener('click',function () {
    socket.emit('reset2',true)
});

resetButton3.addEventListener('click',function () {
    socket.emit('reset3',true)
});

resetButton4.addEventListener('click',function () {
    socket.emit('reset4',true)
});




socket.on('rq1', function (args) {
    console.log(args);
 
    timeOnController.value = args[0]['time_on'];
    timeOffController.value = args[0]['time_off'];
    mondayController.checked = args[0]['monday'];
    tuesdayController.checked = args[0]['tuesday'];
    wednesdayController.checked = args[0]['wednesday'];
    thursdayController.checked = args[0]['thursday'];
    fridayController.checked = args[0]['friday'];
    saturdayController.checked = args[0]['saturday'];
    sundayController.checked = args[0]['sunday'];
    everydayController.checked = args[0]['everyday'];
    growButton.style.borderColor = '#04AA6D';
    waterButton.style.borderColor = 'white';
    mistButton.style.borderColor = 'white';
    fanButton.style.borderColor = 'white';
    aeratorButton.style.borderColor = 'white';
    growLightForm.style.display = "block";
    waterPumpForm.style.display = "none";
    mistForm.style.display = "none";
    fanForm.style.display = "none";
    aeratorForm.style.display = "none";


});


socket.on('rq2', function (args) {
  
   
    timeOnController1.value = args[0]['time_on'];
    timeOffController1.value = args[0]['time_off'];
    mondayController1.checked = args[0]['monday'];
    tuesdayController1.checked = args[0]['tuesday'];
    wednesdayController1.checked = args[0]['wednesday'];
    thursdayController1.checked = args[0]['thursday'];
    fridayController1.checked = args[0]['friday'];
    saturdayController1.checked = args[0]['saturday'];
    sundayController1.checked = args[0]['sunday'];
    everydayController1.checked = args[0]['everyday'];
    growButton.style.borderColor = 'white';
    waterButton.style.borderColor = '#04AA6D';
    mistButton.style.borderColor = 'white';
    fanButton.style.borderColor = 'white';
    aeratorButton.style.borderColor = 'white';
    growLightForm.style.display = "none";
    waterPumpForm.style.display = "block";
    mistForm.style.display = "none";
    fanForm.style.display = "none";
    aeratorForm.style.display = "none";


});

socket.on('rq3', function (args) {
   
    timeOnController2.value = "";
    timeOnController2.value = args[0]['time_on'];
    timeOffController2.value = args[0]['time_off'];
    mondayController2.checked = args[0]['monday'];
    tuesdayController2.checked = args[0]['tuesday'];
    wednesdayController2.checked = args[0]['wednesday'];
    thursdayController2.checked = args[0]['thursday'];
    fridayController2.checked = args[0]['friday'];
    saturdayController2.checked = args[0]['saturday'];
    sundayController2.checked = args[0]['sunday'];
    everydayController2.checked = args[0]['everyday'];
    growButton.style.borderColor = 'white';
    waterButton.style.borderColor = 'white';
    mistButton.style.borderColor = '#04AA6D';
    fanButton.style.borderColor = 'white';
    aeratorButton.style.borderColor = 'white';
    growLightForm.style.display = "none";
    waterPumpForm.style.display = "none";
    mistForm.style.display = "block";
    fanForm.style.display = "none";
    aeratorForm.style.display = "none";

});


socket.on('rq4', function (args) {
   
    timeOnController3.value = args[0]['time_on'];
    timeOffController3.value = args[0]['time_off'];
    mondayController3.checked = args[0]['monday'];
    tuesdayController3.checked = args[0]['tuesday'];
    wednesdayController3.checked = args[0]['wednesday'];
    thursdayController3.checked = args[0]['thursday'];
    fridayController3.checked = args[0]['friday'];
    saturdayController3.checked = args[0]['saturday'];
    sundayController3.checked = args[0]['sunday'];
    everydayController3.checked = args[0]['everyday'];
    growButton.style.borderColor = 'white';
    waterButton.style.borderColor = 'white';
    mistButton.style.borderColor = 'white';
    fanButton.style.borderColor = '#04AA6D';
    aeratorButton.style.borderColor = 'white';
    growLightForm.style.display = "none";
    waterPumpForm.style.display = "none";
    mistForm.style.display = "none";
    fanForm.style.display = "block";
    aeratorForm.style.display = "none";

});

socket.on('rq5', function (args) {
   
    timeOnController4.value = args[0]['time_on'];
    timeOffController4.value = args[0]['time_off'];
    mondayController4.checked = args[0]['monday'];
    tuesdayController4.checked = args[0]['tuesday'];
    wednesdayController4.checked = args[0]['wednesday'];
    thursdayController4.checked = args[0]['thursday'];
    fridayController4.checked = args[0]['friday'];
    saturdayController4.checked = args[0]['saturday'];
    sundayController4.checked = args[0]['sunday'];
    everydayController4.checked = args[0]['everyday'];
    growButton.style.borderColor = 'white';
    waterButton.style.borderColor = 'white';
    mistButton.style.borderColor = 'white';
    fanButton.style.borderColor = 'white';
    aeratorButton.style.borderColor = '#04AA6D';
    growLightForm.style.display = "none";
    waterPumpForm.style.display = "none";
    mistForm.style.display = "none";
    fanForm.style.display = "none";
    aeratorForm.style.display = "block";

});



fanController.addEventListener('change', function (e) {
    // console.log(this.checked);
    if (this.checked == true) {

        socket.emit("fan", true);

        // console.log(true);
    } else {
        socket.emit("fan", false);
        //console.log(false);
    }
});

lightController.addEventListener('change', function (e) {
    // console.log(this.checked);
    if (this.checked == true) {

        socket.emit("light", true);

        // console.log(true);
    } else {
        socket.emit("light", false);
        //console.log(false);
    }
});
pumpController.addEventListener('change', function (e) {
    // console.log(this.checked);
    if (this.checked == true) {

        socket.emit("pump", true);

        // console.log(true);
    } else {
        socket.emit("pump", false);
        //console.log(false);
    }
});
mistController.addEventListener('change', function (e) {
    // console.log(this.checked);
    if (this.checked == true) {

        socket.emit("mist", true);

        // console.log(true);
    } else {
        socket.emit("mist", false);
        //console.log(false);
    }
});

    socket.on('fan_status', (arg) => {
        // console.log(arg);
        if (arg == 'ON') {
            fanController.setAttribute('Checked', 'Checked');
        } else {
            fanController.removeAttribute('Checked');
        }
    
    });

    aeratorController.addEventListener('change', function (e) {
        // console.log(this.checked);
        if (this.checked == true) {
    
            socket.emit("aerator", true);
    
            // console.log(true);
        } else {
            socket.emit("aerator", false);
            //console.log(false);
        }
    });
    
        socket.on('fan_status', (arg) => {
            // console.log(arg);
            if (arg == 'ON') {
                fanController.setAttribute('Checked', 'Checked');
            } else {
                fanController.removeAttribute('Checked');
            }
        
        });
    



socket.on('light_status', (arg) => {
    if (arg == 'ON') {
        lightController.setAttribute('Checked', 'Checked');
    } else {
        lightController.removeAttribute('Checked');
    }

});

socket.on('pump_status', (arg) => {
    if (arg == 'ON') {
        pumpController.setAttribute('Checked', 'Checked');
    } else {
        pumpController.removeAttribute('Checked');
    }

});
socket.on('mist_status', (arg) => {
    if (arg == 'ON') {
        mistController.setAttribute('Checked', 'Checked');
    } else {
        mistController.removeAttribute('Checked');
    }

});

socket.on('aero_status', (arg) => {
    if (arg == 'ON') {
        aeratorController.setAttribute('Checked', 'Checked');
    } else {
        aeratorController.removeAttribute('Checked');
    }

});

socket.on('water_temp', (arg) => {
    water_tempValue.innerHTML =  arg + '&#8451';
    if (arg<=20) {
        water_tempValue.style.color = '#48D1CC';
    } else {
        water_tempValue.style.color = 'red';
    }
   // console.log(arg)
});

socket.on('ph_value', (arg) => {
    ph_Value.innerHTML = arg;
    if (arg<7) {
        ph_Value.style.color = '#48D1CC';
    } else {
        ph_Value.style.color = 'red';
    }
   // console.log(arg)
});


socket.on('ec_value', (arg) => {
    ec_Value.innerHTML = arg;
  
  //  console.log(arg)
});

socket.on('humid', (arg) => {
    humid_Value.innerHTML = arg + '%';
    if (arg>79) {
        humid_Value.style.color = '#48D1CC';
    } else {
        humid_Value.style.color = 'red';
    }
   // console.log(arg)
});


socket.on('room_temp', (arg) => {
    room_tempValue.innerHTML = arg + '&#8451';
    if (arg<=20) {
        room_tempValue.style.color = '#48D1CC';
    } else {
        room_tempValue.style.color = 'red';
    }
  //  console.log(arg)
});



const labels1 = [];

let water_temp = [];
//let mock_data = [12,4,1,12.5,12.1,5,1];
const today = new Date();
for (let i = 6; i >= 0; i--) {
  const date = new Date(today);
  date.setDate(today.getDate() - i);
  labels1.push(date.toLocaleDateString());
 // labels2.push(date);
}
socket.emit('res', labels1);

const ctx1 = document.getElementById("myChart1").getContext("2d");


// Config Block

socket.on('chart1', function(args) {
    // for (let index = 0; index < args.length; index++) {
    //    water_temp.push(parseFloat(args[index]));
        
    // }
    //console.log(args);
    var data1 = {
        labels: labels1,
        datasets: [
          {
            label: "WaterTemp",
            backgroundColor: "#576CBC",
            borderColor: "#576CBC",
            data: args[0],
            lineTension: 0.5,
          },
          {
            label: "PH",
            backgroundColor: "purple",
            borderColor: "purple",
            data: args[1],
            lineTension: 0.5,
          },
          {
            label: "EC",
            backgroundColor: "orange",
            borderColor: "orange",
            data: args[2],
            lineTension: 0.5,
          },
        
        ],
      };
      
    var config1 = {
        type: "line",
        data: data1,
        options: {},
      };
// Render Block
new Chart(ctx1, config1);
    //console.log(water_temp);
});




const ctx2 = document.getElementById("myChart2").getContext("2d");
const labels2 = [];
const today2 = new Date();
for (let i = 6; i >= 0; i--) {
  const date2 = new Date(today2);
  date2.setDate(today2.getDate() - i);
  labels2.push(date2.toLocaleDateString());
  
}
socket.emit('res2', labels2);

socket.on('chart2', function(args) {
 
   
  
    const data2 = {
      labels: labels2,
      datasets: [
        {
          label: "Room Temperature",
          backgroundColor: "#8F43EE",
          borderColor: "#8F43EE",
          data: args[0],
          lineTension: 0.5,
        },
        {
            label: "Humidity",
            backgroundColor: "yellow",
            borderColor: "yellow",
            data: args[1],
            lineTension: 0.5,
          },
      ],
    };
    // Config Block
    const config2 = {
      type: "line",
      data: data2,
      options: {},
    };

    // Render Block
    new Chart(ctx2, config2);
    //console.log(water_temp);
});



//const socket = io.connect(window.location.origin)
        // Initialize Flatpickr date range selector
        const startDatePicker = flatpickr('#startDate', { dateFormat: 'Y-M-d ' });
        const endDatePicker = flatpickr('#endDate', { dateFormat: 'Y-M-d' });
        let dates = [];
        // Add form submit event listener
        const form = document.querySelector('.date-range');
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          
          // Get start and end date values from the date range selector
          const startDate = startDatePicker.selectedDates[0];
          const endDate = endDatePicker.selectedDates[0];
        dates.push(startDate.toString(),endDate.toString());
         socket.emit('fetch-dates', dates );

          socket.on('return-data', function (args) {

       


              const mappedArr = args.map(innerArr => {
                var ph = innerArr['PH'];
                var ec = innerArr['EC'];
                var water_temp = innerArr['WATER_TEMP'];
                var dateStr= innerArr['DATE'];
                var date = new Date(dateStr);
                var formattedDate = date.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                  });
          
                  return [ph,ec,water_temp,formattedDate];
                 
              });

            
              console.log(mappedArr);
             
              
              const headers = ['pH', 'EC', 'Water Temp', 'Date'];
                const dataWithHeaders = [headers, ...mappedArr];
    
              // Create a new workbook
              const workbook = XLSX.utils.book_new();
              
              // Convert the filtered data to a worksheet
              const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeaders);
              
              // Add the worksheet to the workbook
              XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
              
              // Export the workbook to an Excel file
              const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
              const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
              const filename = 'water_info.xlsx';
              if (typeof window.navigator.msSaveBlob !== 'undefined') {
                // IE workaround
                window.navigator.msSaveBlob(blob, filename);
              } else {
                // Use download attribute of HTML5 a tag to simulate a download
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                setTimeout(() => {
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                }, 0);
              }
            });
            // Utility function to convert a string to ArrayBuffer
     
    
          });
          function s2ab(s) {
            const buf = new ArrayBuffer(s.length);
            const view = new Uint8Array(buf);
            for (let i = 0; i < s.length; i++) {
              view[i] = s.charCodeAt(i) & 0xFF;
            }
            return buf;
          }

          const startDatePicker1 = flatpickr('#startDate1', { dateFormat: 'Y-M-d ' });
          const endDatePicker1 = flatpickr('#endDate1', { dateFormat: 'Y-M-d' });
          let dates1 = [];
          // Add form submit event listener
          const form1 = document.querySelector('.date-range1');
          form1.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get start and end date values from the date range selector
            const startDate1 = startDatePicker1.selectedDates[0];
            const endDate1 = endDatePicker1.selectedDates[0];
          dates1.push(startDate1.toString(),endDate1.toString());
           socket.emit('fetch-dates1', dates1 );
            socket.on('return-data1', function(args1) {


                    const mappedArr1 = args1.map(innerArr1 => {
                        var humidity = innerArr1['HUMIDITY'];
                        var roomtemp = innerArr1['ROOM_TEMP'];
                        var dateStr= innerArr1['DATE'];
                        var date = new Date(dateStr);
                        var formattedDate = date.toLocaleDateString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric'
                        });
                
                //  console.log(innerArr1['HUMIDITY']);
                return [humidity, roomtemp,formattedDate];
            
                    });
                        console.log(mappedArr1);

                    

                    // console.log(mappedArr);

                    // const filteredData = args.filter(row => {
                    //     const date = new Date(row[5]);
                    //     return date >= startDate && date <= endDate;
                    //   });
                    
                    const headers = ['Humidity', 'Room Temperature', 'Date'];
                        const dataWithHeaders = [headers, ...mappedArr1];

                    // Create a new workbook
                    const workbook = XLSX.utils.book_new();
                    
                    // Convert the filtered data to a worksheet
                    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeaders);
                    
                    // Add the worksheet to the workbook
                    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
                    
                    // Export the workbook to an Excel file
                    const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
                    const blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
                    const filename = 'environment_info.xlsx';
                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        // Use download attribute of HTML5 a tag to simulate a download
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                        setTimeout(() => {
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                        }, 0);
                    }
                
            })
          

          });
          
          
          // Filter the data based on the date range
         
// console.log(labels1);


