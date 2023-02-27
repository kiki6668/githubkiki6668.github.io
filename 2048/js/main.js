let board = [];
let score = 0;
let hasConflicted = [];

let startx = 0;
let starty = 0;
let endx = 0;
let endy = 0;

$(document).ready(function () {

    prepareForMobile();
    newgame();
});

function prepareForMobile() {
    if (documentWidth > 500) {
        gridContainerWidth = 500;
        cellSapce = 20;
        cellSideLength = 100;

    }

    $('#grid-container').css('width', gridContainerWidth - 2 * cellSapce);
    $('#grid-container').css('height', gridContainerWidth - 2 * cellSapce);
    $('#grid-container').css('padding', cellSapce);
    $('#grid-container').css('border-radius', 0.02 * gridContainerWidth);

    $('.grid-cell').css('width', cellSideLength);
    $('.grid-cell').css('height', cellSideLength);
    $('.grid-cell').css('border-radius', 0.02 * cellSideLength);
}

//开始游戏
function newgame() {
    //初始化
    init();
    //随机初始化一个元素
    generateOneNumber();
    generateOneNumber();
}

function init() {

    //初始化16个div
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            //指定16个div的相对位置
            let gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css('top', getPosTop(i, j));
            gridCell.css('left', getPosLeft(i, j));
        }

    }


    //初始化每个div中的数值，以及是否为空的二维数组
    for (let i = 0; i < 4; i++) {
        board[i] = [];
        hasConflicted[i] = [];
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }
    //更新数值view
    updateBoardView();

    score = 0;
}

function updateBoardView() {
    //清空16个div的样式
    $(".number-cell").remove();
    //重新设置初始化的样式
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>');
            //选择指定的div
            let theNumberCell = $("#number-cell-" + i + "-" + j);
            //如果div不包含值直接设置样式并且内容设置为空
            if (board[i][j] === 0) {
                theNumberCell.css('width', '0px');
                theNumberCell.css('height', '0px');
                theNumberCell.css('top', getPosTop(i, j) + cellSideLength * 0.5);
                theNumberCell.css('left', getPosLeft(i, j) + cellSideLength * 0.5);
                theNumberCell.text("");
            } else {
                //如果包含了值，则设置不同样式并且根据值的大小设置颜色
                theNumberCell.css('width', cellSideLength);
                theNumberCell.css('height', cellSideLength);
                theNumberCell.css('top', getPosTop(i, j));
                theNumberCell.css('left', getPosLeft(i, j));
                //根据值的大小设置颜色
                theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color', getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
            //所有的div都可以放置元素
            hasConflicted[i][j] = false;

        }

    }
    $('.number-cell').css('line-height', cellSideLength + 'px');
    $('.number-cell').css('font-size', 0.6 * cellSideLength + 'px');
}

function generateOneNumber() {
    //判断是否有空间产生新的值
    if (nospace(board)) {
        return false;
    }

    //随机生成div的坐标点
    let randx = parseInt(Math.floor(Math.random() * 4));
    let randy = parseInt(Math.floor(Math.random() * 4));
    let times = 0;
    //随机50次寻找一个值为空的div
    while (times < 50) {
        if (board[randx][randy] == 0)
            break;
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));
        times++;
    }
    //如果50次之后还是没找到就遍历16个div找到第一个值为空的div
    if (times === 50) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (board[i][j] === 0) {
                    randx = i;
                    randy = j;
                }
            }
        }
    }
    //随机生成2或者4
    let randNumber = Math.random() < 0.5 ? 2 : 4;
    board[randx][randy] = randNumber;
    //更改样式显示新生成的div中的值
    showNumber(randx, randy, randNumber);
    return true;
}

//监听键盘按键
$(document).keydown(function (event) {
    switch (event.keyCode) {
        //左键
        case 37:  //left
            event.preventDefault();
            if (moveLeft()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
            //上键
        case 38:  //up
            event.preventDefault();
            if (moveUp()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
            //右键
        case 39:  //right
            event.preventDefault();
            if (moveRight()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
            //下键
        case 40:   //down
            event.preventDefault();
            if (moveDown()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover()", 300);
            }
            break;
        default:
            break;

    }

});

//document.addEventListener('touchstart', function (event) {
//    event.preventDefault();
//    startx = event.touches[0].pageX;
//    starty = event.touches[0].pageY;
//});
//
//document.addEventListener();
//
//document.addEventListener('touchend', function (event) {
//
//    event.preventDefault();
//    endx = event.changedTouches[0].pageX;
//    endy = event.changedTouches[0].pageY;
//
//    let deltax = endx - startx;
//    let deltay = endy - starty;
//
//    if (Math.abs(deltax) < 0.3 * documentWidth && Math.abs(deltay) < 0.3 * documentWidth) {
//        return;
//    }
//    if (Math.abs(deltax) > Math.abs(deltay)) {
//        if (deltax > 0) {
//            if (moveRight()) {
//                setTimeout("generateOneNumber()", 210);
//                setTimeout("isgameover()", 300);
//            }
//
//        } else {
//            if (moveLeft()) {
//                setTimeout("generateOneNumber()", 210);
//                setTimeout("isgameover()", 300);
//            }
//
//        }
//    } else {
//        if (deltay > 0) {
//            if (moveDown()) {
//                setTimeout("generateOneNumber()", 210);
//                setTimeout("isgameover()", 300);
//            }
//
//        } else {
//
//            if (moveUp()) {
//                setTimeout("generateOneNumber()", 210);
//                setTimeout("isgameover()", 300);
//            }
//
//        }
//
//    }
//});

