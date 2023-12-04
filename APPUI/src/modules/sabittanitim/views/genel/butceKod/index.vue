<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-4">
                <div class="form-group">
                    <label for="FirstName">Ad </label>
                    <input v-model="item.firstName" type="text" class="form-control" id="FirstName">
                </div>
            </div>
            <div class="col-4">
                <div class="form-group">
                    <label for="LastName">Soyad </label>
                    <input v-model="item.lastName" type="text" class="form-control" id="LastName">
                </div>
            </div>
            <div class="col">
                <button class="btn btn-info" @click="fetchData()" :disabled="isLoading">Liste</button>
                <button class="btn btn-info" @click="kayit()" :disabled="isLoading">Kayıt</button>
                <button class="btn btn-info" @click="temizle()" :disabled="isLoading">Temizle</button>
            </div>
        </div>
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in items" :key="i.id">
                        <th scope="row">{{ i.id }}</th>
                        <td>{{ i.firstName }}</td>
                        <td>{{ i.lastName }}</td>
                        <td>
                            <button @click="duzelt(i)" class="btn btn-primary">Düzelt</button>
                            <button @click="sil(i.id)" class="btn btn-danger">Sil</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { toRaw } from 'vue'
import { useGenelButceKodStore } from '@/modules/sabittanitim/stores/genel/butceKod/index'
const _store = useGenelButceKodStore()

export default {
    mounted() {
        this.fetchData()
    },
    data() {
        return {
            isLoading: _store.isLoading,
            item: {
                id:0
            },
            itemRaw: {
                id: 0,
                firstName: "",
                lastName: ""
            },
            items: []
        }
    },
    methods: {
        async fetchData() {
            //  await _store.liste()
            //     .then(() => {
            //         this.items = _store.getItems()
            //     })
            try {
                await _store.liste()
            } finally {
                this.items = _store.getItems()
            }

        },
        async temizle() {
            this.item = JSON.parse(JSON.stringify(this.itemRaw))
        },
        async kayit() {
            console.log("kayıt",this.item)
            try {
                if (this.item.id > 0)
                    await _store.update(this.item)
                else
                    await _store.kayit(this.item)
            } finally {
                this.fetchData();
            }
        },
        async duzelt(i) {
            console.log("duzelt", toRaw(i))
            this.item = JSON.parse(JSON.stringify(toRaw(i)))
             console.log("duzelt2", this.item)
        },
        async sil(id) {
            try {
                await _store.sil(id)
            } finally {
                this.fetchData();
            }
        },
    },
}
</script>