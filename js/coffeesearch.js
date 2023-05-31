/*
    Айдішки:
        next-page - button
        previous-page - button
        search-box - input
        coffee-container - div //тримає картки з кавою
            //кнопки фільтрації:
        is-sweet - button
        is-strong - button
        is-classic - button
        go-search - button //кнопка пошуку
    Стилі:
            //перший з цих має мати hidden грає роль шаблону
        .coffee-box - div //картка з кавою
        .coffee-box-title - text
        .coffee-box-description - text
        .coffee-box-price - text 
        .filter-selected - button //кнопка фільтрації увімкнена    
*/


const pageSize = 6;
let position = 0;
let Cquery = coffee;
let isSweet = false;
let isStrong = false;
let isClassic = false;

$(document).ready(() => {
    $('#is-sweet').click(() => {
        if(isSweet){
            $('#is-sweet').removeClass('filter-selected');
            isSweet = false;
        } else {
            $('#is-sweet').addClass('filter-selected');
            isSweet = true;
        }
        query();
    });
    
    $('#is-strong').click(() => {
        if(isStrong){
            $('#is-strong').removeClass('filter-selected');
            isStrong = false;
        } else {
            $('#is-strong').addClass('filter-selected');
            isStrong = true;
        }
        query();
    });
    
    $('#is-classic').click(() => {
        if(isClassic){
            $('#is-classic').removeClass('filter-selected');
            isClassic = false;
        } else {
            $('#is-classic').addClass('filter-selected');
            isClassic = true;
        }
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

    query();

});



function query(){
    let sb = $('#search-box').val();
    Cquery = coffee
        .filter(x => {
            let r = true;
            if(sb != null && sb != "")
                r = x.name.toLowerCase().includes(sb);
            if(isSweet)
                r = r && x.tags.includes('Солодка');
            if(isStrong)
                r = r && x.tags.includes('Міцна');
            if(isClassic)
                r = r && x.tags.includes('Класична');
            return r;
        });
    position = 0;
    checkButtons();
    renderCoffee();
}

function renderCoffee(){
    $('#coffee-container').empty();
    let tmpl = $('.coffee-box').first();
    let i = 0;
    let lm = pageSize > Cquery.length - position ? Cquery.length - position : pageSize
    for(; i < lm; i++){
        let o = Cquery[position + i];
        let cl = $(tmpl).clone();
        $(cl).css('display','block');
        $(cl).children('.coffee-box-title').first().html(o.name)
        $(cl).children('.coffee-box-description').first().html(o.description)
        $(cl).children('.coffee-box-price').first().html(o.price.toFixed(2) + '₴');
        $('#coffee-container').append(cl);
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