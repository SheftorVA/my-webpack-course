import * as $ from 'jquery';

function createAnalytics(): object {
  let counter = 0;
  let Destroyed: boolean = false;

  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      Destroyed = true;
    },

    getClicks() {
      if (Destroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
}

window['analytics'] = createAnalytics();
