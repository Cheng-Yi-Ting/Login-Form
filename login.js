var cont = 0;

function register() {

    cont++;

    if (cont == 1) {
        $('.box').animate({ height: '695px' }, 550);
        $('.show').css('display', 'block');
        $('#logintoregister').text('Register');
        $('#buttonlogintoregister').text('Register');
        $('#plogintoregister').text("Sei gia' registrato?");
        $('#textchange').text('Accedi');
    } else {
        $('.show').css('display', 'none');
        $('.box').animate({ height: '365px' }, 550);
        $('#logintoregister').text('SIGN IN');
        $('#buttonlogintoregister').text('SIGN IN');
        $('#plogintoregister').text("Non sei iscritto?");
        $('#textchange').text('Registrati');
        cont = 0;
    }
}