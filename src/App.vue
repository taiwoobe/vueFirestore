<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.headerBackground {
  height: 80px;
  background: Green;
  color: white;
  text-align: center;
  margin-top: -20px;
  margin-bottom: 20px;
}
.btn-primary {
    padding: 8px 40px;
    background: green;
    border: green;
}
.btn-primary:hover {
    background: rgb(1, 95, 1);
    border: rgb(1, 95, 1);
}
.btn-primary:active {
    background: rgb(1, 95, 1);
    border: rgb(1, 95, 1);
    outline: none;
}

</style>
