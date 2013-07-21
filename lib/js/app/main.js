define([
    "requirejs/domReady",
    "HTML5Player/Player"
], function(domReady, Player) {
    domReady(function() {
        new Player.Player("html5-player-wrapper");
    });
});