<template>
    <component
        :is="TextInput"
        :label="label"
        :state="data.state"
        @input="(event) => fieldDefinition.handleInput(event.target.value)"
        @blur="(event) => fieldDefinition.handleBlur()"
        @focus="(event) => fieldDefinition.handleFocus()"
    />
</template>

<script setup>
import { reactive } from "vue";
import TextInput from "./input-types/TextInput";

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
