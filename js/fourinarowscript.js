const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");

let redScore = 0;
let yellowScore = 0;
let gameOver = false;

function updateScoreDisplay() {
    document.getElementById("redScore").textContent = redScore;
    document.getElementById("yellowScore").textContent = yellowScore;
}

function resetGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    map = Array.from({ length: 6 }, () => Array(7).fill(' '));
    DrawMap(map);
    updateScoreDisplay();
    gameOver = false;
}

document.getElementById("resetButton2").addEventListener("click", resetGame);

function DrawGrid() {
    for (var i = 1; i < 7; i++) {
        DrawLine(0, i * 70, 490, i * 70);
        DrawLine(i * 70, 0, i * 70, 490);
    }
}

function DrawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function DrawMap(map) {
    ctx.fillStyle = "deepskyblue";
    ctx.fillRect(0, 70, 490, 490);
    ctx.fillStyle = "bisque";
    ctx.fillRect(0, 0, 490, 70);
    DrawGrid();
    for (var x = 0; x < 7; x++) {
        for (var y = 0; y < 6; y++) {
            ctx.beginPath();
            ctx.arc((x * 70) + 35, (y * 70) + 105, 25, 0, 2 * Math.PI);
            if (map[y][x] === 'R') {
                ctx.fillStyle = "red";
                ctx.fill();
            } else if (map[y][x] === 'Y') {
                ctx.fillStyle = "yellow";
                ctx.fill();
            } else {
                ctx.fillStyle = "white";
                ctx.fill();
            }
        }
    }
}

function Win(map, player) {
    for (var y = 0; y < 6; y++) {
        for (var x = 0; x < 4; x++) {
            if (map[y][x] === player && map[y][x + 1] === player && map[y][x + 2] === player && map[y][x + 3] === player) {
                return true;
            }
        }
    }
    for (var x = 0; x < 7; x++) {
        for (var y = 0; y < 3; y++) {
            if (map[y][x] === player && map[y + 1][x] === player && map[y + 2][x] === player && map[y + 3][x] === player) {
                return true;
            }
        }
    }
    for (var y = 0; y < 3; y++) {
        for (var x = 0; x < 4; x++) {
            if (map[y][x] === player && map[y + 1][x + 1] === player && map[y + 2][x + 2] === player && map[y + 3][x + 3] === player) {
                return true;
            }
        }
    }
    for (var y = 3; y < 6; y++) {
        for (var x = 0; x < 4; x++) {
            if (map[y][x] === player && map[y - 1][x + 1] === player && map[y - 2][x + 2] === player && map[y - 3][x + 3] === player) {
                return true;
            }
        }
    }
    return false;
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function getColumn(x) {
    return Math.floor(x / 70);
}

function dropPiece(map, column, player) {
    for (var y = 5; y >= 0; y--) {
        if (map[y][column] === ' ') {
            map[y][column] = player;
            return true;
        }
    }
    return false;
}

canvas.addEventListener('click', function(evt) {
    if (gameOver) return;
    var mousePos = getMousePos(canvas, evt);
    var column = getColumn(mousePos.x);
    if (dropPiece(map, column, player)) {
        DrawMap(map);
        if (Win(map, player)) {
            if(player==='R')
            {
                redScore++;
            }
            if(player==='Y')
            {
                yellowScoreScore++;
            }
            updateScoreDisplay();
            alert(player + " wins!");
            gameOver = true;
            return;
        }
        player = (player === 'R') ? 'Y' : 'R';
    }
});

var map = Array.from({ length: 6 }, () => Array(7).fill(' '));
var player = 'R';
DrawMap(map);
