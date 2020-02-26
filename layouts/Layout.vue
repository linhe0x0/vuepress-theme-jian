<template>
  <div class="theme-container jian jian__container">
    <div class="jian__navbar">
      <navbar />
    </div>
    <div class="jian__body">
      <div class="jian__content markdown-body">
        <Content />
      </div>
      <div class="jian__footer">
        <div class="jian__date" v-if="$page.lastUpdated">
          Last Updated:
          <strong>{{ new Date($page.lastUpdated).toLocaleString() }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="stylus">
@import '../styles/index';
</style>

<style lang="stylus" scoped>
.jian {
  &__container {
    display: flex;
    width: 60%;
    margin: 240px auto;
  }

  &__navbar {
    flex: 0 0 auto;
    width: 245px;
  }

  &__body {
    flex: 1 1 auto;
    width: 1px;
  }

  &__footer {
    margin: 2rem 0.5rem;
    font-size: 12px;
    color: #c5c5c5;
  }

  &__date {
    text-align: right;

    strong {
      font-weight: 400;
    }
  }
}
</style>