document.querySelectorAll(".box-btn__btn").forEach((element) => {

  element.addEventListener('mouseover',function() {
    this.classList.add('border-white')
  })
  element.addEventListener('mouseout',function() {
    this.classList.remove('border-white')
  })
  

  element.addEventListener("click", function () {
    let json = element.dataset.tea;
    let tea = JSON.parse(json);
    console.log(tea.index);

    document.querySelector(".coffee-img img").src = tea.img;
    document.querySelector(".coffee-content__title").innerText = tea.title;
    document.querySelector(".coffee-content__content").innerText = tea.content;

    document.querySelectorAll(".box-btn__btn_border").forEach((elt) => {
      elt.classList.remove("box-btn__btn_border");
    });
    console.log("this", this.classList.add("box-btn__btn_border"));
    this.classList.add("box-btn__btn_border");

    document.querySelector(".coffee-content__trait").setAttribute("data-index", tea.index);

  });
});






// document.querySelectorAll(".arrow button").forEach((element) => {
  
//   element.addEventListener("click", function (btn) {
//     document.querySelectorAll(".arrow_btn").forEach((btn) => {
//       btn.classList.remove("arrow_btn");
//     });

//     this.classList.add("arrow_btn");
//     //}
//     let data = {}
//     document.querySelectorAll(".box-btn__btn").forEach((element) => {
//       // element.addEventListener("click", function () {
//       let json = element.dataset.tea;
//       let tea = JSON.parse(json);
//       data = tea
//     //console.log(data)
//       //console.log(tea);
// element.addEventListener("click", function (btn) {
//     document.querySelectorAll(".arrow_btn").forEach((btn) => {
//       btn.classList.remove("arrow_btn");
//     });})
//       document.querySelector(".coffee-img img").src = tea.img;
//       document.querySelector(".coffee-content__title").innerText = tea.title;
//       document.querySelector(".coffee-content__content").innerText =
//         tea.content;

//       // if(!this.classList.contains('box-btn__btn_border')){

//       document
//         .querySelector(".coffee-content__trait")
//         .setAttribute("data-index", tea.index);
//       //.style.content = attr(data-index)
//       //console.log("css",document.querySelector('.coffee-content__trait').setAttribute)
//     });
//     console.log(data)
//     //});
//   });
// });
