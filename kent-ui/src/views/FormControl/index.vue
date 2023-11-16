<template>
    <div>
        <div v-show="errormsg.length>0">{{ errormsg }}</div>
       <!-- <inputAd :deger="item.ad" @inputDeger="gelenAd($event)"></inputAd> -->
       <inputAd :deger="item.ad" :labelvalue="Ad" @inputDeger="($event) => (item.ad = $event)"></inputAd>
       <inputAd :deger="item.soyad" :labelvalue="Soyad" @inputDeger="($event) => (item.soyad = $event)"></inputAd>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="item.email">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Açıklama</label>
            <textarea class="form-control" id="aciklama" rows="3" v-model="item.aciklama"></textarea>
          </div>
          <button class="btn btn-info" @click="kontrolForm()">Kontrol</button>
    </div>
    {{ item }}
</template>

<script>
import inputAd from "@/views/FormControl/inputAd.vue"

export default {
    name: "formcontrol",
    components: {
        inputAd
    },
    data() {
        return {
            errormsg:"",
            item: {
                ad: "",
                soyad:"",
                email: "",
                aciklama: "",
            }
        }
    },
    
    computed: {},
    mounted() {},
    methods: {
        gelenAd($event) {
            this.item.ad = $event
        },
        kontrolForm(){
            this.errormsg = ""
            this.item.ad=this.item.email
            // var item = this.item
            // if (item.ad.length == 0) {
            //     this.errormsg = "Ad Boş değil"
            // }


       },
    },
    watch: {},
};
</script>
