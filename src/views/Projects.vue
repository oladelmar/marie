<template>
  <div class="projects">
    <router-link class="link link--top" :to="{ name: 'Home' }">Home</router-link>

    <div class="container">
      <div class="content">
        <h1>Projects</h1>

        <nav class="nav">
          <ul>
            <li class="nav__item">
              <router-link class="link link--project" :to="{ name: 'Umnitsa' }">Kindergarten Umnitsa</router-link>
            </li>
            <li class="nav__item">
              <router-link
                class="link link--project"
                :to="{ name: 'AfricanSpirit' }"
              >African Spirit Concert</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
  font-size: 3rem;
  margin-bottom: 4rem;
}

.link--project {
  font-weight: 300;
  font-size: 2.2rem;
}
</style>
