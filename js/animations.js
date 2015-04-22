$(document).ready(function() {
	var tweetButton = $('#tweet-submit');
	var charCount = $('#char-count');
	var tweetCompose = $('#tweet-content .tweet-compose');
	var tweet = $('.tweet');
	var stream = $('#stream');
	var textColor = charCount.css("color");
	var maxChars = 140;

	tweetButton.hide();
	charCount.hide();
	var tweetComposeHeight = tweetCompose.height();
	tweetCompose.on('click', function() {
		tweetButton.show();
		charCount.show();
		tweetCompose.css({
			height: tweetComposeHeight * 2 + 'px'
		})
	})
	tweetCompose.keyup(function() {
		
		var remChars = maxChars - tweetCompose.val().length;
		// console.log(tweetCompose.val().length + ' is the current length');
		charCount.text(remChars);
		if(remChars <= 10) {
			charCount.css({ 
				"color": "red"
			})
		} else {
			// console.log('greater than 10');
			// console.log(charCount.css("color"))
			// console.log(textColor);
			charCount.css({
				"color": textColor
			})
		}
		
		if(tweetCompose.val().length > maxChars){
			// console.log('more than 140');
			tweetButton.prop('disabled', true);
		} else {
			// console.log('less than 140')
			tweetButton.prop('disabled', false);
		}
	});

	tweetButton.on('click', function(){
		console.log('Testing if onClick is working')
		console.log(tweetCompose);
		var newTweet = "<div class=\"tweet\"><div class=\"content\"><img class=\"avatar\" src=\"img/alagoon.jpg\" /><strong class=\"fullname\">Matthew Ecklund</strong><span class=\"username\">@myself</span><p class=\"tweet-text\">";
		stream.prepend(newTweet + tweetCompose.val() + "</p></div></div>");
	})
})



















