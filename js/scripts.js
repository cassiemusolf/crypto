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


  console.log(lengthSquareRoot);
  return emptyArray;
}





$ (document).ready(function() {
  $("form#crypto").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentence").val();
    var result = translate(userInput);

    $("#results").text(result);
  });
});
