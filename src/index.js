require('./styles/style.css');
require('./lib/css-regions-polyfill.js');
import 'swiper';
import 'swiper/dist/css/swiper.css';


var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
})
		
