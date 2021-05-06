(function () {
    var originalHeight = document.documentElement.clientHeight || document.body.clientHeight;
    console.info("原始窗口的高度" + originalHeight);
    window.οnresize = function () {
        //软键盘弹起与隐藏  都会引起窗口的高度发生变化  
        var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
        console.info("软键盘弹起后窗口的高度" + resizeHeight);
        if (resizeHeight < originalHeight) {
            //证明窗口被挤压了
        }
    }
})()