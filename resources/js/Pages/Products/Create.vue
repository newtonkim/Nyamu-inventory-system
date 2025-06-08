<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import InputError from '@/Components/InputError.vue';
import Modal from '@/Components/Modal.vue';
import { StreamBarcodeReader } from 'vue-barcode-reader';
import axios from 'axios';

const props = defineProps({
    categories: Array,
});

const form = useForm({
    name: '',
    sku: '',
    description: '',
    category_id: '',
    cost_price: '',
    selling_price: '',
    stock_quantity: 0,
    minimum_stock: 0,
    unit: 'pcs',
    barcode: '',
    image: null,
    is_active: true,
});

const showScanner = ref(false);
const showCamera = ref(false);
const video = ref(null);
const canvas = ref(null);

const generateSku = () => {
    const prefix = 'PRD-';
    const uniqueId = Math.random().toString(36).substr(2, 9).toUpperCase();
    form.sku = `${prefix}${uniqueId}`;
};

onMounted(() => {
    generateSku();
});

const onDecode = async (data) => {
    const barcode = (typeof data === 'object' && data !== null) ? data.text : data;
    showScanner.value = false;

    if (!barcode) {
        alert('Could not read barcode.');
        return;
    }

    try {
        const response = await axios.post(route('products.checkBarcode'), { barcode });
        if (response.data.exists) {
            alert('A product with this barcode already exists.');
        } else {
            form.barcode = barcode;
            form.name = `Product with barcode ${barcode}`;
        }
    } catch (error) {
        console.error('Error checking barcode:', error);
        alert('Could not verify barcode. Please try again.');
    }
};

const openCamera = () => {
    showCamera.value = true;
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.value.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing camera: ", err);
        });
};

const captureImage = () => {
    const context = canvas.value.getContext('2d');
    context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
    canvas.value.toBlob(blob => {
        form.image = blob;
    });
    showCamera.value = false;
    const stream = video.value.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
};

const submit = () => {
    form.post(route('products.store'));
};
</script>

<template>
    <Head title="Create Product" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="text-xl font-semibold leading-tight text-gray-800">Add Product</h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <form @submit.prevent="submit">
                            <div>
                                <InputLabel for="name" value="Name" />
                                <TextInput id="name" type="text" class="block w-full mt-1" v-model="form.name" required autofocus autocomplete="name" />
                                <InputError class="mt-2" :message="form.errors.name" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="barcode" value="Barcode" />
                                <div class="flex items-center">
                                    <TextInput id="barcode" type="text" class="block w-full mt-1" v-model="form.barcode" />
                                    <button @click.prevent="showScanner = true" class="px-3 py-2 ml-2 text-white bg-blue-500 rounded">Scan</button>
                                </div>
                                <InputError class="mt-2" :message="form.errors.barcode" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="sku" value="SKU" />
                                <TextInput id="sku" type="text" class="block w-full mt-1 bg-gray-100" v-model="form.sku" required readonly />
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
                                    <TextInput id="cost_price" type="number" class="block w-full mt-1" v-model="form.cost_price" required />
                                    <InputError class="mt-2" :message="form.errors.cost_price" />
                                </div>

                                <div class="mt-4">
                                    <InputLabel for="selling_price" value="Selling Price" />
                                    <TextInput id="selling_price" type="number" class="block w-full mt-1" v-model="form.selling_price" required />
                                    <InputError class="mt-2" :message="form.errors.selling_price" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div class="mt-4">
                                    <InputLabel for="stock_quantity" value="Stock Quantity" />
                                    <TextInput id="stock_quantity" type="number" class="block w-full mt-1" v-model="form.stock_quantity" required />
                                    <InputError class="mt-2" :message="form.errors.stock_quantity" />
                                </div>

                                <div class="mt-4">
                                    <InputLabel for="minimum_stock" value="Minimum Stock" />
                                    <TextInput id="minimum_stock" type="number" class="block w-full mt-1" v-model="form.minimum_stock" required />
                                    <InputError class="mt-2" :message="form.errors.minimum_stock" />
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div class="mt-4">
                                    <InputLabel for="unit" value="Unit" />
                                    <TextInput id="unit" type="text" class="block w-full mt-1" v-model="form.unit" required />
                                    <InputError class="mt-2" :message="form.errors.unit" />
                                </div>

                            </div>

                            <div class="mt-4">
                                <InputLabel for="category_id" value="Category" />
                                <select id="category_id" class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" v-model="form.category_id" required>
                                    <option value="">Select a category</option>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                                </select>
                                <InputError class="mt-2" :message="form.errors.category_id" />
                            </div>

                            <div class="mt-4">
                                <InputLabel for="image" value="Image" />
                                <div class="flex items-center">
                                    <input id="image" type="file" class="block w-full mt-1" @input="form.image = $event.target.files[0]" />
                                    <button @click.prevent="openCamera" class="px-3 py-2 ml-2 text-white bg-blue-500 rounded">Capture</button>
                                </div>
                                <InputError class="mt-2" :message="form.errors.image" />
                            </div>

                            <div class="flex items-center mt-4">
                                <input id="is_active" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" v-model="form.is_active" checked>
                                <label for="is_active" class="block ml-2 text-sm text-gray-900">Is Active</label>
                            </div>

                            <div class="flex items-center justify-end mt-4">
                                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                    Create
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <Modal :show="showScanner" @close="showScanner = false">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Scan Barcode
                </h2>

                <div class="mt-6">
                    <StreamBarcodeReader @decode="onDecode" @loaded="() => console.log('loaded')"></StreamBarcodeReader>
                </div>

                <div class="flex justify-end mt-6">
                    <PrimaryButton @click="showScanner = false">
                        Cancel
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    </AuthenticatedLayout>

    <Modal :show="showCamera" @close="showCamera = false">
        <div class="p-6">
            <h2 class="text-lg font-medium text-gray-900">
                Capture Image
            </h2>

            <div class="mt-6">
                <video ref="video" autoplay playsinline class="w-full"></video>
                <canvas ref="canvas" class="hidden"></canvas>
            </div>

            <div class="flex justify-end mt-6">
                <PrimaryButton @click="captureImage">
                    Capture
                </PrimaryButton>
                <button @click="showCamera = false" class="px-3 py-2 ml-2 text-white bg-gray-500 rounded">
                    Cancel
                </button>
            </div>
        </div>
    </Modal>
</template>
