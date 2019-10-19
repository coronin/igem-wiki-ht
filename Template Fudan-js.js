//Sidenav Init
$(function(){
    $('.sidenav').sidenav({
        edge:'right',
        inDuration: 250,
        outDuration: 350
    });
});

//Slider Init (Index Only)
$(function(){
    $('.slider').slider({
        height: 400
    });
});

//Dropdown Init
$(".dropdown-trigger").dropdown({
    coverTrigger: false,
    hover: true,
    inDuration: 250,
    outDuration: 350
});

//Floating Btn Init
$(function(){
    $('.fixed-action-btn').floatingActionButton();
});

//Tabs Init
$(function(){
    $('.tabs').tabs();
});

$(function(){
    $('.tap-target').tapTarget();
});

//Collapsible Init
$(function(){
    $('.collapsible').collapsible({});
});

//ScrollSpy Init
$(function(){
  //$('.scrollspy').scrollSpy();  // not good for reader view
  $('.scrolSpy').scrollSpy();
});



if(0) {
//align sponsors img
    var $sponsors = $('.sponsors');
    var sponsor0Height = $sponsors.eq(0).height();

    function sponsorsImgAlignment() {
        sponsor0Height = $sponsors.eq(0).height();
        for (var i = 1; i < $sponsors.length; i++) {
            $sponsors.eq(i).css('margin-top', 0.5 * (sponsor0Height - $sponsors.eq(i).height()) + 5);
        }
    }

    $(function () {
        setTimeout('sponsorsImgAlignment()', 2000);
        sponsorsImgAlignment();
        $(window).resize(function () {
            sponsorsImgAlignment();
        });
    });
}



//Init slide-out nav
$(function () {
  $('#slide-out .collapsible-body').css('display','none');
  $('#slide-out .collapsible li').removeClass('active');

  if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
    //$('.pageSidebar').css('color', 'red');
    $('.pageSidebar').css('font-size', '2rem');
    $('.pageSidebar').css('line-height', '4rem');
  } // 2019-9-20 LC
});

//Parallax Init
$(function(){
    $('.parallax').parallax();
});



//Abstract on Content Page
var $abstractBtn=$("#abstractBtn");
var $abstractContentCloseBtn=$("#abstractContent > a:eq(0)");
var $abstractContent=$("#abstractContent");
$abstractBtn.click(function () {
    $abstractContent.toggle();
    $abstractContentCloseBtn.click(function () {
        $abstractContent.css('display','none');
    });
});

//Acknowledgement Photo adjust
var $acknowledgementPhotoImg1=$("#acknowledgementPhoto>div.row:eq(0)>div");
var $acknowledgementPhotoImg2=$("#acknowledgementPhoto>div.row:eq(1)>div");
var $acknowledgementPhotoImg3=$("#acknowledgementPhoto>div.row:eq(2)>div");
var acknowledgementPhotoImgWidth1=$acknowledgementPhotoImg1.eq(0).width();
var acknowledgementPhotoImgWidth2=$acknowledgementPhotoImg2.eq(0).width();
var acknowledgementPhotoImgWidth3=$acknowledgementPhotoImg3.eq(0).width();
$acknowledgementPhotoImg1.css("height",acknowledgementPhotoImgWidth1*1.35);
$acknowledgementPhotoImg2.css("height",acknowledgementPhotoImgWidth1);
$acknowledgementPhotoImg3.css("height",acknowledgementPhotoImgWidth3*0.38);
$(window).resize(function () {
    acknowledgementPhotoImgWidth1=$acknowledgementPhotoImg1.eq(0).width();
    acknowledgementPhotoImgWidth3=$acknowledgementPhotoImg3.eq(0).width();
    $acknowledgementPhotoImg1.css("height",acknowledgementPhotoImgWidth1*1.4);
    $acknowledgementPhotoImg2.css("height",acknowledgementPhotoImgWidth1);
    $acknowledgementPhotoImg3.css("height",acknowledgementPhotoImgWidth3*0.38);
});



$acknowledgementPhotoImg1.mouseover(function () {
    $(this).children("span").eq(0).css("display","inherit");
    $(this).children("span").eq(0).css("width",acknowledgementPhotoImgWidth1);
    $acknowledgementPhotoImg1.mouseout(function () {
        $(this).children("span").eq(0).css("display","none");

    });
});
$acknowledgementPhotoImg2.mouseover(function () {
    $(this).children("span").eq(0).css("display","inherit");
    $(this).children("span").eq(0).css("width",acknowledgementPhotoImgWidth2);
    $acknowledgementPhotoImg2.mouseout(function () {
        $(this).children("span").eq(0).css("display","none");

    });
});



//reset figurebanner height
var $figureBanner=$(".figureBanner");
var $figureBannerImg=$(".figureBanner img");
if($(window).width()>=1100 && $(window).width()>$(window).height()){
    $figureBanner.css("height",$(window).height()-150);
} else if($(window).width()>=600){
    $figureBanner.css("height",280);
}
$(window).resize(function () {
    if($(window).width()>=1100 && $(window).width()>$(window).height()){
        $figureBanner.css("height",$(window).height()-150);
    } else if($(window).width()>=600){
        $figureBanner.css("height",280);
    }
});



//Let's "fix" the navigator!!
var pageNavAdjust=45;
$(function () {
var $topNav=$('#topNav');
var $pageContentNav=$('#pageContentNav');
var scrollTop=$(document).scrollTop();
var footerLocation=$("#FudanTSIfooter").offset().top-scrollTop;
var pageContentNavHeight=$pageContentNav.height();
var bannerHeight=$('#contentBanner').height();
//init
    if(0){

//topNav
        if(scrollTop<18){$topNav.css('top',18-scrollTop);}
        else {$topNav.css('top',0);}
    }
//pageContentNav
if(footerLocation<172+pageContentNavHeight){
    $pageContentNav.css('top',footerLocation-pageContentNavHeight-40);
}
else if(bannerHeight+180-scrollTop+pageNavAdjust>132){
    $pageContentNav.css('top',bannerHeight+180-scrollTop+pageNavAdjust);
}
else{
    $pageContentNav.css('top',132);
}
$(document).on('scroll',function () {
    scrollTop=$(document).scrollTop();
    footerLocation=$("#FudanTSIfooter").offset().top-scrollTop;
    pageContentNavHeight=$pageContentNav.height();
    bannerHeight=$('#contentBanner').height();
    if(0){
        //topNav
        if(scrollTop<18){$topNav.css('top',18-scrollTop);}
        else {$topNav.css('top',0);}
    }
    //pageContentNav
    if(footerLocation<172+pageContentNavHeight){
        $pageContentNav.css('top',footerLocation-pageContentNavHeight-40);
    }
    else if(bannerHeight+180-scrollTop+pageNavAdjust>132){
        $pageContentNav.css('top',bannerHeight+180-scrollTop+pageNavAdjust);
    }
    else{
        $pageContentNav.css('top',132);
    }
});
});



//Hide floating btn!
var $floatingBtn=$(".floatingBtn");
scrollTop=$(document).scrollTop();
function hideFloatingBtn(a) {
    if(a<200){
        $floatingBtn.fadeOut(200);
    }
    else{
        $floatingBtn.fadeIn(200);
    }
}
hideFloatingBtn(scrollTop);
$(document).on("scroll",function () {
    scrollTop=$(document).scrollTop();
    hideFloatingBtn(scrollTop);
});



//gallery
var $galleryActive=$(".galleryActive > img");
var $galleryThumbnail=$(".galleryThumbnail");
var $galleryThumbnailImg=$(".galleryThumbnail > img");
var $galleryBtnLeft=$(".galleryBtnLeft");
var $galleryBtnRight=$(".galleryBtnRight");
var galleryThumbnailScrollLeft=$galleryThumbnail.eq(0).scrollLeft();
var galleryThumbnailWidth=$galleryThumbnail.eq(0).width();
$galleryThumbnailImg.click(function () {
    $galleryThumbnailImg.animate({opacity:0.7},200);
    $(this).animate({opacity:1},200);
    $galleryActive.attr("src",$(this).attr("src"));
});
$galleryBtnLeft.click(function () {
    galleryThumbnailScrollLeft=$galleryThumbnail.eq(0).scrollLeft();
    galleryThumbnailWidth=$galleryThumbnail.eq(0).width();
    $galleryThumbnail.animate({scrollLeft:galleryThumbnailScrollLeft-galleryThumbnailWidth*0.8},500);
});
$galleryBtnRight.click(function () {
    galleryThumbnailScrollLeft=$galleryThumbnail.eq(0).scrollLeft();
    galleryThumbnailWidth=$galleryThumbnail.eq(0).width();
    $galleryThumbnail.animate({scrollLeft:galleryThumbnailScrollLeft+galleryThumbnailWidth*0.8},500);
});

//hide the nav
var $topNav=$("#topNav");
var footerHeight=$("#FudanTSIfooter").height();
var pageHeight=$("#FudanTSIdivWrapper").height();
scrollTop=$(document).scrollTop();
//if(scrollTop>pageHeight-footerHeight-$(window).height() && $(window).width()>991){
//    $topNav.fadeOut(200);
//}
//else {
    $topNav.fadeIn(200);
//}
$(document).on("scroll",function () {
    footerHeight=$("#FudanTSIfooter").height();
    pageHeight=$("#FudanTSIdivWrapper").height();
    scrollTop=$(document).scrollTop();
    //if(scrollTop>pageHeight-footerHeight-$(window).height() && $(window).width()>991){
    //    $topNav.fadeOut(200);
    //}
    //else {
        $topNav.fadeIn(200);
    //}
});



if(0){
    //scroll down
    scrollTop=$(document).scrollTop();
    var t=scrollTop;
    bannerHeight=$('#contentBanner').height();
    $(function () {
        $(document).on("scroll",function () {
            if($(window).width()>600){
                scrollTop=$(document).scrollTop();
                bannerHeight=$('#contentBanner').height();
                if (scrollTop<100 && scrollTop>t){
                    t=bannerHeight+75;
                    $("html").animate({scrollTop:bannerHeight+75},500);
                }
                else {
                    t=scrollTop;
                }
            }
        });
    });
}
