<script setup>
import { ref } from "vue";

const showSide = ref(true);

function toggleSideBar() {
  showSide.value = !showSide.value;
}
</script>

<template>
  <div class="w-screen h-screen flex">
    <!-- Side bar -->
    <div
      class="w-[400px] h-full bg-gray-200 text-white transition-all duration-300"
      v-show="showSide"
    >
      <div class="h-[50px] bg-slate-950 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold md:text-xl sm:text-lg">Master User</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-indigo-950 py-[20px]">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to=""
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                aria-hidden="true"
                class="mr-2 w-[25px] h-[25px] fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Home
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Container -->
    <div class="w-full h-full bg-gray-400">
      <div
        class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b"
      >
        <!-- Hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="w-[25px] h-[25px]"
          >
            <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div
          class="border border-gray-300 rounded-md p-[20px] h-full flex flex-col gap-10"
        >
          <h1 class="text-5xl font-semibold text-gray-900">History</h1>
          <!-- history -->
          <div class="flex gap-2 md:h-1/6 lg:h-1/3">
            <div
              class="w-1/3 h-full bg-green-400 rounded-3xl p-2 md:p-6 hover:shadow-lg hover:shadow-green-600 transition-all duration-200"
            >
              <p class="text-xl md:text-3xl text-white font-semibold lg:mb-16">
                Mobile Game
              </p>
              <p class="text-sm md:text-xl lg:text-5xl text-white md:font-bold">
                Rp. 10.379.800
              </p>
            </div>
            <div
              class="w-1/3 h-full bg-amber-400 rounded-3xl p-2 md:p-6 hover:shadow-lg hover:shadow-amber-600 transition-all duration-200"
            >
              <p class="text-xl md:text-3xl text-white font-semibold lg:mb-16">
                Console Game
              </p>
              <p class="text-sm md:text-xl lg:text-5xl text-white md:font-bold">
                Rp. 19.654.200
              </p>
            </div>
            <div
              class="w-1/3 h-full bg-cyan-400 rounded-3xl p-2 md:p-6 hover:shadow-lg hover:shadow-cyan-600 transition-all duration-200"
            >
              <p class="text-xl md:text-3xl text-white font-semibold lg:mb-16">
                PC Game
              </p>
              <p class="text-sm md:text-xl lg:text-5xl text-white md:font-bold">
                Rp. 50.899.000
              </p>
            </div>
          </div>

          <!-- table  -->
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full text-sm font-bold text-black">
                    <thead class="bg-slate-300 text-xs uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Game
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Item
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-slate-200">
                      <tr class="bg-indigo-950 bg-opacity-90">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium">Mobile Legend</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">Mobile</td>
                        <td class="px-6 py-4 whitespace-nowrap">Diamond</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Rp. 10.379.800
                        </td>
                      </tr>
                      <tr>
                        <td class="pl-4">2</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium">DOTA 2</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">PC</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Steam Wallet
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Rp. 50.899.000
                        </td>
                      </tr>
                      <tr class="bg-indigo-950 bg-opacity-90">
                        <td class="pl-4">3</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <span class="ml-2 font-medium">PlayStation</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">Console</td>
                        <td class="px-6 py-4 whitespace-nowrap">Game</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          Rp. 19.654.200
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
