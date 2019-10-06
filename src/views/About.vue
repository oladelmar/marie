<template>
  <div>
    <router-link class="link link--top" :to="{ name: 'Home' }">Home</router-link>

    <div class="container">
      <div class="content-about">
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

      <router-view class="about-info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.nav__item {
  @media only screen and (max-width: 600px) {
    padding: 0px 1rem;
  }
}
</style>
