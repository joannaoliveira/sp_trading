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

    $(".solicitar-analise").on( "click", function() {
        $("#frmCotacao").get(0).scrollIntoView({behavior: 'smooth'});
        return false;
    });

    $("#frmCotacao").validate({
        rules: {
            iNome: "required",
            iSobrenome: "required",
            iEmail: {
                required: true,
                email: true
            },
            iWhatsapp: "required",            
            iTpDivida: "required",            
            iValor: "required"
        },
        messages: {
            iNome: "Campo obrigatório",
            iSobrenome: "Campo obrigatório",
            iEmail: {
                required: "Campo obrigatório",
                email: "Digite um e-mail válido"
            },
            iWhatsapp: "Campo obrigatório",
            iTpDivida: "Campo obrigatório",
            iValor: "Campo obrigatório"
        }
    });

});