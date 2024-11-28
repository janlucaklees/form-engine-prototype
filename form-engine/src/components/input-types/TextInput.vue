<template>
    <div class="mb-3">
        <label class="form-label">{{ label }}</label>
        <input
            type="text"
            class="form-control"
            :class="{
                'is-valid': state.isUserValid === 'valid',
                'is-invalid': state.isUserValid === 'invalid',
            }"
            :value="state.value"
            :disabled="state.isDisabled"
            @blur="$emit('blur', event)"
            @focus="$emit('focus', event)"
        />
        <div class="form-text">value: {{ state.value }}</div>
        <div class="form-text">hasFocus: {{ state.hasFocus }}</div>
        <div class="form-text">wasTouched: {{ state.wasTouched }}</div>
        <div class="form-text">wasValid: {{ state.wasValid }}</div>
        <div class="form-text">showValidation: {{ state.showValidation }}</div>
        <div class="form-text">isValid: {{ state.isValid }}</div>
        <div class="form-text">isUserValid: {{ state.isUserValid }}</div>

        <template
            v-if="state.showValidation"
            v-for="message in state.validationMessages"
        >
            <div class="form-text text-danger">{{ message }}</div>
        </template>
    </div>
</template>

<script setup>
const props = defineProps({
    label: { type: String, required: true },
    state: { type: Object, required: true },
});
</script>
