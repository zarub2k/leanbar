<template>
  <section class="p-4 bg-gray-50">
    <div class="flex">
      <div class="flex-1 m-auto">
        <h1 class="text-5xl mb-4">Fazio Developer Platform</h1>
        <h4 class="text-2xl text-gray-400">Grow your API business with us</h4>
        <p class="pt-5">
          <input type="text" class="w-1/2 p-2 border" placeholder="Enter your email">
          <button class="bg-yellow-400 p-2">Get Early Access</button>
        </p>
      </div>
      <div class="">
        <img class="m-auto"
          src="/images/home.png"
          alt=""
          width="450"
          height="400"
        >
      </div>
    </div>

    <!-- Features -->
    <p class="text-4xl text-gray-500 mb-5">Features</p>
    <div class="grid grid-cols-3 gap-4">
      <div class="border p-2">
        <p class="text-left">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
          <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clip-rule="evenodd" />
        </svg>
        </p>
        <p class="text-left text-2xl text-gray-500">Browse APIs</p>
        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae nulla magnam! Sapiente atque sed quis accusamus aspernatur quibusdam, totam consectetur voluptates, esse illum tempora fugit aut nobis maxime provident?</p>
      </div>
      <div class="border p-2">
        <p class="text-left">
          <svg xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
          </svg>
        </p>
        <p class="text-left text-2xl text-gray-500">Collaborate</p>
        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae nulla magnam! Sapiente atque sed quis accusamus aspernatur quibusdam, totam consectetur voluptates, esse illum tempora fugit aut nobis maxime provident?</p>
      </div>
      <div class="border p-2">
        <p class="text-left">
          <svg xmlns="http://www.w3.org/2000/svg" 
            class="h-12 w-12 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </p>
        <p class="text-left text-2xl text-gray-500">API Insights</p>
        <p class="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis beatae nulla magnam! Sapiente atque sed quis accusamus aspernatur quibusdam, totam consectetur voluptates, esse illum tempora fugit aut nobis maxime provident?</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Branding",
  setup() {},
};
</script>

