import {Component} from "solid-js";

type PROPS = {}

const Shipping: Component<PROPS> = props => {

    return (
        <section class="bg-background h-screen w-screen antialiased dark:bg-gray-900">
            <div class="mx-auto max-w-7xl">
                <div
                    class="relative py-4 h-dvh divide-y divide-gray-200 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800">
                    <div class="space-y-4 p-4">
                        <div class="flex flex-col-reverse items-center justify-between md:flex-row md:space-x-4">
                            <form class="w-full flex-1 md:mr-4 md:max-w-md">
                                <label for="default-search"
                                       class="sr-only text-sm font-medium text-gray-900 dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg aria-hidden="true" class="h-4 w-4 text-gray-500 dark:text-gray-400"
                                             fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search"
                                           class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                           placeholder="Search by Order ID"/>
                                    <button type="submit"
                                            class="absolute bottom-0 right-0 top-0 rounded-r-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search
                                    </button>
                                </div>
                            </form>

                            <div class="mb-4 w-full md:mb-0 md:w-auto">
                                <button
                                    id="dateDropdownButtonLabel"
                                    data-dropdown-toggle="dateDropdownButton"
                                    type="button"
                                    class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                                >
                                    Last 7 days
                                    <svg class="-me-0.5 ms-1.5 h-4 w-4" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </button>
                                <div id="dateDropdownButton"
                                     class="z-10 hidden w-80 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700">
                                    <ul class="divide-y divide-gray-200 text-sm dark:divide-gray-700"
                                        aria-labelledby="dateDropdownButtonLabel">
                                        <li>
                                            <a href="#"
                                               class="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                                Today
                                                <span
                                                    class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> Aug 21, 2023 - Aug 21, 2023 </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                               class="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                                Yesterday
                                                <span
                                                    class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> Aug 20, 2023 - Aug 21, 2023 </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                               class="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                                Last 7 days
                                                <span
                                                    class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> Aug 21, 2023 - Aug 21, 2023 </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                               class="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                                Last Month
                                                <span
                                                    class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> Aug 15, 2023 - Aug 21, 2023 </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                               class="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                                Last year
                                                <span
                                                    class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> Jan 1, 2023 - Aug 21, 2023 </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#"
                                               class="group flex items-center gap-2 px-4 py-2 text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-600">
                                                All time
                                                <span
                                                    class="text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> Feb 1, 2020 - Aug 21, 2023 </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr class="border-gray-200 dark:border-gray-700"/>

                        <div class="flex flex-wrap items-center">
                            <div
                                class="mr-4 hidden items-center text-sm font-medium text-gray-900 dark:text-white md:flex">Show:
                            </div>
                            <div class="flex flex-wrap gap-x-2 gap-y-3">
                                <div class="mr-4 flex items-center">
                                    <input id="all-orders" type="radio" value="" name="show-only"
                                           class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label for="all-orders"
                                           class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> All </label>
                                </div>

                                <div class="mr-4 flex items-center">
                                    <input id="confirmed" type="radio" value="" name="show-only"
                                           class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label for="confirmed"
                                           class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Confirmed </label>
                                </div>

                                <div class="mr-4 flex items-center">
                                    <input id="in-transit" type="radio" value="" name="show-only"
                                           class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label for="in-transit"
                                           class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> In
                                        Transit </label>
                                </div>

                                <div class="mr-4 flex items-center">
                                    <input id="cancelled" type="radio" value="" name="show-only"
                                           class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"/>
                                    <label for="cancelled"
                                           class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Cancelled </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative overflow-x-auto">
                        <table
                            class="w-full divide-y divide-gray-200 text-left text-sm text-gray-900 dark:divide-gray-700 dark:text-white">
                            <thead
                                class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col"
                                    class="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                    Tracking Number
                                </th>
                                <th scope="col"
                                    class="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        Due Date
                                        <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                        </svg>
                                    </div>
                                </th>
                                <th scope="col"
                                    class="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        Price
                                        <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                        </svg>
                                    </div>
                                </th>
                                <th scope="col"
                                    class="whitespace-nowrap p-4 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        Status
                                        <svg class="h-4 w-4 text-gray-400 dark:text-gray-500" aria-hidden="true"
                                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2" d="m8 15 4 4 4-4m0-6-4-4-4 4"/>
                                        </svg>
                                    </div>
                                </th>
                                <th scope="col" class="p-4 text-xs font-semibold uppercase">
                                    <span class="sr-only"> Actions </span>
                                </th>
                            </tr>
                            </thead>

                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB127364372</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">09 Mar 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$466</td>
                                <td class="p-4">
                                          <span
                                              class="me-2 inline-flex items-center rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
                                            <svg class="me-1 h-3 w-3" aria-hidden="true"
                                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                 viewBox="0 0 24 24">
                                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M18.5 4h-13m13 16h-13M8 20v-3.333a2 2 0 0 1 .4-1.2L10 12.6a1 1 0 0 0 0-1.2L8.4 8.533a2 2 0 0 1-.4-1.2V4h8v3.333a2 2 0 0 1-.4 1.2L13.957 11.4a1 1 0 0 0 0 1.2l1.643 2.867a2 2 0 0 1 .4 1.2V20H8Z"/>
                                            </svg>
                                              Pre-order
                                            </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown" data-dropdown-toggle="dropdownOrder" type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                            <li>
                                                <button id="deleteOrderButton" data-modal-target="deleteOrderModal"
                                                        data-modal-toggle="deleteOrderModal" type="button"
                                                        class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg class="me-1.5 h-4 w-4" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                                    </svg>
                                                    Cancel order
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB125467980</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">12 Mar 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$245</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                      </svg>
                      In transit
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown2" data-dropdown-toggle="dropdownOrder2"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder2"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown2">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                            <li>
                                                <button id="deleteOrderButton2" data-modal-target="deleteOrderModal"
                                                        data-modal-toggle="deleteOrderModal" type="button"
                                                        class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg class="me-1.5 h-4 w-4" aria-hidden="true"
                                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                                                    </svg>
                                                    Cancel order
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB139485607</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">19 Mar 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$2000</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>
                      Confirmed
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown3" data-dropdown-toggle="dropdownOrder3"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder3"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown3">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB137364371</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">23 Apr 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$90</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>
                      Confirmed
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown4" data-dropdown-toggle="dropdownOrder4"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder4"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown4">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB148273645</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">20 Apr 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$3040</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>

                      Cancelled
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown5" data-dropdown-toggle="dropdownOrder5"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder5"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown5">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB146284623</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">30 Apr 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$2999</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>
                      Confirmed
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown6" data-dropdown-toggle="dropdownOrder6"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder6"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown6">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB145967376</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">09 May 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$1870</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>
                      Confirmed
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown7" data-dropdown-toggle="dropdownOrder7"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder7"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown7">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB148756352</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">05 Jun 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$5067</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18 17.94 6M18 18 6.06 6"/>
                      </svg>

                      Cancelled
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown8" data-dropdown-toggle="dropdownOrder8"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder8"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown8">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB159873546</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">31 May 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$60</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>
                      Confirmed
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown9" data-dropdown-toggle="dropdownOrder9"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>
                                    <div id="dropdownOrder9"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown9">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>

                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <th scope="row" class="whitespace-nowrap p-4 font-medium text-gray-900 dark:text-white">
                                    <a href="#" class="hover:underline">#FWB156475937</a>
                                </th>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">24 Jun 2023</td>
                                <td class="whitespace-nowrap p-4 text-sm font-medium">$76</td>
                                <td class="p-4">
                    <span
                        class="me-2 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                      <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                           height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 11.917 9.724 16.5 19 7.5"/>
                      </svg>
                      Confirmed
                    </span>
                                </td>
                                <td class="p-4 text-right">
                                    <button id="actionsMenuDropdown10" data-dropdown-toggle="dropdownOrder10"
                                            type="button"
                                            class="inline-flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <span class="sr-only"> Actions </span>
                                        <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                             width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="4"
                                                  d="M6 12h.01m6 0h.01m5.99 0h.01"/>
                                        </svg>
                                    </button>

                                    <div id="dropdownOrder10"
                                         class="z-10 hidden w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                                        <ul class="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                                            aria-labelledby="actionsMenuDropdown10">
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-linecap="round"
                                                              stroke-linejoin="round" stroke-width="2"
                                                              d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
                                                    </svg>
                                                    <span>Order again</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   class="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    <svg
                                                        class="me-1.5 h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                                                        height="24" fill="none" viewBox="0 0 24 24">
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                                                        <path stroke="currentColor" stroke-width="2"
                                                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                                    </svg>
                                                    Order details
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shipping;