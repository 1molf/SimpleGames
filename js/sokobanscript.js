		const canvas = document.getElementById("myCanvas");
                    const ctx = canvas.getContext("2d");

                    function DrawGrid()
                    {
                        for(var i=1; i<9 ; i++)
                        {
                            DrawLine(0,i*70,630,i*70);
                            DrawLine(i*70,0,i*70,630);
                        }
                    }
                    
                    function DrawLine(x1,y1,x2,y2)
                    {
                        ctx.beginPath();
                        ctx.lineWidth = 2;
                        ctx.moveTo(x1,y1);
                        ctx.lineTo(x2,y2);
                        ctx.stroke();
                    }

                    function DrawMap(map)
                    {
                        for(var x=0 ; x<9 ; x++)
                        {
                            for(var y=0; y<9 ; y++)
                            {
                                if(map[y][x] == 'P')
                                {
                                    ctx.fillStyle = "lawngreen";
                                    ctx.fillRect(x*70,y*70,70,70);
                                    DrawPlayer((x*70),(y*70));
                                }
                                else if(map[y][x] == ' ')
                                {
                                    ctx.fillStyle = "dimgrey";
                                    ctx.fillRect(x*70,y*70,70,70);
                                }
                                else if(map[y][x] == 'W')
                                {
                                    ctx.fillStyle = "darkslategrey";
                                    ctx.fillRect(x*70,y*70,70,70);
                                }
                                else if(map[y][x] == '.')
                                {
                                    ctx.fillStyle = "lawngreen";
                                    ctx.fillRect(x*70,y*70,70,70);
                                }
                                else if(map[y][x] == 'O')
                                {
                                    ctx.fillStyle = "lawngreen";
                                    ctx.fillRect(x*70,y*70,70,70);
                                    DrawGoal((x*70),(y*70))
                                }
                                else if(map[y][x] == 'X')
                                {
                                    ctx.fillStyle = "darkgoldenrod";
                                    ctx.fillRect(x*70,y*70,70,70);
                                    DrawBox(x*70,y*70);
                                }
                                else if(map[y][x] == '/')
                                {
                                    ctx.fillStyle = "lightseagreen";
                                    ctx.fillRect(x*70,y*70,70,70);
                                    DrawBox(x*70,y*70);
                                }
                                else if(map[y][x] == '?')
                                {
                                    ctx.fillStyle = "lawngreen";
                                    ctx.fillRect(x*70,y*70,70,70);
                                    DrawGoal((x*70),(y*70));
                                    DrawPlayer((x*70),(y*70));
                                }
                            }
                        }
                    }
                    
                    function DrawPlayer(x,y)
                    {
                        x += 35;
                        y += 35;
                        ctx.beginPath();
                        ctx.lineWidth = 2;
                        ctx.arc(x,y-15,15,0 * Math.PI, 2 * Math.PI, true);
                        ctx.stroke();
                        DrawLine(x,y,x,y+15);
                        DrawLine(x-20,y+2,x+20,y+2);
                        DrawLine(x,y+15,x-5,y+30);
                        DrawLine(x,y+15,x+5,y+30);
                    }
                    
                    function DrawBox(x,y)
                    {
                        ctx.lineWidth = 2;
                        ctx.strokeRect(x+5,y+5,60,60);
                        DrawLine(x+5,y+5,x+65,y+65);
                        DrawLine(x+65,y+5,x+5,y+65);
                        
                    }

                    function DrawGoal(x,y)
                    {
                        ctx.beginPath();
                        ctx.lineWidth = 2;
                        ctx.arc(x+35,y+35,25,0,2*Math.PI,true);
                        ctx.fillStyle = "lightskyblue";
                        ctx.stroke();
                        ctx.fill();
                    }

                    var allmap = 
                    [
                        [
                            [' ',' ','W','W','W',' ',' ',' ',' '],
                            [' ',' ','W','O','W',' ',' ',' ',' '],
                            [' ',' ','W','.','W','W','W','W',' '],
                            ['W','W','W','X','.','X','O','W',' '],
                            ['W','O','.','X','P','W','W','W',' '],
                            ['W','W','W','W','X','W',' ',' ',' '],
                            [' ',' ',' ','W','O','W',' ',' ',' '],
                            [' ',' ',' ','W','W','W',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            ['W','W','W','W','W',' ',' ',' ',' '],
                            ['W','.','.','P','W',' ',' ',' ',' '],
                            ['W','.','X','X','W',' ','W','W','W'],
                            ['W','.','X','.','W',' ','W','O','W'],
                            ['W','W','W','.','W','W','W','O','W'],
                            [' ','W','W','.','.','.','.','O','W'],
                            [' ','W','.','.','.','W','.','.','W'],
                            [' ','W','.','.','.','W','W','W','W'],
                            [' ','W','W','W','W','W',' ',' ',' ']
                        ],
                        [
                            [' ','W','W','W','W',' ',' ',' ',' '],
                            ['W','W','.','.','W',' ',' ',' ',' '],
                            ['W','P','X','.','W',' ',' ',' ',' '],
                            ['W','W','X','.','W','W',' ',' ',' '],
                            ['W','W','.','X','.','W',' ',' ',' '],
                            ['W','O','X','.','.','W',' ',' ',' '],
                            ['W','O','O','/','O','W',' ',' ',' '],
                            ['W','W','W','W','W','W',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            [' ','W','W','W','W',' ',' ',' ',' '],
                            [' ','W','P','.','W','W','W',' ',' '],
                            [' ','W','.','X','.','.','W',' ',' '],
                            ['W','W','W','.','W','.','W','W',' '],
                            ['W','O','W','.','W','.','.','W',' '],
                            ['W','O','X','.','.','W','.','W',' '],
                            ['W','O','.','.','.','X','.','W',' '],
                            ['W','W','W','W','W','W','W','W',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            [' ',' ','W','W','W','W','W','W',' '],
                            [' ',' ','W','.','.','.','.','W',' '],
                            ['W','W','W','X','X','X','.','W',' '],
                            ['W','P','.','X','O','O','.','W',' '],
                            ['W','.','X','O','O','O','W','W',' '],
                            ['W','W','W','W','.','.','W',' ',' '],
                            [' ',' ',' ','W','W','W','W',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            [' ',' ','W','W','W','W','W',' ',' '],
                            ['W','W','W','.','.','P','W',' ',' '],
                            ['W','.','.','X','O','.','W','W',' '],
                            ['W','.','.','O','X','O','.','W',' '],
                            ['W','W','W','.','/','X','.','W',' '],
                            [' ',' ','W','.','.','.','W','W',' '],
                            [' ',' ','W','W','W','W','W',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            [' ',' ','W','W','W','W',' ',' ',' '],
                            [' ',' ','W','O','O','W',' ',' ',' '],
                            [' ','W','W','.','O','W','W',' ',' '],
                            [' ','W','.','.','X','O','W',' ',' '],
                            ['W','W','.','X','.','.','W','W',' '],
                            ['W','.','.','W','X','X','.','W',' '],
                            ['W','.','.','P','.','.','.','W',' '],
                            ['W','W','W','W','W','W','W','W',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            ['W','W','W','W','W','W','W','W',' '],
                            ['W','.','.','W','.','.','.','W',' '],
                            ['W','P','X','O','O','X','.','W',' '],
                            ['W','.','X','O','/','.','W','W',' '],
                            ['W','.','X','O','O','X','.','W',' '],
                            ['W','.','.','W','.','.','.','W',' '],
                            ['W','W','W','W','W','W','W','W',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            ['W','W','W','W','W','W',' ',' ',' '],
                            ['W','.','.','.','.','W',' ',' ',' '],
                            ['W','.','X','X','X','W','W',' ',' '],
                            ['W','.','.','W','O','O','W','W','W'],
                            ['W','W','.','.','O','O','X','.','W'],
                            [' ','W','.','P','.','.','.','.','W'],
                            [' ','W','W','W','W','W','W','W','W'],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            ['W','W','W','W','W','W','W',' ',' '],
                            ['W','O','O','X','O','O','W',' ',' '],
                            ['W','O','O','W','O','O','W',' ',' '],
                            ['W','.','X','X','X','.','W',' ',' '],
                            ['W','.','.','X','.','.','W',' ',' '],
                            ['W','.','X','X','X','.','W',' ',' '],
                            ['W','.','.','W','P','.','W',' ',' '],
                            ['W','W','W','W','W','W','W',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            [' ','W','W','W','W','W',' ',' ',' '],
                            [' ','W','.','P','.','W','W','W',' '],
                            ['W','W','.','W','X','.','.','W',' '],
                            ['W','.','/','O','.','O','.','W',' '],
                            ['W','.','.','X','X','.','W','W',' '],
                            ['W','W','W','.','W','O','W',' ',' '],
                            [' ',' ','W','.','.','.','W',' ',' '],
                            [' ',' ','W','W','W','W','W',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            ['W','W','W','W','W','W',' ',' ',' '],
                            ['W','.','.','.','.','W',' ',' ',' '],
                            ['W','.','X','.','P','W',' ',' ',' '],
                            ['W','W','/','.','.','W',' ',' ',' '],
                            ['W','.','/','.','W','W',' ',' ',' '],
                            ['W','.','/','.','W',' ',' ',' ',' '],
                            ['W','.','/','.','W',' ',' ',' ',' '],
                            ['W','.','O','.','W',' ',' ',' ',' '],
                            ['W','W','W','W','W',' ',' ',' ',' ']
                        ],
                        [
                            [' ',' ','W','W','W','W',' ',' ',' '],
                            [' ',' ','W','.','.','W',' ',' ',' '],
                            ['W','W','W','X','.','W','W',' ',' '],
                            ['W','.','.','/','.','P','W',' ',' '],
                            ['W','.','.','/','.','.','W',' ',' '],
                            ['W','.','.','/','.','W','W',' ',' '],
                            ['W','W','W','/','.','W',' ',' ',' '],
                            [' ',' ','W','O','W','W',' ',' ',' '],
                            [' ',' ','W','W','W',' ',' ',' ',' ']
                        ],
                        [
                            ['W','W','W','W','W',' ',' ',' ',' '],
                            ['W','.','.','.','W','W','W','W','W'],
                            ['W','.','W','.','W','.','.','.','W'],
                            ['W','.','X','.','.','.','X','.','W'],
                            ['W','O','O','W','X','W','X','W','W'],
                            ['W','O','P','X','.','.','.','W',' '],
                            ['W','O','O','.','.','W','W','W',' '],
                            ['W','W','W','W','W','W',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ],
                        [
                            [' ','W','W','W','W','W','W',' ',' '],
                            [' ','W','.','.','.','.','W','W',' '],
                            ['W','W','O','W','W','X','.','W',' '],
                            ['W','.','O','O','X','.','.','W',' '],
                            ['W','.','.','W','X','.','.','W',' '],
                            ['W','.','.','P','.','W','W','W',' '],
                            ['W','W','W','W','W','W',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' '],
                            [' ',' ',' ',' ',' ',' ',' ',' ',' ']
                        ]
                        
                    ]


                    var currentLevel = 0;
                    var currentMap = JSON.parse(JSON.stringify(allmap[currentLevel]));
                    var previousMaps = [];

                    function movePlayer(dx, dy) 
                    {
                        var land;

                        var playerX, playerY;
                        for (let y = 0; y < map.length; y++) 
                        {
                            for (let x = 0; x < map[y].length; x++) 
                            {
                                if (map[y][x] === 'P') 
                                {
                                    playerX = x;
                                    playerY = y;
                                    land = '.'
                                    break;
                                }
                                if (map[y][x] === '?') 
                                {
                                    playerX = x;
                                    playerY = y;
                                    land = 'O'
                                    break;
                                }
                            }
                        }
                        var newX = playerX + dx;
                        var newY = playerY + dy;

                        if (newX >= 0 && newX < map[0].length && newY >= 0 && newY < map.length) 
                        {

                            if(map[newY][newX] == '.')
                            {
                                map[playerY][playerX] = land;
                                map[newY][newX] = 'P';
                                moveHistory.push(cloneMap(map));
                            }
                            else if(map[newY][newX] == 'O')
                            {
                                map[playerY][playerX] = land;
                                map[newY][newX] = '?';
                                moveHistory.push(cloneMap(map));
                            }

                            else if(map[newY][newX] == 'X')
                            {
                                if(map[playerY + (dy*2)][playerX + (dx*2)] == '.')
                                {
                                    map[playerY + (dy*2)][playerX + (dx*2)] = 'X';
                                    map[playerY][playerX] = land;
                                    map[newY][newX] = 'P';
                                    moveHistory.push(cloneMap(map));
                                }
                                else if(map[playerY + (dy*2)][playerX + (dx*2)] == 'O')
                                {
                                    map[playerY + (dy*2)][playerX + (dx*2)] = '/';
                                    map[playerY][playerX] = land;
                                    map[newY][newX] = 'P';
                                    moveHistory.push(cloneMap(map));
                                }
                            }

                            else if(map[newY][newX] == '/')
                            {
                                if(map[playerY + (dy*2)][playerX + (dx*2)] == '.')
                                {
                                    map[playerY + (dy*2)][playerX + (dx*2)] = 'X';
                                    map[playerY][playerX] = land;
                                    map[newY][newX] = '?';
                                    moveHistory.push(cloneMap(map));
                                }
                                else if(map[playerY + (dy*2)][playerX + (dx*2)] == 'O')
                                {
                                    map[playerY + (dy*2)][playerX + (dx*2)] = '/';
                                    map[playerY][playerX] = land;
                                    map[newY][newX] = '?';
                                    moveHistory.push(cloneMap(map));
                                }
                            }

                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            DrawMap(map);
                            DrawGrid();

                            if (Win()) {
                                alert("Level : " + level + ", YOU WIN!!!");
                                level++;
                                if (level <= allmap.length) {
                                    map = cloneMap(allmap[level - 1]);
                                    moveHistory = [];
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    DrawMap(map);
                                    DrawGrid();
                                } else {
                                    alert("Congratulations! You have completed all levels!");
                                    level = 1;
                                    map = cloneMap(allmap[level - 1]);
                                    moveHistory = [];
                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                    DrawMap(map);
                                    DrawGrid();
                                }
                                $("#level-display").text("Level: " + level);
                            }
                        }
                        return map;
                    }


                    function Up() 
                    {
                        map = movePlayer(0, -1);
                    }

                    function Down() 
                    {
                        map = movePlayer(0, 1);
                    }

                    function Left() 
                    {
                        map = movePlayer(-1, 0);
                    }

                    function Right() 
                    {
                        map = movePlayer(1, 0);
                    }
                    
                    function Win()
                    {
                        var win=true;
                        for(var x=0 ; x<9 ; x++)
                        {
                            for(var y=0 ; y<9 ; y++)
                            {
                                if(map[x][y] == 'X')
                                {
                                    win=false;
                                }
                            }
                        }
                        return win;
                    }

                    function Undo() {
                        if (moveHistory.length > 0) {
                            moveHistory.pop();
                            
                            if (moveHistory.length > 0) {
                                map = moveHistory[moveHistory.length - 1];
                            } else {
                                map = cloneMap(allmap[level - 1]);
                            }

                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            DrawMap(map);
                            DrawGrid();
                        }
                    }

                    function cloneMap(map) {
                        var clonedMap = [];
                        
                        for (var i = 0; i < map.length; i++) {
                            var newRow = [];
                            for (var j = 0; j < map[i].length; j++) {
                                newRow.push(map[i][j]);
                            }
                            clonedMap.push(newRow);
                        }
                    
                        return clonedMap;
                    }
                    function Reset()
                    {
                        map = cloneMap(allmap[level-1]);
                        moveHistory = [];
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        DrawMap(map);
                        DrawGrid();
                    }

                    let map = cloneMap(allmap[0]);
                    let level = 1;
                    let moveHistory = [];

                    function Play()
                    {
                        level = PlayLevel(map);
                        map = allmap[level-1];
                    }
                    
                    function PlayLevel(map) {
                        var levelnum = $("#level").val();
                        if (1 <= levelnum && levelnum <= 15) {
                            map = allmap[levelnum - 1];
                            $("#level-display").text("Level: " + levelnum);

                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            DrawMap(map);
                            DrawGrid();
                        }
                        return levelnum;
                    }

                    function RunMainProgram() 
                    {
                        DrawMap(map);
                        DrawGrid();

                    }

                    RunMainProgram();

                    document.addEventListener('keydown', function(event) {
                        switch(event.key) {
                            case 'ArrowUp':
                                Up();
                                break;
                            case 'ArrowDown':
                                Down();
                                break;
                            case 'ArrowLeft':
                                Left();
                                break;
                            case 'ArrowRight':
                                Right();
                                break;
                            case 'u':
                                Undo();
                                break;
                            case 'r':
                                Reset();
                                break;
                        }
                    });
                    window.onload = initializeGame;