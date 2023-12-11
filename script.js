$(function main_slider()
{
    $('.product-slider').slick(
    {
        slidesToShow: 1,
        dots: true,
        fade: true,

    });
})




$(document).ready(function() {
    var material_item = document.querySelectorAll('.material-li');

    material_item.forEach(function(item) {
        item.addEventListener("click", function() {
            material_item.forEach(function(otherItem) {
                otherItem.classList.remove("material-li-change");
            });

            item.classList.add("material-li-change");
        });
    });

      
    // Задаем по умолчанию первый цвет (Black) как выбранный
    $('.color-list .color-palette-item:first-child').addClass('color-palette-item-change');
    $('.material-li:first-child').addClass('material-li-change');

    // Обработчик события клика на элементе .material-li
    $('.material-li').click(function() 
    {
      var materialValue = $(this).data('material');
  
      // Задаем текст в .material-title в зависимости от выбранного материала
      if (materialValue === 'WF') 
      {
        setTimeout(function() 
        {
          $('.material-title').text('Woven Fabric');
        }, 300);

        updateColorList([
          { imgSrc: 'Palette-Pics/Grey.svg', colorName: 'Grey' },
        ]);
      } 
      else if (materialValue === 'ML') 
      {
        setTimeout(function() {
          $('.material-title').text('Microfiber Leatherette');
        }, 300);

        $('.color-palette-item:first-child').addClass('color-palette-item-change');
        updateColorList([
          { imgSrc: 'Palette-Pics/Black.svg', colorName: 'Black' },
          { imgSrc: 'Palette-Pics/Red.svg', colorName: 'Red' },
          { imgSrc: 'Palette-Pics/Purple.svg', colorName: 'Purple' },
          { imgSrc: 'Palette-Pics/Green.svg', colorName: 'Green' },
        ]);
      } 
      else if (materialValue === 'SF') 
      {
        setTimeout(function() {
          $('.material-title').text('Suede Fabric');
        }, 300);

        updateColorList([
          { imgSrc: 'Palette-Pics/Black.svg', colorName: 'Black' },
          { imgSrc: 'Palette-Pics/Red.svg', colorName: 'Red' },
          { imgSrc: 'Palette-Pics/Grey.svg', colorName: 'Grey' },
        ]);
      } else if (materialValue === 'SL') {
        setTimeout(function() {
          $('.material-title').text('Silicone Leatherette');
        }, 300);
        updateColorList([
          { imgSrc: 'Palette-Pics/Black.svg', colorName: 'Black' },
          { imgSrc: 'Palette-Pics/Cyan.svg', colorName: 'Cyan' },
        ]);
      }
      

          // Добавляем и убираем класс blur с анимацией тайтлу с материалом
          $('.material-title').addClass('blur').css('font-size', 0);
          $('.color-list').addClass('color-list-sizing');
          $('.color-palette-item').addClass('palette-anim');
          $('.color-palette-item:first-child').addClass('color-palette-item-change-anim');


          setTimeout(function() 
          {
            $('.material-title').removeClass('blur').css('font-size', 18);

          }, 500);
          setTimeout(function() 
          {
            $('.color-palette-item').removeClass('palette-anim');
            $('.color-list').removeClass('color-list-sizing');
            $('.color-palette-item:first-child').removeClass('color-palette-item-change-anim');
          }, 400);

          $('.color-list .color-palette-item:first-child').addClass('color-palette-item-change');
    });



    $(document).on('click','.color-palette-item', function() {
        $(this).addClass('color-palette-item-change');
        $('.color-list .color-palette-item').not(this).removeClass('color-palette-item-change');

        var materialValue = $('.material-li.material-li-change').data('material');
        var selectedColor = $(this).find('.color-name').text();
        updateSlider(materialValue, selectedColor);
    });


    $(document).on('click', '.material-li', function() {
        $(this).addClass('material-li-change');
        $('.material-li').not(this).removeClass('material-li-change');
        
        var materialValue = $(this).data('material');
        var selectedColor = $('.color-list .color-palette-item.color-palette-item-change').find('.color-name').text();
        updateSlider(materialValue, selectedColor);
    });



    function updateSlider(materialValue, color) {
        var sliderContainer = $('.product-slider');
        sliderContainer.empty();
        if(materialValue === 'WF')
        {
            for (var i = 1; i <= 2; i++) {
                var slideSrc = 'Chairs-imgs/' + materialValue + '/' + color + '/' + materialValue + '-' + i + '.png';
                sliderContainer.append('<img class="chairs" src="' + slideSrc + '">');
            }
        } 
        else
        {
            for (var i = 1; i <= 7; i++) {
                var slideSrc = 'Chairs-imgs/' + materialValue + '/' + color + '/' + materialValue + '-' + i + '.png';
                sliderContainer.append('<img class="chairs" src="' + slideSrc + '">');
            }
        }
        if ($('.product-slider').hasClass('slick-initialized')) {
            $('.product-slider').slick('slickRemove', null, null, true);
            $('.product-slider').slick('unslick');
            $('.product-slider').slick(
            {
                slidesToShow: 1,
                dots: true,
                fade: true,
            });
        }
    }
  
    function updateColorList(colors) {
      var colorList = $('.color-list').empty();
      $.each(colors, function(index, color) {
        colorList.append('<li class="color-palette-item"><img class="color-img" src="' + color.imgSrc + '"><div class="color-name">' + color.colorName + '</div></li>');
      });
    }
});

$('.upper').on('click', function() {
    // Плавно прокручиваем страницу к началу
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});

document.addEventListener("DOMContentLoaded", function() {
  // Загрузка завершена, скрываем предзагрузку и отображаем основное содержимое
  document.querySelector('.loader-container').style.display = 'none';
});

const boxes = document.querySelectorAll('.box');


const checkBoxes = () => {
  const triger = (window.innerHeight/6) * 5.4;

  for (const box of boxes){
    topOfBox = box.getBoundingClientRect().top;
    if (topOfBox < triger){
      box.classList.add('show');
    }
  }
}

const footnote = document.getElementsByClassName('footnote')[0];
const line1 = document.getElementsByClassName('line-1')[0];
const line2 = document.getElementsByClassName('line-2')[0];
const line3 = document.getElementsByClassName('line-3')[0];
const uppper = document.getElementsByClassName('upper')[0];
const flexItems = document.querySelectorAll('.flex-item');

const checks = () => {
  const triger = (window.innerHeight/6) * 5.2;

  


  flexItems.forEach((item, index) => {
    const topOfItem = item.getBoundingClientRect().top;

    // Подсчитываем задержку для каждого элемента
    const delay = index * 100;

    if (topOfItem < triger) {
      // Используем setTimeout с уникальной задержкой для каждого элемента
      setTimeout(() => {
        item.classList.add('show');
      }, delay);
    }
  });

  topOfLine1 = line1.getBoundingClientRect().top;
  topOfLine2 = line2.getBoundingClientRect().top;
  topOfLine3 = line3.getBoundingClientRect().top;
  topOfUpper = uppper.getBoundingClientRect().top;
  fTop = footnote.getBoundingClientRect().top;

  if(fTop < triger)
  {
    footnote.classList.add('show');
  }
  if(topOfUpper< triger){
    uppper.classList.add('upper-show');
  }
  if(topOfLine1 < triger){
    line1.classList.add('line-1-show');
  }
  if(topOfLine2 < triger){
    line2.classList.add('line-2-show');
  }
  if(topOfLine3 < triger){
    line3.classList.add('line-3-show');
  }
}



window.addEventListener('scroll', checks);
window.addEventListener('scroll', checkBoxes);

