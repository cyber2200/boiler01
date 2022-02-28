<template>
  <Layout :showLoader="showLoader">
    <div>
      <div>
        <div class="test_div">
          DB Examples - Let's test!
        </div>
        <div class="test_div">
          <button v-on:click="db_test('mysql_test')">Mysql Test</button>
        </div>
        <div class="test_div">
          <button v-on:click="db_test('pg_test')">PG Test</button>
        </div>
        <div class="test_div">
          <button v-on:click="db_test('mongo_test')">Mongo Test</button>
        </div>
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
  methods : {
    async db_test(call: string) {
      this.showLoader = true
      const core = new Core()
      try {
        let axios_res: any = await axios.post(core.getBaseUrl() + "/" + call, {})
        console.log(axios_res)
      } catch (err) {
        this.showLoader = false
        console.log(err)
      }
      this.showLoader = false
    }
  }
})
</script>
<style>
.test_div {
  padding: 1rem 1rem;
}
</style>
