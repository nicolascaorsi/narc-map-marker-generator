(function () {
    var centerPoint = { x: 0, y: 0 };
    var fontSize = 14;
    var imageSrc;
    var color = '#fff';
    var fontName = 'Arial';

    function init(options) {
        imageSrc = options.imageUrl;
        centerPoint = options.centerPoint || centerPoint;
        fontSize = options.fontSize || fontSize;
        color = options.color || color;
        fontName = options.fontName || fontName;
    }

    function generate(text, callback) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var baseImage = new Image();
        baseImage.onload = function () {
            canvas.width = baseImage.width;
            canvas.height = baseImage.height;
            context.drawImage(baseImage, 0, 0);
            context.font = fontSize + "px " + fontName;
            context.fillStyle = color;

            var textWidth = context.measureText(text).width;
            var xToRender = centerPoint.x - textWidth / 2;
            var yToRender = centerPoint.y + fontSize * .3; // simulate height

            context.fillText(text, xToRender, yToRender);
            callback(canvas.toDataURL());
        };
        baseImage.src = imageSrc;
    }

    window.narcMarkerGenerator = {
        init: init,
        generate: generate
    };

})(window);