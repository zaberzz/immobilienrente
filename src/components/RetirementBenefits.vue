<template>
  <section
    class="retirement-benefit"
    style="background-image: url(./src/assets/img/immobilienrente_plus_rueckmiete.jpg)"
  >
    <div class="retirement-benefit-container">
      <div class="retirement-benefit-text">
        <h2>Is real estate retirement something for you?</h2>
        <p>
          Are you at least 63 years old and would you like to have more money available by selling
          your property, settle your inheritance and at the same time stay in your home? Then we can
          offer you modern and safe models for real estate annuity. We would be happy to advise you
          in detail and transparently and provide you with a personal comparison of all retirement
          models.
        </p>

        <a href="#" class="btn px-10 py-5"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 inline-block mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
            />
          </svg>
          get advice now</a
        >
      </div>
    </div>
  </section>
</template>

<style>
/********************************8**** * Retirement-benefit Section********************************* */
.retirement-benefit {
  @apply w-full  bg-top h-auto md:h-540px;
}
.retirement-benefit-container {
  @apply py-15 px-5 md:(max-w-1200px m-auto py-25  px-0);
}
.retirement-benefit-text {
  @apply text-center md:(max-w-500px  text-left);
}
.retirement-benefit h2 {
  @apply text-2xl font-bold text-teal-700 mb-3;
}
.retirement-benefit p {
  @apply text-gray-600  mb-4 tex-base md:text-xl;
}
</style>

export default RetirementBenefits
