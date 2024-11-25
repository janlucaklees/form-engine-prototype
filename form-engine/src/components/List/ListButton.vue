<template>
    <button type="button" class="btn btn-primary" @click="handleClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import ListNode from "../../core/ListNode";

const props = defineProps<{
    label: string;
    action: string;
    target: string;
}>();

const form = inject("form");

function handleClick() {
    const list = getListNode();

    switch (props.action) {
        case "append":
            list.append();
            break;
        case "prepend":
            list.prepend();
            break;
    }
}

function getListNode() {
    let listNode = form.resolveNodeByPath(props.target);

    if (!listNode || !(listNode instanceof ListNode)) {
        throw new Error("Could not determine associated list!");
    }

    return listNode;
}
</script>
