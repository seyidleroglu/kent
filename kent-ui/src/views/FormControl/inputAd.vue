<template>
     <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >{{labelDeger}}</label>
                <input type="text" class="form-control" id="ad" v-model="value" :on-keyup="$emit('inputDeger',value)">
              </div>
</template>

<script>

export default {
    // name: "input-ad",
    // props: ['deger'],
    props: {
        labelvalue: { type: String, required: false, default: ""},
        deger: { type: String, required: true, default: ""},
    },
    data() {
        return {
            value:this.deger,
            labelDeger:this.labelvalue
        }
    },
    watch: {
        deger: {
            handler: function (gelen_value) {
                this.value = gelen_value
            },
        },
        labelvalue: {
            handler: function (gelen_value) {
                this.labelDeger = gelen_value
            },
        },
    },

}
</script>
