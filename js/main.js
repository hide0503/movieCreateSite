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
                $this.removeClass(isOpen).removeClass(isAnimate);　//クラスの削除
            }
        });

    })();
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
});