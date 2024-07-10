$.ajax({
    url: './data/sporex.json',
    dataType: 'json',
    success: function(data){
        var useData= data.sporex;  //모든 객체배열
        
        function dataPrint(arr){
            
                var txt = '<ul>';
                
                for(var i in arr){
                    var $Img = arr[i].Img;
                    var $branch = arr[i].branch;
                    var $address = arr[i].address;
                    var $call = arr[i].call;
                    var $tags = arr[i].tags;
                    txt+='<li>';
                    txt+='<img src="'+$Img+'" class="sporex_img" alt="">';
                    txt+='<div>';
                    txt+='<h5>'+$branch+'</h5>';
                    txt+='<p class="text_area_1">'+$address+'</p>';
                    txt+='<p class="text_area_3"><i class="fa-solid fa-phone-volume"></i>'+$call+'</p>';
                    txt+='<span>'+$tags+'</span>';
                    txt+='</div>';
                    txt +='</li>';
                }

                txt += '</ul>';

                $('.sporex').html(txt);
           
        };
        

        //초기실행, 함수호출
        dataPrint(useData);


        $('#btn').click(function(){ //검색버튼을 클릭하면
              /*
                 var 객체배열 = 객체배열.filter(function(element){
                       return 조건절;  //조건에 만족하면 리턴
                     
                 });
              */
             var newArray = useData.filter(function(element){
                 //베이스 입력
                
                return element.branch.includes($('#title').val());
                //return  element.Price >=30000 && element.Price<=48000
             });
             //console.log(newArray);
             dataPrint(newArray);  //검색된 배열로 리스트 출력
        });

        $('.btn_all').click(function(){  //모두보기
            dataPrint(useData);
        });
    } 
});