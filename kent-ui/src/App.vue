
<template>
  <!-- <div>ssssss</div> -->
  <li v-for="item in items" :key="item.id" >
    <div v-if="item.sehir.length == 0">{{ item.sehir }}</div>
    {{ item.sehir }}
    {{ item.field }} --- {{ item.label }} --- {{ item.sehir }}
    <div>{{ item.sehir.length }}</div>
      <div v-show="item.sehir.length != 5">Deneme</div>
      <br />
      <input v-model="item.sehir">
      <input v-model="item.sehir" :disabled="kontrol">
  </li>

  {{ kontrol }}
  {{ fontSize }}
  <button type="button" :style="styleObject" class="btn btn-success" @click="test()">Giriş</button>

</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '18px'
      }, fontSize: 10,
      kontrol:false,
      isActive:true,
      name: 'Abd',
      items: 
        [
          {
            id: 1,
            field: "durum",
            label: "Durum",
            aciklama: "",
            sehir: "Adana",
          },
          {
            id: 2,
            field: "kullanici",
            label: "Kullanıcı",
            sehir: "Adana",
          }
          ]
    }
  },
  computed: {},
  mounted() { },
  methods: {
    test() {
      console.log("test" )
      for (var i = 0; i < this.items.length; i++) {
        this.items[i].aciklama = this.items[i].id + " " + this.items[i].label;
       
      }
      console.log(this.items)
      this.kontrol = !this.kontrol;
      this.styleObject.color = "black"
      this.fontSize++
      this.styleObject.fontSize = this.fontSize+"px"
      
    }
  },
  watch: {},
};
</script>


<style scoped>
</style>
