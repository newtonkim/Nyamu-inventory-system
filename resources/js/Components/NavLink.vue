<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'flex items-center px-4 py-2 text-gray-100 bg-gray-700 rounded-md'
        : 'flex items-center px-4 py-2 text-gray-400 rounded-md hover:bg-gray-700'
);
</script>

<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>
