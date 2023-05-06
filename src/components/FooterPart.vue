<template>
  <section class="footer-part">
    <div class="footer-part-container">
      <div class="cards">
        <div class="card-info">
          <h2>advice hotline</h2>
          <p class="text-4xl text-lime-600/85 font-bold mb-6">022-221978452</p>
          <div class="border-b-2 border-teal-700"></div>
          <img
            src="@/assets/img/immobilienrente_plus_logo-300x72.png"
            alt="logo"
            class="w-70 mt-6"
          />
          <p class="card-info-text">
            Immobilienrente Plus - Your specialist for real estate pensions in Bonn / Siegburg,
            Cologne, Düsseldorf, Münster and the surrounding area.
          </p>
          <a href=""><p class="text-lime-600/85 font-bold">info@immorente-plus.de</p></a>
        </div>
        <div class="models">
          <a href="" class="text-2xl font-bold mb-7 inline-block">Models</a>
          <ul>
            <li>
              <a href=""
                >One-off payment &<br />
                housing rights</a
              >
            </li>
            <li>
              <a href=""
                >Life annuity &<br />
                housing rights</a
              >
            </li>
            <li>
              <a href=""
                >One-time payment &<br />
                usufruct</a
              >
            </li>
            <li>
              <a href=""
                >One-time payment &<br />
                rent back</a
              >
            </li>
            <li><a href="">Safe in the new home</a></li>
            <li><a href="">Partial sale & usage fee</a></li>
          </ul>
        </div>
        <div class="models">
          <a href="" class="text-2xl font-bold mb-7 inline-block">Generally</a>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">retirement check</a></li>
            <li><a href="">pursue</a></li>
            <li><a href="">customer testemonial</a></li>
            <li><a href="">contact</a></li>
            <li><a href="">data protection</a></li>
            <li><a href="">imprint</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.footer-part {
  @apply bg-teal-700 md:py-5 p-7;
}
.footer-part-container {
  @apply text-center py-8 md:(max-w-1200px m-auto py-8);
}
.cards {
  @apply md:(flex justify-between max-w-1000px m-auto py-15);
}
.card-info {
  @apply bg-white shadow-md shadow-gray-500 rounded-2xl max-w-400px p-8 text-left mx-auto my-5  md:(mr-10 );
}
.card-info h2 {
  @apply text-teal-700 text-lg font-bold mb-4;
}
.card-info-text {
  @apply text-base my-4 text-teal-700 font-bold;
}
.models {
  @apply text-white text-lg text-left leading-tight font-bold;
}
.models li {
  @apply mb-4 hover:text-lime-600;
}
</style>
