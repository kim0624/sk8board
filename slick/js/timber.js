
$(document).ready(function(){


	$(".brand ul").animate({
		left:"-180px"
	},{
		complete:function(){
			var $clone = $(".brand li").first().clone();
			$(".brand ul").append($clone);
			$(".brand li").first().remove();
			$(".brand ul").css({"left":"0px"});

		},
		duration:2000

	});


function cae(){
		$(".brand ul").animate({
		left:"-180px"
	},{
		complete:function(){
			var $clone = $(".brand li").first().clone();
			$(".brand ul").append($clone);
			$(".brand li").first().remove();
			$(".brand ul").css({"left":"0px"});

		},
		duration:1200

	});
}

setInterval(cae,1000);

function fnNotice(){
	$(".txt-wrap").animate({
		left:"-2200px"
	},{
		duration:10000,
		easing:"linear",
		complete:function(){
			var $clone = $(".long-txt").first().clone();
			$(".txt-wrap").append($clone);
			$(".long-txt").first().remove();
			$(".txt-wrap").css("left","0");
		}
	});
}


setInterval(fnNotice,1000);



});

$(window).on("scroll",function(){
	var pos =$("html").scrollTop();
	$("#info").text(pos);
	
	if(pos >=1800){
		$(".rider li:nth-child(1)").addClass("on");
	}

	if(pos >=2000){
		$(".rider li:nth-child(4) img").addClass("on");
	}
	if(pos >= 2300){
		$(".rider li:nth-child(2) img").addClass("on");
	}
	if(pos >= 2400){
		$(".rider li:nth-child(5) img").addClass("on");
	}
	if(pos >= 2500){
		$(".rider li:nth-child(3) img").addClass("on");
	}


});
