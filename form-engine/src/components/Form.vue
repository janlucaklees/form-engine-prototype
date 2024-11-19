<template>
    <form>
        <slot />
    </form>
</template>

<script setup>
import Node from "../core/Node";

const form = new Node();

provide("form", form);
</script>
