let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector

let turnO=true; //playerX, playerO

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box))=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            //playerO
            box.innerText="O";
            turnO=false;
        }else{
            //playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
      box.disables=true;  
    }
};

const showWinner=(winner)=>

    MessageChannel.innerText="Congratulations,Winner is $(winner)"
    msgContainer.classList.remove("hide");

const checkWinner=()=>{
    for(pattern of winPatterns) {
        console.log boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]];
        console.log{
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        };

       let pos1Val=boxes[pattern[0]].inerText;
       let pos2Val=boxes[pattern[1]].innerText;
       let pos3Val=boxes[pattern[2]].innerText;

       if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if(posVal == pos2Val && posVal === pos3Val) {
            console.log("winner",pos1Val);
            showWinner();
        }
       }
    }
};

newGameBtn.addListener("click",resetGame);
newGameBtn.addEventListener("Click",resetGame);