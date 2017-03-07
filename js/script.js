$(document).ready(function(){
  console.log('JQuery is ready');

  var url = "http://en.wikipedia.com/w/api.php?action=opensearch&search=" + searchTerm + "&format=jsoncallback=?";
  var searchTerm = $('#searchTerm').val();

  $('#search').on('click',function(){
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: "json",
      success: function(data){

      },
      error: function(errorMessage){
        alert('error');
      }
    });
  });


})