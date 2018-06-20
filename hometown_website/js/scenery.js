window.onload=function(){
    var images=['images/南溪.jpg','images/新河.jpg','images/乡村.jpg']; 
    var texta = ["南溪山水","普天安宁","普宁"];
    var textb =["南溪山水好","上善若水任方圆","若水"];
    var img= $("#scenery_img");
    var text1=$("#scenery_h3");
    var text2=$("#scenery_p");
    var number=0;
    function moveleft(){
        if(number!=0){
            number--;
        }
        else{
            number=images.length-1;
        }
        img.src=images[number];
        text1.innerHTML=texta[number];
        text2.innerHTML=textb[number];
    }
    function moveright(){
        if(number!=images.length-1){
            number++;
        }
        else{
            number=0;
        }
        img.src=images[number];
        text.innerHTML=text[number];
    }
    }
}
