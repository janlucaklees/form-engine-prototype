<template>
    <section class="border rounded p-3 mb-4">
        <header>
            <h4>{{ label }}</h4>
        </header>

        <template v-for="index in [0, 1, 2]">
            <Group
                :name="`${name}_${index}`"
                :label="`${label} Child ${index + 1}`"
            >
                <slot />
            </Group>
        </template>
    </section>
</template>

<script setup>
import Node from "../core/Node";
import Group from "./Group";

const props = defineProps(["label", "name"]);

// Get the form object form the context.
const form = inject("form");

const list = new Node(props.name, form);
form.registerChildNode(props.name, list);

provide("form", list);
</script>
