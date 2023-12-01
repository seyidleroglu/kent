// import { ref, computed } from 'vue'
import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGenelStore = defineStore({
  id: 'genel_bolge',
  state: () => ({
    count: 0,
    items: [],
    isLoading: false,
    totalRecordCount: 0,
    sortable: {
      order: 'id',
      sort: 'asc'
    },
    tableColumns: [
      {
        label: 'ID',
        field: 'id',
        width: '3%',
        sortable: true,
        isKey: true
      },
      {
        label: 'userId',
        field: 'userId',
        width: '10%',
        sortable: true
      },
      {
        label: 'Title',
        field: 'title',
        width: '30%',
        sortable: true
      }
    ]
  }),
  getters: {
    getItems(state) {
      return state.items
    },
    getUser: (state) => (userId) => {
      var a = state.items.filter((x) => x.userId == userId)
      return a
    }
  },
  actions: {
    /**
     * the bolge list
     * @param {string} name
     */
    async liste(name) {
      this.isLoading = true
      var adres = 'https://jsonplaceholder.typicode.com/' + name

      try {
        this.items = []
        // bekleme yapması icin
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const res = await axios.get(adres)
        this.items = res.data
      } catch (error) {
        alert(error)
        console.log(error)
      } finally {
        // execute some code whether an exception is handled or not
        // console.log("finally executed")
        this.isLoading = false
      }
    }
  }
})
