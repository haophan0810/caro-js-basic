const cell = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
const turn = document.querySelector('.turn');
const XO = {
    true:'x',
    false:'o'
}
let turnPlay = true;
let count = 0;

turn.innerHTML= `${XO[turnPlay]} prepare play`;

console.log('cell :', cell);

cell.forEach(function(e){
    e.addEventListener('click',function(e){
        let _this  = this;
        count +=1;
        // if (count >4){
        //     checkWin(_this);
        // }
        // console.log('this :', turnPlay);
        _this.innerHTML=`${XO[turnPlay]}`;
        _this.classList.add(`turn-${XO[turnPlay]}`)
        _this.style.pointerEvents= 'none';
        checkWin();
        
        turnPlay=!turnPlay;
        turn.innerHTML= `${XO[turnPlay]} danh`;
        
    })
})
function findClass (x){
    return cell[x].getAttribute('class').includes(`turn-${XO[turnPlay]}`);
}
function checkWin(){
    if(findClass(0) && findClass(1) && findClass(3)){
        

    }

   
    
}
