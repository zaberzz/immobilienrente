<template>
  <section
    class="hero"
    style="background-image: url(./src/assets/img/immobilienrente_plus_titelmotiv.jpg)"
  >
    <div class="hero-container">
      <!-- <img
        src="@/assets/img/immobilienrente_plus_titelmotiv.jpg"
        alt="an old woman and man hug each other"
      /> -->
      <!-- <img src="@/assets/img/immobilienrente_plus_einmalzahlung.jpg" /> -->
      <div class="hero-text">
        <h1 class="hero-title">
          Stay at home.<br />
          Regulate inheritance.<br />
          More money in old age.
        </h1>
        <p>
          Be financially secure with a real estate pension.<br />
          Check your options for more money in old age with our pension check.
        </p>

        <div class="hero-btn">
          <a href="#" class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
              />
            </svg>
            retirement check</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* **************** Hero Section ************* */
.hero {
  @apply pb-14 bg-no-repeat md:(w-full h-full);
}

.hero-container {
  @apply md:(max-w-1200px m-auto);
}
.hero-btn {
  @apply text-center md:text-left;
}
.hero p {
  @apply font-bold text-center text-gray-500 mb-2  mb-5 md:text-left;
}
.hero-title {
  @apply text-4xl  text-teal-700 font-bold text-center mb-3 tracking-tight md:(text-6xl text-left);
}
.hero-text {
  @apply md:py-35;
}
</style>
export defaul Hero
