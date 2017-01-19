var translate = function(sentence) {
  var newSentence = (sentence.replace(/ /g, "")).split("");
  console.log(newSentence);

  if (newSentence.length === 1) {
    return newSentence;
  } else if (newSentence.length > 1 && newSentence.length <= 4) {
    newSentence = newSentence[0] + newSentence[2] + newSentence[1] + newSentence[3];
  }

  return newSentence;
}





$ (document).ready(function() {
  $("form#crypto").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentence").val();
    var result = translate(userInput);

    $("#results").text(result);
  });
});
