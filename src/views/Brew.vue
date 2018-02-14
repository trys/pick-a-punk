<template>
  <div>
    <h1>Brew {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
