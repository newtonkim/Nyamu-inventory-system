<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    products: Object,
    categories: Array,
    filters: Object,
});
</script>

<template>
    <Head title="Products" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">Products</h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <!-- Filters and Search -->
                        <div class="mb-4">
                            <h3 class="text-lg font-semibold">Filters</h3>
                            <!-- Add filter controls here -->
                        </div>

                        <!-- Products Table -->
                        <table class="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th class="px-4 py-2 border-b">Name</th>
                                    <th class="px-4 py-2 border-b">SKU</th>
                                    <th class="px-4 py-2 border-b">Category</th>
                                    <th class="px-4 py-2 border-b">Stock</th>
                                    <th class="px-4 py-2 border-b">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products.data" :key="product.id">
                                    <td class="px-4 py-2 border-b">{{ product.name }}</td>
                                    <td class="px-4 py-2 border-b">{{ product.sku }}</td>
                                    <td class="px-4 py-2 border-b">{{ product.category.name }}</td>
                                    <td class="px-4 py-2 border-b">{{ product.stock_quantity }}</td>
                                    <td class="px-4 py-2 border-b">{{ product.price }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Pagination -->
                        <div class="mt-4">
                            <!-- Add pagination links here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>