
 
$('#dropdown a').click(function () {  

  var val = parseInt($(this).attr("value"));
  if (val == 1) {

    $('#status').removeClass();
    $('#status').addClass("btn btn-success");
    $('#status').text ("Verified");
    $('#bar').removeClass("btn-success btn-warning btn-danger");
    $('#bar').addClass("btn-success");
    
  } else if (val == 2) {
    $('#status').removeClass();
    $('#status').addClass("btn btn-danger");
    $('#status').text ("Unverified");
    $('#bar').removeClass("btn-success btn-warning btn-danger");
    $('#bar').addClass("btn-danger");
  }else if (val == 3) {
    $('#status').removeClass();
    $('#status').addClass("btn btn-warning");
    $('#status').text ("Pending");
    $('#bar').removeClass("btn-success btn-warning btn-danger");
    $('#bar').addClass("btn-warning");
  }
});