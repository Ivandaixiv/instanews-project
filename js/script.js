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
        let articleCount = 1;
        $.each(data.results, function(){
            // index or counter
            // console.log(this);
            // console.log(this.multimedia[4].url);
            if(this.multimedia.length >= 4){
                if(articleCount <= 12) {
                    $('.currentNews').append('<a class="article-link" href="' + this.url +'"><div class="article-box article' + articleCount + '"> <p class="article-text">' + this.abstract + '</p></div></a>');
                    // console.log(index, this);
                    $('.article' + articleCount).css('background-image', 'url(' + this.multimedia[4].url  +')');
                    $('body').css({'height' : '5500px' , });
                    $('.nyt-logo').css('height','150px');
                    $('header').css('justify-content', 'space-around'); 
                    articleCount++;   
                }
            }
        })
    })
    .fail(function(){
        $('.articles').append('<p>Sorry there was an error.</p>')
    })
    // .always(function(){
    //     let today = new Date();
    //     let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     $('.articles').append('<p>Todays Date: ' + date + '</p>')
    // })
});