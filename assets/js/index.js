

$(function(){

  // main visual 


  // Split text into words and characters
  // const text = new SplitType('#target', { types: 'words, chars' })

  // // Animate characters into view with a stagger effect
  // gsap.from(text.chars, {
  //   opacity: 0,
  //   y: 20,
  //   duration: 0.5,
  //   stagger: { amount: 0.1 },
  // })


  // sc-intro .tit-area h2' 얘를 선택했고 
  // 타입은 word 문자 / chars 단어 하나 내가 쓰고 싶은거 
    const introTxt = new SplitType('.sc-intro .tit-area h2', { types : 'words, chars', });

    // 2. setting 먼저해주기 (안보이게)
    gsap.set(introTxt.chars, {
      // opacity:0,

      // 3. 텍스트 쪼개져 있는 상태로 셋팅 
      xPercent:("random(-200,200)"),
      yPercent:("random(-200,200)"),
      rotation:("random(-360,360)")
    })
    

    // 4. 제자리로 돌아오게 

    // 1 넣어주면 천천히 
    gsap.to(introTxt.chars,1,{
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      // stagger : 시차 간격 띄우기 
      stagger : {
        from : 'random',
        // amount : 속도 
        amount : 0.1
      }
    })






  // sc-project

  // 4. list 3개니까 each jquery M 쓰기 
  // i : index
  // e : element 

  $('.sc-project .project-item').each(function(i,e){

    // desc-area this: item
    // 내가 선택한 그거의 desc 가 선택됌 
    //5 변수할당해주기 
    descEL =  $(this).find('desc-area')
    leftEL = $(this).find('.img-area.left')
    rightEL = $(this).find('.img-area.right')

    // 각각 회전각도 다를 경우 
    // leftRotate = leftEL.data('rotate')
    // rightRotate =  rightEL.data('rotate')


    const projectMotion = gsap.timeline({

      // 3 
      scrollTrigger:{
        // 트리거 적용할 페이지 
        trigger:e,
        // trigger:".project-item",

        // 내기준 0,100 는 웬만해선 안건드림 
        start:"0% 95%",
        end : "100% 90%",
        scrub : 1,
        markers : true,
      },

    })

    // 2 


    // 6. 변수 할당한거 교체 
    projectMotion
    .addLabel('a')
    .to(leftEL,{
      xPercent:-150,
      rotation : -10,
      // rotation : leftRotate

    },'a')
    .to(rightEL,{
      xPercent:150,
      rotation : 10
      // rotation : rightRotate

    },'a')
    // .from('.project-item .desc-area',{
      .from(descEL,{
      opacity : 0,
      yPercent:30,

    },'a')

  })


  // 1 




    // sc-preview 

    // previewSlide = gsap.timeline({
    //     defaults:{
    //       ease: "none",
    //     },
    //     scrollTrigger:{
    //       trigger:".sc-preview",
    //       start:"5% 95%",
    //       end : "90% 90%",
    //       scrub : 1,
    //     //   markers : true,
         
    //     },
    //   })
    //   previewSlide
    //   .addLabel('a')
    //   .to('.sc-preview .cont01 .sticky-item.left',{
    //     x : '-100%',
    //     rotateZ: '-3deg'
    //   },'a')
    //   .to('.sc-preview .cont01 .sticky-item.right',{
    //     x : '100%',
    //     rotateZ: '3deg'
    //   },'a')
    //   .addLabel('b')
    //   .to('.sc-preview .cont02 .sticky-item.left',{
    //     x : '-100%',
    //     rotateZ: '-3deg'
    //   },'b')
    //   .to('.sc-preview .cont02 .sticky-item.right',{
    //     x : '100%',
    //     rotateZ: '3deg'
    //   },'b')


    //   sc-motion

    // js 사이트 참고 https://wonkyoung-kim.github.io/apple_watch/

     // 마우스 이동에따라 이미지 움직임처리
  // $('.sc-visual').mousemove(function(e){
  //   width = $(this).outerWidth()/2;
  //   // // console.log(width)
  //   x = (e.clientX - width)/7;
  //   // console.log(x)
  //   gsap.to('.image-area',{
  //     x:x
  //   })
  // })

      $('.sc-motion').mousemove(function(e){
   

      // x 축 좌표 
      // clientX : 내 영역에서의 x 축 좌표 
      // console.log(e.clientX);

      // 내 widht 의 절반 
      width = $(this).outerWidth()/2;

      x1 = (e.clientX - width)/10;
      x2 = (e.clientX - width)/50;
      // console.log(x);
      gsap.to('.sc-motion .img',{
        x:-1*x1
      })
      gsap.to('.sc-motion .img-wrap',{
        x:x2
      })
    })

      // motion = gsap.timeline({
      //   scrollTrigger:{
      //     trigger:".sc-motion",
      //     start:"0% 95%",
      //     end : "100% 90%",
      //     scrub : 1,
      //     markers : true,
         
      //   },
      // })
      //   motion
      //   .addLabel('a')
     
    
      //   .to('.sc-motion .images-area ',{
      //       rotateX : '-8deg',
      //       rotateY : '8deg',
      //   },'a')
      //   .addLabel('a')
    
      //   .to('.sc-motion .img-wrap',{
      //       x : '-20px',
      //   },'a')



     // footer

      $('.footer .email-area').mouseover(function(){
        // class name 다 똑같이 선택돼서 다같이 움직이는거
        // 세개가 동시에 움직이는 거 
        // 리벨이 선택돼서 
        gsap.to('.footer .label-area .label',{
          yPercent : -100,
        })

      })

      // 마우스 땠을 떄 
      $('.footer .email-area').mouseleave(function(){
        // 리벨이 선택돼서 
        gsap.to('.footer .label-area .label',{
          yPercent : 0,
        })

      })

      $('.footer .email-area').click(function(){

        // photo@giuligartner.com 가져오게 하기

        text = $(this).children().text();
        // console.log(text);
        // navigator.clipboard.writeText("복사할 텍스트") 
        navigator.clipboard.writeText(text)
        gsap.to('.footer .label-area .label',{
          yPercent : -200,
        }) 
      })
    

       

}) //end