// 
//  Requirement: Phantomjs 
//  http://phantomjs.org/
//
//  This script save webpage into png 
//  Ref: http://phantomjs.org/screen-capture.html
//
//  To save the png as we saw in browser, 
//  we need javascript engine which 'really' render the page in background, 
//  and that's the power of Phantomjs
//   

var page = require('webpage').create();

// Viewport Size
page.viewportSize = { width: 1680, height : 1200 };

// Deal with pop-up window asking for username/passwd
page.customHeaders={'Authorization': 'Basic '+btoa('username:passwd')}; 

page.open('http://url', function() {
    page.render('output.png');
    phantom.exit();
});
