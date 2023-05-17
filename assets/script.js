let currentDay = $('#currentDay');
let hourTime = dayjs().format("H");
let today = dayjs();

$(function () {

    // Save buttons
    $("#saveBtn9").click(function(){
        // hour 9 get value
        let value = $("#text-area-9").val();
        $("#text-area-9").val(value);
        // hour 9 set to storage
        $(function () {
            localStorage.setItem("hour-9",value);
        });
    });

    $("#saveBtn10").click(function(){
        // hour 10 get value
        let value = $("#text-area-10").val();
        $("#text-area-10").val(value);
        // hour 10 set to storage
        $(function () {
            localStorage.setItem("hour-10",value);
        });
    });

    $("#saveBtn11").click(function(){
        // hour 11 get value
        let value = $("#text-area-11").val();
        $("#text-area-11").val(value);
        // hour 11 set to storage
        $(function () {
            localStorage.setItem("hour-11",value);
        });
    });

    $("#saveBtn12").click(function(){
        // hour 12 get value
        let value = $("#text-area-12").val();
        $("#text-area-12").val(value);
        // hour 12 set to storage
        $(function () {
            localStorage.setItem("hour-12",value);
        });
    });

    $("#saveBtn13").click(function(){
        // hour 13 get value
        let value = $("#text-area-13").val();
        $("#text-area-13").val(value);
        // hour 13 set to storage
        $(function () {
            localStorage.setItem("hour-13",value);
        });
    });

    $("#saveBtn14").click(function(){
        // hour 14 get value
        let value = $("#text-area-14").val();
        $("#text-area-14").val(value);
        // hour 14 set to storage
        $(function () {
            localStorage.setItem("hour-14",value);
        });
    });

    $("#saveBtn15").click(function(){
        // hour 15 get value
        let value = $("#text-area-15").val();
        $("#text-area-15").val(value);
        // hour 15 set to storage
        $(function () {
            localStorage.setItem("hour-15",value);
        });
    });

    $("#saveBtn16").click(function(){
        // hour 16 get value
        let value = $("#text-area-16").val();
        $("#text-area-16").val(value);
        // hour 16 set to storage
        $(function () {
            localStorage.setItem("hour-16",value);
        });
    });

    $("#saveBtn17").click(function(){
        // hour 17 get value
        let value = $("#text-area-17").val();
        $("#text-area-17").val(value);
        // hour 17 set to storage
        $(function () {
            localStorage.setItem("hour-17",value);
        });
    });

    // changing block colors (class) based on the current time
    if(hourTime > 9) {
        $("#hour-9").addClass("past");
    } else if (hourTime < 9) {
        $("#hour-9").addClass("future");
    } else {
        $("#hour-9").addClass("present");
    }

    if(hourTime > 10) {
        $("#hour-10").addClass("past");
    } else if (hourTime < 10) {
        $("#hour-10").addClass("future");
    } else {
        $("#hour-10").addClass("present");
    }

    if(hourTime > 11) {
        $("#hour-11").addClass("past");
    } else if (hourTime < 11) {
        $("#hour-11").addClass("future");
    } else {
        $("#hour-11").addClass("present");
    }

    if(hourTime > 12) {
        $("#hour-12").addClass("past");
    } else if (hourTime < 12) {
        $("#hour-12").addClass("future");
    } else {
        $("#hour-12").addClass("present");
    }

    if(hourTime > 13) {
        $("#hour-13").addClass("past");
    } else if (hourTime < 13) {
        $("#hour-13").addClass("future");
    } else {
        $("#hour-13").addClass("present");
    }

    if(hourTime > 14) {
        $("#hour-14").addClass("past");
    } else if (hourTime < 14) {
        $("#hour-14").addClass("future");
    } else {
        $("#hour-14").addClass("present");
    }

    if(hourTime > 15) {
        $("#hour-15").addClass("past");
    } else if (hourTime < 15) {
        $("#hour-15").addClass("future");
    } else {
        $("#hour-15").addClass("present");
    }

    if(hourTime > 16) {
        $("#hour-16").addClass("past");
    } else if (hourTime < 16) {
        $("#hour-16").addClass("future");
    } else {
        $("#hour-16").addClass("present");
    }

    if(hourTime > 17) {
        $("#hour-17").addClass("past");
    } else if (hourTime < 17) {
        $("#hour-17").addClass("future");
    } else {
        $("#hour-17").addClass("present");
    }

    // retreve stored info
    let storedValue9 = localStorage.getItem("hour-9");
    $("#text-area-9").val(storedValue9);

    let storedValue10 = localStorage.getItem("hour-10");
    $("#text-area-10").val(storedValue10);

    let storedValue11 = localStorage.getItem("hour-11");
    $("#text-area-11").val(storedValue11);

    let storedValue12 = localStorage.getItem("hour-12");
    $("#text-area-12").val(storedValue12);

    let storedValue13 = localStorage.getItem("hour-13");
    $("#text-area-13").val(storedValue13);

    let storedValue14 = localStorage.getItem("hour-14");
    $("#text-area-14").val(storedValue14);

    let storedValue15 = localStorage.getItem("hour-15");
    $("#text-area-15").val(storedValue15);

    let storedValue16 = localStorage.getItem("hour-16");
    $("#text-area-16").val(storedValue16);

    let storedValue17 = localStorage.getItem("hour-17");
    $("#text-area-17").val(storedValue17);

    // the current date in the header of the page.
    function displayDate() {
        var rightNow = today.format('MMM D, YYYY');
        currentDay.text(rightNow);
    }

    displayDate();
});
