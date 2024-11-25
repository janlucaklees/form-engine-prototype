<template>
    <section class="border rounded p-3 mb-4">
        <header>
            <h4>{{ label }}</h4>
        </header>

        <template v-for="(item, index) in items" :key="item">
            <ListItem
                :uuid="item"
                :name="`${name}_${index}`"
                :label="`${label} Child ${index + 1}`"
            >
                <slot />
            </ListItem>
        </template>
    </section>
</template>

<script setup lang="ts">
import ListNode from "../core/ListNode";
import Group from "./Group";
import ListItem from "./List/ListItem";

const props = defineProps(["label", "name"]);

// Get the form object form the context.
const form = inject("form");

const list = new ListNode(props.name, form);
form.registerChildNode(props.name, list);

provide("form", list);
provide("list", list);

const items = list.useItems();
</script>
