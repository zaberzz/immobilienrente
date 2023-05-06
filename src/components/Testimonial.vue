<template>
  <section class="testimonial">
    <div class="testimonial-container">
      <h3>Customer Testimonials</h3>
      <h2>Read for yourself what customers say about us and our work.</h2>
      <div class="cards">
        <div class="card mb-4">
          <img src="@/assets/img/immobilienrente_plus_erfahrung_bad_honef-768x768.jpg" />
          <div class="card-text">
            <h1>Dietmar K., Bad Honef</h1>
            <p>
              Dietmar Küsgen aus Bad Honnef fühlte sich „von Anfang sehr gut beraten und aufgehoben.
              Vor allem das hervorragende Fachwissen und die sehr angenehme Erscheinung von...
            </p>
          </div>
        </div>
        <div class="card mb-4">
          <img
            src="@/assets/img/immobilienrente_plus_erfahrung_erfstadt_selbststaendig-768x768.jpg"
            alt=""
          />

          <div class="card-text">
            <h1>Herr B., Erfstadt</h1>
            <p>
              Das ist alles wirklich super gelaufen! Herr Müller war unheimlich nett und hilfsbereit
              – er hat uns sogar zum Notar gefahren. Bei der Kaufvertragsvorbereitung hat sich
              herausgestellt, dass es ....
            </p>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/img/immobilienrente_plus_erfahrung_troisdorf-768x768.jpg" alt="" />
          <div class="card-text">
            <h1>Couple S., Troisdorf</h1>
            <p>
              We settled our inheritance during our lifetime. “The pension model is just right for
              us. We informed ourselves immediately in advance and also talked to our son about it
              for a long time...
            </p>
          </div>
        </div>
      </div>
      <a href="" class="btn mt-3">read more customer testemonial</a>
    </div>
  </section>
</template>

<style>
.testimonial {
  @apply bg-orange-50 md:py-5 p-7;
}
.testimonial-container {
  @apply text-center py-8 md:(max-w-1200px m-auto py-15);
}
.testimonial h3 {
  @apply text-lg font-extrabold text-lime-600 mb-1;
}
.testimonial h2 {
  @apply text-teal-700 text-4xl font-bold mb-4;
}
.testimonial p {
  @apply text-gray-500 text-xl;
}
.cards {
  @apply md:(flex justify-between max-w-1000px m-auto py-15);
}
.card {
  @apply max-w-300px bg-white shadow-md shadow-gray-300 rounded-2xl overflow-hidden mx-auto my-5;
}
.card h1 {
  @apply text-lg;
}
.card-text {
  @apply text-left p-4 m-3;
}
</style>
export default Testimonial
