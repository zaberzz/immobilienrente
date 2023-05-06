<template>
  <div class="specialist-info">
    <p class="specialist-info-container">
      Your specialist for real estate retirement in Bonn / Siegburg, Cologne, Düsseldorf, Münster
      and the surrounding area.
    </p>
  </div>
  <section class="specialist">
    <div class="specialist-container">
      <div class="mr-14 md:max-w-500px">
        <p class="spc-title">Your independent advice</p>
        <h2 class="spc-main-title">
          The real estate pension plus:<br />
          Your real plus for old age!
        </h2>
        <p class="spc-1">
          We are specialists in the field of real estate annuity and offer all models on the market.
        </p>
        <p class="spc-2 mb-3">
          Together with the customer, we develop the right annuity model with the maximum economic
          benefit based on the customer's personal needs. Transparency, honesty and reliability are
          the guidelines of our work. Our experience and certificates are your guarantee for
          professional and serious service.
        </p>
      </div>
      <div class="md:flex-row md:content-center">
        <img
          src="@/assets/img/immobilienrente_plus_robert_mueller-700x700.jpg"
          class="md:h-350px h-250px my-0 mx-auto mt-5 md:mt-0"
          alt="a man who called Robert Muller"
        />
        <h2 class="spc-2 font-bold md:text-center">Robert Mueller</h2>
        <p class="spc-2 md:text-center">
          Founder & Managing Director,<br />
          Advice to owners
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.specialist-info {
  @apply m-6;
}
.specialist-info-container {
  @apply text-teal-700 font-bold  mx-auto my-0  border-t-3 border-lime-600/40 border-b-3 border-lime-600/40 p-5 md:(text-center max-w-1200px);
}
.specialist {
  @apply bg-gray-100/50 mb-10;
}
.specialist-container {
  @apply md:(max-w-1200px m-auto flex px-20 py-20 justify-between);
}
.spc-title {
  @apply font-bold text-lime-600/85 text-center md:text-left;
}
.spc-main-title {
  @apply text-3xl font-bold text-teal-700 text-center md:text-left;
}
.spc-1 {
  @apply text-xl my-4 text-teal-700  text-center md:text-left;
}
.spc-2 {
  @apply text-gray-700 text-xl text-center md:text-left;
}
</style>
export default Specialist
