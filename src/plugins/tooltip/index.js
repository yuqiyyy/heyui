import Pop from '../pop';

class Tooltip extends Pop {
  constructor(el, param) {
    param.template = `<div class="h-tooltip" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    param.arrowSelector = '.h-tooltip-arrow, .h-tooltip__arrow';
    param.innerSelector = '.h-tooltip-inner, .h-tooltip__inner';
    if (param.theme) {
      param.class = `h-tooltip-${param.theme}`;
    }
    param.triggerOnBody = true;
    // param.containter = document.body;
    // log(param);
    super(el, param);
  }
}

export default Tooltip;
