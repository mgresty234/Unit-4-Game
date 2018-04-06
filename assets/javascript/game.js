$(document).ready(function() {

/* Characters */
var charOne = "#char1";
var charTwo = "#char2";
var charThree = "#char3";
var charFour = "#char4";

/* Array */
var characters = [charOne, charTwo, charThree, charFour];

    $(".first").on("click", ".charSection", function() {
        $(this).addClass("Hero");
        var chars = $(".charSection");
        chars.each(function(i, char){
            if (!char.className.includes("Hero")){
                $(char).appendTo($(".enemySection"));
            }
        });
    });
    $(".second").on("click", ".charSection", function() {
        $(this).addClass("Enemy");
        var enemy = $(".charSection");
        enemy.each(function(i, enemy){
            if (enemy.className.includes("Enemy")){
                $(enemy).appendTo($(".fourth"));
            }
        });
    });
    $(".attackBtn").on("click", function() {   
         

    }





});

