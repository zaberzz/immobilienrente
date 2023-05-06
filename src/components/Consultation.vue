<template>
  <section class="consultation">
    <div class="consultation-container">
      <div>
        <h3>I recommend our personal consultation at your home.</h3>
        <h2>Free & non-binding.</h2>
        <p>
          As early as the first consultation, you will receive a comparison of all retirement models
          and learn what options you have - we provide numbers, facts and possible solutions. A path
          that is worthwhile.
        </p>
      </div>
      <div class="cons-container">
        <div>
          <div class="cons-box">
            <a href=""><h2>advice</h2></a>
            <p>
              We advise you neutrally on all the options available on the market for real estate
              annuity.
            </p>

            <a href=" " class="btn">get advice now</a>
          </div>
        </div>
        <div class="cons-box">
          <a href=""><h2>recall</h2></a>
          <p>Leave us a message and we will get back to you promptly.</p>

          <a href="" class="btn">recall</a>
        </div>

        <div class="cons-box">
          <a href=""><h2>info pack</h2></a>
          <p>Request your free and personal Immobilienrente Plus information package today.</p>

          <a href="" class="btn">request information package</a>
        </div>
      </div>

      <div>
        <h2>Whatsapp Message</h2>
        <p>write</p>
      </div>
    </div>
  </section>
</template>

<style>
.consultation {
  @apply bg-teal-700 md:py-5 p-7;
}
.consultation-container {
  @apply text-center py-8 md:(max-w-1200px m-auto py-15);
}
.consultation h3 {
  @apply text-lg font-extrabold text-lime-600 mb-1;
}
.consultation h2 {
  @apply text-white text-4xl font-bold mb-4;
}
.consultation p {
  @apply text-white text-lg mb-4 md:mb-8;
}
.cons-container {
  @apply my-18 md:(grid grid-cols-3 gap-x-2);
}
.cons-box {
  @apply w-full text-center mb-15 md:(h-150px w-300px);
}
</style>
export default Consultation
