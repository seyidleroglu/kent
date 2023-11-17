<template>
     <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >{{ labelvalue }}</label>
                <input type="text" class="form-control" id="ad" v-model="value" :on-keyup="$emit('inputDeger',value)">
              </div>
              {{ value }}
</template>

<script>

export default {
    name: "adsoyad-giris",
    // props: ['deger'],
    props: {
        labelvalue: { type: String, required: false, default: ""},
        deger: { type: String, required: true, default: ""},
    },
    emits: ["inputDeger"],
    data() {
        return {
            value:this.deger,
        }
    },
    watch: {
        deger: {
            handler: function (gelen_value) {
                this.value = gelen_value
            },
        },
        
    },

}
</script>
