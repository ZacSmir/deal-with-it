var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({top: "+275"}, 1500)
}