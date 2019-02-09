var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetGame = function () {
    var images =['https://cdn.pixabay.com/photo/2014/04/03/10/02/diamond-309694_1280.png',
    'http://clipart-library.com/data_images/363803.png',
    'https://cdn0.iconfinder.com/data/icons/casino-icons-set-cartoon-style/512/a1271-512.png',
    'http://pngimg.com/uploads/ruby/ruby_PNG36.png'
    ]
    $(".crystals").empty();

targetScore = Math.floor(Math.random() * ((120-19) + 1 ) + 19);
 
$("#result").html('Target Score: ' + targetScore);
for(var i = 0; i < 4; i++){

    var random =Math.floor(Math.random() * 11) +1;
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });
    crystal.css({
       "background-image":"url('" + images[i] + "')",
       "background-size":"cover"
    });
    $(".crystals").append(crystal);
}
$("#previous").html("Total Score:", previous);
}
resetGame();

$(document).on('click',".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Total Score:" + previous);
    console.log(previous);
    if(previous > targetScore){
        lost++;
        $("#lost").html("Losses:" + lost);
        resetGame();
        previous =0;
        $("#previous").html(previous);
        alert("Better luck next time 😪")
        }
    else if(previous === targetScore){
        win++;   
        $("#win").html("Wins:" + win);
        resetGame();
        previous =0;
        $("#previous").html(previous);
        alert("Congrats Einstein!!! 🎉🎊")
        } 
    

    });
// game with 4 crystals each having a random value
// at the end of each game crystal values change
// clicking crystals needs to add up to the target score



