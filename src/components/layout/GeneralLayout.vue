<template>
  <div>
    <Header :theme="theme" />

    <div class="middle">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "GeneralLayout",
  components: {
    Header,
    Footer
  },
  props: {
    theme: Object
  }
};
</script>     

<style lang="scss" scoped>
* {
  text-align: center;
}

.middle {
  min-height: 82vh;
  width: 95vw;
  margin: auto;
  border: 2px solid var(--color-text);
  padding: 20px 0;
}
</style>
