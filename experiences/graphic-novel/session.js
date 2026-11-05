import { scenes, startingScene } from './story.js';
// Navigation only. Original narrative rules remain in story.js.
export function createSession() {
  let current = null;
  const history = [];
  return {
    get current() { return current; },
    get depth() { return history.length; },
    begin() { current = startingScene; history.length = 0; },
    choose(target) {
      const s = scenes[current];
      const targets = s?.choices?.map(c => c[2]) ?? [s?.next];
      if (!scenes[target] || !targets.includes(target)) throw new Error('Invalid story transition');
      history.push(current); current = target;
    },
    back() { if (history.length) current = history.pop(); },
    reset() { current = null; history.length = 0; }
  };
}
