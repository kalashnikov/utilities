// 
//  Requirement: Phantomjs 
//  http://phantomjs.org/
//
//  This script save webpage into pdf 
//  Ref: http://phantomjs.org/screen-capture.html
//
//  To save the png as we saw in browser, 
//  we need javascript engine which 'really' render the page in background, 
//  and that's the power of Phantomjs
//   

var page = require('webpage').create();

// Deal with pop-up window asking for username/passwd
page.customHeaders={'Authorization': 'Basic '+btoa('username:passwd')}; 

// Render as webpage viewing 
//page.viewportSize = { width: 1680, height : 1200 };

// PDF Paging 
page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' }; 


// 
// Here's one problem when output into PDF format.  
// The result is not fully rendered in js or css. See below workaround.
// 
// PNG & PDF rendering are differents on some websites #10623
// https://github.com/ariya/phantomjs/issues/10623
//
// If you are the website owner, add below js code into target page  
// https://gist.github.com/jorupp/2af4d8583bd592b8331f
// Credit: jorupp
//

page.open('http://url', function() {
    page.render('output.pdf');
    phantom.exit();
});
