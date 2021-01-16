let Queen={
    direction:'S',
    position:{
        x_coordinate: 0,
        y_coordinate: 0
    },
    positionlog: [["a8","b8","c8","d8","e8","f8","g8","h8"],
                  ["a7","b7","c7","d7","e7","f7","g7","h7"],
                  ["a6","b6","c6","d6","e6","f6","g6","h6"],
                  ["a5","b5","c5","d5","e5","f5","g5","h5"],
                  ["a4","b4","c4","d4","e4","f4","g4","h4"],
                  ["a3","b3","c3","d3","e3","f3","g3","h3"],
                  ["a2","b2","c2","d2","e2","f2","g2","h2"],
                  ["a1","b1","c1","d1","e1","f1","g1","h1"]],
    whereabouts:[],
    changeDirection(direction){
        direction=direction.toUpperCase();
        console.log(direction);
        if(direction=='S'||direction=='W'||direction=='E'||direction=='SW'||direction=='NE'||direction=='N'
        ||direction=='SE'||direction=='NW')
        {
            Queen.direction=direction;
            return 1;
        }
        else{
        console.log("Invalid direction");
        return 0;}
    },
    moveDirection(){
        for(index=0;index<Queen.direction.length;index++){
            switch(Queen.direction[index]){
                case 'E':
                    if(Queen.position['y_coordinate']==7){
                    console.log("Out of bound");
                    return 1;
                    }
                    else
                    Queen.position['y_coordinate']++;
                    break;
                case 'S':
                    if(Queen.position['x_coordinate']==7){
                    console.log("Out of bound");
                    return 1;
                    }
                    else
                    Queen.position['x_coordinate']++;
                    break;
                case 'N':
                    if(Queen.position['x_coordinate']==0){
                    console.log("Out of bound");
                    return 1;
                    }
                    else
                    Queen.position['x_coordinate']--;
                    break;
                case 'W':
                    if(Queen.position['y_coordinate']==0){
                    console.log("Out of bound");
                    return 1;
                    }
                    else
                    Queen.position['y_coordinate']--;        
            }
        }
            return 0;
    },
    jumpMoveForward(steps){
        while(steps)
        {
            if(Queen.moveDirection())
            return 0;
            steps--;
        }
        return 1;
    }
};
function isCharacterALetter(str) {
    return (/[a-zA-Z]/).test(str)
  }
flag=1
do{
    dirsteps=prompt("Enter the direction with steps Eg:s2. The available directions are N,E,S,W,NE,NW,SE,SW . Enter exit to end");
    if(dirsteps=='exit')
    break;
    direction='',steps='';
    index=0;
    while(index<dirsteps.length&&isCharacterALetter(dirsteps[index]))
    {
        direction+=dirsteps[index];
        index++;
    }
    while(index<dirsteps.length)
    {
        steps+=dirsteps[index];
        index++;
    }
    if(steps=='')
    console.log("Invalid Input");
    else{
        console.log(Queen.position.x_coordinate);
        console.log(Queen.position.y_coordinate);
        console.log(direction);
        console.log(steps);
        curr_x_coordinate=Queen.position.x_coordinate;
        curr_y_coordinate=Queen.position.y_coordinate;
        if(Queen.changeDirection(direction)==1&&Queen.jumpMoveForward(steps)==1)
        console.log("Current position of Queen is "+Queen.positionlog[Queen.position.x_coordinate][Queen.position.y_coordinate]);
        else
        {
            Queen.position.x_coordinate=curr_x_coordinate;
            Queen.position.y_coordinate=curr_y_coordinate;
        }
    }
}while(true);