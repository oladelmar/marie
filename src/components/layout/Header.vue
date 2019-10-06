<template>
  <div>
    <a class="theme_switcher" @click="switchThemeLight">Light</a>
    <p class="divider">|</p>
    <a class="theme_switcher" @click="switchThemeDark">Dark</a>

    <!-- <p>Theme: {{ theme.name }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    theme: Object
  },
  methods: {
    switchThemeLight() {
      if (this.theme.name === "dark") {
        this.theme.name = "light";
      }
    },
    switchThemeDark() {
      if (this.theme.name === "light") {
        this.theme.name = "dark";
      }
    }
  }
};
</script>
  
<style lang="scss" scoped>
.theme_switcher {
  border: none;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--color-accent);
  }
}

.divider {
  display: inline-block;
}
</style>
