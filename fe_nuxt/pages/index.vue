<template>
  <div>
    <Layout>
      <div>
        Index
        <div>
          {{ $store.getters['getGlobalData'].test_txt }}
        </div>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
