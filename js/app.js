$(function(){
	$(window).scroll(function(){
	    let scrollVal = $(this).scrollTop()
	    let speed = 50
	    if( scrollVal >= 10 ) {
	        $("header.top").css({
	        		"background-color": "#46B7B9",
	        		"opacity": "0.5"
	        	})
	    }else{
	    	$("header.top").css({
	        		"background-color": "white",
	        		"opacity": "1"
	        	})
	    }
	})
})
