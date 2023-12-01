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
                    <button class="btn btn-info" @click="liste()" :disabled="isLoading">Liste</button>
                    <button class="btn btn-info" @click="liste2()" :disabled="isLoading">User</button>
                    <button class="btn btn-info" @click="kayit()" :disabled="isLoading">Kayıt</button>
                </div>
            </div>
        </div>
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
import { toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import { useGenelStore } from '@/modules/sabittanitim/stores/genel/bolge/index'

const { count,items, tableColumns, isLoading, totalRecordCount, sortable } = storeToRefs(useGenelStore())
const { getItems, getUser, liste } = useGenelStore()

export default {
    data() {
        return {
            count, tableColumns, isLoading, totalRecordCount, sortable,
            tableItems:[], items,
            item: {
                kodu: 0,
                bolge_adi: "text"
            },
        }
    },
    components: { VueTableLite },
    computed: {},
    mounted() {
        liste("todos")
     },
    methods: {
        async liste() {
            this.tableItems =[]
            await liste("todos")
                .then(() => {
                    this.tableItems =getItems
                })
        },
        async liste2() {
            this.tableItems =getUser(this.item.kodu)
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
