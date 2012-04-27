// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI tab and root window
//
var win = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});

var button = Ti.UI.createButton({
	title: 'Click me!'
});
button.addEventListener('click', function(e){
	
	// load the module
	var mg = require('mini_game_hud');
	
	// display the loading hud
	mg.show('Loading something...');

	// hide the hud after 10s
	setTimeout(function(){
		mg.hide();
	}, 20000);
	
});

win.add(button);
win.open();