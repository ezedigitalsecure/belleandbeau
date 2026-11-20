/* Belle & Beau shared footer and phone menu. Used on every page. */
(function () {
  function addFooter() {
    if (document.querySelector('footer.site-footer')) return;
    var html = `
<style>
.site-footer{background:#000;color:#BFB9AD;padding:56px 4vw 26px;border-top:1px solid #222;font-family:'DM Sans',sans-serif}
.site-footer .ft-top{display:grid;grid-template-columns:1.3fr repeat(4,1fr);gap:36px;max-width:1280px;margin:0 auto}
.site-footer h4{font-size:12px;text-transform:uppercase;letter-spacing:.16em;color:#D4B16A;margin:0 0 16px;padding-bottom:8px;border-bottom:1px solid #2A2A2A;font-weight:600}
.site-footer ul{list-style:none;padding:0;margin:0}
.site-footer li{margin-bottom:9px;font-size:13px;line-height:1.5}
.site-footer a{color:#BFB9AD;font-size:13px;text-decoration:none;transition:color .2s}
.site-footer a:hover{color:#D4B16A}
.site-footer .ft-logo{max-width:180px;height:auto;display:block}
.site-footer .ft-desc{font-size:12px;line-height:1.7;color:#8f897f;margin:14px 0 0;max-width:260px}
.site-footer .ft-social{display:flex;gap:12px;margin-top:20px}
.site-footer .ft-social a{width:38px;height:38px;display:grid;place-items:center;border:1px solid #444;border-radius:50%;color:#AAA}
.site-footer .ft-social a:hover{border-color:#D4B16A;color:#D4B16A}
.site-footer .ft-social svg{width:18px;height:18px;fill:currentColor}
.site-footer .ft-gift{color:#e9c46a!important}
.site-footer .ft-bottom{display:flex;justify-content:space-between;align-items:center;max-width:1280px;margin:34px auto 0;padding-top:20px;border-top:1px solid #222;font-size:11px;color:#777;flex-wrap:wrap;gap:8px}
.site-footer .ft-bottom a{color:#D4B16A;font-size:11px;font-weight:600}
@media(max-width:960px){.site-footer .ft-top{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.site-footer .ft-top{grid-template-columns:1fr}}
</style>
<footer class="site-footer" id="contact">
  <div class="ft-top">
    <div>
      <a href="index.html"><img src="belle-beau-logo-footer-white.png" alt="Belle & Beau" class="ft-logo" width="180" height="84"></a>
      <p class="ft-desc">An inclusive body contouring and aesthetics studio offering personalised, practitioner-led care in Calne, Wiltshire.</p>
      <div class="ft-social">
        <a href="https://www.instagram.com/belleandbeauaesthetic/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 4.9a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8.1a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.1-9.4a1.2 1.2 0 1 0 0 2.3 1.2 1.2 0 0 0 0-2.3z"/></svg></a>
        <a href="https://www.facebook.com/profile.php?id=61572413162577" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg></a>
      </div>
    </div>
    <div>
      <h4>Studio</h4>
      <ul>
        <li><a href="index.html#pricing">Treatments & Pricing</a></li>
        <li><a href="index.html#laser">Laser Hair Removal</a></li>
        <li><a href="index.html#body-contouring">Body Contouring</a></li>
        <li><a href="index.html#owner">Meet the Owner</a></li>
        <li><a href="index.html#reviews">Leave a Review</a></li>
      </ul>
    </div>
    <div>
      <h4>Learn & Shop</h4>
      <ul>
        <li><a href="academy.html">Academy Courses</a></li>
        <li><a href="academy.html#waitlist">Academy Waitlist</a></li>
        <li><a href="boutique.html">Boutique</a></li>
        <li><a href="glow.html" class="ft-gift">Free Glow Ritual Guide</a></li>
      </ul>
    </div>
    <div>
      <h4>Professional</h4>
      <ul>
        <li><a href="professionalcomingsoon.html">Practitioner Pathways</a></li>
        <li><a href="professionalcomingsoon.html">Standards & Compliance</a></li>
        <li><a href="portal.html">Private Portal</a></li>
      </ul>
    </div>
    <div>
      <h4>Find Us</h4>
      <ul>
        <li>The Hideaway<br>8 Phelps Parade, Calne</li>
        <li><a href="mailto:hello@belleandbeauaesthetic.com">hello@belleandbeauaesthetic.com</a></li>
        <li><a href="https://www.fresha.com/en-GB/a/the-hideaway-beauty-calne-uk-8-phelps-parade-bqr1c6o4/booking?offerItems=sv%3A30336251" target="_blank" rel="noopener">Book a consultation</a></li>
      </ul>
    </div>
  </div>
  <div class="ft-bottom">
    <span>© 2026 Belle & Beau Aesthetic Ltd (17402375)</span>
    <span>Website by <a href="https://ezedigital.co.uk" target="_blank" rel="noopener">Eze Digital</a></span>
  </div>
</footer>`;
    document.body.insertAdjacentHTML('beforeend', html);
    if (location.hash === '#contact') document.getElementById('contact').scrollIntoView();
  }

  function phoneMenu() {
    var btn = document.querySelector('.site-menu'), links = document.getElementById('siteLinks');
    if (!btn || !links) return;
    function set(open) { btn.setAttribute('aria-expanded', open); links.classList.toggle('open', open); }
    btn.addEventListener('click', function () { set(btn.getAttribute('aria-expanded') !== 'true'); });
    links.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { addFooter(); phoneMenu(); });
  } else { addFooter(); phoneMenu(); }
})();
