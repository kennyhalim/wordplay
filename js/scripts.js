$(document).ready(function(){
  $("form#inputs").submit(function(event){
    var sentence = $("input#sentence").val();



    var words = sentence.split(' ');
    var newWords = [];

    words.forEach(function(word){
      if (word.length >= 3){
        newWords.push(word);
      }
    })
    newWords = newWords.reverse();


    $("#output").text(newWords.join(' '));

    event.preventDefault();
  });
});
