//移动端简单屏幕适配
(function () {
    'use strict';
    // 1rem  = viewWidth/18.75
    setRemUnit();
    window.addEventListener('resize', setRemUnit);
    function setRemUnit() {
        var element = document.documentElement;
        // alert(element);
        var ratio = 18.75
        var viewWidth = window.innerWidth || element.getBoundingClientRect().width;
        // console.log(viewWidth);

        element.style.fontSize = viewWidth / ratio + 'px';
    }
})();