<template>
  <div>
    <router-link class="link link--top" :to="{ name: 'Home' }">Home</router-link>

    <div class="container container--contact">
      <div class="content">
        <h1>Marie Monami .</h1>
      </div>

      <p>me@mariemonami.me</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-weight: 700;
  font-size: 8rem;
  letter-spacing: 1px;
  margin-bottom: 4rem;

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

p {
  font-size: 2.5rem;
  letter-spacing: 3px;
  padding-top: 3rem;
}
</style>
