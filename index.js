// games constants and variable

let direction={x:0, y:0};
const foodSound= new Audio('foodd.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound= new Audio('move.mp3');
 const musicSound=new Audio('music.mp3');
let speed= 5;
let lastPaintTime =0;
let snakeArr = [{
    x:13, y:15
}]
 food = {
    x:6, y:7
};


// game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000 <1/speed){
    return;

    
}
lastPaintTime = ctime;
gameEngine();

}
function isCollide(sarr){
    //if you bump into your self
    for(let index =1 ; index <snakeArr.length; index++){
        if(snake[i].x===snake[0].x &&snake[i].y=== snake[0].y){
            return true;
        }
    }
    // if you bump into the well
        if(snake[0].x>=18 || snake[0].x <=0 || snake[0].y>=18 || snake[0].y <=0){
            return true;
        }
    }
    

function gameEngine(){
    // part 1 updating the snake array
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0, y:0,};
        alert("game Over. Press any key to play again");
        snakeArr =[{x:13, y:15}];
        musicSound.play();
        score=0;
    }

    //if you have eaten the food , increment the score and regenerate the food
    if(snakeArr[0].y===food.y && snakeArr[0].x==food.x){
        foodSound.play();
        score +=1;
        snakeArr.unshift({x:snakeArr[0].x+ inputDir.x, y: snakeArr[0].y+inputDir.y})
        let a=2;
        let b=16;
        food = {x:2+Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
    }
    
    //moving the snake
    for(let i =  snakeArr.length -2; i>=0; i--){
        
        snakeArr[i+1]={...snakeArr[i]};
    }
    snakeArr[0].x +=inputDir.x;
    snakeArr[0].y +=inputDir.y;


    

    // part 2 display the snake and food 
    // display the snake
    board.innerHTML ="";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('dev');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('snake');
        if(index ==0){
            snakeElement.classList.add('head')


        }
        else{
            snakeElement.classList.add('snake');

        }
        
        board.appendChild(snakeElement);


    });
    //display the food
    foodElement = document.createElement('dev');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food')
        board.appendChild(foodElement);



}



// main logic starts here
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir ={x:0, y:1}
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp")
            inputDir.x =0;
            inputDir.y =-1;
            break;

            case "ArrowDown":
            console.log("ArrowDown")
            inputDir.x =0;
            inputDir.y =1;
            break;

            case "ArrowLeft":
            console.log("ArrowLeft")
            inputDir.x =-1;
            inputDir.y =0;
            break;

            case "ArrowRight":
            console.log("ArrowRight")
            inputDir.x =1;
            inputDir.y =0;
            break;
            
            default:
                break;
    }

});