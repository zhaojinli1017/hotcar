app.directive("slide",function(){
    return{
        templateUrl:"./App/View/temp/_slide.html",
         link:function(scope,ele,attr){
            var swiper = new Swiper(".swiper-container",{
                autoplay:2000,
                loop:true,
                pagination:".swiper-pagination",
                paginationType:"bullets"
            })

        }
    }
})