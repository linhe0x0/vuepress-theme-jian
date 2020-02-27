<template>
  <div class="navbar navbar__container">
    <ul class="navbar__list">
      <li
        class="navbar__item"
        v-for="item in navList"
        :key="item.key"
        :class="{
          'navbar__item--active': activeItemList.includes(item.key),
        }"
      >
        <router-link
          class="navbar__name"
          :class="{
            'navbar__name--active': activeItemList.includes(item.key),
          }"
          :to="item.to"
          >{{ item.name }}</router-link
        >
        <ul class="navbar__sub-group" v-if="item.headers.length">
          <li
            class="navbar__sub-item"
            v-for="header in item.headers"
            :key="header.slug"
          >
            <router-link
              class="navbar__name navbar__name--compact sidebar-link"
              :to="`${item.to}#${header.slug}`"
              >{{ header.title }}</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Navbar',
  computed: {
    navList() {
      return _.map(_.sortBy(this.$site.pages, 'path'), item => {
        let headers = []

        if (item.headers) {
          const minHeader = _.min(_.map(item.headers, 'level'))

          headers = _.filter(item.headers, item => item.level === minHeader)
        }

        return {
          key: item.key,
          name: item.frontmatter.nav || item.title,
          to: item.path,
          headers,
        }
      })
    },
    activeItemList() {
      return [this.$page.key]
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables';

.navbar {
  position: sticky;
  top: 2rem;
  margin-right: 1.5rem;
  user-select: none;

  &__list {
    padding-left: 0;
    list-style: none;
  }

  &__item {
    &--active {
      & ^[0]__sub-group {
        display: block;
      }
    }
  }

  &__name {
    display: block;
    min-height: 2rem;
    font-size: 0.875rem;
    line-height: 2rem;
    font-weight: 400;
    color: $secondary;

    &:hover {
      color: $primary;
    }

    &--compact {
      font-size: 13px;
      min-height: 1.25rem;
      line-height: 1.25rem;
    }

    &--active,
    &.router-link-active {
      font-weight: 700;
      color: $primary;
    }
  }

  &__sub-group {
    display: none;
    list-style: none;
    padding-left: 1rem;
    margin: 0.75rem 0 0.75rem 4px;
    font-size: 12px;
    border-left: $divider;
  }

  &__sub-item {
    margin-bottom: 0.625rem;
  }
}
</style>
