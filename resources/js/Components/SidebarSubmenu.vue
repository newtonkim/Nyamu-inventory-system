<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: String,
    active: {
        type: Boolean,
        default: false,
    },
});

const isOpen = ref(props.active);
</script>

<template>
    <div>
        <button @click="isOpen = !isOpen" class="flex items-center justify-between w-full px-4 py-2 text-gray-400 rounded-md hover:bg-gray-700">
            <span class="flex items-center">
                <slot name="icon" />
                <span class="mx-4">{{ title }}</span>
            </span>
            <svg class="w-4 h-4 transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div v-if="isOpen" class="mt-2">
            <slot />
        </div>
    </div>
</template>
