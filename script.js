let boxes=document.querySelectorAll('.box');/*returns-- node list-- of all elements having class box */ 
let resetbtn=document.querySelector('#reset');
let newbtn =document.querySelector('#new');
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

let count=0
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
         /*   trun0=true-->player0
            turn0=false-->playerX
            Call the function to check for a winner after each move */
         }
         box.disabled=true;//okasari 0/x pettaka ,malli click chesthe opposite dhi vastandhi ,ala rakunda vundaniki(ie first pettindhe change avvakunda vundadaniki)
       count++
       checkWinner();//check for a winner after each move
       
        }
    )
 });


 const checkWinner = () => {
    for(let pattern of winPatterns) {// pattern represents each array of winning patterns,,,aa each pattern lo unna text same ayithe chala kada
        let [a, b, c] = pattern;//DESTRUCTURING --[a,b,c]=[0,1,2]--->a=0,b=1,c=2...and so on assigning a,b,c for each pattern
        //note here a,b,c reperesents the indices of the buttons
        //console.log(a, b, c);-->debugging--whether elements are assigned correct or not
        let val1= boxes[a].innerText; //value of box at index a
        let val2= boxes[b].innerText; //value of box at index b
        let val3= boxes[c].innerText; //value of box at index c
        //console.log(val1, val2, val3); //debugging to check values in the boxes

        if(val1!=''&&val2!=''&&val3!='' ) {//three boxes kaliga unna --inner text '' nothing --and print winner --but it is not correct --so we kept !=,,ante 3 box values kali kakapothe
           
            if(val1 === val2 && val2 === val3) {//if all three boxes have the same value
                   console.log("winner is",val1);
                showWinner(val1);//val1=val2=val3 so eedhina evvachu

                
        }
        if(count===9) {//if all boxes are filled and no winner is found
            msg.innerText = "It's a draw!";//display draw message
            msgContainer.classList.remove("hide") //ante first hide lo untadhi,,draw ayyaka ,para lo text change chesake ,hide class tesesthe ,text kanipisthadhi
            disablebtns();//disable all boxes so that no further moves can be made (winner vacchaka ,malli selct cheyyakunda vundadaniki)
        }
    }
}
}
//checkWinner() // Call the function to check for a winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations ! Player ${winner} wins!`;//display the winner
   msgContainer.classList.remove("hide") //ante first hide lo untadhi,,evarina winner ayyaka ,,para lo text change chesake ,hide class tesesthe ,text kanipisthadhi
    disablebtns();//Normal ga ayithe okallu galichaka ,malli select chesukovadaniki vacchidhi ,,ala rakunda vundadaniki disable chesam
};

const disablebtns = () => {
    boxes.forEach((box) => {
        box.disabled = true; //disable all boxes so that no further moves can be made (winner vacchaka ,malli selct cheyyakunda vundadaniki)
    });
}


const enablebtns = () => {
    boxes.forEach((box) => {
        box.innerText = ''; //clear the text in all boxes
        box.disabled=false; //disable all boxes so that no further moves can be made (winner vacchaka ,malli selct cheyyakunda vundadaniki)
    });
}



const resetGame =()=>{
    turn0=true;
    msgContainer.classList.add("hide") 
    enablebtns();
    // Reset the game state and check for a winner
    
}

newbtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
    


/* new game & reset button click cheyygalne ,,text empty avvali ,,and malli text pettadaniki enable cheyyali (ie disable false)
    and start with 0 so turn0 true,

*/
 