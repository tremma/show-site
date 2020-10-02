$(document).ready(function () {
   // responsive menu + burger
   $('.header__burger').click(function (event) {
      $('.header__burger,.header .menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   //scroll-to-top
   const scrollSize = 100;
   const scrollUp = document.querySelector('.scroll-to-top');

   const getTop = () => window.pageYOffset || document.documentElement.scrollTop;


   window.addEventListener('scroll', () => {
      if (getTop() > scrollSize) {
         scrollUp.classList.add('show');
      } else {
         scrollUp.classList.remove('show');
      }
   });

   scrollUp.addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   });

   // animations
   //1.Добавить класс _anim-items для необходимого элемента
   //2.Прописать стили для класса _active который подставит скрипт
   //3.Класс _anim-no-hide отменяет удаление класса _active и анимация не повторяется при обратном скроле
   const animItems = document.querySelectorAll('._anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
         for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('_active');
            }
            else {
               if (!animItem.classList.contains('_anim-no-hide')) {
                  animItem.classList.remove('_active');
               }
            }
         }
      }
      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }
      setTimeout(() => {
         animOnScroll();
      }, 300);

   }


   $(document).ready(function () {
      $('.reviews__slider').slick({
         dots: true,
         arrows: false,
         slidesToShow: 2,
         autoplay: true,
         autoplaySpeed: 2000,
         responsive: [
            {
               breakpoint: 1080,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
               }
            }]
      });
   });

   // calc

   let radio = document.querySelectorAll('.radio-day'),
      select = document.querySelector('.select'),
      option = document.querySelector('.option'),
      result = document.querySelector('.sum-out'),
      checkbox = document.getElementById('checkbox'),
      radioSum = +1500,
      selectSum = +1000;



   for (var i = 0; i < radio.length; i++) {
      radio[i].addEventListener("click", function () {

         if (this.value == "day-14") {
            radioSum = 2500;
         }
         else if (this.value == "day-30") {
            radioSum = 3500;
         }
         else {
            radioSum = 1500;
         }
         result.innerHTML = radioSum + selectSum + "руб.";
      });
   }

   select.addEventListener('change', function () {
      selectSum = +this.value;
      result.innerHTML = radioSum + selectSum + "руб.";
   });

   checkbox.addEventListener('change', function () {
      if (this.checked) {
         checkboxSum = +20;
         result.innerHTML = (radioSum + selectSum) + ((radioSum + selectSum) / 100) * checkboxSum + "руб.";
      }
      else {
         result.innerHTML = radioSum + selectSum + "руб.";
      }

   });

   result.innerHTML = radioSum + selectSum + "руб.";











})

