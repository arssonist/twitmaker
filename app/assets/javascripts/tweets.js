// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){
  $("#create-tweet").on("click", function(event){
    var newTweet = $('#new_tweet').serialize();
    console.log(newTweet);
    event.preventDefault();
  var url = $(this).attr('href');
  $.ajax({
    url:'/tweets',
    method:'POST',
    data:{tweet:message},
    dataType:'html',
  }).done(function(response){
    console.log(response);
  });
})
})
