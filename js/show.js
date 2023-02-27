function showNumber(i,j,randNumber){
    let numberCell=$("#number-cell-"+ i +"-" + j);
    numberCell.css('background-color',getNumberBackgroundColor(randNumber));
    numberCell.css('color',getNumberColor(randNumber));
    numberCell.text(randNumber);

    //渐变渲染
    numberCell.animate({
        width:cellSideLength,
        height:cellSideLength,
        top:getPosTop(i,j),
        left:getPosLeft(i,j)
    },50);

}
function showMoveAnimation(fromx,fromy,tox,toy){
    let numberCell=$("#number-cell-"+fromx+"-"+fromy);
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);

}
function updateScore(score){
    $("#score").text(score);

}

