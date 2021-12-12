$(document).ready(function () {
    const floorPath = $(".main-image path");
    const counterUp = $(".counter-up");
    const counterDown = $(".counter-down");
    let currentFloor = 2;

    changeFloor();

    floorPath.on('mouseover', function () {
        floorPath.removeClass("current-floor");
        currentFloor = $(this).attr('data-floor');
        $(".counter").text(currentFloor);
    });

    counterUp.on('click', function () {
        currentFloor = Math.min(currentFloor + 1, 18);
        changeFloor();
    });

    counterDown.on('click', function () {
        currentFloor = Math.max(currentFloor - 1, 2);
        changeFloor();
    });

    function changeFloor() {
        const usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
        $(".counter").text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
}); 