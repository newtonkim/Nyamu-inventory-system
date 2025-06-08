<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

const props = defineProps({
    products: Object,
    categories: Array,
    filters: Object,
});

const filterForm = useForm({
    name: props.filters.name || '',
    category_id: props.filters.category_id || '',
    start_date: props.filters.start_date || '',
    end_date: props.filters.end_date || '',
});

const applyFilters = () => {
    filterForm.get(route('products.index'), {
        preserveState: true,
        replace: true,
    });
};

const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<template>
    <Head title="Products" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">Products</h2>
        </template>

        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900">
                <div class="flex justify-end mb-4">
                    <Link class="px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600" :href="route('products.create')">
                        <span>Create</span>
                        <span class="hidden md:inline"> Product</span>
                    </Link>
                </div>
                <!-- Filters -->
                <div class="p-4 mb-6 bg-gray-100 rounded-lg">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">Filters</h3>
                    </div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
                        <div class="md:col-span-1">
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" v-model="filterForm.name" id="name" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                        </div>
                        <div class="md:col-span-1">
                            <label for="category_id" class="block text-sm font-medium text-gray-700">Category</label>
                            <select v-model="filterForm.category_id" id="category_id" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                                <option value="">All</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                            </select>
                        </div>
                        <div class="md:col-span-1">
                            <label for="start_date" class="block text-sm font-medium text-gray-700">Start Date</label>
                            <input type="date" v-model="filterForm.start_date" id="start_date" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                        </div>
                        <div class="md:col-span-1">
                            <label for="end_date" class="block text-sm font-medium text-gray-700">End Date</label>
                            <input type="date" v-model="filterForm.end_date" id="end_date" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm">
                        </div>
                        <div class="flex items-end md:col-span-1">
                            <button @click="applyFilters" class="w-full px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600">
                                Filter
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Products Table -->
                <div v-if="products.data.length > 0" class="overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Name</th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Barcode</th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Category</th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Price</th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Stock</th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Date</th>
                                <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products.data" :key="product.id">
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-10 h-10 rounded-full" :src="product.image ? `/storage/${product.image}` : 'https://via.placeholder.com/150'" alt="">
                                        </div>
                                        <div class="ml-4">
                                            <div class="text-sm font-medium leading-5 text-gray-900">{{ product.name }}</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ product.barcode }}</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ product.category.name }}</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ formatCurrency(product.selling_price) }}</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ product.stock_quantity }}</td>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{{ formatDate(product.created_at) }}</td>
                                <td class="px-6 py-4 text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200">
                                    <div class="flex items-center justify-end">
                                        <Link :href="route('products.edit', product.id)" class="text-indigo-600 hover:text-indigo-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </Link>
                                        <Link :href="route('products.destroy', product.id)" method="delete" as="button" class="ml-4 text-red-600 hover:text-red-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p>No products found.</p>
                </div>

                <!-- Pagination -->
                <div class="mt-6">
                    <div class="flex justify-center">
                        <Link v-for="(link, index) in products.links" :key="index" :href="link.url" v-html="link.label" class="px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50" :class="{ 'bg-blue-500 text-white': link.active }"></Link>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
