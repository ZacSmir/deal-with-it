var button = $(".deal-with-it-button")

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({top: "+280"}, 1500)
}

var otherbutton = d