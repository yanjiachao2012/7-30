/**
 * Created by 77 on 2016/1/22.
 */
//提示框

var timer;
function dialogTips(tips){
	clearInterval(timer);
	var $dialogFeedback=$(".toast-tips");
	
	if(tips) {
		$(".toast-tips span").text(tips);
	}
	
	
	$dialogFeedback.fadeIn();
	
	timer=setTimeout(function(){
		$dialogFeedback.fadeOut();
	},2000)

}
