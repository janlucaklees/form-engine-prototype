<template>
    <div class="container py-5">
        <header class="text-center py-5 mb-5">
            <h1 class="display-4">Welcome to my Form-Engine!</h1>
        </header>

        <main>
            <header class="mb-5">
                <h2>Let's get through this Form Parkour 💪</h2>
            </header>

            <section class="card mb-5">
                <div class="card-body">
                    <h5 class="card-title mb-4">
                        First let's make this Field change it's value
                    </h5>

                    <Form>
                        <Input
                            label="My first Input"
                            name="change-value"
                            :fieldDefinition="new TextField()"
                        />
                    </Form>
                </div>
            </section>

            <!-- <section class="card">
                <div class="card-body">
                    <h5 class="card-title mb-4">Can we integrate Selects?</h5>

                    <Form>
                        <Input label="My first Input" name="change-value" />
                        <Input label="My first Input" name="change-value" />
                    </Form>
                </div>
            </section> -->

            <section class="card">
                <div class="card-body">
                    <h5 class="card-title mb-4">
                        Now let's hide another field depending on the input
                    </h5>

                    <Form>
                        <Input
                            label="Type 'foo'"
                            name="foo"
                            :fieldDefinition="new TextField()"
                        />
                        <Input
                            label="I hide on 'foo'"
                            name="bar"
                            :fieldDefinition="new BarField()"
                        />
                    </Form>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import { Form, Input } from "form-engine";

import TextField from "~/field-definitions/TextField.ts";
import BarField from "~/field-definitions/BarField.ts";
</script>
