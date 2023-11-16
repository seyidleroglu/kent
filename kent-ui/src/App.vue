<template>
  <div>
    
  <h1>Kent Belediyesi</h1>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/" class="btn btn-info">Ana Sayfa</router-link>
      <router-link to="/for" class="btn btn-info">For</router-link>
      <router-link to="/componet" class="btn btn-info">Componet</router-link>
      <router-link to="/form" class="btn btn-info">Form</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      name: 'Abd'
    }
  },
  components: {
    
  },
  computed: {},
  mounted() { },
  methods: {},
  watch: {},
};
</script>
