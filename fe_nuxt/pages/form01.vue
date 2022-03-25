<template>
  <Layout :showLoader="showLoader">
    <div>
      <div>
        <form @submit="sendForm01">
          <br /><br />
          Full Name: <br />
          <input v-model="form01FullName" type="text" id="full_name" /><br />
          Email: <br />
          <input type="text" id="email" /><br /><br />
          <input type="submit" />
        </form>
      </div>
    </div>
  </Layout>
</template>
<script lang="ts">
import axios from 'axios'
import Core from '../models/Core'
import Vue from 'vue'

export default Vue.extend({
  name: "Test",
  data() {
    interface data_interface {
      showLoader: boolean
    }
    let data: data_interface = {
      showLoader: false
    }
    return data
  },
  computed : {
    form01FullName: {
      get () {
        return this.$store.state.form01FullName
      },
      set (value) {
        this.$store.commit('updateForm01FullName', value)
      }
    }
  },
  methods : {
    sendForm01(e: any) {
      e.preventDefault()
      console.log("@@@")
      console.log(this.$store.state.form01FullName)
    }
  }
})
</script>
<style>
.test_div {
  padding: 1rem 1rem;
}
</style>
