var target =0;     //목적지 left값  0 -600  -1200  -1800
    var cnt=0; // 0 1 2 3
    // $('.gallery .text li:eq(0)').fadeIn('slow');
    $('.gallery .prev').hide();
    
    $('.gallery .next').click(function(e){
        e.preventDefault();

        cnt++; //0 1 2 3 증가
        target = -(400*cnt);
        $('.gallery .pic').animate({left:target},'slow').clearQueue();
        // $('.gallery .text li').hide();
        // $('.gallery .text li:eq('+ cnt +')').fadeIn('slow');

        if(cnt==47){
            $(this).fadeOut('fast');
        }else{
            $(this).fadeIn('fast');
            $('.gallery .prev').fadeIn('fast');
        }
    });

    $('.gallery .prev').click(function(e){
        e.preventDefault();

        cnt--;  // 3 2 1 0 감소
        target = -(400*cnt);
        $('.gallery .pic').animate({left:target},'slow').clearQueue();
        $('.gallery .text li').hide();
        $('.gallery .text li:eq('+ cnt +')').fadeIn('slow');

       if(cnt==0){
            $(this).fadeOut('fast');
       }else{
           $(this).fadeIn('fast');
           $('.gallery .next').fadeIn('fast');
       }
    });