<template>
  <Layout :showLoader="showLoader">
    <div>
      <div>
        <div class="test_div">
          DB Examples
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
<script>
import axios from 'axios'
import Core from '../models/Core'

export default {
  name: "Test",
  data() {
    return {
      showLoader: false
    }
  },
  methods : {
    async db_test(call) {
      this.showLoader = true
      const core = new Core()
      try {
        let axios_res = await axios.post(core.getBaseUrl() + "/" + call, {})
        console.log(axios_res)
      } catch (err) {
        this.showLoader = false
        console.log(err)
      }
      this.showLoader = false
    }
  }
}
</script>
<style>
.test_div {
  padding: 1rem 1rem;
}
</style>
