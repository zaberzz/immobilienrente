<template>
  <section class="retirement">
    <div class="retirement-container">
      <div
        class="bg-container"
        style="background-image: url(./src/assets/img/imageedit_1_2544383701.jpg)"
      >
        <div class="retirement-text">
          <img
            src="@/assets/img/immobilienrente_plus_diskreter_verkauf-150x150.png"
            class="h-28 w-28 my-0 mx-auto"
          />
          <h2 class="retirement-heading">retirement check</h2>
          <div>
            <a href="#" class="btn text-center px-15 py-5">BEGING</a>
          </div>

          <p class="retirement-text">Check options quickly and easily</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* ************************Retirement Section******************** */
.retirement {
  @apply bg-teal-700 py-10;
}
.retirement-container {
  @apply px-2 md:(max-w-1200px m-auto  px-0);
}
.bg-container {
  @apply bg-cover h-540px rounded-3xl;
}
.retirement-text {
  @apply pt-30;
}
.retirement-heading {
  @apply text-4xl  text-teal-700 text-center font-bold py-15 md:text-6xl;
}
.retirement-text {
  @apply text-xl text-teal-700 text-center font-bold pt-10;
}
</style>
export default Retirement
