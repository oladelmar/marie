<template>
  <div id="app" :data-theme="theme.name">
    <router-view :theme="theme" />
  </div>
</template>

<script>
export default {
  data: () => ({
    theme: {
      name: "dark"
    }
  })
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
}

html {
  font-size: 50%; // 8px

  @media only screen and (max-width: 600px) {
    font-size: 43.75%; // 7px
  }

  @media only screen and (min-width: 768px) {
    font-size: 56.25%; // 9px
  }

  @media only screen and (min-width: 1200px) {
    font-size: 62.5%; // 10px
  }

  @media only screen and (min-width: 1600px) {
    font-size: 68.75%; // 11 px
  }
}

#app {
  --color-bg: #e0e7ee;
  --color-text: #2c3e50;
  --color-accent: #42b983;

  &[data-theme="dark"] {
    --color-bg: #2c3e50;
    --color-text: #e0e7ee;
  }

  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--color-bg);
  color: var(--color-text);
}

.content {
  margin: 7rem 0;
}

.nav {
  & ul {
    list-style: none;
  }

  &__item {
    position: relative;
    display: inline-block;
    padding: 5px 2rem;

    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: var(--color-bg);
      transform: scaleX(0);
      transition: all 0.3s cubic-bezier(0.2, 0.59, 0.44, 0.87);
    }

    &:hover::before {
      transform: scaleX(0.8);
      height: 2px;
      background-color: var(--color-accent);
    }
  }
}

.link {
  font-weight: 400;
  font-size: 2rem;
  color: var(--color-text);
  text-decoration: none;

  &--top {
    font-size: 1.6rem;
    transition: 0.3s;

    &:hover {
      color: var(--color-accent);
    }
  }
}

h2 {
  font-weight: 700;
  font-size: 7rem;
  letter-spacing: 1px;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 900px) {
    font-size: 6rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 4.5rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 4rem;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
