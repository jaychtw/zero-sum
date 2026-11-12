const book = document.querySelector('#book');
const languageButton = document.querySelector('#lang');
let language = 0;
try { language = localStorage.getItem('nine-lives-manga-lang') === 'zh' ? 1 : 0; } catch {}
function node(tag, cls, text) {
  const element = document.createElement(tag);
  if (cls) element.className = cls;
  if (text) element.textContent = text;
  return element;
}
function link(text, path, cls, decisionPage = false) {
  const a = node('a', cls, text);
  a.href = '#' + path.join('/') + (decisionPage ? '?turn' : '');
  return a;
}
function currentPath() {
  const parts = location.hash.slice(1).split('?')[0].split('/');
  if (parts[0] !== 'start') return [];
  const path = ['start'];
  for (const part of parts.slice(1)) {
    if (!stories[path.at(-1)].choices.some(([target]) => target === part)) break;
    path.push(part);
  }
  return path;
}
function drawing(id) {
  const img = node('img');
  img.src = 'art/' + id + '.webp';
  img.alt = descriptions[id][language];
  return img;
}
function render(focus) {
  const path = currentPath();
  const id = path.at(-1);
  const leadIn = leadIns[id];
  const onIntro = !!leadIn && !location.hash.endsWith('?turn');
  const story = stories[id];
  const t = (en, zh) => language ? zh : en;
  document.documentElement.lang = t('en','zh-Hant');
  languageButton.textContent = t('繁體中文','English');
  languageButton.lang = t('zh-Hant','en');
  book.replaceChildren();
  if (!story) {
    const cover = node('section','cover');
    const copy = node('div','cover-copy');
    copy.append(node('h1','','ZERO SUM'),node('p','credit',t('Nine Lives · An interactive manga','九種人生 · 互動漫畫')),link(t('Read the manga →','開始閱讀 →'),['start'],'action'));
    cover.append(drawing('city1'),copy); book.append(cover);
  } else {
    const page = node('article','sheet');
    const spread = onIntro ? leadIn : story;
    const heading = node('h2','',spread.title[language]);
    page.append(node('p','folio',story.choices.length ? t('Nine Lives','九種人生') : t('Ending ','結局 ')+id),heading);
    const panels = node('div','panels');
    spread.panels.forEach(([art,en,zh],i) => {
      const wide = i === spread.panels.length-1 && spread.panels.length%2 === 1;
      const panel = node('figure',(wide?'wide ':'')+(en.includes(' · “')?'speech':''));
      panel.append(drawing(art),node('figcaption','',t(en,zh))); panels.append(panel);
    });
    page.append(panels);
    const decisions = node('nav');
    decisions.setAttribute('aria-label',onIntro ? t('Page navigation','翻頁') : t('Choose Alex’s next action','選擇艾力克斯的下一步'));
    if (onIntro) decisions.append(link(t('Turn the page →','翻到下一頁 →'),path,'action',true));
    else for (const [target,en,zh] of story.choices) decisions.append(link(t(en,zh),[...path,target],'action'));
    if (story.choices.length) page.append(decisions);
    const back = node('aside');
    if (leadIn && !onIntro) back.append(link(t('← Previous page','← 上一頁'),path));
    if (path.length > 1) back.append(link(t('← Previous decision','← 上一個抉擇'),path.slice(0,-1),'',!!leadIns[path.at(-2)]));
    if (!story.choices.length) back.append(link(t('Begin another life','再走一段人生'),['start']));
    page.append(back);
    if (!story.choices.length) {
      const revisit = node('details','revisit');
      revisit.append(node('summary','',t('Revisit a decision from this life','重回這段人生中的抉擇')));
      const list = node('ol');
      for (const [index,sceneId] of path.slice(0,-1).entries()) {
        const item = node('li');
        item.append(link(stories[sceneId].title[language],path.slice(0,index+1),'',!!leadIns[sceneId]));
        list.append(item);
      }
      revisit.append(list); page.append(revisit);
    }
    book.append(page);
  }
  document.title = (story ? (onIntro ? leadIn : story).title[language] : 'Nine Lives') + ' · Zero Sum';
  if (focus) { const title=book.querySelector('h1,h2'); title.tabIndex=-1; title.focus({preventScroll:true}); window.scrollTo(0,0); }
}
languageButton.addEventListener('click',() => {
  language=1-language;
  try {localStorage.setItem('nine-lives-manga-lang',language?'zh':'en');} catch {}
  render(false);
});
window.addEventListener('hashchange',()=>render(true));
const descriptions={
 'junction-jacque':['Jacque speaks into his radio from the passenger seat.','賈克在副駕駛座拿起無線電。'],
 'junction-pete':['Rain streaks the glass as Pete keeps his eyes on the road.','雨水劃過玻璃，彼特緊盯前方。'],
 'ward-question':['Misaki looks up at Alex from the stretcher.','美咲躺在擔架上，抬眼望著艾力克斯。'],
 'ward-radio':['A hand holds the radio by the hospital doorway.','病房門邊，一隻手握著無線電。'],
 city1:['The convoy winds through an elevated highway in the rain.','車隊沿著雨中的高架道路行駛。'],city2:['Alex drives beside Misaki.','艾力克斯開車，美咲坐在身旁。'],city3:['Pete steers between the escort and a civilian car.','彼特把車開進護衛車與民車之間。'],city4:['Two elevated roads split beneath the tower.','高架道路在塔下分岔。'],city5:['The squad cars stop at the junction.','兩輛警車停在交流道。'],city6:['Jacque launches into the rain.','賈克飛進雨幕。'],city7:['Jacque hangs from the broken bridge as taillights recede.','賈克攀住斷橋，遠方車尾燈漸小。'],city8:['Alex grips Jacque’s arm at the edge.','艾力克斯在橋邊抓住賈克的手臂。'],city9:['The broken bridge in a rearview mirror.','後照鏡映著斷橋。'],
 tower1:['Karl carries a case toward the hangar.','卡爾提著箱子奔向機庫。'],tower2:['Two people cross behind Karl.','兩個行人從卡爾身後經過。'],tower3:['Hands separate beside the fallen case.','掉落的箱子旁，兩隻手鬆開了。'],tower4:['A medal rests on the wet headstone.','勳章擱在雨濕的墓碑上。'],tower5:['Alex holds Karl down; the case is out of reach.','艾力克斯制伏卡爾，箱子掉在一旁。'],tower6:['One figure sits by a grave.','一個人坐在墳旁。'],tower7:['White light overtakes a stairwell.','白光吞沒樓梯間。'],tower8:['Alex flies up the face of the tower.','艾力克斯沿著塔身升空。'],tower9:['Jacque holds a radio by the window of an evacuation vehicle.','賈克在救護車窗旁握著無線電。'],
 downtown1:['Misaki leans against the wrecked car interior.','美咲倒在毀損的車廂裡。'],downtown2:['Medics wheel Misaki into hospital.','救護員將美咲推入醫院。'],downtown3:['An empty chair at Misaki’s hospital bed.','美咲的病床旁放著一把空椅子。'],downtown4:['Two hands meet beside the bed.','兩隻手在病床邊交握。'],downtown5:['Two figures share a roof overlooking the missing skyline.','兩人在屋頂望向殘缺的天際線。'],downtown6:['Alex on a rooftop faces a distant white sphere.','艾力克斯在屋頂望著遠方的白色球體。'],downtown7:['People pass between Alex and Misaki.','行人穿過艾力克斯與美咲之間。'],downtown8:['Alex kneels among survivors in the square.','艾力克斯蹲在廣場的倖存者身旁。'],downtown9:['A man follows another down a dark alley.','一名男子跟著另一人走進暗巷。'],
 echo1:['White light swallows the tower summit.','白光吞沒塔頂。'],echo2:['Downtown residents stare at a missing district.','下城居民凝望消失的城區。'],echo3:['Steel doors close beside the stairwell.','樓梯旁的鋼門正在關上。'],echo4:['The mayor places a medal around Alex’s neck.','市長將勳章掛在艾力克斯頸上。'],echo5:['Broken spectacles lie in the rain.','破裂的眼鏡落在雨中。'],echo6:['A wet glove holds a silent radio.','濕透的手套握著無聲的無線電。']
};
render(false);
