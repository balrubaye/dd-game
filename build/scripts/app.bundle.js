(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


(function () {
	'use strict';

var canvas= document.getElementById('canvas');

var stage = new createjs.Stage(canvas);

var data={
	images: ['images/monster.png'],
	frames: {regX:32, regY:32, width:64, height:64},
	animations:{
		walk:[0,9]
	}
};

var spritesheet= new createjs.SpriteSheet(data);
var sprite= new createjs.Sprite(spritesheet);
sprite.x= 100;
sprite.y=100;
sprite.direction=90;
sprite.speed=1;

//sprite.gotoAndPlay('walk');
stage.addChild(sprite);


createjs.Ticker.setInterval(30);
createjs.Ticker.addEventListener('sds',function(){
	console.log('tick');

	if (sprite.x >= screen_width - 16) {
        // We've reached the right side of our screen
        // We need to walk left now to go back to our initial position
        sprite.direction = -90;
    }
 
    if (sprite.x < 16) {
        // We've reached the left side of our screen
        // We need to walk right now
        sprite.direction = 90;
    }
 
    // Moving the sprite based on the direction & the speed
    if (sprite.direction == 90) {
        sprite.x += sprite.vX;
        sprite.y += sprite.vY;
    }
    else {
        sprite.x -= sprite.vX;
        sprite.y -= sprite.vY;
    }
 
    // update the stage:
    stage.update();

});

//console.log('Game Started: EaselJS version: ' + c.EaselJS.version);
})();
},{}]},{},[1]);