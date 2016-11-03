$(document).ready(function () {
    
		"use strict";
        
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);
    
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function () {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function () {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});


function nextTab(elem) {
		"use strict";		
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
		"use strict";		
    $(elem).prev().find('a[data-toggle="tab"]').click();
}// JavaScript Document

(function($) {
		"use strict";
		
		//Initialize tooltips
		$('.nav-tabs > li a[title]').tooltip();
		
		$(".topbar > h3").fitText(
						1.2, {
								minFontSize: '14px',
								maxFontSize: '18px'
						}
		);
		
		$("h1, .signin").fitText(
						1.2, {
								minFontSize: '16px',
								maxFontSize: '27px'
						}
		);

		$(".box-login h5").fitText(
										1.2, {
														minFontSize: '11px',
														maxFontSize: '14px'
										}
		);
		
		$(".txt-retail h5").fitText(
										1.2, {
														minFontSize: '10px',
														maxFontSize: '12px'
										}
		);
				
				
				
        
})(jQuery);		