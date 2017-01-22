/**
 * Created by Administrator on 2016/1/12.
 */
// 根据屏幕分辨率设置字体大小
function setHtmlSize(){
    var size = parseInt((document.documentElement.clientWidth / 720) * 100, 10);
    if ( size % 2 != 0) {
        size = parseInt(size,10) - 1;
    }

    document.getElementsByTagName("html")[0].style.fontSize = size + "px";
}
setHtmlSize();
addEventListener("resize", setHtmlSize,false);