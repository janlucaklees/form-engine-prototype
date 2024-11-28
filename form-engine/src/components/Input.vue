<template>
    <div class="mb-3">
        <label class="form-label">{{ label }}</label>
        <input
            type="text"
            class="form-control"
            :value="data.state.value"
            :disabled="data.state.isDisabled"
            @input="(event) => fieldDefinition.handleInput(event.target.value)"
        />
        <div class="form-text">The Fields value: {{ data.state.value }}</div>
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
