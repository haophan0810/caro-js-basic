const cell = document.querySelectorAll('.cell');
const turn = document.querySelector('.turn');
const result = document.querySelector('.result');

const XO = {
    true:'x',
    false:'o'
};
let turnPlay = true;
let count=0;
let whoWin= '';
turn.innerHTML = `${XO[turnPlay]} chuan bi danh`;
// bat su kien click

console.log('cell :', cell);
cell.forEach(element => {
   element.addEventListener('click',function(e){
       count+=1;
       const _this = this;
       console.log('count :', count);
      
       _this.innerHTML= `${XO[turnPlay]}`;
       _this.classList.add(`turn-${XO[turnPlay]}`);

       // bat tu luot thu 5 se check win
       if(count>4){
        checkWin();
        result.innerHTML= whoWin;
        // co nguoi win thi disable click
        if(checkWin()){
            cell.forEach(item => {
                item.style.pointerEvents = 'none';
            } )
        }
       
    }
    // kiem tra hoa, neu luot danh thu 9 ko co ai thang checkwin -> false
    if (count==9){
        if(!checkWin()){
        result.innerHTML= "hoa";
        
        }
    }
     
       // chan event

       _this.style.pointerEvents = 'none';
    

       turnPlay=!turnPlay;
    turn.innerHTML = `${XO[turnPlay]} danh`;
       
   })
});

function findClass (index){
    return cell[index].getAttribute(`class`).includes(`turn-${XO[turnPlay]}`);
}

function checkWin(){
    if (findClass(0) && findClass(1) && findClass(2)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
        
    }
    if (findClass(3) && findClass(5) && findClass(4)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    if (findClass(6) && findClass(7) && findClass(8)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    if (findClass(0) && findClass(3) && findClass(6)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    if (findClass(1) && findClass(4) && findClass(7)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    if (findClass(2) && findClass(6) && findClass(8)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    if (findClass(0) && findClass(4) && findClass(8)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    if (findClass(2) && findClass(4) && findClass(6)  ){
        whoWin= `${XO[turnPlay]} win`;
        return true;
    }
    return false;


}

