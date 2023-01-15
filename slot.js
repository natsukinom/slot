function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var move = 10
var stopFl = false
var stopIndex = 0
var passFl = true
$(function(){
    var positionList = [0,100,200]
    setInterval(function(){
        if(stopFl){
            if(positionList[stopIndex]==200){
                move = 0
                passFl = false
            }
        }else{
            move = 10
        }

        for(let index in positionList){
            if(stopIndex == index){
                passFl = true
            } 
            if(passFl){
                let position = positionList[index]

                $(".i"+index).css({
                    'top':position+'px'
                });
                if(position>300){
                    position=0
                }else{
                    position+=move
                }

                positionList[index] = position
            }
        }
/*

        $(".i1").css({
            'top':position[0]+'px'
        });
        if(stopFl){
            if(position==200){
                move = 0
            }
        }
        if(position>400){
            position=0
        }else{
            position+=move
        }*/
    },1);

    $('.stop').on('click', function() {
        stopFl = !stopFl
        stopIndex = getRandomInt(3)
    });
})

