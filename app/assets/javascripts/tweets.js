// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $("#create-tweet").on("click", function(event){

  var url = $(this).attr('href');
  $.ajax({
    url:'/tweets', 
    method:'POST',
    data:{},
    dataType:'html',
  }).done(function(response){
  });
  });
});
