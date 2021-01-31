$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    //const likingSemicolons = $("input:radio[name=semicolons]:checked").val();
    //print likingSemicolons;
    const name =$("select#name").val();
    const pets = $("select#pet").val();
    const semicolons= $("input:radio[name=semicolon]:checked").val();
    const sing = $("input:radio[name=sing]:checked").val();
    const games = $("input:radio[name=games]:checked").val();
    const breakfast = $("select#breakfast").val();

    $("#name").show()

    if (semicolons === "no" || semicolons === "neutral")  {
      $('#python').show();
    } else if (games === "yes" && semicolons === "yes") {
      $('#Csharp').show();
    } else {
      $('#javascript').show();
    }


  });
});