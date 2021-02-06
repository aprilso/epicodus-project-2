$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    const name =$("select#name").val();
    const pets = $("select#pet").val();
    const semicolons= $("input:radio[name=semicolon]:checked").val();
    const sing = $("input:radio[name=sing]:checked").val();
    const games = $("input:radio[name=games]:checked").val();
    const breakfast = $("select#breakfast").val();


    if (semicolons === "no")  {
      $('#Csharp').hide();
      $('#javascript').hide();  
      $('#python').show();
    } else if (games === "yes" && semicolons === "yes") {
      $('#javascript').hide();  
      $('#python').hide();
      $('#Csharp').show();
    } else {
      $('#Csharp').hide();
      $('#python').hide();
      $('#javascript').show();
    }
  });
});