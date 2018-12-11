const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.beeradvocate.com/beer/styles/32/?sort=revsD&start='
const defaultUrl = 'https://www.beeradvocate.com'


function scrapeBeers() {
    const arr = []
for (i = 0; i < 300; i += 50) {  
    rp(url + i)
      .then(function(html){
        for (i = 5; i < 105; i++) {
            let beerPage = defaultUrl + $('td > a', html)[i].attribs.href;
        if (beerPage.split('/').length === 8) {
            rp(beerPage) 
            .then(function(html) {
               let beerName = $('h1', html).text().split('|')[0];
               let brewer = $('a > b', html).text().split('!')[1].split('German Bock')[0];
               let beerPic = $('#main_pic_norm', html).find('img')[0].attribs.src;
               $('b', html).each(function(i, elem) {
                if ($(this).text().includes("ABV")) { console.log($(this).next())}
              });
            })
        }
         
        }
        
          }
        
      )
      .catch(function(err){
        arr.push(err)
      });


    }
}

scrapeBeers()

