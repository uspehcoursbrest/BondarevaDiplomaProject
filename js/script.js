window.onload = function () {
    function clock() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getUTCMinutes(),
            weekday = date.getDay(),
            weekdayArr = ["Воскресенье", "Пон", "Втор", "Сред", "Четв", "Пят", "Субб"];

        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;

        document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year;
        document.getElementById("time").innerHTML = hour + ":" + min;
        document.getElementById("weekday").innerHTML = weekdayArr[weekday];
    }

    var timer;

    function clockStart() {
        timer = setInterval(clock, 1000);
        clock();
    }

    clockStart();
}


$(document).ready(function () {
    var btnUp = $('.up');
    btnUp.hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            btnUp.fadeIn();
        }
        else {
            btnUp.fadeOut();
        }
    });
    btnUp.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })
})



