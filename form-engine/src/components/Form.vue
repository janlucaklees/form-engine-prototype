<template>
    <form>
        <slot />
    </form>
</template>

<script setup>
import { onMounted } from "vue";
import Node from "../core/Node";

// Define Properties
const props = defineProps(["name"]);

// Create and provide the form Node to all direct children.
const form = new Node(props.name);
provide("form", form);

// React to the onMounted hook from Vue and trigger form initialization
onMounted(() => {
    form.callOnMountedHook();
});
</script>
