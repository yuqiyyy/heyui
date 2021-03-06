import utils from '../../utils/utils';

const Default = {
  type: 'dialog',
  title: '',
  content: '',
  style: null,
  class: null,
  buttons: [],
  hasMask: false,
  closeOnMask: true,
  hasCloseIcon: false,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false
};

const notifyCls = 'h-notify';
const notifyHasCloseCls = 'h-notify-has-close';
const notifyContentCls = 'h-notify-content';
const notifyContainerCls = 'h-notify-container';
const notifyBodyCls = 'h-notify-body';
const notifyCloseCls = 'h-notify-close';
const notifyMaskCls = 'h-notify-mask';
const notifyHasMaskCls = 'h-notify-has-mask';
const notifyShowCls = 'h-notify-show';
const closeIcon = 'h-icon-close';

class Notify {
  constructor(orignalparam) {
    const that = this;
    let param = this.param = utils.extend({}, Default, orignalparam, true);
    let html = '';
    if (param.hasMask) {
      html += `<div class="${notifyMaskCls}"></div>`;
    }
    if (param.type === 'h-modal') {
      html += `<div class="${notifyBodyCls}">`;
    }
    html += `<div class="${notifyContainerCls}">`;
    if (param.hasCloseIcon) html += `<span class="${notifyCloseCls} ${closeIcon}"></span>`;
    if (param.title) html += `<header>${param.title}</header>`;
    html += `<div class="${notifyContentCls}"></div>`;
    param.hasFooter = utils.isArray(param.buttons) && param.buttons.length > 0 && !param.component;
    if (param.hasFooter) {
      let footeHtml = '';
      for (const b of param.buttons) {
        let name = '';
        let attr = '';
        let color = '';
        if (b == 'cancel' || b.type == 'cancel') {
          name = b.name || '取消';
          attr = b;
        } else if (b == 'ok' || b.type == 'ok') {
          name = b.name || '确定';
          attr = 'ok';
          color = 'primary';
        } else if (utils.isObject(b)) {
          attr = b.type;
          name = b.name;
          color = b.color || 'primary';
        }
        if (color) color = `h-btn-${color}`;
        footeHtml += `<button class="h-btn ${color}" attr="${attr}" >${name}</button>`;
      }
      html += `<footer>${footeHtml}</footer>`;
    }
    if (param.type === 'h-modal') {
      html += `</div>`;
    }

    html += '</div>';
    let $body = document.createElement(`div`);
    utils.addClass($body, notifyCls);
    if (param.hasMask) {
      utils.addClass($body, notifyHasMaskCls);
    }
    if (param.class) {
      utils.addClass($body, param.class);
    }
    $body.innerHTML = html;
    let $content = this.$content = $body.querySelector(`.${notifyContentCls}`);
    let $container = this.$container = $body.querySelector(`.${notifyContainerCls}`);
    this.$body = $body;

    let content = param.content;
    if (content.nodeType === 1) {
      $content.appendChild(content);
    } else if (utils.isFunction(content)) {
      const contentText = content.call(this);
      $content.innerHTML = contentText;
    } else {
      $content.innerHTML = content;
    }

    if (param.component != undefined && param.Vue) {
      this.vue = new param.Vue({
        el: $content,
        // template: `<div><plugin @event='trigger' :param="propsData" @close="close"></plugin></div>`,
        render(createElement) {
          return createElement(
            'div', {}, [createElement('plugin', {
              props: {
                param: this.propsData
              },
              on: {
                event: this.trigger,
                close: this.close
              }
            })]
          )
        },
        data() {
          return {
            propsData: param.component.data,
            modal: that
          }
        },
        methods: {
          trigger(name, data) {
            that.trigger(name, data);
          },
          close() {
            that.close();
          }
        },
        components: {
          plugin: param.component.vue,
        },
      })
    }

    if (param.hasCloseIcon) {
      utils.addClass($body, notifyHasCloseCls);
    }

    if (param.type) {
      utils.addClass($body, param.type);
    }

    if (param.width) {
      $container.style.width = `${param.width}px`;
    }
    if (param.height) {
      $content.style.height = `${param.height}px`;
    }
    if (param.maxheight) {
      $content.style.maxHeight = `${param.maxheight}px`;
    }
    if (param.style) {
      utils.addClass($body, param.style);
    }

    let parentDom = param.parent || document.body;
    parentDom.appendChild($body);
    // $("").append($body);
    // let openedComponent = $('.systab_component.selected');
    // if (openedComponent.size() == 0 || param.global) openedComponent = $('body');
    // openedComponent.append($body);
    if (param.hasCloseIcon) {
      $body.querySelector(`.${notifyCloseCls}`).onclick = function () {
        that.close();
      }
    }
    if (param.hasFooter) {
      let buttons = $body.querySelectorAll(`.${notifyContainerCls}>footer>button`)
      for (let button of buttons) {
        button.onclick = function (event) {
          let attr = event.target.getAttribute('attr');
          if (attr) {
            if (attr == 'cancel') {
              that.close();
            }
            that.trigger(attr);
          }
        }
      }
    }

    window.setTimeout(function () {
      utils.addClass($body, notifyShowCls);
    }, 20);

    if (param.events && utils.isFunction(param.events.init)) {
      param.events.init.call(that, $content);
    }
    if (param.timeout) {
      window.setTimeout(function () {
        that.close();
      }, param.timeout);
    }
    if (param.closeOnMask && param.hasMask) {
      $body.querySelector(`.${notifyMaskCls}`).onclick = () => {
        this.close();
      }
      let modalBody = $body.querySelector(`.${notifyBodyCls}`);
      if (modalBody) {
        modalBody.onclick = (event) => {
          if (event.target == modalBody) {
            this.close();
          }
        }
      }
    }
  }

  trigger(event, data) {
    let param = this.param;
    if (param.events && utils.isFunction(param.events[event])) {
      param.events[event].call(null, this, data);
    }
  }

  close() {
    let that = this;
    const $body = this.$body;
    if (this.vm) {
      that.vm.$destroy();
    }

    this.trigger('close');

    utils.removeClass($body, notifyShowCls);

    $body.addEventListener("transitionend", (event) => {
      if ((event.propertyName == 'top' || event.propertyName == 'right') && $body) {
        utils.removeDom($body);
      }
    });
  }
}

// const Tip = function() {
//   Tips(TYPE.TIP, ...arguments);
// }
// const Alert = function(content, time = 1500) {
//   content = `<i class='icon-alert'></i>` + content;
//   Tips(TYPE.ALERT, content, time);
// }

// const Color = {};
// Color.RED = 'red';
// Color.WHITE = 'white';
// Color.BLACK = 'black';
// Color.YELLOW = 'yellow';

// const Message = function(content, timeout, style) {
//   Tips(TYPE.MESSAGE, content, timeout, style, {
//     top: 0,
//   });
// }

// let Tips = function() {
//   if (arguments.length == 1) {
//     console.error('Tip方法参数错误', arguments);
//     return false;
//   }

//   let [type, content, timeout, style, otherParam] = arguments;

//   if (utils.isString(timeout)) {
//     const _s = style;
//     style = timeout;
//     timeout = _s;
//   }
//   style = style || '';
//   if (timeout === undefined) {
//     timeout = DEFAULT_timeout;
//   }

//   const param = {
//     type,
//     style,
//     timeout,
//     content,
//     width: null,
//     global: true,
//     hasFooter: false,
//     mask: false,
//     top: 10,
//     hasCloseIcon: true
//   };
//   if (otherParam != undefined) {
//     $.extend(param, otherParam);
//   }

//   return new _Dialog(param);
// }

// const Confirm = function(content, func, calcelFunc) {
//   content = content || '';
//   func = func || emptyFunc;
//   content = `<i class='icon-alert'></i>` + content;
//   return new _Dialog({
//     type: TYPE.CONFIRM,
//     content,
//     hasCloseIcon: false,
//     closeButtonName: '取消',
//     global: true,
//     width: 360,
//     buttons: [{
//       name: '确定',
//       func() {
//         func.call(this, ...arguments);
//         this.close();
//       },
//     }],
//     events: {
//       close() {
//         if (typeof calcelFunc == 'function') {
//           calcelFunc();
//         }
//       },
//     },
//   });
// }

export default function (param) {
  return new Notify(param);
}
