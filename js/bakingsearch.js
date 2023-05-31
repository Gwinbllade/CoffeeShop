/*
    Айдішки:
        next-page - button
        previous-page - button
        search-box - input
        baking-container - div //тримає картки з кавою
            //кнопки фільтрації:
        is-backing - button
        is-cookie - button
        is-sweetie - button
        go-search - button //кнопка пошуку
    Стилі:
            //перший з цих має мати hidden грає роль шаблону
        .baking-box - div //картка з кавою
        .baking-box-title - text
        .baking-box-description - text
        .baking-box-price - text 
        .baking-selected - button //кнопка фільтрації увімкнена    
*/


const pageSize = 6;
let position = 0;
let Cquery = baking;
let isBaking = false;
let isCookie = false;
let isSweet = false;

$(document).ready(() => {
    $('#is-baking').click(() => {
        if(isBaking){
            $('#is-baking').removeClass('filter-selected');
            isBaking = true;
            query();
            return;
        }
        $('#is-baking').addClass('filter-selected');
        $('#is-sweetie').removeClass('filter-selected');
        $('#is-cookie').removeClass('filter-selected');
        isBaking = true;
        isCookie = false;
        isSweet = false;
        query();
    });
    
    $('#is-cookie').click(() => {
        if(isCookie){
            $('#is-cookie').removeClass('filter-selected');
            isCookie = false;
            query()
            return;
        }
        $('#is-cookie').addClass('filter-selected');
        $('#is-baking').removeClass('filter-selected');
        $('#is-sweetie').removeClass('filter-selected');
        isBaking = false;
        isCookie = true;
        isSweet = false;
        query();
    });
    
    $('#is-sweetie').click(() => {
        if(isSweet){
            isSweet = false;
            $('#is-sweetie').removeClass('filter-selected');
            query();
            return;
        }
        $('#is-sweetie').addClass('filter-selected');
        $('#is-cookie').removeClass('filter-selected');
        $('#is-baking').removeClass('filter-selected');
        isBaking = false;
        isCookie = false;
        isSweet = true;
        query();
    });
    
    $('#search-box').on('input',()=>{
        query();
    });    

    $('#next-page').click(x => {
        position += pageSize;
        checkButtons();
        renderCoffee();
    });

    $('#previous-page').click(x => {
        position -= pageSize;
        checkButtons();
        renderCoffee();
    });

    renderCoffee();
});



function query(){
    let sb = $('#search-box').val();
    Cquery = baking
        .filter(x => {
            let r = true;
            let i = false;
            if(sb != null && sb != "")
                r = x.name.toLowerCase().includes(sb.toLowerCase());
            switch (true){
                case isSweet:
                    return r && x.category == 'Тістечка';
                case isCookie:
                    return r && x.category == 'Печиво';
                case isBaking:
                    return r && x.category == 'Випічка';
                default:
                    return r;
            }
        });
    position = 0;
    checkButtons();
    renderCoffee();
}

function renderCoffee(){
    $('#baking-container').empty();
    let tmpl = $('.baking-box').first();
    let i = 0;
    let lm = pageSize > Cquery.length - position ? Cquery.length - position : pageSize
    for(; i < lm; i++){
        let o = Cquery[position + i];
        let cl = $(tmpl).clone();
        $(cl).css('display','block');
        $(cl).children('.baking-box-title').first().html(o.name)
        $(cl).children('.baking-box-description').first().html(o.description)
        $(cl).children('.baking-box-price').first().html(o.price.toFixed(2) + '₴');
        $(cl).children('.baking-box-image').first().prop('src', o.image);
        $('#baking-container').append(cl);
    }
    if(i == 0)
        $('.none-message').css('display','inline-block')
    else $('.none-message').css('display','none')
}

function checkButtons(){
    if(position + pageSize >= Cquery.length)
        $('#next-page').prop('disabled', true);
    else $('#next-page').removeAttr('disabled');
    if(position > 0)
        $('#previous-page').removeAttr('disabled');
    else $('#previous-page').prop('disabled', true);
}