jQuery(document).on("click","#arprice_lite .arp_import_export_btn_2",function(){var e=jQuery(this).data("id");e&&(jQuery("#arp_loader_div").show(),this.disabled=!0,jQuery.ajax({url:ajaxurl,type:"POST",data:"action=arp_import_lite_table&template_id="+e,success:function(e){jQuery("#arp_loader_div").hide(),this.disabled=!1,0==e?jQuery("#import_lite_template_error_message").show():window.location.href=e}}))});