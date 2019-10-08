<template>
  <div>
    <router-link class="link link--top" :to="{ name: 'Home' }">Home</router-link>

    <div class="content">
      <h2>Marie Monami .</h2>

      <nav class="nav projects">
        <ul>
          <li class="nav__item">
            <router-link
              class="link link--project"
              :to="{ name: 'Umnitsa' }"
              target="_blank"
            >Kindergarten Umnitsa</router-link>
          </li>
          <li class="nav__item">
            <router-link
              class="link link--project"
              :to="{ name: 'AfricanSpirit' }"
              target="_blank"
            >African Spirit Concert</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link--project {
  font-weight: 300;
  font-size: 2.2rem;
}

.projects {
  margin-top: 15vh;
}

.nav__item {
  @media only screen and (max-width: 700px) {
    margin-bottom: 1.6rem;
  }
}
</style>
