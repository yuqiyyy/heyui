<style lang="less" scoped>
  .h-row>div>div{
    padding: 8px;
    color: #FFF;
    border-radius: 3px;
    text-align: center;
    background-color: @gray-color;
  }
</style>
<template>
  <Row :space-x="19" :space-y="5">
    <Col width="24"><div>Top</div></Col>
    <Col width="6" ><div>Left</div></Col>
    <Col width="18" ><div>Right</div></Col>
    <Col width="18" ><div>Left</div></Col>
    <Col width="6" ><div>Right</div></Col>
  </Row>
</template>
