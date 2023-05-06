<template>
  <section class="benefit">
    <div class="benefit-container">
      <div>
        <img
          src="@/assets/img/immobilienrente_plus_finanzielle_freiheit-700x700.png"
          class="md:max-w-400px mb-5 md:mb-0"
          alt="an island wich look like a heart"
        />
      </div>
      <div class="benefit-text">
        <h2>Real estate pension means more financial freedom in old age</h2>
        <p>
          The real estate annuity models are possible for two people or individuals. Basically, the
          higher the sale value of the property, the higher the possible payout. The amount of
          available capital is influenced, among other things, by age, gender, the market value of
          your property and the annuity model. On this basis, we first calculate the non-binding
          offer.
        </p>
        <span>Find out with our retirement check!</span>

        <a href="#" class="btn">get advice now</a>
      </div>
    </div>
  </section>
</template>

<style>
.benefit {
  @apply md:py-25 py-15 px-5 md:px-0;
}
.benefit-container {
  @apply md:(max-w-1200px m-auto flex justify-between items-center);
}
.benefit h2 {
  @apply text-2xl font-bold text-teal-700 mb-3;
}
.benefit p {
  @apply text-gray-600 md:text-xl mb-2 tex-base;
}
.benefit-text {
  @apply text-center md:(max-w-500px text-left);
}
.benefit span {
  @apply block font-bold text-lg text-gray-500 mb-8;
}
</style>

export default Benefits
