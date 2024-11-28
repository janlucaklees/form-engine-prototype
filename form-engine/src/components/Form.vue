<template>
    <form>
        <slot />
    </form>
</template>

<script setup>
import Node from "../core/Node";

// Define Properties
const props = defineProps(["name"]);

// Create and provide the form Node to all direct children.
const form = new Node(props.name);
provide("form", form);
</script>
