<template>
    <Group :init="true">
        <slot />
    </Group>
</template>

<script setup>
import Group from "../Group";

const props = defineProps(["uuid"]);

provide("uuid", props.uuid);
</script>
