require('./styles/style.css');
import 'swiper';
import 'swiper/dist/css/swiper.css';

var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
	pagination : '.swiper-pagination',
	paginationType : 'fraction'
})
		
require('./lib/css-regions-polyfill.js');