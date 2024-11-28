<template>
    <div class="container py-5">
        <h1 class="mb-3">Configurator</h1>
        <Form name="configurator">
            <Group label="Step 1" name="step-1">
                <Input
                    label="Name"
                    name="name"
                    :fieldDefinition="new NameField()"
                />
            </Group>
        </Form>
    </div>
</template>

<script setup>
import { Form, Group, Input } from "form-engine";

import NameField from "../fields/configurator/NameField";
</script>
