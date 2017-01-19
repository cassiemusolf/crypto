var translate = function(sentence) {
  return sentence;
}





$ (document).ready(function() {
  $("form#crypto").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentence").val();
    var result = translate(userInput);

    $("#results").text(result);
  });
});
