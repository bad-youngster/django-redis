       $(document).ready(function() {
           //每个有子菜单的菜单项添加点击事件
           $(".container .menu label").click(function(){
               //获取当前菜单旁边input的check状态
               var isChecked = $(this).next("input[type='checkbox']").is(':checked');
               //展开和收齐的不同状态下更换右侧小图标
               if(isChecked){
                   $(this).css(
                       "background-image","url(../images/cp-detail-arrow-b.png)"
                   );
               }else{
                   $(this).css(
                       "background-image","url(../images/cp-detail-arrow-t.png)"
                   );
               }
           });

       });