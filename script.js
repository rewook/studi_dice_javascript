const btnnew = document.getElementById('btnnew');
const btnroll = document.getElementById('btnroll')
const btnvd = document.getElementById('valeurd')
const ind =document.getElementById('index')
const idx=ind.value
const ro1 =document.getElementById('round1')
const ro2 =document.getElementById('round2')
const to1 =document.getElementById('total1')
const to2 =document.getElementById('total2')



function newgame(){
 
  let r1=0;
  let r2=0;
  let t1=0;
  let t2=0;
  let i =0;
  
ro1.value=r1
ro2.value=r2
to1.value=t1
to2.value=t2
ind.value=i  
}

function rollback(){
 let idx=ind.value;

  let vd=   Math.round(Math.random() * (6 - 1) + 1);

  btnvd.value=vd;
  if(vd == 1){
    alert('TOUR PERDU');

    let idx = ind.value;

    if (idx == 0){
      ro1.value = 0
      ind.value = 1
    }else{
      ro2.value=0
      ind.value =0
    }
    
  }else{
  
   
    if (idx == 0){     
      let a = parseInt(ro1.value);
      let b = a + vd;
      ro1.value = b
      
    }else{
      let a = parseInt(ro2.value);
      let b = a + vd;
      ro2.value = b
      
    }
  }
}

function keep(){
  let idx=ind.value;
  if(idx == 0){
    let  round = parseInt(ro1.value);
    let global = parseInt(to1.value);

    let gb = global + round;

    ro1.value = 0
    to1.value = gb
   
    ind.value= 1
    if(gb >= 100){
      alert('VOUS AVEZ GAGNE !')
      newgame()
    }
  }else{
    let  round = parseInt(ro2.value);
    let global = parseInt(to2.value);

    let gb = global + round;

    ro2.value = 0
    to2.value = gb
    if(gb >= 100){
      alert('VOUS AVEZ GAGNE !')
      newgame()
    }
    ind.value = 0
  }

}

btnnew.addEventListener('click', newgame);
btnroll.addEventListener('click',rollback)
btnkeep.addEventListener('click',keep)