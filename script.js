// 메뉴 토글 (index.html 전용)
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.textContent = isOpen ? '✕' : '☰';
  });
}

// ===== 전면광고 (Interstitial Ad) =====
function showInterstitial(destination) {
  const overlay = document.createElement('div');
  overlay.id = 'ad-interstitial';
  overlay.innerHTML = `
    <div class="ad-interstitial__inner">
      <div class="ad-interstitial__header">
        <span class="ad-interstitial__label">광고</span>
        <button class="ad-interstitial__close" id="adClose">✕ 닫기</button>
      </div>
      <div class="ad-interstitial__ad">
        <ins class="adsbygoogle"
             style="display:block;width:300px;height:250px"
             data-ad-client="ca-pub-3554374968933631"
             data-ad-slot="3370160793"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      <div class="ad-interstitial__footer">
        <span id="adTimer">5초 후 자동 이동...</span>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // 광고 푸시
  (window.adsbygoogle = window.adsbygoogle || []).push({});

  // 카운트다운
  let seconds = 5;
  const timerEl = overlay.querySelector('#adTimer');
  const closeBtn = overlay.querySelector('#adClose');

  const countdown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdown);
      document.body.removeChild(overlay);
      window.location.href = destination;
    } else {
      timerEl.textContent = seconds + '초 후 자동 이동...';
    }
  }, 1000);

  closeBtn.addEventListener('click', () => {
    clearInterval(countdown);
    document.body.removeChild(overlay);
    window.location.href = destination;
  });
}

// 내부 링크 클릭 시 전면광고 표시
document.querySelectorAll('a').forEach(function(link) {
  var href = link.getAttribute('href');
  if (href && !href.startsWith('http') && !href.startsWith('mailto') && href !== '#') {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      showInterstitial(this.href);
    });
  }
});
