<template>
  <div class="container">
    <ul class="cards-list clearfix">
      <widget v-bind:widget="widget" v-for="widget in widgetsList" :key="widget.id"></widget>
    </ul>
    <div class="expanded-card-container"></div>
  </div>
</template>

<script type="text/javascript">
  import Widget from '../widget/Widget.vue'
  export default {
    name: 'WidgetsList',
    props: ['widgetsList'],
    components: {
      Widget
    }
  }
</script>
