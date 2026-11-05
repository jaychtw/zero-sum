import { scenes } from './story.js';
import { createSession } from './session.js';
import { ui } from './presentation.js';
import { endingC } from './ending-c.js';
const $ = id => document.getElementById(id);
const session = createSession();
let language = 'en';
let endingCBeat = 0;
let displayedScene = null;
try { if (localStorage.getItem('zero-sum-language') === 'zh') language = 'zh'; } catch { /* Optional storage. */ }
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text !== undefined) n.textContent = text;
  return n;
};
function button(text, action, cls = '') {
  const n = el('button', cls, text); n.type = 'button';
  n.addEventListener('click', action); return n;
}
// Failed decorative/reference art must not interrupt the accepted story flow.
function watchIllustration(image, frame, t, cover = false) {
  image.addEventListener('error', () => {
    frame.dataset.artFallback = 'true';
    if (cover) {
      image.remove();
      const note = el('p', 'control-note', `${t.artUnavailable}. ${t.artFallback}`);
      note.setAttribute('role', 'status');
      frame.querySelector('.cover-copy').append(note);
      return;
    }
    frame.replaceChildren();
    frame.classList.add('temporary');
    frame.removeAttribute('role'); frame.removeAttribute('aria-label');
    const panel = el('div', 'temporary-copy');
    panel.setAttribute('role', 'status');
    panel.append(el('p','eyebrow',t.artUnavailable),el('p','',t.artFallback));
    frame.append(panel);
  }, { once: true });
}
function render(focus = false) {
  const t = ui[language], id = session.current, s = scenes[id];
  if (id !== displayedScene) { endingCBeat = 0; displayedScene = id; }
  const c = id === 'endingC' ? endingC[language] : null;
  const beat = c?.beats[endingCBeat];
  const lastBeat = !c || endingCBeat === c.beats.length - 1;
  document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
  document.body.dataset.mode = !s ? 'title' : s.ending ? 'ending' : s.choices ? 'decision' : 'scene';
  const main = $('experience'); main.dataset.scene = id ?? 'title';
  $('lang').textContent = language === 'en' ? '繁體中文' : 'English';
  $('lang').lang = language === 'en' ? 'zh-Hant' : 'en';
  $('home').setAttribute('aria-label', t.home);
  $('skip').textContent = t.skip; $('restart').textContent = t.restart; $('restart').hidden = !s;
  $('motto').textContent = t.tag.replace('\n', ' '); $('provisional').textContent = t.provisional;
  for (const [id, key] of [['reset-kicker','confirmKicker'],['reset-title','confirmTitle'],['reset-description','confirmDescription'],['cancel-reset','cancel'],['confirm-reset','confirm']]) $(id).textContent = t[key];
  main.replaceChildren();
  if (c) main.dataset.beat = String(endingCBeat); else delete main.dataset.beat;
  if (!s) {
    const cover = el('section','cover'), img = el('img','cover-art');
    img.src = 'assets/chase.webp'; img.alt = t.alts.chase; img.width = 1280; img.height = 720;
    const copy = el('div','cover-copy'), title = el('h1','cover-title');
    title.append(el('span','','ZERO'),el('span','','SUM')); title.tabIndex = -1;
    copy.append(el('p','eyebrow',`ZERO SUM / 01 — ${t.edition}`),title,el('p','tagline',t.tag),el('p','intro',t.intro));
    copy.append(button(t.begin,()=>{session.begin();render(true);},'primary'),el('p','control-note',t.controls));
    watchIllustration(img,cover,t,true);
    cover.append(img,copy,el('span','cover-code','ZS / 001')); main.append(cover);
  } else {
    const strip = el('div','scene-strip');
    strip.append(el('span','',s.ending ? `${t.ending} ${s.ending}` : `${String(session.depth+1).padStart(2,'0')} / ${t.scene}`),el('span','',t.locations[s.image]));
    const frame = el('figure','frame');
    // Avoid spoiling the final event with the only supplied tower illustration.
    if (c) {
      frame.classList.add('ending-c-frame', beat.kind);
      if (beat.kind === 'ascent') {
        frame.setAttribute('role', 'img'); frame.setAttribute('aria-label', beat.alt);
        const crop = el('img', 'ending-c-crop');
        crop.src = 'assets/wmd.webp'; crop.alt = ''; crop.width = 1280; crop.height = 720;
        watchIllustration(crop,frame,t); frame.append(crop);
      } else {
        // Rejected the flat disk/city composite; no claim of faithful finished art.
        frame.classList.add('temporary');
        const panel = el('div', 'temporary-copy');
        panel.append(el('p','eyebrow',t.temporary),el('p','ending-c-title',beat.panelTitle),el('p','',beat.panelNote));
        frame.append(panel);
      }
    } else if (id === 'tower') {
      frame.classList.add('temporary'); const panel = el('div','temporary-copy');
      panel.append(el('p','eyebrow',t.temporary),el('p','tower-title',t.tower),el('p','',t.towerNote)); frame.append(panel);
    } else {
      const img = el('img','scene-art'); img.src = `assets/${s.image}.webp`; img.alt = t.alts[s.image];
      img.width = 1280; img.height = 720; watchIllustration(img,frame,t); frame.append(img);
    }
    frame.append(el('figcaption','art-label',c ? c.label : id === 'tower' ? t.temporary : t.art));
    const reader = el('section','reader'), caption = el('div','caption');
    const heading = el('h1','panel-heading',c ? `${t.ending} C / ${beat.title}` : s.ending ? `${t.ending} ${s.ending} / ${t.conclusion}` : s.choices ? t.decision : id === 'opening' ? t.opening : t.scene);
    heading.tabIndex = -1;
    caption.append(heading,el('p','speaker',t.speakers[s.speaker] ?? t.narrator));
    const copy = el('div','story-copy');
    if (c) copy.append(el('p','ending-c-progress', `${String(endingCBeat + 1).padStart(2,'0')} / 03`));
    copy.append(el('p','prose',beat ? beat.text : s[language])); reader.append(caption,copy);
    const actions = el('div','actions'); actions.id = 'actions';
    if (s.choices) {
      actions.classList.add('choices');
      s.choices.forEach(([en,zh,target],i)=>{
        const b = button('',()=>{session.choose(target);render(true);},'choice');
        const arrow = el('span','arrow','>'); arrow.setAttribute('aria-hidden','true');
        b.append(el('span','choice-number',`0${i+1}`),el('span','choice-text',language === 'en' ? en : zh),arrow); actions.append(b);
      });
      copy.append(el('p','control-note',t.hint));
    } else if (c && !lastBeat) {
      actions.append(button(c.next,()=>{endingCBeat++;render(true);},'primary m2-next'));
    } else if (s.ending) {
      copy.append(el('p','closing',t.closing));
      actions.append(button(t.replay,()=>{session.begin();render(true);},'primary'));
    } else actions.append(button(t.next,()=>{session.choose(s.next);render(true);},'primary'));
    main.append(strip,frame,reader,actions);
    if (session.depth) main.append(button(t.back,()=>{if (c && endingCBeat > 0) endingCBeat--; else session.back();render(true);},'back'));
  }
  if (focus) { main.querySelector('h1').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
}
function requestReset(e) { e.preventDefault(); if (session.current) { $('reset-dialog').returnValue = ''; $('reset-dialog').showModal(); } }
$('lang').addEventListener('click',()=>{
  language = language === 'en' ? 'zh' : 'en';
  try { localStorage.setItem('zero-sum-language',language); } catch { /* Optional preference. */ }
  render();
});
$('restart').addEventListener('click',requestReset); $('home').addEventListener('click',requestReset);
$('reset-dialog').addEventListener('close',()=>{if ($('reset-dialog').returnValue === 'reset') {session.reset();render(true);}});
document.addEventListener('keydown',e=>{
  if (e.repeat || e.altKey || e.ctrlKey || e.metaKey || $('reset-dialog').open || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if (e.key === '1' || e.key === '2') {
    const b = $('actions')?.querySelectorAll('button')[Number(e.key)-1];
    if (b) {e.preventDefault();b.click();}
  }
});
render();
