<template>
  <div :class="formCls">
    <slot></slot>
  </div>
</template>
<script>
import Validator from '../../plugins/validator';
import utils from '../../utils/utils';

const prefixCls = 'h-form';

export default {
  props: {
    mode: {
      type: String,
      default: "single" //inline,single,twocolumn
    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: Object,
    labelPosition: {
      type: String,
      default: "right" //left,right
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      messages: {},
      validator: null
    };
  },
  beforeMount() {
    // log('rule init', this.rules, this.validator);
    if (this.model && this.rules) this.validator = new Validator(this.rules);
  },
  watch: {
    rules() {
      // log('rule change', this.rules, this.validator);
      if (this.validator) {
        if (this.rules) this.validator.updateRule(this.rules);
      } else if (this.model && this.rules) {
        this.validator = new Validator(this.rules);
      }
    }
  },
  methods: {
    validField(prop) {
      if (!prop || !this.validator || !this.model) {
        return { valid: true };
      }
      let returnResult = this.validator.validField(prop, this.model, (result) => {
        utils.extend(true, this.messages, result);
      }, this.model);
      // log(returnResult);
      utils.extend(true, this.messages, returnResult);
    },
    getConfig(prop) {
      if (!this.validator) return false;
      return this.validator.getConfig(prop);
    },
    getErrorMessage(prop) {
      let message = { valid: true, message: null };
      this.messages[prop] = message;
      return message;
    },
    updateErrorMessage(prop, oldProp) {
      let message = utils.copy(this.messages[oldProp]);
      if (utils.isNull(message)) {
        message = { valid: true, message: null };
      }
      this.messages[prop] = message;
      return message;
    },
    removeProp(prop) {
      delete this.messages[prop];
    },
    valid() {
      if (!this.validator || !this.model) {
        return { result: true, messages: [] };
      }
      let returnResult = this.validator.valid(this.model);
      let isSuccess = true;
      for (let r in returnResult) {
        if (!returnResult[r].valid) {
          isSuccess = false;
          break;
        }
      }
      utils.extend(true, this.messages, returnResult);
      if (!isSuccess) {
        this.$nextTick(() => {
          let firstError = this.$el.querySelector('.h-form-item-valid-error');
          if (firstError) firstError.scrollIntoView();
        })
      }
      return { result: isSuccess, messages: utils.toArray(this.messages).filter(item => !item.valid) };
    }
  },
  computed: {
    formCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${this.mode}`]: true,
        [`${prefixCls}-label-${this.labelPosition}`]: !!this.labelPosition,
        [`${prefixCls}-readonly`]: this.readonly
      }
    }
  }
};
</script>
