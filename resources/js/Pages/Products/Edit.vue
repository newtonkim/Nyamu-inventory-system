<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';

const props = defineProps({
    product: Object,
    categories: Array,
});

const form = useForm({
    name: props.product.name,
    sku: props.product.sku,
    description: props.product.description,
    category_id: props.product.category_id,
    cost_price: props.product.cost_price,
    selling_price: props.product.selling_price,
    stock_quantity: props.product.stock_quantity,
    minimum_stock: props.product.minimum_stock,
    unit: props.product.unit,
    barcode: props.product.barcode,
    image: null,
    image_preview: props.product.image ? `/storage/${props.product.image}` : null,
    is_active: props.product.is_active,
});



const submit = () => {
    form.transform((data) => {
        const transformedData = { ...data };

        // Remove image_preview as it's not needed in the request
        delete transformedData.image_preview;

        // Convert boolean to string for Laravel
        transformedData.is_active = transformedData.is_active ? '1' : '0';

        return transformedData;
    }).post(route('products.update', props.product.id), {
        _method: 'PATCH',
        forceFormData: true,
        preserveState: false,
    });
};
</script>

<template>
    <Head title="Edit Product" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">Edit Product</h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel for="name" value="Name" />
                                <TextInput id="name" type="text" class="block w-full mt-1" v-model="form.name" autofocus autocomplete="name" />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="barcode" value="Barcode" />
                                <TextInput id="barcode" type="text" class="block w-full mt-1" v-model="form.barcode" />
                                <InputError class="mt-2" :message="form.errors.barcode" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="sku" value="SKU" />
                                <TextInput id="sku" type="text" class="block w-full mt-1 bg-gray-100" v-model="form.sku" readonly />
                                <InputError class="mt-2" :message="form.errors.sku" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="description" value="Description" />
                                <textarea id="description" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" v-model="form.description"></textarea>
                                <InputError class="mt-2" :message="form.errors.description" />
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div class="mt-4">
                                    <InputLabel for="cost_price" value="Cost Price" />
                                    <TextInput id="cost_price" type="number" step="any" class="block w-full mt-1" v-model="form.cost_price" />
                                    <InputError class="mt-2" :message="form.errors.cost_price" />
                                </div>

                                <div class="mt-4">
                                    <InputLabel for="selling_price" value="Selling Price" />
                                    <TextInput id="selling_price" type="number" step="any" class="block w-full mt-1" v-model="form.selling_price" />
                                    <InputError class="mt-2" :message="form.errors.selling_price" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div class="mt-4">
                                    <InputLabel for="stock_quantity" value="Stock Quantity" />
                                    <TextInput id="stock_quantity" type="number" class="block w-full mt-1" v-model="form.stock_quantity" />
                                    <InputError class="mt-2" :message="form.errors.stock_quantity" />
                                </div>

                                <div class="mt-4">
                                    <InputLabel for="minimum_stock" value="Minimum Stock" />
                                    <TextInput id="minimum_stock" type="number" class="block w-full mt-1" v-model="form.minimum_stock" />
                                    <InputError class="mt-2" :message="form.errors.minimum_stock" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div class="mt-4">
                                    <InputLabel for="unit" value="Unit" />
                                    <TextInput id="unit" type="text" class="block w-full mt-1" v-model="form.unit" />
                                    <InputError class="mt-2" :message="form.errors.unit" />
                                </div>

                            </div>

                            <div class="mt-4">
                                <InputLabel for="category_id" value="Category" />
                                <select id="category_id" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" v-model="form.category_id">
                                    <option value="">Select a category</option>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                </select>
                                <InputError class="mt-2" :message="form.errors.category_id" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="image" value="Image" />
                                <input id="image" type="file" class="block w-full mt-1" @input="form.image = $event.target.files[0]; form.image_preview = URL.createObjectURL($event.target.files[0])" />
                                <div v-if="form.image_preview" class="mt-4">
                                    <img :src="form.image_preview" class="w-32 h-32" />
                                </div>
                                <InputError class="mt-2" :message="form.errors.image" />
                            </div>

                            <div class="flex items-center mt-4">
                                <input id="is_active" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" v-model="form.is_active">
                                <label for="is_active" class="block ml-2 text-sm text-gray-900">Is Active</label>
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Update
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
