<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :columns="columns"
           :datas="datas"
           :height="400">
      <template scope="props">
          <td @click="remove(datas, props.data)">
            <button class="h-btn h-btn-s h-btn-red"><i class="h-icon-trash"></i></button>
          </td>
          <td>{{props.data.id}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.name}}</td>
          <td>{{props.data.age}}</td>
          <td>{{props.data.address}}</td>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: '操作', width: 100 },
        { title: 'id', width: 50 },
        { title: '姓名1', width: 150 },
        { title: '姓名2', width: 450 },
        { title: '姓名3', width: 450 },
        { title: '姓名4', width: 150 },
        { title: '姓名5', width: 450 },
        { title: '姓名6', width: 450 },
        { title: '姓名7', width: 150 },
        { title: '年龄', width: 150 },
        { title: '地址', width: 150 },
      ],
      datas: [
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ],
      remove(datas, data) {
        datas.splice(datas.indexOf(data), 1);
      },
      add(datas) {
        datas.push({ id: 7, name: '添加', age: 12, address: "然后添加的" });
      },
    }
  }
}
</script>
