<template>
    <div class="mb-3">
        <label class="form-label">{{ label }}</label>
        <input
            type="text"
            class="form-control"
            :value="state.value"
            :disabled="state.isDisabled"
            @input="(event) => form.handleInput(name, event.target.value)"
        />
        <div class="form-text">The Fields value: {{ state.value }}</div>
    </div>
</template>

<script setup>
const props = defineProps(["label", "name", "fieldDefinition"]);

const form = inject("form");
form.registerField(props.name, props.fieldDefinition);

const state = form.useFieldState(props.name);
</script>
