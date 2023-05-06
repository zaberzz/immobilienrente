<template>
  <section class="package">
    <div class="package-container">
      <div class="img-part">
        <p class="pck-title">Therefore Real Estate Pension Plus:</p>
        <h2 class="pck-title--2">A real plus for you!</h2>
        <div class="flex mb-5">
          <img
            src="@/assets/img/immobilienrente_plus_diskreter_verkauf-150x150.png"
            alt="logo"
            class="h-30 w-30 mr-2"
          />
          <img
            src="@/assets/img/immobilienrente_plus_1750_beratungen-150x150.png"
            alt="logo"
            class="h-30 w-30 mr-2"
          />
          <img
            src="@/assets/img/immobilienrente_plus_125_fachvortraege-150x150.png"
            alt="logo"
            class="h-30 w-30"
          />
        </div>

        <div class="mx-0 my-auto text-center md:text-left">
          <a href="#" class="btn">request information package</a>
        </div>
      </div>

      <div class="text-part">
        <div class="text-el">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 inline"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span>independent advice</span>
          <!-- <p>
              We advise you independently and neutrally on all the options available on the market.
            </p> -->
        </div>

        <div class="text-el">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 inline"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span>over 25 years of experience</span>
          <!-- <p>
              Benefit from our professional market and real estate knowledge that we have been able
              to collect over 25 years.
            </p> -->
        </div>
        <div class="text-el">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-7 h-7 inline"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span>over 1,750 consultations</span>
          <!-- <p>
              We have a wealth of experience from over 1,750 customer meetings and consultations.
            </p> -->
        </div>
        <div class="text-el">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 inline"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span>over 125 specialist lectures</span>
          <!-- <p>
              In our specialist lectures on real estate retirement, we inform interested parties on
              site.
            </p> -->
        </div>
        <div class="text-el border-b">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 inline"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          <span>Personal advice at your home</span>
          <!-- <p>
              Important things are best discussed together on site . That's why we come to your
              home.
            </p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/*************************** * Package Section ***********************************/
.package {
  @apply p-20 bg-gray-100;
}
.package-container {
  @apply md:(max-w-1200px m-auto flex justify-around);
}
.pck-title {
  @apply text-lg  text-center  font-bold text-lime-600/85 mb-5 md:text-left;
}
.pck-title--2 {
  @apply text-4xl text-center  font-bold text-teal-700 mb-10 md:text-left;
}
.img-part {
  @apply mb-5;
}
.text-part {
  @apply text-xl text-teal-700 hover:cursor-pointer;
}
.text-el {
  @apply py-4 border-t border-amber-600/40;
}
</style>

export default Package
