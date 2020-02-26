<template>
  <div class="not-found not-found__container">
    <div class="not-found__body">
      <h3 class="not-found__code">404</h3>
      <p
        class="not-found__text"
      >Sorry, it looks like we could not find what you’re looking for or you do not have permissions to access it.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style lang="stylus" scoped>
@import '../styles/_variables';

.not-found {
  &__container {
    width: 100vw;
    height: 100vh;
  }

  &__body {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__code {
    font-size: 24px;
    font-weight: 500;
    padding-right: 16px;
    border-right: 1px solid #eaeaea;
    margin-right: 16px;
  }

  &__text {
    font-size: 14px;
  }
}
</style>