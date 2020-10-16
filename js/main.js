$(function () {
    const $win = $(window);
    //スマホメニュー
    (function () {
        const $btnMenu = $('.btn-menu'); //クラスを関数に格納
        const $nav = $('header > nav');
        const isAnimate = 'is-animate'; //新しい機能を持たせたクラスを関数に格納
        const isOpen = 'is-open';

        // ボタンをクリック時の処理　
        $btnMenu.on('click', function () { //btmMenuがクリックされた時
            const $this = $(this); //イベントを格納
            if ($nav.is(':animated')) { //結果をanimatedに返す
                return;
            }
            if (!$this.hasClass(isOpen)) { //isOpenを持ってない場合
                $nav.slideDown(); //slideDownを付与
                $this.addClass(isOpen).addClass(isAnimate); //クラスを付与
            } else { //isOpenクラスを持っている場合
                $nav.slideUp(); //slideUpを付与
                $this.removeClass(isOpen).removeClass(isAnimate); //クラスの削除
            }
        });


        // ウィンドウリサイズ時の処理
        $win.on('resize', function () {
            if ($win.width() > 768) { //ウィンドウサイズが768以下の場合
                $nav.show(); //navの非表示状態の要素を表示
                $btnMenu.removeClass(isOpen).removeClass(isAnimate); //クラスの削除
            } else {
                if (!$btnMenu.hasClass(isOpen)) {
                    $nav.hide();
                }
            }
        });
    })();

    // 見出しのアニメーション
    (function () {
        $win.on('scroll', function () {
            const $heading = $('.mask_inner');
            const isAnimate = 'is-animate';
            $heading.each(function () {
                const $this = $(this);
                const headingTop = $this.offset().top;
                const scrollPos = $win.scrollTop();
                const wh = $win.height();
                if (scrollPos > headingTop - wh + (wh / 4)) {
                    $this.addClass(isAnimate);
                }
            });
        });
    })();
    //  スムーススクロール
    (function () {
        const $body = $('body, html');
        const duration = 1000;
        const motion = 'swing';

        $('a[href^= "#"]').on('click', function () {

            const $this = $(this);
            const href = $this.attr('href'); //1 クリックしたナビのhrefを取得
            const target = href === '#top' ? 'body' : href; //2 #topかそれ以外を分岐
            const positon = $(target).offset().top; //3 セクションのY軸位置を取得
            $body.animate({
                scrollTop: positon
            }, duration, motion);
        });

    }());

});


const time = new Date().getTime(); //ロードが終わった時間取得

//全ての読み込みが完了したら実行
$(window).on('load',function () {
  const now = new Date().getTime(); //ロード時間を取得
  if (now-time<=3000) { //3秒以下であれば、以下の処理を実行
    setTimeout('stopload()',4000-(now-time));
    return;
  } else {
    stopload();
  }
});

//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){//関数定義
    $("#loading").addClass("loaded");
    $(".spinner__wrap").addClass("loaded");
}