$( document ).ready(function() {

    const clickx= document.getElementById('pencet');
    const header= document.getElementById('header');

    clickx.addEventListener('click', function(){
        clickx.classList.toggle('Diam');
        header.classList.toggle('open');
    });


    $("#nav-site .submenu").click(function(){
        ($(this).hasClass("open")) ? $(this).removeClass("open") : $(this).addClass("open");
    });


    var behavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {
        onKeyPress: function (val, e, field, options) {
            field.mask(behavior.apply({}, arguments), options);
        }
    };    
    $('.phone').mask(behavior, options);

    $("#frmContato").validate({
        rules: {
            iNome: "required",
            iEmail: {
                required: true,
                email: true
            },
            iTelefone: "required",            
            tMsg: "required"
        },
        messages: {
            iNome: "Campo obrigatório",
            iEmail: {
                required: "Campo obrigatório",
                email: "Digite um e-mail válido"
            },
            iTelefone: "Campo obrigatório",
            tMsg: "Campo obrigatório"
        }
    });

    $('.responsive').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

});