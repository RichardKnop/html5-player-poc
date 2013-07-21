define([
	"jquery"
	], function($) {

		var exports = {};

		exports.Player = function(id) {
			this.id = id;
			this.container = $("#" + id);
			this.videoTag = this.container.find("#html5-player");
			this.video = this.videoTag.get(0);
			this.playPauseButton = this.container.find(".playPause");

			// position the controls bar
			var controlsHeight = this.container.find(".controls-wrapper").outerHeight();
			var videoHeight = this.videoTag.height();
			var controlsTopOffset = videoHeight - controlsHeight;
			this.container.find(".controls-wrapper").css("top", controlsTopOffset);
		
			// play / pause event
			var that = this;
			this.playPauseButton.click({
				player: that
			}, this.playPause);
			// when video ends
			this.video.addEventListener("ended", function() {
				that.video.currentTime = 0.1;
				that.playPauseButton.text("Play");
			}, false);
		};
		exports.Player.prototype.playPause = function(event) {
			var player = event.data.player;
			if (player.video.paused) {
				player.play(player);
			} else {
				player.pause(player);
			}
			return false;
		};
		exports.Player.prototype.play = function(player) {
			player.video.play();
			player.startUpdatingSeekBar();
			player.playPauseButton.text("Pause");
		};
		exports.Player.prototype.pause = function(player) {
			player.video.pause();
			player.stopUpdatingSeekBar();
			player.playPauseButton.text("Play");
		};
		exports.Player.prototype.startUpdatingSeekBar = function() {
			var player = this;
			this.updateSeekBar = setInterval(function() {
				player.updateSeekbar();
			}, 500);
		};
		exports.Player.prototype.stopUpdatingSeekBar = function() {
			clearInterval(this.updateSeekBar);
		};
		exports.Player.prototype.updateSeekbar = function() {
			var newWidth = Math.floor((this.video.currentTime / this.video.duration) * 100);
			$(".seekBar .progress").css("width", newWidth + "%");
		};

		return exports;

	});