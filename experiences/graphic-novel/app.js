import { manuscript } from './manuscript.js';
import { createSession } from './session.js';
import { ui } from './presentation.js';
const $ = id => document.getElementById(id);
const session = createSession();
let language = 'en';
try { if (localStorage.getItem('zero-sum-language') === 'zh') language = 'zh'; } catch { /* Optional storage. */ }
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
};
function button(text, action, cls = '') {
  const node = el('button', cls, text); node.type = 'button';
  node.addEventListener('click', action); return node;
}
function watchIllustration(image, frame, t, cover = false) {
  image.addEventListener('error', () => {
    frame.dataset.artFallback = 'true';
    if (cover) {
      image.remove();
      const note = el('p', 'control-note', `${t.artUnavailable}. ${t.artFallback}`);
      note.setAttribute('role', 'status'); frame.querySelector('.cover-copy').append(note);
    } else {
      frame.replaceChildren(); frame.classList.add('temporary','text-led');
      frame.removeAttribute('role'); frame.removeAttribute('aria-label');
      const note = el('div','temporary-copy'); note.setAttribute('role','status');
      note.append(el('p','eyebrow',t.artUnavailable),el('p','',t.artFallback)); frame.append(note);
    }
  }, {once:true});
}
function render(focus = false) {
  const t = ui[language], id = session.current, scene = manuscript.scenes[id];
  const panel = scene?.panels[session.panel], last = session.isLastPanel;
  const main = $('experience'); main.replaceChildren();
  main.classList.toggle('manuscript',!!scene); main.dataset.scene = id ?? 'title';
  if (panel) { main.dataset.panel = String(session.panel); main.dataset.panelId = panel.id; }
  else { delete main.dataset.panel; delete main.dataset.panelId; }
  if (panel?.phase) main.dataset.phase = String(panel.phase); else delete main.dataset.phase;
  document.documentElement.lang = language === 'zh' ? 'zh-Hant' : 'en';
  document.body.dataset.mode = !scene ? 'title' : scene.ending ? 'ending' : last && scene.choices ? 'decision' : 'scene';
  $('lang').textContent = language === 'en' ? '繁體中文' : 'English';
  $('lang').lang = language === 'en' ? 'zh-Hant' : 'en';
  $('home').setAttribute('aria-label',t.home); $('skip').textContent = t.skip;
  $('restart').textContent = t.restart; $('restart').hidden = !scene;
  $('motto').textContent = t.tag.replace('\n',' '); $('provisional').textContent = t.provisional;
  for (const [target,key] of [['reset-kicker','confirmKicker'],['reset-title','confirmTitle'],['reset-description','confirmDescription'],['cancel-reset','cancel'],['confirm-reset','confirm']]) $(target).textContent = t[key];
  if (!scene) {
    const cover = el('section','cover'), image = el('img','cover-art');
    image.src = 'assets/chase.webp'; image.alt = t.alts.chase; image.width = 1280; image.height = 720;
    const copy = el('div','cover-copy'), heading = el('h1','cover-title'); heading.tabIndex = -1;
    heading.append(el('span','','ZERO'),el('span','','SUM'));
    copy.append(el('p','eyebrow',`ZERO SUM / 01 — ${t.edition}`),heading,el('p','tagline',t.tag),el('p','intro',t.intro),button(t.begin,()=>{session.begin();render(true);},'primary'),el('p','control-note',t.controls));
    watchIllustration(image,cover,t,true); cover.append(image,copy,el('span','cover-code','ZS / 001')); main.append(cover);
  } else {
    const strip = el('div','scene-strip');
    const progress = el('span','',`${t.panel} ${session.panel+1} / ${scene.panels.length}`); progress.id = 'panel-progress';
    strip.append(progress,el('span','',scene.title[language]));
    const frame = el('figure','frame manuscript-frame');
    if (panel.art) {
      const ascent = panel.art === 'ascent';
      if (ascent) frame.classList.add('ending-c-frame','ascent');
      const image = el('img',ascent?'ending-c-crop':'scene-art');
      image.src = `assets/${ascent?'wmd':panel.art}.webp`; image.alt = ascent ? t.ascentAlt : t.alts[panel.art];
      image.width = 1280; image.height = 720; watchIllustration(image,frame,t); frame.append(image,el('figcaption','art-label',t.art));
    } else {
      frame.classList.add('temporary','text-led');
      const card = el('div','temporary-copy');
      card.append(el('p','eyebrow',t.textLed),el('p','manuscript-card-title',panel.phase ? t.phases[panel.phase] : scene.title[language]));
      frame.append(card);
    }
    const reader = el('section','reader'), caption = el('div','caption');
    const heading = el('h1','panel-heading',scene.ending ? `${t.ending} ${scene.ending} / ${scene.title[language]}` : scene.title[language]); heading.tabIndex = -1; heading.setAttribute('aria-describedby','panel-progress');
    caption.append(heading,el('p','speaker',last && scene.choices ? t.decision : panel.phase ? t.phases[panel.phase] : t.scene));
    const copy = el('div','story-copy manuscript-copy');
    for (const unit of panel.content) for (const block of unit[language]) {
      if (block.kind === 'dialogue') {
        const speech = el('blockquote','dialogue');
        speech.append(el('p','dialogue-speaker',block.speaker),el('p','prose spoken',block.text)); copy.append(speech);
      } else copy.append(el('p',block.kind === 'stage' ? 'source-stage' : block.kind === 'direction' ? 'prose source-direction' : 'prose action',block.text));
    }
    if (last && scene.choices) copy.append(el('p','control-note',t.hint));
    reader.append(caption,copy);
    const actions = el('div','actions'); actions.id = 'actions';
    if (!last) actions.append(button(t.nextPanel,()=>{session.advance();render(true);},'primary panel-next'));
    else if (scene.choices) {
      actions.classList.add('choices');
      scene.choices.forEach((choice,index)=>{
        const node = button('',()=>{session.choose(choice.target);render(true);},'choice');
        const arrow = el('span','arrow','>'); arrow.setAttribute('aria-hidden','true');
        node.append(el('span','choice-number',`0${index+1}`),el('span','choice-text',choice[language]),arrow); actions.append(node);
      });
    } else if (scene.ending) {
      actions.append(button(t.replay,()=>{session.begin();render(true);},'primary replay'));
    } else actions.append(button(t.next,()=>{session.choose(scene.next);render(true);},'primary scene-next'));
    main.append(strip,frame,reader,actions);
    if (session.panel > 0 || session.depth) main.append(button(t.back,()=>{session.back();render(true);},'back'));
  }
  if (focus) { main.querySelector('h1').focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
}
function requestReset(event) {
  event.preventDefault();
  if (session.current) { $('reset-dialog').returnValue = ''; $('reset-dialog').showModal(); }
}
$('lang').addEventListener('click',()=>{
  language = language === 'en' ? 'zh' : 'en';
  try { localStorage.setItem('zero-sum-language',language); } catch { /* Optional preference. */ }
  render();
});
$('restart').addEventListener('click',requestReset); $('home').addEventListener('click',requestReset);
$('reset-dialog').addEventListener('close',()=>{ if ($('reset-dialog').returnValue === 'reset') {session.reset();render(true);} });
document.addEventListener('keydown',event=>{
  if (event.repeat || event.altKey || event.ctrlKey || event.metaKey || $('reset-dialog').open || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
  if (event.key === '1' || event.key === '2') {
    const action = $('actions')?.querySelectorAll('button')[Number(event.key)-1];
    if (action) {event.preventDefault();action.click();}
  }
});
render();
