let boxes=document.querySelectorAll('.box');/*returns-- node list-- of all elements having class box */ 
let resetbtn=document.querySelector('#reset');
let neww =document.querySelector('#new');
let msgContainer=document.querySelector('.msg-container');


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
];//2D array--array of arrays--each array represents a winning pattern


boxes.forEach((box)=>{
    box.addEventListener('click', () => {
        if (turnO){ //if turnO is true, player O's turn,,
            box.innerText = 'O';//so he places 'O' in the box
            turnO = false;//once 'O' is placed, turnO becomes false, so next turn will be X
            // Call the function to check for a winner after each move
         }
         else{//execute when turn0=false, i.e., player X's turn
            box.innerText = 'X';//
            turnO = true;//once 'X' is placed, turnO becomes true, so next turn will be O
            //trun0=true-->player0
            //turn0=false-->playerX
            // Call the function to check for a winner after each move
         }
         box.disabled=true;
        }
    )
 });

 const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
    }
}

 resetbtn.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';//reset all boxes to empty string
        enableBoxes();
    });
 });
turnO = true; //reset the turn to player O(manam ikkada first player O ni set chesamu)










// Function to check for a winner
const checkWinner = () => {
    for(let pattern of winPatterns) {// pattern represents each array of winning patterns,,,aa each pattern lo unna text same ayithe chala kada
        let [a, b, c] = pattern;//DESTRUCTURING --[a,b,c]=[0,1,2]--->a=0,b=1,c=2...and so on assigning a,b,c for each pattern
        //note here a,b,c reperesents the indices of the buttons
        //console.log(a, b, c);-->debugging--whether elements are assigned correct or not
        let val1= boxes[a].innerText; //value of box at index a
        let val2= boxes[b].innerText; //value of box at index b
        let val3= boxes[c].innerText; //value of box at index c
        //console.log(val1, val2, val3); //debugging to check values in the boxes

        if(val1.innerText!=' '&&val2.innerText!=' '&&val3.innerText!=' ' ) {//three boxes kaliga unna --inner text '' nothing --and print winner --but it is not correct --so we kept !=,,ante 3 box values kali kakapothe
           
            if(val1.innerText === val2.innerText && val2.innerText === val3.innerText) {//if all three boxes have the same value
                   /* alert(`Player ${val1} wins!`); //alert the winner
                    return; //exit the function after declaring the winner */
                showWinner(val1);

                
        }
    }
}
}
//checkWinner() // Call the function to check for a winner



const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
        box.innerText='';
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


neww.addEventListener('click', () => {
    boxes.forEach((box) => {
        box.innerText = '';//reset all boxes to empty string
        box.disabled=false;
    });
 });
turnO = true;



