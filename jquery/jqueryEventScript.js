// $('h1').click(function(){
//   $(this).text("I was changed")
// })

// Key Presses
// 13 = enter
// $('input').eq(0).keypress(function(event){
//   if(event.which === 13){
//     $('h3').toggleClass('turnBlue');
//   }
// })

//on()
// $('h1').on('dblclick', function(){
//   $(this).toggleClass('turnBlue');
// })
//
// $('h1').on('mouseeneter', function(){
//   $(this).toggleClass('turnBlue');
// })

// Events and Animations
$('input').eq(1).on('click',function(){
  $('.container').fadeOut(3000)
})
