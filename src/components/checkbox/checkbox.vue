<template>
  <div class="h-checkbox" :disabled="disabled">
    <template v-if="arr.length">
    <label v-for="option of arr" @click="setvalue(option)" :key="option"><span :checked="isInclude(option)" :disabled="disabled" class="h-checkbox-native"></span><span>{{option[title]}}</span></label>
    </template>
    <label v-else @click="setvalue()"><span :checked="isChecked" :indeterminate="indeterminate" :disabled="disabled" class="h-checkbox-native"></span><span v-if="$slots.default"><slot></slot></span></label>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';

export default {
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    dict: String,
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      default: false
    },
    checked: {
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isChecked: null,
      key: config.getOption('dict', 'keyName'),
      title: config.getOption('dict', 'titleName'),
    };
  },
  mounted() {
    this.updateChecked();
  },
  watch: {
    checked() {
      this.updateChecked();
    }
  },
  methods: {
    updateChecked() {
      if (!this.datas && !this.dict) {
        if (utils.isBoolean(this.checked)) {
          this.isChecked = this.checked;
        } else {
          this.isChecked = this.checkList.indexOf(this.value) != -1;
        }
      }
    },
    setvalue(option) {
      if (this.disabled) return;
      let value = utils.copy(this.checked);
      if (!this.datas && !this.dict) {
        if (utils.isBoolean(this.checked)) {
          value = this.isChecked = !this.isChecked;
        } else {
          value = utils.toggleValue(this.checkList, this.value);
        }
      } else {
        let key = option[this.key];
        value = utils.toggleValue(value, key);
      }
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    },
    check(key) {
      let value = this.checkList.map(item => String(item));
      return value.indexOf(String(key));
    },
    isInclude(option) {
      let value = this.checkList.map(item => String(item));
      let index = value.indexOf(String(option[this.key]));
      return index > -1;
    }
  },
  computed: {
    checkList() {
      return this.checked || []
    },
    arr() {
      if (!this.datas && !this.dict) {
        // log.error('Checkbox组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }

      return utils.initOptions(datas, this);
    }
  }
};
</script>
