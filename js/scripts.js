var translate = function(sentence) {
  var newSentence = (sentence.replace(/ /g, "")).split("");
  console.log(newSentence);

  var newSentenceLength = newSentence.length;
  var lengthSquareRoot = Math.ceil(Math.sqrt(newSentenceLength));

  var emptyArray = [];
    for (var i = 0; i < lengthSquareRoot; i +=1) {
      for (var index = i; index < newSentenceLength; index+=lengthSquareRoot) {
        emptyArray.push(newSentence[index]);
      }
    }

  var arrayToSentence = emptyArray.join("");
  var seperatedSentence = arrayToSentence.match(/.{1,5}/g);
  var finalSentence = seperatedSentence.join(" ");

  console.log(lengthSquareRoot);
  return finalSentence;
}





$ (document).ready(function() {
  $("form#crypto").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentence").val();
    var result = translate(userInput);

    $("#results").text(result);
  });
});
