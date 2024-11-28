<template>
    <form>
        <slot />
    </form>
</template>

<script setup>
import Node from "../core/Node";

const props = defineProps(["name"]);

const form = new Node(props.name);

provide("form", form);
</script>
