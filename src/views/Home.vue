<template>
  <div>
    <router-link class="link link--top" :to="{ name: 'Home' }">Home</router-link>

    <div class="container">
      <div class="content">
        <h1>Marie Monami .</h1>

        <nav class="nav">
          <ul>
            <li class="nav__item">
              <router-link class="link" :to="{ name: 'Projects' }">Projects</router-link>
            </li>
            <li class="nav__item">
              <router-link class="link" :to="{ name: 'Skills' }">About</router-link>
            </li>
            <li class="nav__item">
              <router-link class="link" :to="{ name: 'Contact' }">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <p class="typed-text">Love what you code</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 8rem;
  letter-spacing: 1px;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 900px) {
    font-size: 7rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 5.5rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 4.5rem;
  }
}

.typed-text {
  font-size: 2rem;
  letter-spacing: 15px;

  @media only screen and (max-width: 900px) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 500px) {
    letter-spacing: 10px;
    font-size: 1.5rem;
  }
}
</style>
