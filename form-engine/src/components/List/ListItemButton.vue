<template>
    <button type="button" class="btn btn-primary" @click="handleClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { inject } from "vue";

const props = defineProps<{
    label: string;
    action: string;
    target?: string;
}>();

const list = inject("list");
const uuid = inject("uuid");

function handleClick() {
    switch (props.action) {
        case "insert-before":
            list.insertBefore(uuid);
            break;
        default:
        case "insert":
        case "insert-after":
            list.insertAfter(uuid);
            break;
        case "delete":
            list.delete(uuid);
            break;
    }
}
</script>
