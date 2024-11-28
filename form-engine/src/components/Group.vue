<template>
    <section class="border rounded p-3 mb-4">
        <header>
            <h4>{{ label }}</h4>
        </header>

        <slot />
    </section>
</template>

<script setup>
import Node from "../core/Node";

// Define props
const props = defineProps({
    label: { type: String, required: true },
    name: { type: String, required: true },
});

// Get the form object form the context.
const form = inject("form");

const group = new Node(props.name, form);
form.registerChildNode(props.name, group);

provide("form", group);
</script>
