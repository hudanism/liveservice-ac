function EditorTourGuide(e){var r=new Tour({storage:!1});r.addSteps([{element:"#arp_allcolumnsdiv",title:"Real Time Editor",content:"Below you can see that your selected template is loaded in editor. Here you can modify it as per your need.",placement:"top",backdrop:!0,orphan:!0,onShown:function(){jQuery("#arp_allcolumnsdiv").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("float","left"),jQuery("#arp_allcolumnsdiv").css("padding-top","10px"),jQuery("#arp_allcolumnsdiv").css("background","#ffffff"),jQuery(".arp_tour").css("margin-top","15px")},onHide:function(){jQuery("#arp_allcolumnsdiv").css("box-shadow",""),jQuery("#arp_allcolumnsdiv").css("-webkit-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("-moz-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("-o-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("float",""),jQuery("#arp_allcolumnsdiv").css("padding",""),jQuery("#arp_allcolumnsdiv").css("background",""),jQuery(".arp_tour").css("margin-top","")},template:"<div class='popover tour arp_tour'><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button id='arp_next_two' class='arp_tour_next' style='margin:0 15px 15px;' data-role='next'>Next</button><button class='arp_tour_end_tour' style='margin-right:15px;' data-role='end'>End tour</button></div></nav></div>"},{element:".arprice_top_belt_menu_option#all_color_options",title:"Choose color",content:"Select color of your template by clicking the button. you will see color change is applied right away :)",backdrop:!0,orphan:!0,placement:"left",onShown:function(){jQuery("#arp_allcolumnsdiv").css("z-index","999"),jQuery("#arp_allcolumnsdiv").css("position","relative"),jQuery(".arprice_top_belt_menu_option#all_color_options").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_top_belt_menu_option#all_color_options").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_top_belt_menu_option#all_color_options").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_top_belt_menu_option#all_color_options").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_top_belt_menu_option#all_color_options").click(),jQuery("#arp_allcolumnsdiv").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_allcolumnsdiv").css("float","left"),jQuery("#arp_allcolumnsdiv").css("padding-top","10px"),jQuery("#arp_allcolumnsdiv").css("background","#ffffff");var e=jQuery(".arprice_top_belt_menu_option#all_color_options").outerWidth();e+=60;var r="right";jQuery("body").hasClass("rtl")&&(r="left",jQuery(".arp_tour").removeClass("left"),jQuery(".arp_tour").addClass("right"),jQuery(".popover.tour.arp_tour.tour-tour.tour-tour-1.fade.right.in").css(r,e+"px"),jQuery(".arp_tour").find(".arrow").css("top","12%"),jQuery(".arp_tour").find(".arrow").css("right","385px"))},onHide:function(){jQuery("#arp_allcolumnsdiv").css("z-index",""),jQuery("#arp_allcolumnsdiv").css("position",""),jQuery(".arprice_top_belt_menu_option#all_color_options").css("box-shadow",""),jQuery(".arprice_top_belt_menu_option#all_color_options").css("-webkit-box-shadow",""),jQuery(".arprice_top_belt_menu_option#all_color_options").css("-moz-box-shadow",""),jQuery(".arprice_top_belt_menu_option#all_color_options").css("-o-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("box-shadow",""),jQuery("#arp_allcolumnsdiv").css("-webkit-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("-moz-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("-o-box-shadow",""),jQuery("#arp_allcolumnsdiv").css("float",""),jQuery("#arp_allcolumnsdiv").css("padding",""),jQuery("#arp_allcolumnsdiv").css("background",""),jQuery(".arprice_toggle_menu_options").click()},template:"<div class='popover tour arp_tour' style='margin:75px 0 0 -25px'><div class='arrow arrow_color'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button> <button id='arp_next_thiree' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"},{element:"#main_column_0",title:"Column level changes",content:"Hover on the column and you will see option bar on the top of the column. hover on the header area to see options for header part.",backdrop:!0,orphan:!0,placement:"right",onShown:function(){jQuery("#main_column_0").trigger("mouseover"),jQuery("#arp_allcolumnsdiv").addClass("no_arp_tour_hover"),jQuery("#main_column_0").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#main_column_0").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#main_column_0").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#main_column_0").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#main_column_0").css("z-index","999"),jQuery(".tour-step-background").removeAttr("style"),jQuery("body").scrollTop(100),jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour").find(".arrow").css("right","385px"),jQuery(".tour-backdrop.right").css("width","100%"))},onHide:function(){jQuery("#arp_allcolumnsdiv").removeClass("no_arp_tour_hover"),jQuery("#main_column_0").css("box-shadow",""),jQuery("#main_column_0").css("-webkit-box-shadow",""),jQuery("#main_column_0").css("-moz-box-shadow",""),jQuery("#main_column_0").css("-o-box-shadow",""),jQuery("#main_column_0").css("z-index","")},template:"<div style='margin:0 0 0 20px;'; class='popover tour arp_tour'><div class='arrow arrow_header'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button><button id='arp_next_four' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"},{element:"#main_column_0",title:"Pricing area change",content:"Set pricing and its interval from this area.",backdrop:!0,orphan:!0,placement:"right",onShown:function(){jQuery("#arp_allcolumnsdiv").addClass("no_arp_tour_hover"),jQuery("#main_column_0").addClass("ArpPricingTableColumnWrapper_inner_selected selected"),jQuery("#main_column_0").css("z-index","9999"),jQuery("#main_column_0").trigger("mouseover"),jQuery("#main_column_0").find(".arppricetablecolumnprice").trigger("mouseover"),jQuery(".tour-step-background").removeAttr("style"),jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour").find(".arrow").css("right","385px"),jQuery(".tour-backdrop.right").css("width","100%"))},onHide:function(){jQuery("#arp_allcolumnsdiv").removeClass("no_arp_tour_hover"),jQuery("#main_column_0").removeClass("ArpPricingTableColumnWrapper_inner_selected selected"),jQuery("#main_column_0").css("z-index","")},template:"<div style='margin:0 0 0 20px;'; class='popover tour arp_tour'><div class='arrow arrow_price'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button><button id='arp_next_four' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"},{element:"#preview_btn",title:"Preview button",content:"click 'Next' or 'Preview' button to view your applied changes in separate responsive tab.",backdrop:!0,orphan:!0,placement:"bottom",onNext:function(e){jQuery("#preview_btn").css("box-shadow",""),jQuery("#preview_btn").css("-webkit-box-shadow",""),jQuery("#preview_btn").css("-moz-box-shadow",""),jQuery("#preview_btn").css("-o-box-shadow",""),jQuery("#preview_btn").addClass("DisplayTourGuide"),jQuery("#preview_btn").trigger("click"),jQuery("#arp_allcolumnsdiv").addClass("no_arp_tour_hover"),e.end()},onShown:function(){jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour").find(".arrow").css("right","80%"),jQuery(".arp_tour").find(".arrow").css("left","unset !important")),jQuery("#preview_btn").addClass("DisplayTourGuide")},template:"<div style='margin:12px 0 0 -10px;' class='popover tour arp_tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button><button id='arp_next_preview' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"}]),setTimeout(function(){r.init(),r.start(),e>0&&r.goTo(e)},1e3)}function previewTour(e){var r=new Tour({storage:!1});r.addSteps([{element:"#mobile_icon",title:"Change views",content:"Hit Next or Mobile button to view pricing table preview in mobile view.",backdrop:!0,orphan:!0,placement:"bottom",onShown:function(){jQuery("#preview_btn").removeClass("DisplayTourGuide"),jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour_preview").find(".arrow").css("right","57%"),jQuery(".arp_tour_preview").find(".arrow").css("left","unset !important"))},onNext:function(){jQuery("#mobile_icon").trigger("click")},onPrev:function(e){EditorTourGuide(4),jQuery("#arp_pricing_table_preview .b-close").trigger("click"),e.end()},template:"<div style='margin-top:23px;' class='popover tour arp_tour_preview'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button><button id='arp_next_mobile' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"},{element:"#mobile_icon",title:"Mobile View",content:"Click 'Next' or close button to get back to editor area.",backdrop:!0,orphan:!0,placement:"bottom",onShown:function(){jQuery("#preview_btn").removeClass("DisplayTourGuide"),jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour_preview").find(".arrow").css("right","78%"),jQuery(".arp_tour_preview").find(".arrow").css("left","unset !important"))},onNext:function(e){AnimationTours(),jQuery("#arp_pricing_table_preview .b-close").trigger("click"),e.end()},onPrev:function(){jQuery("#computer_icon").trigger("click")},template:"<div style='margin-top:23px;' class='popover tour arp_tour_preview'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button><button id='arp_next_mobile' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"}]),setTimeout(function(){r.init(),r.start(),e>0&&r.goTo(e)},1e3)}function AnimationTours(){var e=new Tour({storage:!1});e.addSteps([{element:".arprice_options_menu_belt",title:"General settings",content:"All the template level options like column options, animation effects, tooltip settings etc can be changed in general setting area.",backdrop:!0,orphan:!0,placement:"bottom",onShown:function(){jQuery("#preview_btn").removeClass("DisplayTourGuide"),jQuery(".arprice_options_menu_belt").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_options_menu_belt").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_options_menu_belt").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_options_menu_belt").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arprice_options_menu_belt").css("margin","0 4px 0 4px");var e=jQuery("#column_options").width(),r=jQuery("#column_effects").width(),o=jQuery("#tootip_options").width(),t=jQuery("#custom_css_options").width(),a=jQuery("#toggle_content_options").width(),s=jQuery("#all_font_options").width();parseInt(e)+parseInt(r)+parseInt(o)+parseInt(t)+parseInt(a)+parseInt(s);jQuery(".arprice_options_menu_belt").css("background","#ffffff"),jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour_preview").css("right","20%"),jQuery(".arp_tour_preview").find(".arrow").css("right","60%"),jQuery(".arp_tour_preview").find(".arrow").css("left","unset !important"))},onHide:function(){jQuery(".arprice_options_menu_belt").css("box-shadow",""),jQuery(".arprice_options_menu_belt").css("-webkit-box-shadow",""),jQuery(".arprice_options_menu_belt").css("-moz-box-shadow",""),jQuery(".arprice_options_menu_belt").css("-o-box-shadow",""),jQuery(".arprice_options_menu_belt").css("margin",""),jQuery(".arprice_options_menu_belt").css("width",""),jQuery(".arprice_options_menu_belt").css("background",""),jQuery(".arp_tour_preview").css("margin-left","-25%"),jQuery(".arprice_top_belt_menu_right").show()},onNext:function(){jQuery("#arp_shortcode").css("background","transparent !important"),jQuery(".arp_shortcode_main.arp_shortcode").show(),jQuery("#save_btn").trigger("click"),jQuery("#arp_shortcode").trigger("click")},onPrev:function(e){jQuery(".arprice_options_menu_belt").css("box-shadow",""),jQuery(".arprice_options_menu_belt").css("-webkit-box-shadow",""),jQuery(".arprice_options_menu_belt").css("-moz-box-shadow",""),jQuery(".arprice_options_menu_belt").css("-o-box-shadow",""),jQuery(".arprice_options_menu_belt").css("margin",""),jQuery(".arprice_options_menu_belt").css("width",""),jQuery(".arprice_options_menu_belt").css("background",""),jQuery("#preview_btn").addClass("DisplayTourGuide"),jQuery("#preview_btn").trigger("click"),e.end()},template:"<div style='margin:21px 0 0 -25%;' class='popover tour arp_tour_preview'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_prev' data-role='prev'>Prev</button><button id='arp_next_effects' class='arp_tour_next' data-role='next'>Next</button><button class='arp_tour_end_tour' data-role='end'>End tour</button></div></div>"},{element:".arp_shortcode_main.arp_shortcode",title:"Finish",content:"Once you click save button all your changes will be saved as clone of existing template. you can right away copy short code and put it on page. </br>Thank you",backdrop:!0,orphan:!0,placement:"bottom",onShown:function(){jQuery(".arp_shortcode_main.arp_shortcode").show(),jQuery(".arp_shortcode_main.arp_shortcode").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arp_shortcode_main.arp_shortcode").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arp_shortcode_main.arp_shortcode").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arp_shortcode_main.arp_shortcode").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery(".arp_shortcode_main.arp_shortcode").css("background","transparent"),jQuery(".arp_shortcode_main.arp_shortcode").css("height","45px"),jQuery(".arp_shortcode_main.arp_shortcode").css("top","5px"),jQuery(window).width()>1599&&jQuery(".arp_shortcode_main.arp_shortcode").css("height","50px"),jQuery("body").hasClass("rtl")&&(jQuery(".arp_tour_preview").find(".arrow").css("right","57%"),jQuery(".arp_tour_preview").find(".arrow").css("left","unset !important"))},onHide:function(){jQuery(".arprice_options_menu_belt").css("box-shadow",""),jQuery(".arprice_options_menu_belt").css("-webkit-box-shadow",""),jQuery(".arprice_options_menu_belt").css("-moz-box-shadow",""),jQuery(".arprice_options_menu_belt").css("-o-box-shadow","")},onNext:function(e){e.end(),window.location.href="admin.php?page=arprice"},template:"<div style='margin:18px 0 0 0' class='popover tour arp_tour_preview'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='arp_tour_end_tour' data-role='next'>End tour</button></div></div>"}]),setTimeout(function(){e.init(),e.start()},1e3)}jQuery(document).ready(function(){var e=jQuery("#arp_tour_guide_start"),r=new Tour({storage:!1,onStart:function(){return e.addClass("disabled",!0)},onEnd:function(){e.removeClass("disabled",!0)}}),o="<div style='margin-top:18px;' class='popover tour arp_tour'>";o+="<div class='arrow'></div><h3 class='popover-title'></h3>",o+="<div class='popover-content'></div><div class='popover-navigation'>",o+="<button id='arp_next_one' class='arp_tour_next' style='margin:0 15px 15px;' data-role='next'>Next</button>",o+="<button class='arp_tour_end_tour' style='margin-right:15px;'  data-role='end'>End tour</button>",o+="</div>",o+="</div>",r.addSteps([{element:"#arp_template_2",title:"Choose your template",content:"Click 'Next' button to clone selected template.",placement:"bottom",backdrop:!0,orphan:!0,onShown:function(){jQuery(".arprice_select_template_container_item").css("z-index","0"),jQuery("#arp_template_2").trigger("click"),jQuery("#arp_template_2").css("background","#ffffff"),jQuery("#arp_template_2").css("box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_template_2").css("-webkit-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_template_2").css("-moz-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_template_2").css("-o-box-shadow","0 0 0 4px rgba(79, 213, 214,1)"),jQuery("#arp_template_2").css("z-index","999"),jQuery("#arp_template_2 .arprice_select_template_bg_img").addClass("arp_tour_guide_template_active"),jQuery(".tour-step-background").removeAttr("style");var e="left";jQuery("body").hasClass("rtl")&&(e="right"),jQuery(".popover.tour.arp_tour.tour-tour.tour-tour-0.fade.bottom.in").css(e,"891px"),jQuery(".popover.tour.arp_tour.tour-tour.tour-tour-0.fade.bottom.in").find(".arrow").css(e,"50%"),jQuery(window).width()>1599&&jQuery(".popover.tour.arp_tour.tour-tour.tour-tour-0.fade.bottom.in").css(e,"630px")},onHide:function(){jQuery(".arprice_select_template_container_item").css("z-index","999"),jQuery("#arp_template_2").css("background",""),jQuery("#arp_template_2").css("box-shadow",""),jQuery("#arp_template_2").css("-webkit-box-shadow",""),jQuery("#arp_template_2").css("-moz-box-shadow",""),jQuery("#arp_template_2").css("-o-box-shadow","")},onNext:function(e){jQuery(".arprice_select_template_container_item").css("z-index","999");var r=/(\?|\&)([^=]+)\=([^&]+)/g,o=jQuery("#arp_template_2").find("#clone_template").attr("onclick"),t="";o.replace(r,function(e){""==t?t=e:t+=e});var t=t.substr(0,t.length-1);t=t.replace("?page=arprice","");var a=t+"&tour_guid=true",s="window.location.href='"+window.location.href+a+"'";jQuery("#arp_template_2").find("#clone_template").attr("onclick",s),jQuery("#arp_template_2").find("#clone_template").trigger("click"),e.end()},template:o}]),r.init();var t=/(tour_guid=true)/gi,a=window.location.href;t.test(a)&&EditorTourGuide(0),jQuery(".arp_tour_guide_start_model").click(function(){var e=jQuery("#ajaxurl").val(),o=jQuery(this).attr("id");jQuery.ajax({url:e,type:"POST",data:"action=update_arp_tour_guide_value&arp_tour_guide_value="+o,success:function(e){"1"==e&&(jQuery("#arp_tour_guide_start").trigger("click"),jQuery("#arp_tour_guide_model").removeClass("arp_active"),r.start())}})}),jQuery(document).on("click","#arp_tour_guide_start",function(e){e.preventDefault(),jQuery(".arprice_download_sample_container").hasClass("arp_active")?(jQuery(".arprice_download_sample_container").removeClass("arp_active"),jQuery(".arprice_select_template_container").addClass("arp_active"),jQuery(".arprice_select_template_container.arp_active").find(".arprice_select_template_list_container").show()):(jQuery(".arprice_new_template_box.arp_create_new").trigger("click"),jQuery(".arprice_select_template_container_item").css("z-index","0")),jQuery("html").scrollTop(500),jQuery(this).hasClass("disabled")||r.restart()});var s=jQuery("#arp_tour_guide_value").val();"yes"==s&&setTimeout(function(){jQuery("#arp_tour_guide_model").addClass("arp_active")},1e3)}),jQuery(document).on("click","#arp_tour_guide_start_no",function(){jQuery("#arp_tour_guide_model").removeClass("arp_active")}),jQuery(document).on("click",'.arp_modal_close_btn[data-id="arp_tour_guide_start_no"]',function(){var e=jQuery("#ajaxurl").val(),r=jQuery(this).attr("data-id");jQuery.ajax({url:e,type:"POST",data:"action=update_arp_tour_guide_value&arp_tour_guide_value="+r,success:function(e){"1"==e&&(jQuery("#arp_tour_guide_start").trigger("click"),jQuery("#arp_tour_guide_model").removeClass("arp_active"),tour.start())}})});