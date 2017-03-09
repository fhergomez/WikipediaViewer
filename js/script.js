$(document).ready(function(){
  console.log('JQuery is ready');

  $('#search').on('click',function(){

    var searchTerm = $('#searchTerm').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        console.log(data);
        $('#output').html('');
        for (var i = 0; i < data[1].length - 1; i++) {
          console.log(data[1][i]);
          $('#output').prepend('<li><a href=' +  data[3][i] + '>' + data[1][i] + '</a><p>' + data[2][i] + '</p></li>');
        }


      },
      error: function(errorMessage){
        console.log(errorMessage);
      }
    });
  });


})