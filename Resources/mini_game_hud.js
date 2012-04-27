var score;

var self = Ti.UI.createWindow();

var hud = Ti.UI.createView({
	height: 200,
	width: 250,
	backgroundColor: '#000',
	borderRadius: 10,
	opacity: 0.7
});
self.add(hud);

var actInd = Ti.UI.createActivityIndicator({
	top: 5,
	height: 30,
	width: Ti.UI.SIZE,
	style: Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN,
	font: {fontFamily:'Helvetica Neue', fontSize: 16, fontWeight:'normal'},
  	color: 'white'
});
hud.add(actInd);

var score_wrap = Ti.UI.createView({
	width: 130,
	height: 100,
	left: 0,
	top: 55
});
hud.add(score_wrap);

var score_title = Ti.UI.createLabel({
	top: 0,
	width: Ti.UI.SIZE,
	text: 'Taps',
	color: 'white',
	font: {fontSize: 20}
});
score_wrap.add(score_title);

var score_text = Ti.UI.createLabel({
	top: 20,
	width: Ti.UI.SIZE,
	text: '0',
	color: 'white',
	font: {fontSize: 66, fontWeight: 'bold'}
});
score_wrap.add(score_text);

var tap_me = Ti.UI.createImageView({
	image: 'smiley.png',
	width: 100,
	height: 100,
	right: 15,
	top: 55
});
hud.add(tap_me);


tap_me.addEventListener('singletap', function(e){
	score += 1;
	score_text.setText(score);
});


var note = Ti.UI.createLabel({
	bottom: 10,
	width: Ti.UI.SIZE,
	color: 'white',
	text: 'Kill time while waiting.',
	font: {fontSize: 12}
});
hud.add(note);


exports.show = function(message){
	score = 0;
	score_text.setText(score);
	actInd.setMessage(message);
	actInd.show();
	self.open();
};

exports.hide = function(){
	actInd.hide();
	self.close();
};
