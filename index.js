var scrape = require('website-scraper');
var options = {
  urls: ['http://nodejs.org/'],
  directory: './tmp/',
};
 
// with promise
scrape(options).then((result) => {
    console.log('then reached');
    
}).catch((err) => {
    console.log('catch reached');
});
/* 
// or with callback
scrape(options, (error, result) => {
    // some code here 
});
*/
