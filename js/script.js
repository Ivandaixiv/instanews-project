$(function(){
    
    // The possible section value are: arts, automobiles, books, 
    // business, fashion, food, health, home, insider, magazine, 
    // movies, national, nyregion, obituaries, opinion, politics, 
    // realestate, science, sports, sundayreview, technology, theater, 
    // tmagazine, travel, upshot, and world.

    const resetPage = () => {
        $('#currentNews').remove();
        $('#error').remove();
        $('#date').remove();
    }
    
    const selection = document.getElementById('news-selection');
    selection.addEventListener('change',() => {
        resetPage();
        // console.log(this.activeElement.value);
        // PROGRAM AN IF STATEMENT TO CHECK IF THE VALUE IS NULL
        $.ajax({
            method: 'GET',
            url: 'https://api.nytimes.com/svc/topstories/v2/' + this.activeElement.value + '.json?api-key=vRtDeuRkRsAJWXB8I6P5L5cUg3dvnD99'
        })
        .done(function(data){
            // console.log(data);
            $('.articles').append('<div class="currentNews" id="currentNews"></div>');
            let articleCount = 1;
            // let gridCounter = 1;
            $('#loader').css('display', 'flex');
            setTimeout(function(){
                $('#loader').css('display', 'none');
                $.each(data.results, function(){
                    // index or counter
                    // console.log(this);
                    // console.log(this.multimedia[4].url);
                    if(this.multimedia.length >= 4){
                        if(articleCount <= 12) {
                            $('.currentNews').append('<a class="article-link" href="' + this.url +'"><div class="article-box article' + articleCount + '"> <p class="article-text">' + this.abstract + '</p></div></a>');
                            // console.log(index, this);
                            $('#currentNews').css('display','grid');
                            // APPLYS A NEW GRID ON EVERY ELEMENT
                            $('.article' + articleCount).css('background-image', 'url(' + this.multimedia[4].url  +')');
                            $('body').css({'height' : '100%' , });
                            $('.nyt-logo').css('height','120px');
                            $('header').css({'justify-content' : 'flex-start', 'width' : '100%'}); 
                            articleCount++;  
                            // if(gridCounter == 1 ){
                            //     $('.article' + articleCount).css('grid-column', '1/2');
                            //     gridCounter++;
                            // } else {
                            //     $('.article' + articleCount).css('grid-column', '3/4');
                            //     gridCounter = 1;
                            // }
                            // if(gridCounter == 1 ){
                            //     $('.article' + articleCount).css('grid-column', '1/2');
                            //     gridCounter++;
                            // } else if( gridCounter == 2) {
                            //     $('.article' + articleCount).css('grid-column', '2/3');
                            //     gridCounter++;
                            // } else {
                            //     $('.article' + articleCount).css('grid-column', '3/4');
                            //     gridCounter = 1;
                            // }
                        }
                    }
                })
            }, 1000);
        })
        .fail(function(){
            $('.articles').append('<p id="error">Sorry there was an error. Did you choose properly?</p>')
        })
        // 
    });
});