 function phoneChangeFont() {
 	var width = document.documentElement.clientWidth;
 	var index = width / 375;
 	document.getElementsByTagName("html")[0].style.fontSize = (12 * index + 'px');

 }
 phoneChangeFont();
 addEventListener("resize", phoneChangeFont, false);