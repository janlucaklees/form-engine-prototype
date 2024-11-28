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

                    <Form name="form-1">
                        <Input
                            label="My first Input"
                            name="change-value"
                            :fieldDefinition="new BaseFieldDefinition()"
                        />
                    </Form>
                </div>
            </section>

            <section class="card mb-5">
                <div class="card-body">
                    <h5 class="card-title mb-4">
                        Now let's hide another field depending on the input
                    </h5>

                    <Form name="form-2">
                        <Input
                            label="Type 'foo'"
                            name="foo"
                            :fieldDefinition="new BaseFieldDefinition()"
                        />
                        <Input
                            label="I disable on 'foo'"
                            name="bar"
                            :fieldDefinition="
                                new DisableOnFooFieldDefinition('/foo')
                            "
                        />
                    </Form>
                </div>
            </section>

            <section class="card mb-5">
                <div class="card-body">
                    <h5 class="card-title mb-4">
                        Now let's do it in a group, so we can have multiple
                        fields with the same name
                    </h5>

                    <Form name="form-3">
                        <Group name="first-group" label="First Group">
                            <div class="border rounded p-3 mb-3">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <Input
                                            label="Type 'foo'"
                                            name="foo"
                                            :fieldDefinition="
                                                new BaseFieldDefinition()
                                            "
                                        />
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <Input
                                            label="I disable on 'foo'"
                                            name="bar"
                                            :fieldDefinition="
                                                new DisableOnFooFieldDefinition(
                                                    '/first-group/foo',
                                                )
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </Group>
                        <Group name="second-group" label="Second Group">
                            <div class="border rounded p-3 mb-3">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <Input
                                            label="Type 'foo'"
                                            name="foo"
                                            :fieldDefinition="
                                                new BaseFieldDefinition()
                                            "
                                        />
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <Input
                                            label="I disable on 'foo'"
                                            name="bar"
                                            :fieldDefinition="
                                                new DisableOnFooFieldDefinition(
                                                    '/second-group/foo',
                                                )
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </Group>
                    </Form>
                </div>
            </section>

            <section class="card mb-5">
                <div class="card-body">
                    <h5 class="card-title mb-4">
                        Disable a field that is inside a group, with the other
                        field being outside the group
                    </h5>

                    <Form name="form-4a">
                        <Input
                            label="Type 'foo'"
                            name="foo"
                            :fieldDefinition="new BaseFieldDefinition()"
                        />
                        <Group name="group" label="Group">
                            <Input
                                label="I disable on 'foo'"
                                name="bar"
                                :fieldDefinition="
                                    new DisableOnFooFieldDefinition('/foo')
                                "
                            />
                        </Group>
                    </Form>
                </div>
            </section>

            <section class="card mb-5">
                <div class="card-body">
                    <h5 class="card-title mb-4">Now the other way around!</h5>

                    <Form name="form-4b">
                        <Group name="group" label="Group">
                            <Input
                                label="Type 'foo'"
                                name="foo"
                                :fieldDefinition="new BaseFieldDefinition()"
                            />
                        </Group>
                        <Input
                            label="I disable on 'foo'"
                            name="bar"
                            :fieldDefinition="
                                new DisableOnFooFieldDefinition('/group/foo')
                            "
                        />
                    </Form>
                </div>
            </section>

            <section class="card mb-5">
                <div class="card-body">
                    <h5 class="card-title mb-4">How about a list?</h5>

                    <Form name="form-5">
                        <ListButton
                            action="prepend"
                            label="Prepend Absolute Path"
                            target="/list"
                        />
                        <List name="list" label="List">
                            <div class="row">
                                <div class="col-12 col-md-4">
                                    <Input
                                        label="Type 'foo'"
                                        name="foo"
                                        :fieldDefinition="
                                            new BaseFieldDefinition()
                                        "
                                    />
                                </div>
                                <div class="col-12 col-md-4">
                                    <Input
                                        label="I disable on 'foo'"
                                        name="bar"
                                        :fieldDefinition="
                                            new DisableOnFooFieldDefinition(
                                                './foo',
                                            )
                                        "
                                    />
                                </div>
                                <div class="col-12 col-md-2 d-flex flex-column">
                                    <ListItemButton
                                        action="insert-before"
                                        label="Insert Before"
                                    />
                                    <ListItemButton
                                        action="insert"
                                        label="Insert After"
                                    />
                                    <ListItemButton
                                        action="insert-after"
                                        label="Insert After"
                                    />
                                    <ListItemButton
                                        action="delete"
                                        label="Remove"
                                    />
                                </div>
                            </div>
                        </List>
                        <ListButton
                            action="append"
                            label="Append Absolute Path"
                            target="/list"
                        />
                    </Form>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup>
import {
    Form,
    Group,
    List,
    ListButton,
    ListItemButton,
    BaseFieldDefinition,
    Input,
} from "form-engine";

import DisableOnFooFieldDefinition from "~/fields/DisableOnFooFieldDefinition.ts";
</script>
