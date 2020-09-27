$(function () {
    const $win = $(window);
    const $btnMenu = $('.btn-menu');
    const $nav = $('header > nav');
    const isAnimate = 'is-animate';
    const isOpen = 'is-open';

    $btnMenu.on('click', function () {

        //ボタンをクリックした時の記述
        if (!$(this).hasClass(isOpen)) { //$(this)は＄btnMenuのこと　＄btnMenuにisOpenがなかったら
            $nav.slideDown(); //メニューを表示
            $(this).addClass(isOpen).addClass(isAnimate); //isOpenを追加
        } else { //btnMenuがis-openを持っていいたら
            $nav.slideUp(); //メニューをスライドダウンで非表示
            $btnMenu.removeClass(isOpen).removeClass(isAnimate); //is-openクラスを削除
        }
    });
    // ウィンドウリサイズの処理
    $win.on('resize', function () {
        if ($win.width() > 768) {
    
            $nav.show();
            $btnMenu.removeClass(isOpen).removeClass(isAnimate);
        } else {
            if (!$btnMenu.hasClass(isOpen)) {
                $nav.hide();
            }
        }
    });
});