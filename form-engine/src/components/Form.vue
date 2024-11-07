<template>
    <form>
        <slot />
    </form>
</template>

<script setup>
import Form from "../Form";

const form = new Form();

provide("form", form);
</script>
