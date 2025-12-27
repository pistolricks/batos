import {Component} from "solid-js";
import UpdateProduct from "~/components/products/update-product";

type PROPS = {}

const Products: Component<PROPS> = props => {

    return (
        <>
            <UpdateProduct/>
        <section class="bg-background dark:bg-gray-900 antialiased">
            <div class="mx-auto max-w-screen-2xl">
                <div class="relative py-4 h-screen bg-white dark:bg-gray-800 shadow-md">
                    <div
                        class="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div class="w-full md:w-1/2">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div
                                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400"
                                             fill="currentColor"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Search" />
                                </div>
                            </form>
                        </div>
                        <div
                            class="flex flex-row items-center justify-between md:justify-end md:space-x-3 flex-shrink-0">
                            <div class="flex items-center space-x-3">
                                <button type="button" data-drawer-target="drawer-create-product"
                                        data-drawer-show="drawer-create-product"
                                        aria-controls="drawer-create-product"
                                        class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                    <svg class="h-3.5 w-3.5 mr-2 flex-shrink-0 hidden md:inline" fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd"
                                              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                                    </svg>
                                    Add product
                                </button>
                                <button id="dropdownFilterButton" data-dropdown-toggle="dropdownFilter"
                                        type="button"
                                        class="flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                         class="h-4 w-4 mr-2 text-gray-400"  fill="currentColor">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"/>
                                    </svg>
                                    Filter
                                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clip-rule="evenodd" fill-rule="evenodd"
                                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                    </svg>
                                </button>
                                <form action="#" method="get" id="dropdownFilter"
                                      class="z-10 hidden max-w-screen-sm p-3 space-y-4 bg-white rounded-lg shadow dark:bg-gray-700"
                                      aria-labelledby="dropdownFilterButton">
                                    <h5 id="drawer-label"
                                        class="inline-flex items-center text-gray-500 dark:text-gray-400">Filter</h5>

                                    <div>
                                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price
                                            Range</label>
                                        <div class="grid grid-cols-2 gap-3">
                                            <div>
                                                <input id="min-price" type="range" min="0" max="7000" value="300"
                                                       step="1"
                                                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"/>
                                            </div>
                                            <div>
                                                <input id="max-price" type="range" min="0" max="7000" value="3500"
                                                       step="1"
                                                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"/>
                                            </div>
                                            <div class="flex items-center justify-between space-x-2 md:col-span-2">
                                                <div class="w-full">
                                                    <label for="min-price-input"
                                                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                                                    <input type="number" id="min-price-input" value="300" min="0"
                                                           max="7000"
                                                           class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                           placeholder=""/>
                                                </div>
                                                <div class="w-full">
                                                    <label for="max-price-input"
                                                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                                    <input type="number" id="max-price-input" value="3500" min="0"
                                                           max="7000"
                                                           class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                           placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sales</label>
                                        <div class="grid grid-cols-2 gap-3">
                                            <div>
                                                <input id="min-sales" type="range" min="0" max="7000" value="300"
                                                       step="1"
                                                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"/>
                                            </div>
                                            <div>
                                                <input id="max-sales" type="range" min="0" max="7000" value="3500"
                                                       step="1"
                                                       class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"/>
                                            </div>
                                            <div class="flex items-center justify-between space-x-2 md:col-span-2">
                                                <div class="w-full">
                                                    <label for="min-sales-input"
                                                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From</label>
                                                    <input type="number" id="min-sales-input" value="1" min="0"
                                                           max="300"
                                                           class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                           placeholder=""/>
                                                </div>
                                                <div class="w-full">
                                                    <label for="max-sales-input"
                                                           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To</label>
                                                    <input type="number" id="max-sales-input" value="100" min="0"
                                                           max="300"
                                                           class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                           placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <ul class="grid w-full grid-cols-2 gap-3">
                                            <li>
                                                <input type="checkbox" id="gaming" name="category" value=""
                                                       class="hidden peer"/>
                                                <label for="gaming"
                                                       class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">Gaming</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="electronics" name="category" value=""
                                                       class="hidden peer"/>
                                                <label for="electronics"
                                                       class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">Electronics</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="phone" name="category" value=""
                                                       class="hidden peer" />
                                                <label for="phone"
                                                       class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">Phone</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="tv-monitor" name="category" value=""
                                                       class="hidden peer"/>
                                                <label for="tv-monitor"
                                                       class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">TV/Monitor</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="laptop" name="category" value=""
                                                       class="hidden peer"/>
                                                <label for="laptop"
                                                       class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">Laptop</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" id="watch" name="category" value=""
                                                       class="hidden peer" />
                                                <label for="watch"
                                                       class="inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer dark:hover:text-white dark:border-gray-500 peer-checked:border-primary-600 peer-checked:bg-primary-600 hover:text-white peer-checked:text-white hover:bg-primary-500 dark:text-gray-100 dark:bg-gray-600 dark:hover:bg-primary-600 dark:hover:border-primary-600 dark:peer-checked:bg-primary-600">Watch</label>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h6 class="mb-2 text-sm font-medium text-black dark:text-white">State</h6>
                                        <ul class="flex flex-col items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                            <li class="w-full border-b border-gray-200 dark:border-gray-600">
                                                <div class="flex items-center pl-3">
                                                    <input id="state-all" type="radio" value="" name="list-radio"

                                                           class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="state-all"
                                                           class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
                                                </div>
                                            </li>
                                            <li class="w-full border-b border-gray-200 dark:border-gray-600">
                                                <div class="flex items-center pl-3">
                                                    <input id="state-new" type="radio" value="" name="list-radio"
                                                           class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="state-new"
                                                           class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">New</label>
                                                </div>
                                            </li>
                                            <li class="w-full">
                                                <div class="flex items-center pl-3">
                                                    <input id="state-used" type="radio" value="" name="list-radio"
                                                           class="w-4 h-4 bg-gray-100 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                                    <label for="state-used"
                                                           class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Refurbished</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex mt-6 space-x-4">
                                        <button type="submit"
                                                class="px-2.5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Show
                                            32 Results
                                        </button>
                                        <button type="reset"
                                                class="px-2.5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div class="flex items-center space-x-1">
                                <button
                                    class="flex items-center justify-center p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         class="h-5 w-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                </button>
                                <button
                                    class="flex items-center justify-center p-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                                    type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         class="h-5 w-5 text-gray-500 dark:text-gray-400"
                                         fill="currentColor" aria-hidden="true">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-x-auto mx-4 space-y-4">
                        <a href="#"
                           class="w-full flex flex-col md:flex-row md:items-center relative p-3 md:space-x-6 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                alt="" class="w-20 h-auto"/>
                            <div class="flex flex-col md:justify-between">
                                <div class="grid grid-cols-2 md:grid-cols-6 w-full gap-2">
                                    <div class="flex flex-col justify-between h-full col-span-3">
                                        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-2 md:mb-3">Apple
                                            iMac 27&#34;</h3>
                                        <div>
                                            <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Category</h6>
                                            <p class="text-sm font-semibold text-gray-900 dark:text-white">PC/Desktop
                                                PC</p>
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Price</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">$2999</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Stock</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">300</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Total
                                            Sales</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">466</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 right-3">
                                <button id="dropdown-button-0" type="button" data-dropdown-toggle="dropdown-0"
                                        class="inline-flex items-center p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    </svg>
                                </button>
                                <div id="dropdown-0"
                                     class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-600 dark:divide-gray-500">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button-0">
                                        <li>
                                            <button type="button" data-drawer-target="drawer-update-product"
                                                    data-drawer-show="drawer-update-product"
                                                    aria-controls="drawer-update-product"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                                </svg>
                                                Edit
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-drawer-target="drawer-read-product-advanced"
                                                    data-drawer-show="drawer-read-product-advanced"
                                                    aria-controls="drawer-read-product-advanced"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                                Preview
                                            </button>
                                        </li>
                                        <li>
                                            <button data-modal-target="deleteModal" data-modal-toggle="deleteModal"
                                                    type="button"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-red-600 dark:text-red-500">
                                                <svg class="w-4 h-4 mr-2" viewBox="0 0 14 15" fill="none"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          fill="currentColor"
                                                          d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"/>
                                                </svg>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                           class="w-full flex flex-col md:flex-row md:items-center relative p-3 md:space-x-6 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/xbox-series-s.png"
                                alt="" class="w-20 h-auto"/>
                            <div class="flex flex-col md:justify-between">
                                <div class="grid grid-cols-2 md:grid-cols-6 w-full gap-2">
                                    <div class="flex flex-col justify-between h-full col-span-3">
                                        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-2 md:mb-3">Xbox
                                            Series S</h3>
                                        <div>
                                            <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Category</h6>
                                            <p class="text-sm font-semibold text-gray-900 dark:text-white">Gaming/Console</p>
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Price</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">$299</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Stock</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">56</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Total
                                            Sales</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">3040</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 right-3">
                                <button id="dropdown-button-1" type="button" data-dropdown-toggle="dropdown-1"
                                        class="inline-flex items-center p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    </svg>
                                </button>
                                <div id="dropdown-1"
                                     class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-600 dark:divide-gray-500">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button-1">
                                        <li>
                                            <button type="button" data-drawer-target="drawer-update-product"
                                                    data-drawer-show="drawer-update-product"
                                                    aria-controls="drawer-update-product"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                                </svg>
                                                Edit
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-drawer-target="drawer-read-product-advanced"
                                                    data-drawer-show="drawer-read-product-advanced"
                                                    aria-controls="drawer-read-product-advanced"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                                Preview
                                            </button>
                                        </li>
                                        <li>
                                            <button data-modal-target="deleteModal" data-modal-toggle="deleteModal"
                                                    type="button"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-red-600 dark:text-red-500">
                                                <svg class="w-4 h-4 mr-2" viewBox="0 0 14 15" fill="none"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          fill="currentColor"
                                                          d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"/>
                                                </svg>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                           class="w-full flex flex-col md:flex-row md:items-center relative p-3 md:space-x-6 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/playstation-5.png"
                                alt="" class="w-20 h-auto"/>
                            <div class="flex flex-col md:justify-between">
                                <div class="grid grid-cols-2 md:grid-cols-6 w-full gap-2">
                                    <div class="flex flex-col justify-between h-full col-span-3">
                                        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-2 md:mb-3">PlayStation
                                            5</h3>
                                        <div>
                                            <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Category</h6>
                                            <p class="text-sm font-semibold text-gray-900 dark:text-white">Gaming/Console</p>
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Price</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">$799</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Stock</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">78</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Total
                                            Sales</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">2999</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 right-3">
                                <button id="dropdown-button-2" type="button" data-dropdown-toggle="dropdown-2"
                                        class="inline-flex items-center p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    </svg>
                                </button>
                                <div id="dropdown-2"
                                     class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-600 dark:divide-gray-500">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button-2">
                                        <li>
                                            <button type="button" data-drawer-target="drawer-update-product"
                                                    data-drawer-show="drawer-update-product"
                                                    aria-controls="drawer-update-product"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                                </svg>
                                                Edit
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-drawer-target="drawer-read-product-advanced"
                                                    data-drawer-show="drawer-read-product-advanced"
                                                    aria-controls="drawer-read-product-advanced"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                                Preview
                                            </button>
                                        </li>
                                        <li>
                                            <button data-modal-target="deleteModal" data-modal-toggle="deleteModal"
                                                    type="button"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-red-600 dark:text-red-500">
                                                <svg class="w-4 h-4 mr-2" viewBox="0 0 14 15" fill="none"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          fill="currentColor"
                                                          d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"/>
                                                </svg>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                           class="w-full flex flex-col md:flex-row md:items-center relative p-3 md:space-x-6 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/benq-ex2710q.png"
                                alt="" class="w-20 h-auto"/>
                            <div class="flex flex-col md:justify-between">
                                <div class="grid grid-cols-2 md:grid-cols-6 w-full gap-2">
                                    <div class="flex flex-col justify-between h-full col-span-3">
                                        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-2 md:mb-3">Monitor
                                            BenQ EX2710Q</h3>
                                        <div>
                                            <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Category</h6>
                                            <p class="text-sm font-semibold text-gray-900 dark:text-white">TV/Monitor</p>
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Price</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">$499</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Stock</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">354</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Total
                                            Sales</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">76</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 right-3">
                                <button id="dropdown-button-3" type="button" data-dropdown-toggle="dropdown-3"
                                        class="inline-flex items-center p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    </svg>
                                </button>
                                <div id="dropdown-3"
                                     class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-600 dark:divide-gray-500">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button-3">
                                        <li>
                                            <button type="button" data-drawer-target="drawer-update-product"
                                                    data-drawer-show="drawer-update-product"
                                                    aria-controls="drawer-update-product"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                                </svg>
                                                Edit
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-drawer-target="drawer-read-product-advanced"
                                                    data-drawer-show="drawer-read-product-advanced"
                                                    aria-controls="drawer-read-product-advanced"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                                Preview
                                            </button>
                                        </li>
                                        <li>
                                            <button data-modal-target="deleteModal" data-modal-toggle="deleteModal"
                                                    type="button"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-red-600 dark:text-red-500">
                                                <svg class="w-4 h-4 mr-2" viewBox="0 0 14 15" fill="none"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          fill="currentColor"
                                                          d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"/>
                                                </svg>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                        <a href="#"
                           class="w-full flex flex-col md:flex-row md:items-center relative p-3 md:space-x-6 hover:bg-gray-50 dark:hover:bg-gray-600 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
                            <img
                                src="https://flowbite.s3.amazonaws.com/blocks/application-ui/devices/apple-iphone-14.png"
                                alt="" class="w-20 h-auto"/>
                            <div class="flex flex-col md:justify-between">
                                <div class="grid grid-cols-2 md:grid-cols-6 w-full gap-2">
                                    <div class="flex flex-col justify-between h-full col-span-3">
                                        <h3 class="text-lg font-semibold text-gray-700 dark:text-white mb-2 md:mb-3">Apple
                                            iPhone 14</h3>
                                        <div>
                                            <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Category</h6>
                                            <p class="text-sm font-semibold text-gray-900 dark:text-white">Phone</p>
                                        </div>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Price</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">$999</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Stock</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">1237</p>
                                    </div>
                                    <div class="col-span-1">
                                        <h6 class="text-sm font-normal text-gray-500 dark:text-gray-400">Total
                                            Sales</h6>
                                        <p class="text-sm font-semibold text-gray-900 dark:text-white">2000</p>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute top-3 right-3">
                                <button id="dropdown-button-4" type="button" data-dropdown-toggle="dropdown-4"
                                        class="inline-flex items-center p-1.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-500 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    </svg>
                                </button>
                                <div id="dropdown-4"
                                     class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-600 dark:divide-gray-500">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button-4">
                                        <li>
                                            <button type="button" data-drawer-target="drawer-update-product"
                                                    data-drawer-show="drawer-update-product"
                                                    aria-controls="drawer-update-product"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path
                                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                                                </svg>
                                                Edit
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" data-drawer-target="drawer-read-product-advanced"
                                                    data-drawer-show="drawer-read-product-advanced"
                                                    aria-controls="drawer-read-product-advanced"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor" aria-hidden="true">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"/>
                                                </svg>
                                                Preview
                                            </button>
                                        </li>
                                        <li>
                                            <button data-modal-target="deleteModal" data-modal-toggle="deleteModal"
                                                    type="button"
                                                    class="w-full flex items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white text-red-600 dark:text-red-500">
                                                <svg class="w-4 h-4 mr-2" viewBox="0 0 14 15" fill="none"
                                                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          fill="currentColor"
                                                          d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"/>
                                                </svg>
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </section>
            </>
    );
};

export default Products;
