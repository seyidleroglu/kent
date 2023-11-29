<template>
      <!-- Preloader -->
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" :src="AdminLTELogo" alt="AdminLTELogo" height="60" width="60">
  </div>
</template>

<script>
import AdminLTELogo from "@/../dist/img/AdminLTELogo.png";

export default {
  name: "Navbar",
  data() {
    return {
      baseUrl: window.location.origin,
      AdminLTELogo
    }
  },
}
</script>