<template>
  <div>
    <p>
      <Button @click="expandAll" size="xs">全部展开</Button>
      <Button @click="foldAll" size="xs">全部收起</Button>
      <Button @click="updateSelect" size="xs">设置选中值</Button>
      <Button @click="getSelect" size="xs">获得选中值</Button>
    </p>
    <Tree :option="param" ref="demo" @open="open"  @select="select"  @choose="choose"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      { id: 1, title: "一级" },
      { id: 2, title: "二级" },
      { id: 3, title: "三级", disabled: true },
      { id: 10, title: "一级-0", parent: 1 },
      { id: 11, title: "一级-1", parent: 1 },
      { id: 12, title: "一级-2", parent: 1 },
      { id: 13, title: "一级-3", parent: 1 },
      { id: 14, title: "一级-4", parent: 1 },
      { id: 20, title: "二级-0", parent: 2 },
      { id: 21, title: "二级-1", parent: 2 },
      { id: 22, title: "二级-2", parent: 2 },
      { id: 23, title: "二级-3", parent: 2 },
      { id: 24, title: "二级-4", parent: 2 },
      { id: 30, title: "三级-0", parent: 3 },
      { id: 31, title: "三级-1", parent: 3 },
      { id: 32, title: "三级-2", parent: 3 },
      { id: 33, title: "三级-3", parent: 3 },
      { id: 34, title: "三级-4", parent: 3 }
    ];
    return {
      param: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list
      }
    }
  },
  methods: {
    expandAll() {
      this.$refs.demo.expandAll();
    },
    foldAll() {
      this.$refs.demo.foldAll();
    },
    updateSelect() {
      this.$refs.demo.updateSelect(2);
      this.$Message.info("选中二级");
    },
    getSelect() {
      let option = this.$refs.demo.getSelect();
      if (option == null) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${option.title}`);
      }
    },
    choose() {
      //这里仅仅是触发事件
    },
    select(data) {
      log(data);
    },
    open(data) {
      log(data);
    }
  }
};
</script>
