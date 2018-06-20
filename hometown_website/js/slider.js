window.onload = function(){  
    var arrUrl = ['images/山.jpg','images/新河.jpg','images/乡村.jpg']; 
    var arrText = "普宁风情";  
    var Oprev = document.getElementById('pre');  
    var Onext = document.getElementById('next');  
    var Otext = document.getElementById('text');  
    //var Ospan = document.getElementById('span1');  
    var Oimg = document.getElementById('img1');  
    var num = 0;  
    MyFunc(num);  
    function MyFunc(n){  
        Oimg.src = arrUrl[n];  
        //Ospan.innerHTML = num + 1 + " / " + arrUrl.length;  
        //Otext.innerHTML = arrText;  
    }  
    Oprev.onclick = function(){  
        num --;  
        if(num == -1){  
            num = arrUrl.length - 1;  
        }  
        MyFunc(num);  
    };  
    Onext.onclick = function(){  
        num ++;  
        if(num == arrUrl.length){  
            num = 0;  
        }  
        MyFunc(num);  
    };  
      
};  