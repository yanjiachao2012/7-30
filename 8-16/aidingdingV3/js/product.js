$(document).ready(function () {
		 var count =1;
	/*function productLunbo () {
		 var length = $('.wrap .lunbo .lunbo-imgs img').length;
		 var firstImg = $('.wrap .lunbo .lunbo-imgs img').first();
		 var lastImg = $('.wrap .lunbo .lunbo-imgs img').last();
		 if (lastImg.hasClass('img-active')===false) {
		 	$('.wrap .lunbo .lunbo-imgs').find('.img-active').next().addClass('img-active').siblings().removeClass('img-active');
		 	$('.lunbo-dot').find('.dot-active').next().addClass('dot-active').siblings().removeClass('dot-active');
		 }else if (lastImg.hasClass('img-active')) {
		 	firstImg.addClass('img-active').siblings().removeClass('img-active');
		 	$('.dot').first().addClass('dot-active').siblings().removeClass('dot-active');
		 }
		 lastImg.bind('click',function () {
		 	 $('.lunbo,.price-infos').hide();
		 	  $('.wrap .header').show();
		 	 $('.price-infos').nextUntil($('.details-infos')).hide();
		 })
		 $('.wrap .header .icon-back').click(function () {
		 	  $('.lunbo,price-infos').show();
		 	  $('.wrap .header').hide();
		 	 $('.price-infos').nextUntil($('.details-infos')).show();
		 })
	}
	setInterval(function () {
		 productLunbo ();	 

	},2000);*/
	function productZan (	) {
		 	$('.wrap .price-infos .like').click(function () {
		 		$(this).toggleClass('yes'); 
		 		if ($(this).hasClass('yes')) {
				 	$(this).attr('src','../images/on_zan@2x.png');
		 		}else {
		 			$(this).attr('src','../images/nor_zan@2x.png');
		 		}
		 	})
		 	$('.wrap .price-infos .produceSave').click(function () {
		 		$(this).toggleClass('yes'); 
		 		if ($(this).hasClass('yes')) {
				 	$(this).attr('src','../images/on_shoucang@2x.png');
		 		}else {
		 			$(this).attr('src','../images/nor_shoucang@2x.png');
		 		}
		 	})
	}
	function productDetailsTab () {
		$('.details-infos .details-title .title').bind('click',function (e) {
			e.stopPropagation();
			var index = $(this).index();
			$('.details-infos .details-title').find('span').removeClass('border-active')
			$(this).find('span').addClass('border-active');
			$('.details-content').hide();
			$('.details-content').eq(index-1).show();
		})
	}
	function productSizeChoose() {
		$('.product-infos').bind('click',function () {
			$('.details-wrap').hide();
			$('.wrap .mask').show();
			$('.wrap .size-choose').show();
		})
		$('.pro-size .pro-size-btn').each(function(index, el) {
			$(this).bind('click',function () {
				$(this).siblings().removeClass('size-active');
				$(this).addClass('size-active');
			})
		});
		$('.size-choose .pro-close').bind('click',function () {
			var value = $('.pro-size .size-active').text();
			var num = +$('.pro-nums .pro-nums-change .middle').text();
			console.log(value+num)
			$('.wrap .product-infos').find('span').text('已选择: '+value+'码, '+num+'件' );
			$('.details-wrap').show();
			$('.wrap .mask').hide();
			$('.wrap .size-choose').hide();

		})
	}
	function proChangeNum(	) {
			$('.pro-nums .left').click(function (	) {
				var num = +$('.pro-nums .middle').text();
				if (num>1) {$('.pro-nums .middle').text(num-=1)}
			})
			$('.pro-nums .right').click(function (	) {
				var num = +$('.pro-nums .middle').text();
				if (num<10000) {$('.pro-nums .middle').text(num+=1)}
			})
	}
	function productCommentEvent(	) {
		$('.no-comment textarea').focus(function () {
			 	$(this).val('') ;
		})
		$('.no-comment textarea').blur(function () {
			 	$(this).val('我要评论') ;
		})	
	}
	function productSi(argument) {
		// body...
	}
	// productLunbo (	);
	productZan (	);
	phoneChangeFont();
	productDetailsTab ();
	productSizeChoose();
	productCommentEvent();
	proChangeNum(	);

	function phoneChangeFont() {
		var width = screen.width;
		var index = width/375;
		$('html').css('fontSize',12*index+'px');

	}
})
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true,
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: 3500,
	autoplayDisableOnInteraction: false
});