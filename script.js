var button = $(,.)

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({left: "+=50"}, 1500)
}