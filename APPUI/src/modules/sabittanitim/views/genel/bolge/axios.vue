<template>
    <div>
        <h1>Bölge Tanıtım</h1>
        <div class="container text-center">
            <div class="row">
                <div class="col-2">
                    <div class="form-group">
                        <label for="kodu">Kodu </label>
                        <input v-model="item.kodu" type="number" class="form-control" id="kodu">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form-group">
                        <label for="bolge_adi">Bölge adı </label>
                        <input v-model="item.bolge_adi" type="text" class="form-control" id="bolge_adi">
                    </div>
                </div>
                <div class="col">
                    <button class="btn btn-info" @click="liste()">Liste</button>
                    <button class="btn btn-info" @click="listeAxios()">ListeAxios</button>
                    <button class="btn btn-info" @click="kayit()">Kayıt</button>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- <table class="table" v-if="items.length>0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">userId</th>
                        <th scope="col">title</th>
                        <th scope="col">completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td>{{ item.userId }}</td>
                        <td>{{ item.title }}</td>
                        <td>{{ item.completed }}</td>
                    </tr>

                </tbody>
            </table> -->
            <vue-table-lite :is-loading="isLoading" :columns="columns" :rows="items" :total="totalRecordCount"
                :sortable="sortable" @is-finished="tableLoadingFinish" />
        </div>

        {{ items }}
    </div>
</template>

<script>
import VueTableLite from "vue3-table-lite";
import axios from "axios"

export default {
    data() {
        return {
            items: [],
            item: {
                kodu: 0,
                bolge_adi: "text"
            },
            isLoading: false,
            columns: [
                {
                    label: "ID",
                    field: "id",
                    width: "3%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "userId",
                    field: "userId",
                    width: "10%",
                    sortable: true,
                },
                {
                    label: "Title",
                    field: "title",
                    width: "30%",
                    sortable: true,
                },
            ],
            totalRecordCount: 0,
            sortable: {
                order: "id",
                sort: "asc",
            },
        }
    },
    components: { VueTableLite },
    computed: {},
    mounted() { },
    methods: {
        async liste() {
            var adres = 'https://jsonplaceholder.typicode.com/todos'
            if (this.item.kodu > 0)
                adres = adres + "/" + this.item.kodu

            await fetch(adres)
                .then(response => response.json())
                .then(json => this.items = json)
            // .then(json => console.log(json))

            this.totalRecordCount = this.items.length

        },
        async listeAxios() {
            var _items = []
            var adres = 'https://jsonplaceholder.typicode.com/todos'
            if (this.item.kodu > 0)
                adres = adres + "/" + this.item.kodu

            await axios.get(adres)
                .then(function (response) {
                    console.log("then");
                    _items = response.data
                })
                // .then(function (response) {
                //     console.log("then2");
                //     _items = response.data
                // })
                .catch(function (error) {
                    // handle error
                    console.log("catch");
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                    console.log("finally");
                });
            this.items = _items
            console.log("items", this.items);
        },
        tableLoadingFinish() {
            this.isLoading = false;
        },
        async kayit() {
            var adres = 'https://jsonplaceholder.typicode.com/todos'

            await axios.post(adres, {
                ...this.item,
                "userId": 1,
                "title": "deneme",
                "completed": true,
                "TEST":"BÜYÜK"
            })
                .then(function (response) {
                    console.log("response",response);
                })
                .catch(function (error) {
                    console.log("error",error);
                });
        },
        // async kayit() {
        //     var pType = {
        //         "ID": 1,
        //         "ADI": "Abd",
        //         "MUHHESAPKODU": 123,
        //     }
        //     var adres = 'https://jsonplaceholder.typicode.com/todos'

        //     await axios.post(adres, {
        //         // pType:JSON.stringify(this.item),
        //         pType:JSON.stringify(pType),
                
        //     })
        //         .then(function (response) {
        //             console.log("response", response);
        //         })
        //         .catch(function (error) {
        //             console.log("error", error);
        //         });
        // },
    },
    watch: {},
};
</script>
