$(document).ready(function(){
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    //const likingSemicolons = $("input:radio[name=semicolons]:checked").val();
    //print likingSemicolons;
    const pets = $("select#pet").val();
    const semicolons= $("input:radio[name=semicolon]:checked").val();
    const sing = $("select#sing").val();
    const games = $("select#games").val();
    const breakfast = $("select#breakfast").val();


    // if (pets === "Reptiles"); {
    //   $('#python').show()
    //   console.log('printing python');
    // }
    
    if (games === "yes"); {
      $('Csharp').show()
      console.log('showing C#');
    }
   
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

    if (semicolons === 'yes') {
      $('#Csharp').show();
      console.log("printing semicolon")
    }

  });
  console.log("testing");
});