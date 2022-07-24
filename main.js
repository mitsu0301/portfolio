
//heroセクションの背景
const Top = document.getElementById("hero");
const l = document.getElementById("sc-to-left");
const r = document.getElementById("sc-to-right");
const imgName = ["url(./img/hero1.jpg)","url(./img/hero2.jpg)","url(./img/hero3.jpg)","url(./img/hero4.jpg)"];
let count = -1;

imgChange();

//5秒ごとに画像を切り替える関数
function imgChange(){
    count++;

    //countが画像の数になったら0に戻す
    if (count == imgName.length){
        count = 0;
    }

    //(count)番目の画像に切り替え
    Top.style.backgroundImage = imgName[count];

    //5秒後にimgChangeを呼び出す
    setTimeout("imgChange()",5000);
}

//左矢印をクリック
l.addEventListener("click",function(e){
    if (count-1 < 0){
        count = imgName.length-1;
    }else{
        count--;
    }
    Top.style.backgroundImage = imgName[count];
});

//右矢印をクリック
r.addEventListener("click",function(e){
    if (count+1 == imgName.length){
        count = 0;
    }else{
        count++;
    }
    Top.style.backgroundImage = imgName[count];
});



//profileのaboutとskillsの切り替え
const about_btn = document.getElementsByClassName("about_btn");
const skills_btn = document.getElementsByClassName("skills_btn");
const about = document.getElementsByClassName("about");
const skills = document.getElementsByClassName("skills");

about_btn[0].addEventListener("click",function(e){
    about[0].classList.add('active');
    skills[0].classList.remove('active')
});

skills_btn[0].addEventListener("click",function(e){
    skills[0].classList.add('active');
    about[0].classList.remove('active')
});



//worksのアニメーション
const callback = function(entries, observer) {
	entries.forEach(entry => {
		if(entry.isIntersecting) {
		  entry.target.classList.add('inview');
		} else {
		  entry.target.classList.remove('inview');
		}
	});
}
const item1 = document.querySelector('#logo');
const io1 = new IntersectionObserver(callback);
io1.observe(item1);

const item2 = document.querySelector('#poster');
const io2 = new IntersectionObserver(callback);
io2.observe(item2);

const item3 = document.querySelector('#sketch');
const io3 = new IntersectionObserver(callback);
io3.observe(item3);

const item4 = document.querySelector('#anime');
const io4 = new IntersectionObserver(callback);
io4.observe(item4);

const item5 = document.querySelector('#CG');
const io5 = new IntersectionObserver(callback);
io5.observe(item5);