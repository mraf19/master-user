<script setup></script>

<template>
  <div class="w-screen h-screen flex justify-start items-center bg-gray-900">
    <div
      class="bg-white flex flex-col justify-center items-center w-1/2 h-full"
    >
      <div class="w-1/2 flex flex-col justify-center items-start mb-8">
        <label class="text-2xl font-semibold text-gray-950 mb-2" for="email"
          >Email</label
        >
        <input
          class="border border-gray-950 text-gray-950 w-full rounded-md p-2 font-medium focus:bg-gray-200 transition duration-200 hover:shadow-lg focus:shadow-xl shadow-amber-900"
          type="email"
          name="email"
          id="email"
          autocomplete="off"
        />
      </div>
      <div class="w-1/2 flex flex-col justify-center items-start mb-8">
        <label class="text-2xl font-semibold text-gray-950 mb-2" for="password"
          >Password</label
        >
        <input
          class="border border-gray-950 text-gray-950 w-full rounded-md p-2 font-medium focus:bg-gray-200 transition duration-200 hover:shadow-lg focus:shadow-xl shadow-amber-900"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div class="w-full flex justify-center">
        <button
          class="border border-emerald-600 bg-emerald-500 text-white font-bold text-xl w-1/2 p-2 rounded-xl outline-none hover:bg-emerald-700 hover:shadow-xl shadow-emerald-900"
        >
          Sign In
        </button>
      </div>
    </div>
    <div class="w-full flex flex-col justify-center items-center mb-24">
      <h2 class="text-9xl font-bold text-white mb-24">Hello Again!!</h2>
      <p class="text-2xl font-bold text-white">
        So much that waiting you here!! Let's go!!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
