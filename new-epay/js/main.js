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

		$("body").scrollTop(0);
        var $active = $('.wizard .nav-tabs li.active');
		$('.wizard .nav-tabs li.active').addClass("complete");
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function () {
		$("body").scrollTop(0);
        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
	
	//set dropdown
        $("select").msDropdown();
        
        $('.item-online').addClass("check");
        $('.paytype .online').addClass("bg_gray");
        $("#group-online").show();
		$("#group-atm").hide();
		$("#login-online").show();
        $("#login-bizonline").hide();
        
        $("#lblid").on('click', function () {
          
          $('#txtid').focus();
        });
        
        
        $("#txtid").on('blur', function () {
          if ($("#txtid").val() != "") {
            $(this).next().addClass('stay');
          } else {
            $(this).next().removeClass('stay');
          }
        });
        
        
        $("#lblpass").on('click', function () {
          
          $('#txtpass').focus();
        });
        
        
        $("#txtpass").on('blur', function () {
          if ($("#txtpass").val() != "") {
            $(this).next().addClass('stay');
          } else {
            $(this).next().removeClass('stay');
          }
        });
        
        $("#lblatm").on('click', function () {
          
          $('#txtatm').focus();
        });
        
        
        $("#txtatm").on('blur', function () {
          if ($("#txtatm").val() != "") {
            $(this).next().addClass('stay');
          } 
          else {
            $(this).next().removeClass('stay');
          }
        });
        
        $("#lblpin").on('click', function () {
          
          $('#txtpin').focus();
        });
        
        
        $("#txtpin").on('blur', function () {
          if ($("#txtpin").val() != "") {
            $(this).next().addClass('stay');
          } else {
            $(this).next().removeClass('stay');
          }
        });
        
        $("#lblotp").on('click', function () {
          
          $('#txtotp').focus();
        });
        
        
        $("#txtotp").on('blur', function () {
          if ($("#txtotp").val() != "") {
            $(this).next().addClass('stay');
          } else {
            $(this).next().removeClass('stay');
          }
        });
        $('.paytype .online').on('click', function() {
          $(this).addClass("bg_gray");
          $('.paytype .bizonline , .paytype .atm').removeClass("bg_gray");
          $('.item-bizonline').removeClass("check");
          $('.item-atm').removeClass("check");
          $('.item-online').addClass("check");
          
		  $("#login-online").show();
		  $("#login-bizonline").hide();
          $("#group-online").show();
		  $("#group-atm").hide();
        });
        
        
        $('.paytype .bizonline').on('click', function() {
          $(this).addClass("bg_gray");
          $('.paytype .online , .paytype .atm').removeClass("bg_gray");
          $('.item-online').removeClass("check");
          $('.item-atm').removeClass("check");
          $('.item-bizonline').addClass("check");
          
		  $("#login-online").hide();
          $("#login-bizonline").show();
          $("#group-online").show();
		  $("#group-atm").hide();
        });
        
        $('.paytype .atm').on('click', function() {
          $(this).addClass("bg_gray");
          $('.paytype .online , .paytype .bizonline').removeClass("bg_gray");
          $('.item-online').removeClass("check");
          $('.item-bizonline').removeClass("check");
          $('.item-atm').addClass("check");
          
		  $("#login-online").hide();
          $("#login-bizonline").hide();
          $("#group-online").hide();
		  $("#group-atm").show();
        });
        
        
        var m1 = $("#txtatm");
        var m1Value = m1.val();
        m1.mask("9999-9999-9999-9999");
        
        if (m1Value) {
          m1.val(m1Value);
          m1.trigger("paste.mask");
        }
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