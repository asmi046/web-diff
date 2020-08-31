function to_block(elem) {
	var elementClick = jQuery(elem).attr("href")
		var destination = jQuery(elementClick).offset().top-45;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 1000);
	return false;
}

jQuery(document).ready(function($) { 

	$(".mobile_menu ul li").click(function() {
		$(".mobile_menu").hide();
	});

/*
	$(".allPortfolioBtn").click(function() {
		
		if($(".heidePortfolio").is(':visible')) {
			$(".heidePortfolio").css("display","none");
			$(this).html("Показать еще работы");
		} else {
			$(".heidePortfolio").css("display","flex");
			$(this).html("Скрыть");
		}		
	});
*/

	$('.hamburger').click(function() {
		if($(".mobile_menu").is(':visible')) {
			$(this).removeClass("hamburger_active");	
			$(".mobile_menu").hide();
		} else {
			$(this).addClass("hamburger_active");
			$(".mobile_menu").show();
		}
	});
	var inputmask_96e76a5f = {"mask":"+7(999)999-99-99"};
    jQuery("input[type=tel]").inputmask(inputmask_96e76a5f);
	
	jQuery(".menu a").click(function () {
		to_block(this);
	});

	$(".krest").click(function() {
		$(this).parent().next().slideToggle();
	});
	
	
	jQuery(".unisend_win").click(function(e){ 
		var form = $(this).data('form');
		$('#order_site_modal input[name=form]').val(form);
		jQuery("#order_site_modal").arcticmodal();
	});
	
	jQuery(".uni_usl_win").click(function(e){ 
		var form = jQuery(this).data('form');

		jQuery("#order_uslugi_modal input[name=form]").val(form);
		if (jQuery(this).hasClass("usl_img"))
			jQuery("#order_uslugi_modal .wraper_uslugi_img").css("background-image", jQuery(this).css("background-image"));
		else 
			jQuery("#order_uslugi_modal .wraper_uslugi_img").css("background-image", jQuery(this).siblings(".usl_img").css("background-image"));
		
		
	});
	
	jQuery(".unisend_btn").click(function(e){ 
		var tel = jQuery(this).siblings(".tel_fild").val();	
		var name = jQuery(this).siblings(".name_fild").val();	
		var form = jQuery(this).siblings(".form_fild").val();	
		
		jQuery(this).siblings(".tel_fild").css("background-color","#ffffff");
		
		if ((tel == "")||(tel.indexOf("_") != -1)) {
			jQuery(this).siblings(".tel_fild").css("background-color","#fdbdc0");
			return;
		}
		
		var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
              type: "POST", //Метод отправки
              url: "https://web-diff.ru/send", //путь до php фаила отправителя
              data:{name: name,
              phone: tel,
              form: form
			  },
              success: function() {
              	document.location.href = "https://web-diff.ru/thencs";
              },
			  error: function() {
				console.log("Send Error!");
			  }
          });

	});
	
});

jQuery(window).scroll(function () { 
	if (jQuery(this).scrollTop() > 90) {
		jQuery('.main_banner').css("margin-top","40px");
		jQuery('header').addClass("headfixed");
		  
	} else {
		jQuery('.main_banner').css("margin-top","0");
		jQuery('header').removeClass("headfixed");
		 
	}
});

jQuery(document).ready(function($){
    $("form").submit(function() { //устанавливаем событие отправки для формы с id=form
            var form_data = $(this).serialize(); //собераем все данные из формы
            $.ajax({
              type: "POST", //Метод отправки
              url: "./send.php", //путь до php фаила отправителя
              data: form_data,
              success: function() {
              	$.arcticmodal('close');
                jQuery('#messgeModal #lineIcon').html('');
                jQuery('#messgeModal #lineMsg').html("Ваша заявка отправлена.");
                jQuery('#messgeModal').arcticmodal();
              }
          });
            return false;
    });

    if($(window).width() < 900) {
	    $(".vy_mi_box").slick({
	    	slidesToShow: 1,
	    	dots: true,
	    });
	}
  $(".work_etap_box").slick({
    slidesToShow: 4,
    // prevArrow: '<div class="slider-arrow slider-arrow-prev"></div>',
    // nextArrow: '<div class="slider-arrow slider-arrow-next"></div>',
    dots: false,
    responsive: [
	    {
	      breakpoint: 1150,
	      settings: {
	        slidesToShow: 3,
		    dots: true,
	      }
	    },
	    {
	    	breakpoint: 950,
	    	settings: {
	    		slidesToShow: 2,
			    dots: true,
	    	}
	    },
	    {
	    	breakpoint: 600,
	    	settings: {
	    		slidesToShow: 1,
			    dots: true,
	    	}
	    }
    ]
  });
}); 
