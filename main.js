$(document).ready(function() {
    var element = $('.out');
    var area = $('.wrap');
    var areaH = area.height();
    var areaW = area.width();
    var areaIn = $('.wrap-in');

    area.on('mousemove', function(event) {
        var x = event.clientX;
        var y = event.clientY;

        if (x < areaW / 2 && y < areaH / 2 || x > areaW / 2 && y > areaH / 2) {
            areaIn.css({
                transform: 'rotate(-45deg)'
            });
        }

        if (x > areaW / 2 && y < areaH / 2 || x < areaW / 2 && y > areaH / 2) {
            areaIn.css({
                transform: 'rotate(45deg)'
            });
        }

        element.css({
            transform: 'rotateX(' + x + 'deg)'
        });

    });
});