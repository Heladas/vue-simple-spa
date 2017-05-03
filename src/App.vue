<template>
  <div>
    <header-block></header-block>
    <widgets-list  v-bind:widgetsList="widgets"></widgets-list>

    <footer></footer>
  </div>
</template>

<script>

  import WidgetsList from './components/widgetsList/WidgetsList.vue'
  import HeaderBlock from './components/headerBlock/HeaderBlock.vue'

  export default {
    name: 'app',
    components: {
      WidgetsList,
      HeaderBlock
    },
    data () {
      return {
        widgets: [
          {
            id: 1,
            title: 'Widget A',
            done: true,
            color: '#3498db'
          },
          {
            id: 2,
            title: 'Widget B',
            done: true,
            color: '#3498db'
          },
          {
            id: 3,
            title: 'Widget C',
            done: true,
            color: '#3498db'
          },
          {
            id: 4,
            title: 'Widget D',
            done: true,
            color: '#3498db'
          },
          {
            id: 5,
            title: 'Widget E',
            done: true,
            color: '#3498db'
          }
        ]
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
