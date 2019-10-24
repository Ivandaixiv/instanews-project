$(function(){
    
    // The possible section value are: arts, automobiles, books, 
    // business, fashion, food, health, home, insider, magazine, 
    // movies, national, nyregion, obituaries, opinion, politics, 
    // realestate, science, sports, sundayreview, technology, theater, 
    // tmagazine, travel, upshot, and world.

    $.ajax({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=vRtDeuRkRsAJWXB8I6P5L5cUg3dvnD99'
    })
    .done(function(data){
        console.log(data);
        $.each(data, function(){
            $('.articles').append(this.status);
        })
    })
    .fail(function(){
        $('.articles').append('Sorry there was an error.')
    })
    .always(function(){

    })
});