<template>
  <div class="doc">
    <h2>Select 下拉选择</h2>
    <h3>普通下拉选择</h3>
    <p>对于对象数组的解析，系统默认使用<code>key</code>, <code>title</code>两个参数进行识别。可以通过全局配置修改两个参数名称，详情请参考<router-link to="/guide/config">全局配置</router-link></p>
    <blockquote>注意：如果datas传入的是<code>{ 1:'a', 2:'b' }</code>这种数字key，选中的key值将全部转换为String, 建议使用<code>[{ key: 1, title: 'a' }]</code>对象数据模式。</blockquote>
    <example demo="dataplugins/select1"></example>
    
    <h3>禁用</h3>
    <example demo="dataplugins/select10"></example>
    
    <h3>没有默认“请选择”选项</h3>
    <example demo="dataplugins/select2"></example>

    <h3>多选</h3>
    <example demo="dataplugins/select3"></example>

    <h3>选择对象值</h3>
    <example demo="dataplugins/select4"></example>

    <h3>多选对象值</h3>
    <example demo="dataplugins/select5"></example>

    <h3>限制数量</h3>
    <p>最多选中2个</p>
    <example demo="dataplugins/select6"></example>

    <h3>自定义</h3>
    <example demo="dataplugins/select7"></example>

    <h3>可筛选</h3>
    <example demo="dataplugins/select11"></example>

    <h3>可筛选多选</h3>
    <example demo="dataplugins/select12"></example>

    <h3>使用全局Dict</h3>
    <p>Hey UI将提供数据字典的调用方式模型，并内置<code>dictMapping</code>方法做展示。详情请至<router-link to="/guide/config">全局配置</router-link>。</p>
    <example demo="dataplugins/select8"></example>

    <h3>文本类型的下拉</h3>
    <example demo="dataplugins/select9"></example>

    <h3>Select 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>readonly</td>
        <td>是否只读</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>是否多选</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>选择的数据</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>调用全局定义的字典</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>限制只能选择多少个</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>nullOption</td>
        <td>是否有“请选择”选项</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>noBorder</td>
        <td>是否有边框，适用于文字的下拉选择</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>render</td>
        <td>下拉菜单的展示自定义</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>展示默认提示语</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {}
}
</script>
