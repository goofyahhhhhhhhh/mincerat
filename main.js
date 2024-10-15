var canvas = new fabric.Canvas('myCanvas');
block_width = 30;
block_height = 30;
xplayer = 10;
yplayer = 10;
var player_object = "";
var block_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:yplayer,
            left:xplayer
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(img){
        block_object = img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:yplayer,
            left:xplayer
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log("key pressed lol : " + keyPressed);
    if(e.shiftKey == true && keyPressed == '43') {
        console.log("key pressed lol : shift and +");  
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(e.shiftKey == true && keyPressed == '45') {
        console.log("key pressed lol : shift and -");  
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keyPressed == '38') {
        up();
        console.log("key pressed lol : up");
    }
    if(keyPressed == '39') {
        right();
        console.log("key pressed lol : right");
    }
    if(keyPressed == '40') {
        down();
        console.log("key pressed lol : down");
    }
    if(keyPressed == '37') {
        left();
        console.log("key pressed lol : left");
    }
    if(keyPressed == '87') {
        new_image("wall.jpg");
        console.log("key pressed lol : w");
    }
    if(keyPressed == '71') {
        new_image("ground.png");
        console.log("key pressed lol : g");
    }
    if(keyPressed == '76') {
        new_image("light_green.png");
        console.log("key pressed lol : l");
    }
    if(keyPressed == '84') {
        new_image("trunk.jpg");
        console.log("key pressed lol : t");
    }
    if(keyPressed == '82') {
        new_image("roof.jpg");
        console.log("key pressed lol : r");
    }
    if(keyPressed == '89') {
        new_image("yellow_wall.png");
        console.log("key pressed lol : y");
    }
    if(keyPressed == '68') {
        new_image("dark_green.png");
        console.log("key pressed lol : d");
    }
    if(keyPressed == '85') {
        new_image("unique.png");
        console.log("key pressed lol : u");
    }
    if(keyPressed == '67') {
        new_image("cloud.jpg");
        console.log("key pressed lol : c");
    }
}

function up() {
    if (yplayer >= 0) {
        yplayer = yplayer - block_height;
        console.log("block image height = " + block_height);
        console.log("when up arrow key pressed, x = " + xplayer + ", y = " + yplayer);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (yplayer <= 500) {
        yplayer = yplayer + block_height;
        console.log("block image height = " + block_height);
        console.log("when up arrow key pressed, x = " + xplayer + ", y = " + yplayer);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (xplayer >= 0) {
        xplayer = xplayer - block_width;
        console.log("block image width = " + block_width);
        console.log("when up arrow key pressed, x = " + xplayer + ", y = " + yplayer);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (xplayer <= 850) {
        xplayer = xplayer + block_width;
        console.log("block image width = " + block_width);
        console.log("when up arrow key pressed, x = " + xplayer + ", y = " + yplayer);
        canvas.remove(player_object);
        player_update();
    }
}