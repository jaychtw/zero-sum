import { manuscript } from './manuscript.js';
const scenes = manuscript.scenes;
// Reader progress only. No scoring, alternate-timeline knowledge or persisted saves.
export function createSession() {
  let current = null, panel = 0;
  const history = [];
  return {
    get current() { return current; },
    get panel() { return panel; },
    get depth() { return history.length; },
    get isLastPanel() { return current !== null && panel === scenes[current].panels.length - 1; },
    begin() { current = 'opening'; panel = 0; history.length = 0; },
    advance() {
      if (current === null || panel >= scenes[current].panels.length - 1) return false;
      panel++; return true;
    },
    choose(target) {
      const scene = scenes[current];
      const targets = scene?.choices?.map(choice => choice.target) ?? [scene?.next];
      if (!this.isLastPanel || !scenes[target] || !targets.includes(target)) throw new Error('Invalid story transition');
      history.push({scene:current, panel}); current = target; panel = 0;
    },
    back() {
      if (panel > 0) { panel--; return; }
      const previous = history.pop();
      if (previous) { current = previous.scene; panel = previous.panel; }
    },
    reset() { current = null; panel = 0; history.length = 0; }
  };
}
