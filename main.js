// this is where you write your javascript

$(window).keydown(function(e){

  var key = e.key;

  console.log(key);

  if (key == "a") {
    $(".message").html("Apple");
  }
  else if (key == "b") {
    $(".message").html("Bagpipes");
  }
  else if (key == "c") {
    $(".message").html("Cadillac");
  } 

});



