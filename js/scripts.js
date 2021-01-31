$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    //const likingSemicolons = $("input:radio[name=semicolons]:checked").val();
    //print likingSemicolons;
    const pets = $("select#pet").val();
    const semicolons= $("input:radio[name=semicolon]:checked").val();
    const sing = $("input:radio[name=sing]:checked").val();
    const games = $("input:radio[name=games]:checked").val();
    const breakfast = $("select#breakfast").val();


    if (semicolons === "no" || semicolons === "neutral")  {
      $('#python').show();
    } else if (games === "yes" && semicolons === "yes") {
      $('#Csharp').show();
    } else {
      $('#javascript').show();
    }

    // if (semicolons === 'neutral' && pets !== 'Reptiles') {
    //   $('#javascript').show();
   
    //const beverage = $("#beverage").val();

    // points system
    // if answers = x, 
    // if semicolons = no, then Python
    // if semicolons = neutral, then JS
    // if semicolons = yes, then C#
    // 
    // Do 
    // video games = yes, then C#
    // no 

    // $("#result").text(answer);

 

    

  });
  console.log("testing");
});