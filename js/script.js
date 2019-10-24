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
        // console.log(data);
        $('.articles').append('<div class="currentNews"></div>');
        let articleNumber = 1;
        $.each(data.results, function(){
            console.log(this);
            console.log(this.multimedia[4].url);
            $('.currentNews').append('<a class="article-link" href="' + this.url +'"><div class="article-box article' + articleNumber + '"> <p class="article-text">' + this.abstract + '</p></div></a>');
            $('.article' + articleNumber).css('background-image', 'url(' + this.multimedia[4].url.replace("\"","")  +')');
            articleNumber++;
        })
    })
    .fail(function(){
        $('.articles').append('Sorry there was an error.')
    })
    // .always(function(){
    //     let today = new Date();
    //     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     $('.articles').append('<p>Todays Date: ' + date + '</p>')
    // })
});