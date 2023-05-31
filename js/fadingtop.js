/*Скрипт для поступового затемнення верхньої 
картинки та меню коли відбувається скрол вниз,
відповідно фон меню стає чорним по завершенню картинки
*/

$(document).scroll(() => {
    let img = $('.blacker')[0];
    let bar = $('.blacking-bar')[0];
    let hmx = $(img).height() - $(bar).height();
    let cs = $(window).scrollTop();
    if(hmx <= cs){
        $(bar).css('background-color', 'black');
        return;
    } else{
        $(bar).css('background-color', 'transparent');
    }
    $('.blacker').css('--lvl', cs / hmx);
})