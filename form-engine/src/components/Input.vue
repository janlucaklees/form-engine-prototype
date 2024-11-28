<template>
    <div class="mb-3">
        <label class="form-label">{{ label }}</label>
        <input
            type="text"
            class="form-control"
            :class="{
                'is-valid': data.state.isUserValid === 'valid',
                'is-invalid': data.state.isUserValid === 'invalid',
            }"
            :value="data.state.value"
            :disabled="data.state.isDisabled"
            @input="(event) => fieldDefinition.handleInput(event.target.value)"
            @blur="(event) => fieldDefinition.handleBlur()"
            @focus="(event) => fieldDefinition.handleFocus()"
        />
        <div class="form-text">value: {{ data.state.value }}</div>
        <div class="form-text">hasFocus: {{ data.state.hasFocus }}</div>
        <div class="form-text">wasTouched: {{ data.state.wasTouched }}</div>
        <div class="form-text">
            showValidation: {{ data.state.showValidation }}
        </div>
        <div class="form-text">isValid: {{ data.state.isValid }}</div>
        <div class="form-text">isUserValid: {{ data.state.isUserValid }}</div>

        <template
            v-if="data.state.showValidation"
            v-for="message in data.state.validationMessages"
        >
            <div class="form-text text-danger">{{ message }}</div>
        </template>
    </div>
</template>

<script setup>
import { reactive } from "vue";
const props = defineProps(["label", "name", "fieldDefinition"]);

const form = inject("form");
form.registerField(props.name, props.fieldDefinition);

let data = reactive({
    state: {},
});
form.onMounted(() => {
    props.fieldDefinition.init();
    data.state = props.fieldDefinition.useFieldState();
});
</script>
