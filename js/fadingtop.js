/*Скрипт для поступового затемнення верхньої 
картинки та меню коли відбувається скрол вниз,
відповідно фон меню стає чорним по завершенню картинки
*/

$(document).scroll(() => {
    let img = $('.blacker')[0];
    let bar = $('.blacking-bar')[0];
    let hmx = $(img).height() - $(bar).height();
    let cs = $(window).scrollTop();
    let pl = parseInt($(bar).css('--blacking-offset'))
    if(cs <= pl)
        $(bar).css('top', pl-cs+'px');
    else
        $(bar).css('top', 0);

    if(hmx <= cs){
        $(bar).css('background-color', 'black');
        return;
    } else{
        $(bar).css('background-color', 'transparent');
    }
    $('.blacker').css('--lvl', cs / hmx);
})