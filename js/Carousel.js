  $(document).ready(function () {
         var owl = $('.owl-carousel');
        owl.owlCarousel({
            items: 5,
            loop: true,
            margin: 10,
            dots:true,
            nav:false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
                responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    loop: false
                }
            }
        });
        });

// function Search() {
//     document.getElementById('drop_down').classList.toggle('show')
// }
// window.onclick = function (event) {
//     if (!!event.target.matches('.search')) {
//         var dropdowns = document.getElementsByClassName('.dropdow_content');
//         var i;
//         for ( i = 0; i < dropdowns.length; i++){
//             var openDropDown = dropdowns[i];
//             if (openDropDown.classList.contains('close')) {
//                 openDropDown.classList.remove('close');
//             }
// ;        }
//     }
// }
// thêm class
function Search() {
    const down = document.getElementById('drop_down');
    down.classList.add('show');
}
//xóa class
function Close() {
     const close = document.getElementById('drop_down');
    close.classList.remove('show');
}