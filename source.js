$(document).ready(function () {
	AOS.init();
    $(".terminostext").hide();
    $(".imgdown a").click(function() {
      if ( $( ".terminostext" ).is( ":hidden" ) ) {
        $( ".terminostext" ).slideDown( "slow" );
      } else {
        $( ".terminostext" ).slideUp();
      }
    });
});