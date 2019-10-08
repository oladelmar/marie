<template>
  <div>
    <div class="university">
      <h3>Technical University of Moldova</h3>
      <p>
        Major:
        <span>Computer Science</span>,
        Qualification: Engineer
      </p>
    </div>

    <div class="supplementary">
      <h3>Supplementary education</h3>
      <p class="highlight">Vue.js WebAcademy</p>
      <p>at Pentalog IT company, Chisinau</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.university {
  font-size: 2.1rem;
  padding-bottom: 7rem;

  & h3 {
    padding-bottom: 1.5rem;
  }

  & span {
    font-weight: 700;
    color: var(--color-accent);
  }
}

.supplementary {
  font-size: 1.8rem;

  & h3 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 2rem;
    padding-bottom: 2rem;
  }

  & .highlight {
    font-weight: 700;
    font-size: 2.1rem;
    color: var(--color-accent);
    padding-bottom: 1rem;
  }
}
</style>