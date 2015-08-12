$(document).ready(function() {
  $("#render").on("click", function() {
    user1 = $("#input_one").val()
    user2 = $("#input_two").val()
    user3 = $("#input_three").val()
    user4 = $("#input_four").val()
    user5 = $("#input_five").val()
    user6 = $("#input_six").val()
    user7 = $("#input_seven").val()
    if(user1 === "" || user2 === "" || user3 === "" || user4 === "" || user5 === "" || user6 === "" || user7 === "") {
      console.log("cannot be nil")
    }
    else {
      $("#span_one").html(user1)
      $("#span_two").html(user2)
      $("#span_three").html(user3)
      $("#span_four").html(user4)
      $("#span_five").html(user5)
      $("#span_six").html(user6)
      $("#span_seven").html(user7)
      $("#render").css("display", "none")
      $("body").append("<div class='button' id='reset'>Reset</div>")
      $("#reset").on("click", function() {
        $("#span_one").html('<input type="text" placeholder="noun" id="input_one">')
        $("#span_two").html('<input type="text" placeholder="verb" id="input_two">')
        $("#span_three").html('<input type="text" placeholder="noun" id="input_three">')
        $("#span_four").html('<input type="text" placeholder="adjective" id="input_four">')
        $("#span_five").html('<input type="text" placeholder="adverb" id="input_five">')
        $("#span_six").html('<input type="text" placeholder="verb" id="input_six">')
        $("#span_seven").html('<input type="text" placeholder="noun" id="input_seven">')
        $("#render").css("display", "inline-block");
        $("#reset").remove();
      })
    }
  })
  $(".clickable").on("click", function(event) {
    console.log($(event.target).html())
    word_type = $(event.target).html()
    $(event.target).html("<input type='text' placeholder="+word_type+" class='input_field'>")
    $(".input_field").keypress(function(event) {
      if(event.which == 13) {
        user_value = $(".input_field").val()
        $(event.target).parent().html(user_value)
      }
    })
  })
})
