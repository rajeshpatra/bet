// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .




jQuery(document).ready(function(){
    // $('#teama, #teamb').hide();
    jQuery('#teama, #teamb').live('click', function(event) {        
        jQuery('#f1').toggle('show');
        jQuery('#f2').toggle('show');            
    });
});


// $(document).ready(function () {
//     $("#event_free").click(function () {
//         if ($(this).is(":checked")) {
//             $("#event_price").prop("disabled", true);
//         } else {
//             $("#event_price").prop("disabled", false);
//         }
//     });
// });

// $(function(){
//     $("#teama, #teamb").change(function(){
//         $("#f1, #f2").val("").attr("readonly",true);
//         if($("#teama").is(":checked")){
//             $("#f1").removeAttr("disabled");
//             $("#f1").focus();
//         }
//         else if($("#teamb").is(":checked")){
//             $("#f2").removeAttr("disabled");
//             $("#f2").focus();   
//         }
//     });
// });