<template>
  <div :class="selectCls">
    <div :class="showCls">
      <div class="h-select-value">
        <div v-if="multiple&&objects"
             class="h-select-multiple-tags"><span v-for="obj of objects"
                :key="obj"><span>{{obj[title]}}</span><i class="h-icon-close"
             @click.stop="setvalue(obj)" v-if="!disabled"></i></span>
        </div>
        <div v-if="!multiple&&codes!=null&&objects" class="h-select-value-single">{{objects[title]}}</div>
        <div v-if="codes==null||codes.length==0"
             class="h-select-placeholder">{{placeholder}}</div>
      </div>
      <i class="h-icon-down"></i>
    </div>
    <div :class="groupCls">
      <div class="h-select-group-container" v-if="isShow">
        <Search v-if="filterable" class="h-select-search-input" placeholder="请输入筛选文本" trigger-type="input" @onsearch="search" position="front"></Search>
        <div class="h-select-list">
          <ul class="h-select-ul">
            <li v-for="option of filterOptions"
                :key="option"
                class="h-select-item"
                @click="setvalue(option)"
                :class="getLiCls(option)">
              <div v-if="!!render"
                  v-html="option[html]"></div>
              <template v-else>{{option[title]}}</template>
              <i v-if="multiple"
                class="h-icon-check"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

const prefix = 'h-select';

export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    type: {
      type: [String],
      default: 'key'  //object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    limit: {
      type: Number
    },
    nullOption: {
      type: Boolean,
      default: true
    },
    nullOptionText: {
      type: String,
      default: "请选择"
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    filterable: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    },
    render: Function,
    value: [Number, String, Array, Object]
  },
  data() {
    return {
      key: config.getOption('dict', 'keyName'),
      title: config.getOption('dict', 'titleName'),
      html: "select_rander_html",
      codes: [],
      objects: {},
      hasNullOption: this.nullOption && !this.multiple,
      searchInput: '',
      isShow: false
    };
  },
  watch: {
    value() {
      this.parse();
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  beforeMount() {
    this.parse();
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.$el.querySelector('.h-select-show');
      let content = this.$el.querySelector('.h-select-group');
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        disabled: this.disabled,
        equalWidth: true,
        container: document.body,
        events: {
          show(){
            that.isShow = true;
          }
        }
      });
    });
  },
  methods: {
    search(value) {
      this.searchInput = value;
    },
    setObjects() {
      if (this.multiple) {
        let os = [];
        for (let code of this.codes) {
          os.push(this.optionsMap[code]);
        }
        this.objects = os;
      } else {
        this.objects = this.optionsMap[this.codes];
      }
    },
    parse() {
      if (this.multiple) {
        let values = this.value || [];
        this.codes = values.map((item) => {
          return this.type == 'key' ? this.getValue(item) : item[this.key];
        })
      } else {
        if (this.type == 'key') {
          this.codes = this.getValue(this.value);
        } else if (utils.isObject(this.value)) {
          this.codes = this.value[this.key];
        }
      }
      this.setObjects();
    },
    getValue(value) {
      return utils.isNull(value) ? null : String(value);
    },
    setvalue(option) {
      if (this.readonly) return;
      let code = option[this.key];
      if (this.multiple) {
        if (!utils.isNull(this.limit) && !this.codes.includes(code) && this.codes.length >= this.limit) {
          this.$Message.error(`您最多可以选${this.limit}个选项`);
          return;
        }
        this.codes = utils.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      let value = this.type == 'key' ? this.codes : this.objects;
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.objects);
      this.$el.dispatchEvent(event);
      if (this.multiple) {
        if (this.dropdown.popperInstance) this.dropdown.popperInstance.update();
      } else {
        this.dropdown.hide();
      }
    },
    getLiCls(option) {
      let code = option[this.key];
      if (utils.isNull(code)) return {};
      return { [`${prefix}-item-selected`]: (this.multiple ? this.codes.includes(code) : this.codes == code) };
    }
  },
  filters: {
    showText(key, value) {
      return value.includes(key);
    }
  },
  computed: {
    selectCls() {
      let autosize = this.autosize || !!this.noBorder;
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: !this.noBorder,
        [`${prefix}-input-no-border`]: this.noBorder,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-no-autosize`]: !autosize,
        [`${prefix}-disabled`]: this.disabled,
      }
    },
    showCls() {
      return {
        [`${prefix}-show`]: true
      }
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
        [`${prefix}-multiple`]: this.multiple
      }
    },
    optionsMap() {
      let optionsMap = utils.toObject(this.options, this.key);
      delete optionsMap.null;
      return optionsMap;
    },
    filterOptions() {
      if (this.searchInput) {
        let searchValue = this.searchInput.toLocaleLowerCase();
        return this.options.filter((item) => {
          return (item[this.html] || item[this.title]).toLocaleLowerCase().indexOf(searchValue) != -1;
        });
      }
      return this.options;
    },
    options() {
      if (!this.datas && !this.dict) {
        log.error('Select组件:datas或者dict参数最起码需要定义其中之一');
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = config.getDict(this.dict);
      }
      datas = utils.initOptions(datas, this);
      if (!this.mutiple && this.hasNullOption) {
        datas.unshift({
          [`${this.key}`]: null,
          [`${this.title}`]: this.nullOptionText,
          [`${this.html}`]: this.nullOptionText
        });
      }
      return datas;
    }
  }
};
</script>