// import { ref, computed } from 'vue'
// import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGenelButceKodStore = defineStore({
  id: 'genel_butcuKod',
  state: () => ({
    baseUrl: 'https://localhost:7230/api/',
    items: [],
    isLoading: false
  }),
  getters: {
    getItems: (state) => () => {
      var a = state.items
      return a
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
    async liste() {
      this.isLoading = true
      var adres = this.baseUrl + 'Test'

      try {
        this.items = []
        // bekleme yapması icin
        // await new Promise((resolve) => setTimeout(resolve, 2000))

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
    },
    async kayit(item) {
      this.isLoading = true
      try {
        await axios.post(this.baseUrl + 'Test/Add', item)
      } catch (error) {
        alert(error)
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async update(item) {
      this.isLoading = true
      try {
        await axios.post(this.baseUrl + 'Test/Update', item)
      } catch (error) {
        alert(error)
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async sil(id) {
      this.isLoading = true
      try {
        await axios.delete(this.baseUrl + 'Test/'+id)
      } catch (error) {
        alert(error)
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
