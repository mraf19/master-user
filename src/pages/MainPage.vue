<script setup>
import { ref } from "vue";

const showDropDown = ref(false);
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
      <div class="h-[50px] bg-gray-900 flex justify-start items-center">
        <div class="px-[20px]">
          <h3 class="font-bold md:text-xl sm:text-lg">Master User</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
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
          class="border border-gray-300 rounded-md p-[20px] h-full flex flex-col"
        >
          <div class="flex gap-2 h-1/3">
            <div class="w-1/3 h-full bg-emerald-300 rounded-3xl p-6">
              <p class="text-3xl text-white font-semibold">Title</p>
              <p class="text-lg text-white font-normal">desc</p>
            </div>
            <div class="w-1/3 h-full bg-amber-300 rounded-3xl p-6">
              <p class="text-3xl text-white font-semibold">Title</p>
              <p class="text-lg text-white font-normal">desc</p>
            </div>
            <div class="w-1/3 h-full bg-indigo-300 rounded-3xl p-6">
              <p class="text-3xl text-white font-semibold">Title</p>
              <p class="text-lg text-white font-normal">desc</p>
            </div>
          </div>
          <div class="flex flex-col mt-6">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div
                class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
              >
                <div class="shadow overflow-hidden sm:rounded-lg">
                  <table class="min-w-full text-sm text-gray-700">
                    <thead class="bg-emerald-600 text-xs uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Club
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          MP
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          W
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          D
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          L
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          GF
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          GA
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          GD
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Pts
                        </th>
                        <th
                          scope="col"
                          class="px-6 py-3 text-left tracking-wider"
                        >
                          Last 5
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white">
                      <tr class="bg-emerald-400 bg-opacity-50">
                        <td class="pl-4">1</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Man United</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">11</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">3</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="px-6 py-4 whitespace-nowrap">24</td>
                        <td class="px-6 py-4 whitespace-nowrap">10</td>
                        <td class="px-6 py-4 whitespace-nowrap">34</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </td>
                      </tr>
                      <tr>
                        <td class="pl-4">2</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <img
                            class="w-5"
                            src="https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_48x48.png"
                            alt=""
                          />
                          <span class="ml-2 font-medium">Liverpool</span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">17</td>
                        <td class="px-6 py-4 whitespace-nowrap">9</td>
                        <td class="px-6 py-4 whitespace-nowrap">6</td>
                        <td class="px-6 py-4 whitespace-nowrap">2</td>
                        <td class="px-6 py-4 whitespace-nowrap">37</td>
                        <td class="px-6 py-4 whitespace-nowrap">21</td>
                        <td class="px-6 py-4 whitespace-nowrap">16</td>
                        <td class="px-6 py-4 whitespace-nowrap">33</td>
                        <td class="flex px-6 py-4 whitespace-nowrap">
                          <svg
                            class="w-4 fill-current text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <svg
                            class="w-4 fill-current text-green-600"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
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
    <!-- Main  -->
  </div>
</template>

<style scoped></style>
