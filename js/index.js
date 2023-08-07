
/* header_nav show hide */
const menuBtn = document.querySelector('.header_toggle'); // 햄버거버튼
const nav = document.querySelector('.header_nav') ; // 네비 메뉴 

menuBtn.addEventListener('click',()=>{
    nav.classList.toggle('on');
})

/* header_menu_item */

const menuBox = document.querySelector('.header_menu');
const menu = document.querySelectorAll('.header_menu_item');

const meneUpdate = (selectA) => {
    menu.forEach((a)=>{
        a.classList.remove('active')
    })
    selectA.classList.add('active')
}

menuBox.addEventListener('click',(e)=>{
    console.log(e);
    const selectMenu = e.target; 
    console.log(selectMenu);
    meneUpdate(selectMenu);

})

/* 필터링 처리 */
// init Isotope
var $projects = $('.projects').isotope({ //필터링 될 아이템의 전체 wrapper
    itemSelector: '.projects', //필터링 될 아이템의 선택자
    layoutMode: 'fitRows;',
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });