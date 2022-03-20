<template>
  <div>
    <Layout>
      <div>
        Form Test
        <div>
          <form @submit="send_form">
            Name:<br />
            <input type="text" /><br />
            Email: <br />
            <input type="text" /><br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'FormTestPage',
  methods: {
    send_form: (e) => {
      e.preventDefault()
      console.log("@@@")
    }
  }
}
</script>
