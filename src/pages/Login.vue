<script setup>
import router from "../router";

function clickHandler() {
  router.push("/main");
}
</script>

<template>
  <div class="w-screen h-screen flex justify-start items-center bg-indigo-950">
    <div
      class="bg-white flex flex-col justify-center items-center w-full lg:w-1/2 h-full"
    >
      <div class="w-2/3 flex flex-col justify-center items-start mb-8">
        <label
          class="pl-6 text-3xl font-semibold text-gray-950 mb-4"
          for="email"
          >Email</label
        >
        <input
          class="border border-gray-950 text-gray-950 w-full rounded-full p-4 font-medium focus:bg-gray-200 transition duration-200 hover:shadow-lg focus:shadow-xl shadow-amber-900"
          type="email"
          name="email"
          id="email"
          autocomplete="off"
        />
      </div>
      <div class="w-2/3 flex flex-col justify-center items-start mb-8">
        <label
          class="pl-6 text-3xl font-semibold text-gray-950 mb-4"
          for="password"
          >Password</label
        >
        <input
          class="border border-gray-950 text-gray-950 w-full rounded-full p-4 font-medium focus:bg-gray-200 transition duration-200 hover:shadow-lg focus:shadow-xl shadow-amber-900"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div class="w-full flex justify-center">
        <button
          class="border border-indigo-800 bg-indigo-700 text-white font-bold text-xl w-2/3 p-4 rounded-full outline-none hover:bg-indigo-900 hover:shadow-xl shadow-emerald-900"
          @click="clickHandler"
        >
          Sign In
        </button>
      </div>
    </div>
    <div
      class="hidden 2xl:w-full lg:w-1/2 lg:flex flex-col justify-center items-center mb-24"
    >
      <img src="../assets/Header-9.png" alt="signin" class="mb-20 mx-2" />
      <div>
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Win the battle.
          <br />
          Be the Champion.
        </h2>
        <p className="text-white text-center text-xl">
          Start your glory with us!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
