<template>
  <Layout :showLoader="showLoader">
    <div>
      Test<br /><br />
      <button v-on:click="testMicroservice">TEST</button>
    </div>
  </Layout>
</template>
<script lang="ts">
import axios from 'axios'
import Core from '../models/Core'
import Vue from 'vue'

export default Vue.extend({
  name: "Microservices",
  data() {
    interface data_interface {
      showLoader: boolean
    }
    let data: data_interface = {
      showLoader: false
    }
    return data
  },
  methods : {
    async testMicroservice() {
      const core = new Core()
      let axios_res: any = await axios.post(core.getBaseUrl() + "/getMicroserviceTest01", {})
      console.log(axios_res)
    }
  }
})
</script>
