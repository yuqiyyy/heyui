<template>
  <div>
    <p>value:{{value}}</p>
    <AutoComplete :option="param" v-model="value" @change="onChange"></AutoComplete>
  </div>
</template>
<script>

import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      callback(d.result.map((r) => {
        return {
          name: r[0],
          id: r[1],
        };
      }));
    });
}

export default {
  data() {
    return {
      value: '',
      param: {
        keyName: 'id',
        titleName: 'name',
        loadData,
        minWord: 1
      }
    }
  },
  methods: {
    onChange(data) {
      log(data);
    }
  }
};
</script>
