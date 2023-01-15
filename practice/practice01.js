$(function(){
/*$('div>.container').bxSlider(function(){
    mode: 'vertical'
  });*/


  $(".stop").on("click", function () {
    $(".container").animate({
       /* "marginLeft": "100px"
    }).animate({*/
        "marginTop": "100px",
        "height":"500px"

          
    },1000,"linear",function(){
        $(".container").css("background-color","#ffffff")
    }).animate({
        "marginTop": "0px" ,
        "height":"100px"
          },1000,"linear",function(){
            $(".container").css("background-color","pink")
        })
    
});
})