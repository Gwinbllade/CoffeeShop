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
        if(isSweet){
            $('#is-strong').removeClass('filter-selected');
            isStrong = false;
        } else {
            $('#is-strong').addClass('filter-selected');
            isStrong = true;
        }
        query();
    });
    
    $('#is-classic').click(() => {
        if(isSweet){
            $('#is-classic').removeClass('filter-selected');
            isClassic = false;
        } else {
            $('#is-classic').addClass('filter-selected');
            isClassic = true;
        }
        query();
    });
    
    $('#go-search').click(()=>{
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

})



function query(){
    let sb = $('#input-box').val();
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
    renderCoffee();
}

function renderCoffee(){
    $('#coffee-container').empty();
    let tmpl = $('.coffe-box')[0];
    for(let i = 0; i < pageSize; i++){
        let o = Cquery[position + i];
        let cl = $(tmpl).clone();
        cl.id = null;
        $(cl).prop('isVisible').removeAttr('hidden');
        $(cl).children('.coffee-box-title')[0].html(o.name)
        $(cl).children('.coffee-box-description')[0].html(o.description)
        $(cl).children('.coffee-box-price')[0].html(o.price.toFixed(2) + '₴');
        $('#coffee-container').append(cl);
    }
}

function checkButtons(){
    if(position + pageSize >= Cquery.length)
        $('#next-page').prop('disable', 'true');
    else $('#next-page').prop('disable', 'false');
    if(position > 0)
        $('#previous-page').prop('disable', 'false');
    else $('#previous-page').prop('disable', 'true');
}