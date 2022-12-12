//마우스 커서 움직임git init
// var $circle = $('.circle');

// function moveCircle(e) {
// 	TweenLite.to($circle, 0.3, {
//     css: {
//       left: e.pageX,
//       top: e.pageY
//     }
//   });
// }

// $(window).on('mousemove', moveCircle);


//loading
const load = document.querySelector(".load");
const load1 = document.querySelector(".load1");//로딩 텍스트, 로딩바
const load2 = document.querySelector(".load2");//헬로우 svg
setTimeout(()=>{
    load1.classList.add("scale");
    //로드1 없어짐
},4000)

setTimeout(()=>{
    load2.classList.add("active");
    //로드2 생김
},4000);
setTimeout(()=>{
    load2.classList.remove("active");
    //로드2 없어짐
},6400);
setTimeout(()=>{
    load.classList.add("on")
    //로딩페이지 없어짐
},6500)

//main class
const main = document.querySelector(".main");
setTimeout(()=>{
    main.classList.add("on")
},6600)

//fullpage

let height = window.innerHeight; 
window.addEventListener('resize',()=>{
    height = window.innerHeight;
})
const sections = document.querySelectorAll("section");
console.log('sections',sections)
for(let i=0;i<sections.length;i++){
  sections[i].style.height = height + 'px';
}

for(let m=0;m<sections.length;m++){
    sections[m].addEventListener("mouseover",e=>{
        sections[m].classList.add("on")
    })
}

// window.addEventListener("scroll",e=>{
//     let scroll = document.querySelector("html").scrollTop;
//     //console.log(scroll)
//     for(let i=0;i<sections.length;i++){
//         if(scroll>=(i*height)){
//           sections[i].classList.add("on")
//         }   
//     }
// })

window.addEventListener("scroll", () => {
    let scroll = document.querySelector("html").scrollTop;
      
      for(let i=0; i<sections.length; i++){
          if(scroll>=(i*height) && scroll<(i+1)*height){
            activation(i,sections);
          }
      }
      let contents = document.querySelectorAll(".content")
      //console.log("contents",contents);
      for(let i=0; i<contents.length; i++){
          contents[i].addEventListener("wheel",e=>{
              if(e.wheelDelta >= 0){
                  let prev = e.currentTarget.previousElementSibling.offsetTop;
                  window.scroll({
                      top: prev,
                      left: 0,
                      behavior: "smooth"
                      
                  });
              }else if(e.wheelDelta <= 0){
                  let next = e.currentTarget.nextElementSibling.offsetTop;
                  window.scroll({
                      top: next,
                      left: 0,
                      behavior: "smooth"
                  });
              }
          })
      }
  })



let activation =(index,sections)=>{
    for(let el of sections){
        el.classList.remove("on")
    }
    sections[index].classList.add("on")
}

//topButton
const header_text = document.querySelector(".header_text");
header_text.addEventListener("click",e=>{
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
// gnb
const gnb = document.querySelector(".gnb");
const header_icon = document.querySelector(".header_icon");
const gnb_clear = document.querySelector(".gnb_clear");

header_icon.addEventListener("click", e => {
    gnb.classList.add("on")
})
gnb_clear.addEventListener("click", e => {
    gnb.classList.remove("on")
})

window.addEventListener("scroll", e => {
    let scroll = window.pageYOffset;
    gnb.style.top = `${scroll}` + "px"
})
// gnb_list
let gnb_list = document.querySelectorAll(".gnb_list");
for(let j=0;j<gnb_list.length;j++){
    gnb_list[j].addEventListener("click",e=>{
        e.preventDefault();
        window.scroll({
            top:(j+1)*height,
            left:0,
            behavior:'smooth'
        })
        activation(j,gnb_list);
    })
}


//datail_page
let veiw_detail = document.querySelectorAll(".veiw_detail");
let datail_page = document.querySelectorAll(".datail_page");
let detail_clear = document.querySelectorAll(".detail_clear");

for(let i=0; i<veiw_detail.length;i++){
    veiw_detail[i].addEventListener("click",e=>{
        datail_page[i].classList.add("on")
    })
}
for(let k=0; k<detail_clear.length;k++){
    detail_clear[k].addEventListener("click",e=>{
        datail_page[k].classList.remove("on")
    })
}


  const windowOpen = () => {
    // window.open("https://mijin970211.github.io/2022_katalk_clone/","KA_TALK","width=375,height=812,fullscreen=no,resizable=yes")
  }
