<template>
  <div>
    <UButton
      disabled
      :loading="loading"
      color="jade"
      label="Button Label"
      class="rounded-lg"
      :ui="{
        strategy: 'override',
        base: 'focus:outline-dashed',
        rounded: 'rounded-full',
      }"
    />
  </div>
</template>

<script setup>
const loading = ref(true);
</script>

<style lang="scss" scoped></style>
