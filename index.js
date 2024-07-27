const ficture=document.getElementById('ficture')
let index=3;
ficture.addEventListener('click', function(){
 ficture.classList.toggle('transtition')
     ficture.src=`${index}.jpg`;
     if(index==3){
        index--
     }else{
        index++
     }
})