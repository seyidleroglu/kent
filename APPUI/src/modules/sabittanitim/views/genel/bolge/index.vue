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
        liste() {
            var adres = 'https://jsonplaceholder.typicode.com/todos'
            if (this.item.kodu > 0)
                adres = adres + "/" + this.item.kodu

            fetch(adres)
                .then(response => response.json())
                .then(json => this.items = json)
            // .then(json => console.log(json))

            this.totalRecordCount = this.items.length

        },
        listeAxios() {
            var adres = 'https://jsonplaceholder.typicode.com/todos'
            if (this.item.kodu > 0)
                adres = adres + "/" + this.item.kodu

                var res =[]
                axios.get(adres)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    // console.log(response.data);
                    res =response.data
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
                console.log(res.data)
           this.items=JSON.stringify(res.data)
            this.totalRecordCount = this.items.length
        },
        tableLoadingFinish() {
            this.isLoading = false;
        },
        kayit() {
            console.log("item", this.item)
        }
    },
    watch: {},
};
</script>
