// センシティブな画像・きせかえ動画は、タップされるまで読み込まない（button.reveal の data-src / data-video）
document.querySelectorAll('.reveal').forEach(function (b) {
  b.addEventListener('click', function () {
    var el;
    if (b.dataset.video) {
      el = document.createElement('video');
      el.src = b.dataset.video; el.muted = true; el.loop = true; el.autoplay = true;
      el.playsInline = true; el.setAttribute('playsinline', ''); el.controls = false;
    } else {
      el = document.createElement('img');
      el.src = b.dataset.src;
    }
    el.alt = b.dataset.cap || '';
    b.replaceWith(el);
    if (el.play) el.play();
  });
});
