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
                    <button class="btn btn-info" @click="fetchData()" :disabled="isLoading">Liste</button>
                    <button class="btn btn-info" @click="fetchDataUser()" :disabled="isLoading">User</button>
                    <button class="btn btn-info" @click="kayit()" :disabled="isLoading">Kayıt</button>
                </div>
            </div>
        </div>
        Count2:        {{ count }}
        Count:        {{ items.length }}
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
            <vue-table-lite :is-loading="isLoading" :columns="tableColumns" :rows="tableItems" :total="totalRecordCount"
                :sortable="sortable" />
        </div>
        
    </div>
</template>

<script>
import VueTableLite from "vue3-table-lite";
import { storeToRefs } from 'pinia'
import { useGenelStore } from '@/modules/sabittanitim/stores/genel/bolge/index'

const { count,items, tableColumns, isLoading, totalRecordCount, sortable } = storeToRefs(useGenelStore())
// const { getItems, getUser, liste } = useGenelStore()
const storeGenel = useGenelStore()

export default {
    data() {
        return {
            count, tableColumns, isLoading, totalRecordCount, sortable,
            tableItems: [], items,
            count2:storeGenel.count,
            item: {
                kodu: 0,
                bolge_adi: "text"
            },
        }
    },
    components: { VueTableLite },
    computed: {},
    mounted() {
        this.fetchData()
     },
    methods: {
        async fetchData() {
            console.log("test")
            this.tableItems =[]
            await storeGenel.liste("todos")
                .then(() => {
                    this.tableItems = storeGenel.getItems()
                })
        },
        async fetchDataUser() {
            // this.tableItems =getUser(this.item.kodu)
            this.tableItems = storeGenel.getUser(this.item.kodu)
        },
        async kayit() {
        },
        tableLoadingFinish() {
            this.isLoading = false;
        },
    },
    watch: {},
};
</script>
