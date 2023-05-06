<template>
  <section class="models">
    <div class="models-container">
      <h3>real estate annuity</h3>
      <h2>Which model suits you?</h2>
      <p class="mb-3">
        There are different models for the individual customer situation. Only after
        well-founded,<br />
        expert advice does it become clear which retirement model is the right one for you.
      </p>
      <p class="mb-6">
        Arrange your personal consultation appointment now, which is of course free of charge for
        you.
      </p>
      <div class="border-container">
        <div class="border-box hover:bg-lime-700">
          <a href="#">
            <p>One-off payment &<br /><strong>housing rights</strong></p>
          </a>
        </div>

        <div class="border-box hover:bg-green-700">
          <a href="#"
            ><div>
              <p>housing rights<br /><strong>housing rights</strong></p>
            </div></a
          >
        </div>
        <div class="border-box hover:bg-orange-500">
          <a href="#"
            ><div>
              <p>One-time payment &<br /><strong>usufruct</strong></p>
            </div></a
          >
        </div>
        <div class="border-box hover:bg-blue-500">
          <a href="#"
            ><div>
              <p>One-time payment &<br /><strong>rent back</strong></p>
            </div></a
          >
        </div>
        <div class="border-box hover:bg-sky-500">
          <a href="#"
            ><div>
              <p>safe in the new home<br /><strong>within 3 years</strong></p>
            </div></a
          >
        </div>
        <div class="border-box hover:bg-yellow-500">
          <a href="#"
            ><div>
              <p>user free &<br /><strong>particial sale</strong></p>
            </div></a
          >
        </div>
      </div>
      <div>
        <a href="#" class="btn text-center w-full md:w-160px py-7">get advice now</a>
      </div>
    </div>
  </section>
</template>

<style>
.models {
  @apply bg-teal-700 md:py-5 p-7;
}
.models-container {
  @apply text-center py-8 md:(max-w-1200px m-auto py-15);
}
.models h3 {
  @apply text-lg font-extrabold text-lime-600 mb-1;
}
.models h2 {
  @apply text-white text-4xl font-bold mb-4;
}
.models p {
  @apply text-white text-lg;
}
.border-container {
  @apply my-18 md:(grid grid-cols-3 gap-x-0.5);
}
.border-box {
  @apply w-full h-80px text-center  border-3 border-white rounded-2xl flex justify-center items-center shadow-lg shadow-current mb-7 md:(h-150px w-300px);
}
.border-box p strong {
  @apply text-2xl;
}
</style>

export default Models
