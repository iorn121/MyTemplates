import { atom } from 'nanostores';

export const $score = atom(0);
export const $currentIndex = atom(0);
export const $isFinished = atom(false);

export function addScore() {
  $score.set($score.get() + 1);
}
