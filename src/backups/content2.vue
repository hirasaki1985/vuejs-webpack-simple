<template>
  <div id="content2">
    <h1 class="blue">apge B</h1>
    <p>
      this page is B!!!
    </p>
    <p>
      msg = {{ msg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'content2',
  data () {
    return {
      msg: "Welcome page2"
    }
  }
}
</script>

<style>
  .blue {
    color: #00f;
  }
</style>