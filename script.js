let boxes=document.querySelectorAll('.box');/*returns-- node list-- of all elements having class box */ 
let resetbtn=document.querySelector('#reset');

let turnO=true;//player O starts first--bcuz 0 is set true ,,false pedtihe  player X starts
const winPatterns=[
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6]  // Diagonal /
];
boxes.forEach((box)=>{
    box.addEventListener('click', () => {
        if (turnO){ //if turnO is true, player O's turn,,
            box.innerText = 'O';//so he places 'O' in the box
            turnO = false;//once 'O' is placed, turnO becomes false, so next turn will be X
         }
         else{//execute when turn0=false, i.e., player X's turn
            box.innerText = 'X';//
            turnO = true;//once 'X' is placed, turnO becomes true, so next turn will be O
            //trun0=true-->player0
            //turn0=false-->playerX
         }
        }
    )
 });

 resetbtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';//reset all boxes to empty string
    });
 });
turnO = true; //reset the turn to player O(manam ikkada first player O ni set chesamu)












