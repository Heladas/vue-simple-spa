<template>
  <li class="card">
    <span>{{widget.title }}</span>
  </li>
</template>
<script>
  export default {
    name: 'hello',
    props: ['widget'],
    data () {
      return {
        test: 'test'
      }
    }
  }
</script>
