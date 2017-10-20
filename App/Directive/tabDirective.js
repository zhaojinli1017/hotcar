app.directive("tab",function(){
    return{
        templateUrl:"./App/View/temp/_tab.html",
        link:function(scope,ele,attr){
            var swiper = new Swiper(".swiper-container",{
                autoplay:2000,
                loop:true,
                pagination:".swiper-pagination",
                paginationType:"bullets"
            })

           $("#btn").on("click",function(){
               var str = "";
               for(var i=0;i<2;i++){
                    str += `<dl>
                            <dt><img src="img/pics1.gif" alt=""></dt>
                            <dd>
                                <h4>上汽大众-全新旅途L</h4>
                                <h5>上汽大众-全新旅途L享2年0利率</h5>
                                <p><span>1元</span> <del>1.44万</del></p>
                            </dd>
                        </dl>`;
               }
            $(".like").append(str);
           })

        }
    }
})