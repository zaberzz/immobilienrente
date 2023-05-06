<template>
  <header>
    <div class="header-cotainer">
      <div class="flex justify-between items-center">
        <div>
          <a href=""
            ><img
              src="@/assets/img/immobilienrente_plus_logo-300x72.png"
              class="h-50px"
              alt="immobilienrente logo"
          /></a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-8 h-8 text-green-700 md:hidden"
        >
          <path
            fill-rule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div>
        <div class="info-container mb-2">
          <a href="" class="header-info"> INOFORMATION PACKAGE</a>
          <div class="flex">
            <a href="" class="header-tel">022-221978452</a>

            <a href="" class="whatsapp-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="whatsapp"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="menu-container">
          <a href="" class="header-menu"
            >Models
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 inline text-green-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>

          <!-- <ul>
          <li><a href="">One-off payment & housing rights</a></li>
          <li><a href="">Life annuity & housing rights</a></li>
          <li><a href="">One-time payment & usufruct</a></li>
          <li><a href="">One-time payment & rent back</a></li>
          <li><a href="">Safe in the new home</a></li>
          <li><a href="">Partial sale & usage fee</a></li>
        </ul> -->

          <a href="" class="header-menu"
            >Pursue<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 inline text-green-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>

          <!-- <ul>
          <li><a href="">About Real Estate Pension Plus</a></li>
          <li><a href="">retirement check</a></li>
          <li><a href="">customer testimonials</a></li>
        </ul> -->

          <div>
            <a href="" class="header-menu">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
/* ********************** Header Section *********************** */
header {
  @apply m-0 sticky top-0 bg-light-100 backdrop-blur-md opacity-80 md:h-35;
}
.header-cotainer {
  @apply md:(flex justify-around items-center) px-5;
}
.header-info {
  @apply bg-lime-600/85 py-3 px-4 w-45 uppercase font-bold text-lg text-white block w-full my-1text-center md:(mx-2  w-auto my-0 );
}
.header-tel {
  @apply bg-teal-700  uppercase font-bold text-lg text-white text-center inline-block w-1/2 h-50px py-2  md:(mx-2 w-auto h-auto px-2);
}
.whatsapp-container {
  @apply w-1/2 bg-teal-700  ml-1 text-center h-50px  flex justify-center items-center  md:(w-auto md:py-1 ml-0 h-auto);
}
.whatsapp {
  @apply h-40px inline-block text-white;
}
.header-menu {
  @apply font-bold text-green-700 text-lg inline-block  text-center md:mx-4;
}
.info-container {
  @apply md:flex;
}

.menu-container {
  @apply md:inline-flex hidden;
}
</style>

export default Header
