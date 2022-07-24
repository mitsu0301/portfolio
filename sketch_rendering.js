//sketch
const sketch = [document.getElementById("s_layer1"),
                document.getElementById("s_layer2"),
                document.getElementById("s_layer3")];
const scircle = [document.getElementById("s1"),
                document.getElementById("s2"),
                document.getElementById("s3")];
const sback = document.getElementsByClassName("sketch_back");
const snext = document.getElementsByClassName("sketch_next");
let count = 0;
//左矢印をクリック
sback[0].addEventListener("click",function(e){
    sketch[count].style.zIndex= 0 ;
    scircle[count].style.backgroundColor = '#fff';
    scircle[count].style.height = '10px';
    scircle[count].style.width = '10px';
    if (count-1 < 0){
        count = sketch.length-1;
    }else{
        count--;
    }
    sketch[count].style.zIndex = 1;
    scircle[count].style.backgroundColor = '#5F88B3';
    scircle[count].style.height = '13px';
    scircle[count].style.width = '13px';
});
//右矢印をクリック
snext[0].addEventListener("click",function(e){
    sketch[count].style.zIndex= 0 ;
    scircle[count].style.backgroundColor = '#fff';
    scircle[count].style.height = '10px';
    scircle[count].style.width = '10px';
    if (count+1 == sketch.length){
        count = 0;
    }else{
        count++;
    }
    sketch[count].style.zIndex = 1;
    scircle[count].style.backgroundColor = '#5F88B3';
    scircle[count].style.height = '13px';
    scircle[count].style.width = '13px';
});


//rendering
const rendering = [document.getElementById("r_layer1"),
                    document.getElementById("r_layer2")];
const rcircle = [document.getElementById("r1"),
                document.getElementById("r2")];
const rback = document.getElementsByClassName("rendering_back");
const rnext = document.getElementsByClassName("rendering_next");
let count1 = 0;
//左矢印をクリック
rback[0].addEventListener("click",function(e){
    rendering[count1].style.zIndex= 0 ;
    rcircle[count1].style.backgroundColor = '#fff';
    rcircle[count1].style.height = '10px';
    rcircle[count1].style.width = '10px';
    if (count1-1 < 0){
        count1 = rendering.length-1;
    }else{
        count1--;
    }
    rendering[count1].style.zIndex = 1;
    rcircle[count1].style.backgroundColor = '#5F88B3';
    rcircle[count1].style.height = '13px';
    rcircle[count1].style.width = '13px';
});
//右矢印をクリック
rnext[0].addEventListener("click",function(e){
    rendering[count1].style.zIndex= 0 ;
    rcircle[count1].style.backgroundColor = '#fff';
    rcircle[count1].style.height = '10px';
    rcircle[count1].style.width = '10px';
    if (count1+1 == rendering.length){
        count1 = 0;
    }else{
        count1++;
    }
    rendering[count1].style.zIndex = 1;
    rcircle[count1].style.backgroundColor = '#5F88B3';
    rcircle[count1].style.height = '13px';
    rcircle[count1].style.width = '13px';
});