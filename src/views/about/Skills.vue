<template>
  <div>
    <div class="skills">
      <p>
        <span class="js">JavaScript</span>,
        <span class="js">Vue.js</span>
      </p>
      <p>
        <span class="js">HTML</span>,
        <span class="js">CSS</span>,
        <span class="js">SCSS</span>
      </p>
      <p>Bootstrap, Vuetify</p>
      <p>Git</p>
      <p>Jest, Vue Test Utils</p>
      <p>
        Node.js, Express
        <span class="light">- basics</span>
      </p>
      <p>
        MongoDB
        <span class="light">- basics</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skills {
  margin-top: 2rem;
}

p {
  font-size: 2rem;
  padding-bottom: 1.6rem;

  & .light {
    font-weight: 300;
  }
}

.js {
  font-weight: 700;
  color: var(--color-accent);
}
</style>
