let pin = [];
let storedpin = ' ';
const presentpin ='1234';

function enterpin(number){
    if(pin.length<4){
        pin.push(number);
        pinindicator();
    }
    if(pin.length==4){
        storedpin=pin.join('');
        // alert("entered pin is:" + storedpin);
        validatepin(storedpin);
     }
 }
 
 function deletepin(){
    if(pin.length > 0){
        pin.pop();
        pinindicator();
    }
}

function pinindicator(){
    for(i=0; i < 4; i++){
        let circle = document.getElementById('circle'+(i + 1));
        if(i<pin.length){
            circle.style.backgroundColor = "black";
        }else{
            circle.style.backgroundColor = "white";
        }
    }
}

 function resetclicked(){
    pin=[];
    pinindicator();
 }

 function validatepin(storedpin){
    if(presentpin == storedpin){
        window.location.href = "C:\\Users\\SURENDRA VUTUKURI\\Desktop\\Tasks\\VanillaHR.html";
    }else{
        alert("pin is incorrect ,Please try again")
        resetclicked();
    }
 }