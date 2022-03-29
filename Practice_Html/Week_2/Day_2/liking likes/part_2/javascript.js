   var like = 9
   var like1 = 12
   var like2 = 9
function increase(num){
        if(num ==0){
            like++
            document.querySelector(".l0").textContent = like + " like(s)";
        }
        if(num ==1){
            like1++
            document.querySelector(".l1").textContent = like1 +" like(s)";
        }
        if(num ==2){
            like2++
            document.querySelector(".l2").textContent = like2 +" like(s)";
        }
    };
