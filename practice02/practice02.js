
const countUp = () =>{
    alert("10秒経過")
}
        setInterval(
        countUp
        ,10000)
        

 $(function() {
     $(".btn1").on('click', function() {
         $(".cube1").css('background-color','red')
            });
 
        })


$(function() {
    $(".btn2").on('click', function() {
        $(".cube3").css('top',300)
           });

       })



