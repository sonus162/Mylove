document.addEventListener("DOMContentLoaded", function () {
    var startDate = new Date("2021-12-11T23:00:00").getTime(); // Thời điểm bắt đầu (23:00 ngày 11-12-2021)

    var x = setInterval(function () {
        var now = new Date().getTime(); // Thời điểm hiện tại

        var timePassed = now - startDate;

        var total_day = Math.floor(timePassed / (1000 * 60 * 60 * 24));
        var years = Math.floor(timePassed / (1000 * 60 * 60 * 24 * 365.25));
        var days = Math.floor(
            (timePassed % (1000 * 60 * 60 * 24 * 365.25)) /
                (1000 * 60 * 60 * 24)
        );
        var hours = Math.floor(
            (timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timePassed % (1000 * 60)) / 1000);

        document.getElementById("years").innerHTML = years;
        document.getElementById("days").innerHTML =
            days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML =
            hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML =
            minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML =
            seconds < 10 ? "0" + seconds : seconds;
        console.log(total_day);
        document.getElementById("nav__days").innerHTML = total_day;
    }, 1000);
});
var sakura = new Sakura("body", {
    colors: [
        {
            gradientColorStart: "rgba(255, 183, 197, 0.9)",
            gradientColorEnd: "rgba(255, 197, 208, 0.9)",
            gradientColorDegree: 120,
        },
        {
            gradientColorStart: "rgba(255,189,189)",
            gradientColorEnd: "rgba(227,170,181)",
            gradientColorDegree: 120,
        },
        {
            gradientColorStart: "rgba(212,152,163)",
            gradientColorEnd: "rgba(242,185,196)",
            gradientColorDegree: 120,
        },
    ],
    delay: 200,
});
