
function recalculate(){
  // These constants
  var additionalReps = 200;

  // These from JSON:
  var ethPrice = Number($('#eth-price').text()).toFixed(2);
  var price = Number($('#price').text()).toFixed(2);
  
  // These from user:
  var amntSel = $('#amount').val();
  var amnt = 100;
  if(amntSel==1){
     amnt = 500;
  }else if(amntSel==2){
     amnt = 1000;
  }

  var futurePrice = $('#future-price').val();
  var maxReturnLoss = (amnt + additionalReps) * futurePrice;

  // Set text vars
  var costInEth = ((amnt * 1.0) / 100.0);
  var cost = costInEth * ethPrice;
  //var currentPriceMinusOne = price - 1.0;    // TODO under
  var currentPriceMinusOne = futurePrice;
  var currentDiff = price - futurePrice;
  var losses = (amnt * (price - futurePrice));

  if(losses>maxReturnLoss){
     losses = maxReturnLoss;
  }

  $('.rep-count').text(amnt);
  $('.rep-price').text('$' + price);
  $('.ins-cost').text('$' + costInEth);
  $('.current-minus-one').text('$' + currentPriceMinusOne);
  $('.current-diff').text('$' + currentDiff);
  $('.return-losses').text('$' + losses);
  $('.additional-reps').text(additionalReps);

  // 1 - future price
  $('#future-price-edit').val('$' + futurePrice);

  // 2 - cost
  cost = Number(cost).toFixed(2);
  $('#cost').val('$' + cost);

  // 3 - losses
  if(losses<=0.0){
     losses = 0.0;
  }
  losses = Number(losses).toFixed(2);
  $('#losses').val('$' + losses);

  // 4 - saving 
  var savings = (losses - cost);
  if(savings<=0.0){
     savings = 0.0;
  }
  savings = Number(savings).toFixed(2);
  $('#savings').val('$' + savings);
}

function showParagraphs(){
  var amntSel = $('#amount').val();
  if(amntSel==0){
     $("#std-contract").show();
     $("#fiat-contract").hide();
     $("#grand-contract").hide();
  }else if(amntSel==1){
     $("#std-contract").hide();
     $("#fiat-contract").show();
     $("#grand-contract").hide();
  }else if(amntSel==2){
     $("#std-contract").hide();
     $("#fiat-contract").hide();
     $("#grand-contract").show();
  }
}

$("#future-price").on("change",function(e) {
  e.preventDefault();
  recalculate();
});

$("#future-price").on("input",function(e) {
  e.preventDefault();
  recalculate();
});

$("#amount").on("change",function(e) {
  e.preventDefault();
  recalculate();

  // enable/hide paragraphs
  showParagraphs();
});


$(document).ready(function() {
  recalculate();
  showParagraphs();
});
