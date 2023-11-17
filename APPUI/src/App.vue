<template>
<div class="wrapper">
  <!-- <Preloader/> -->
  <Navbar/>
  <Sidebar/>
    <div class="content-wrapper">
    <RouterView />
    </div>
     <FooterX/>
       <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
</div> 
</template>

<script>
// import Preloader from '@/views/Layout/Preloader.vue';
import Navbar from '@/views/Layout/Navbar.vue';
import Sidebar from '@/views/Layout/Sidebar.vue';
import FooterX from '@/views/Layout/footer.vue';
export default {
    components: {
        Navbar, Sidebar, FooterX
    }
}

</script>