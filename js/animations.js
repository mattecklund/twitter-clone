$(document).ready(function() {
	var tweetButton = $('#tweet-submit');
	var charCount = $('#char-count');
	var tweetCompose = $('#tweet-content .tweet-compose');
	var tweet = $('.tweet');
	var stream = $('#stream');
	var textColor = charCount.css("color");
	var maxChars = 140;
	var tweetActions = $('.tweet-actions');

	tweetButton.hide();
	charCount.hide();
	$('.tweet-actions').hide();
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
		// console.log('Testing if onClick is working')
		// console.log(tweetCompose);
		var beforeTweet = "<div class=\"tweet\"><div class=\"content\"><img class=\"avatar\" src=\"img/alagoon.jpg\" /><strong class=\"fullname\">Matthew Ecklund</strong><span class=\"username\">@myself</span><p class=\"tweet-text\">";
		var afterTweet = "</p><div class=\"tweet-actions\"><ul><li><span class=\"icon action-reply\"></span> Reply</li><li><span class=\"icon action-retweet\"></span> Retweet</li><li><span class=\"icon action-favorite\"></span> Favorite</li><li><span class=\"icon action-more\"></span> More</li></ul></div><div class=\"stats\"><div class=\"retweets\"><p class=\"num-retweets\">10</p><p>RETWEETS</p></div><div class=\"favorites\"><p class=\"num-favorites\">2</p><p>FAVORITES</p></div><div class=\"users-interact\"><div><img src=\"img/alagoon.jpg\" /><img src=\"img/vklimenko.jpg\" /></div></div><div class=\"time\">1:04 PM - 19 Sep 13</div></div><div class=\"reply\"><img class=\"avatar\" src=\"img/alagoon.jpg\" /><textarea class=\"tweet-compose\" placeholder=\"Reply to @myself\"/></textarea></div></div></div>";
		stream.prepend(beforeTweet + tweetCompose.val() + afterTweet);
		// console.log('prepending new Tweet');
		//remove value of tweetCompose from input box
		tweetHover();
		$('.tweet-actions').hide();
	});
	
	var tweetHover = function(){
		$('.tweet').hover(
			function() {
				// console.log('hovering over tweet class');
				$('.tweet-actions', this).show();
				// $(this).child('.tweet-actions').show();
			}, function() {
				// console.log('leaving element');
				$('.tweet-actions', this).hide();
			}
		)
	};
	tweetHover();
})



















