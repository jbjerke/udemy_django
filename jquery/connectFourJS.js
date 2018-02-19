// Needed functions
// What is button's color (given row and col)
// Change button's color (given row and col)
// What is the bottom-most grey for that col (given col)(return row)
// Check for four in a row?
// Check for horizontal
// Check for diagonal win
// Check for vertical win
// Check for end game: someone wins or board is full
var table = $('table tr');

function reportWin(row, col){
  console.log("You won starting at this row, col");
  console.log(row);
  console.log(col);
}

function buttonColor(row, col){
  return table.eq(row).find('td').eq(col).find('button').css('background-color');
}

function changeButtonColor(row, col, color){
  return table.eq(row).find('td').eq(col).find('button').css('background-color', color);
}

function checkBottom(col){
  var bttnCr;
  for(var row = 5; row > -1; row--){
    bttnCr = buttonColor(row, col);
    if(bttnCr === 'rgb(112, 112, 112)'){
      return row;
    }
  }
}

function checkColorMatch(one, two, three, four){
  return(one === two && one === three && one === four && one !== 'rgb(112, 112, 112)' && one !== undefined);
}

function checkWin(){
  return (checkVerticalWin() || checkHorizontalWin() || checkDiagWin());
}

function checkVerticalWin(){
  for(var col = 0; col < 7; col++){
    for(var row = 0; row < 3; row++){
      if(checkColorMatch(buttonColor(row,col), buttonColor(row+1,col), buttonColor(row+2,col), buttonColor(row+3,col))){
        return true;
      }
    }
  }
  return false;
}

function checkHorizontalWin(){
  for(var row = 0; row < 6; row++){
    for(var col = 0; col < 4; col++){
      if(checkColorMatch(buttonColor(row,col), buttonColor(row,col+1), buttonColor(row,col+2), buttonColor(row,col+3))){
        return true;
      }
    }
  }
  return false;
}

function checkDiagWin(){
  for(var row = 0; row < 6; row++){
    for(var col = 0; col < 4; col++){
      if(row + 3 < 6){
        if(checkColorMatch(buttonColor(row,col), buttonColor(row+1,col+1), buttonColor(row+2,col+2), buttonColor(row+3,col+3))){
          return true;
        }
      } else if(row - 3 > -1){
        if(checkColorMatch(buttonColor(row,col), buttonColor(row-1,col+1), buttonColor(row-2,col+2), buttonColor(row-3,col+3))){
          return true;
        }
      }
    }
  }
  return false;
}

function theEnd(who){
  $('h1').text(who + " has won! Refresh your browser to play again!")
  $('h2').fadeOut('fast');
  $('h3').fadeOut('fast');
}


// Get Player One's name
var playerOne = prompt("Player One enter your name, you will be blue");
var playerOneColor = 'rgb(66, 134, 244)';

// Get Player Two's name
var playerTwo = prompt("Player Two enter your name, you will be two");
var playerTwoColor = 'rgb(244, 65, 65)';

// Begin checking for a win
var whoseTurn = 1;
var who = playerOne;
var whoseclr = playerOneColor;

$('h3').text(playerOne + ": it is your turn, please pick a column to drop your blue chip.")

$('.board button').on('click', function(){
  var col = $(this).closest('td').index();

  var row = checkBottom(col);

  changeButtonColor(row, col, whoseclr);

  if(checkWin()){
    theEnd(who);
  }

  whoseTurn *= -1;

  if(whoseTurn === 1){
    who = playerOne;
    $('h3').text(who + ": it is your turn, please pick a column to drop your blue chip.")
    whoseclr = playerOneColor;
  } else{
    who = playerTwo;
    $('h3').text(who + ": it is your turn, please pick a column to drop your red chip.")
    whoseclr = playerTwoColor;
  }
})
