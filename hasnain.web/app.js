var mSec= 0
var sec= 0
var min= 0


var getMsec= document.getElementById('mSec')
var getSec= document.getElementById('sec')
var getMin= document.getElementById('min')


function start(){
    interval = setInterval (function(){
        mSec++;
       getMsec.innerHTML=mSec
    
       if(mSec>=100){
          sec++
          getSec.innerHTML=sec
    
          mSec=0
       }
       else if(sec>=60) {
          min++
          getMin.innerHTML=min
    
          sec=0
       }
    },10)
}

function stop(){
    clearInterval(interval)
}

function reset(){
    mSec =0
    sec =0
    min=0

    getMsec.innerHTML=mSec
    getSec.innerHTML=sec
    getMin.innerHTML=min

}
