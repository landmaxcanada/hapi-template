console.log('index.js loaded')

lm.test = "Yes, you can work with LM"

lm.gapi.client.load('plus', 'v1', function() {
	var request = lm.gapi.client.plus.people.get({
		'userId': 'me'
	});

	request.execute(function(resp) {
		console.log('plus: ' + resp);
		lm.me = document.querySelector("#profile");
		lm.me.model = {};
		lm.me.model.profile = resp;
	});
});

lm.gapi.client.load('drive', 'v2', function() {
	var request = lm.gapi.client.drive.about.get();

	request.execute(function(resp) {
		console.log('drive: ' + resp);
		lm.driveResp = resp;
/*		lm.drive = document.querySelector("#profile");
		t.model = {};
		t.model.profile = resp;*/
	});
});