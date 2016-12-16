var size = 3
var split = "-"
var x = "X"
var o = "O"
var nothing = ""
var board = new Array(size)
for (r = 0; r < size; r++){
	board[r] = new Array(size)
	for (c = 0; c < size; c++){
		board[r][c] = nothing
	}
}
function placement(IDstring, piece){
	
	if((piece === x) || piece === o){
		var row
		var coloumn
		var array = IDstring.split(split)
		
		row = array[0]
		coloumn = array[1]
		board[row][coloumn] = piece
	}	
}
function checkSpace(rowNum, colNum){
	let getBox = board[rowNum][colNum]
if (getBox === nothing){
	return true 
}
else{
	return false
}
}
function getRow(rowNum){
	return board[rowNum]
}
function checkWin(list, piece){
	for (let c = 0; c <= list.length - 3; c++){
		if (list[c] === piece &&
		    list[c+1] === piece &&
			list[c+2] === piece){
			return true
		}
	}
	return false	
}
function checkWinRows(piece){
	for(let r = 0; r < size; r++){
		if (checkWin(getRow(r), piece)){
			return true
		}
		return false
	}
}
function checkWinCols(piece){
	for (let c = 0; c < size; c++){
		if (checkWin(getCol(c), piece)){
			return true
		}
	}	return false
}
function checkWinDiags(piece){
	let diagOne = getDiags()[0]
	let diagTwo = getDiags()[1]
		return (checkWin(diagOne, piece) || (checkWin(diagTwo, piece)))
}

function getDiags(){
	Diags = new Array(2)
	Diags[0] = new Array(size)
	Diags[1] = new Array(size)
	for(let d = 0; d < size; d++){
		Diags[0][d] = board[d][d]
	}
	for(let d = size -1; d >= 0; d--){
		Diags[1][d] = board[d][size-d-1]
		}
	return Diags
}
function winGame(piece){
	return checkWinCols(piece) || checkWinRows(piece) || checkWinDiags(piece) 
}
function endGame(){
	console.log("test")
	if (winGame("X")){
		alert ("X has Won!!!")
		window.location.reload();
	}
	else if (winGame("O")){
		alert ("O has Won!!!")
		window.location.reload();
	}
	else if (fullBoard()){
		alert ("It's a Draw!!!")
		window.location.reload();
	}
}
function fullBoard(){
	return (storage === size * size)
}


function getCol(colNum){
	var col = []
	for(r = 0; r < size; r++){
		col.push(board[r][colNum]);
	} 
	return col
}

