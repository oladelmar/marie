<template>
  <div>
    <router-link class="link link--top" :to="{ name: 'Home' }">Home</router-link>

    <div class="content content-about">
      <h2>Marie Monami .</h2>

      <nav class="nav">
        <ul>
          <li class="nav__item">
            <router-link class="link" :to="{ name: 'Skills' }">Skills</router-link>
          </li>
          <li class="nav__item">
            <router-link class="link" :to="{ name: 'Education' }">Education</router-link>
          </li>

          <li class="nav__item">
            <router-link class="link" :to="{ name: 'Languages' }">Languages</router-link>
          </li>
          <li class="nav__item">
            <router-link class="link" :to="{ name: 'Contact' }">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <transition name="fade" appear mode="out-in">
      <router-view class="about-info" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.nav__item {
  @media only screen and (max-width: 600px) {
    padding: 0px 1rem;
  }
}
</style>
