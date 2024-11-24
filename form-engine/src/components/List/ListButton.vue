<template>
    <button type="button" class="btn btn-primary" @click="handleClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import Node from "../../core/Node";
import ListNode from "../../core/ListNode";

const props = defineProps(["label", "target", "action"]);

// Get the form object form the context.
const parentNode: Node = inject("form");

const list = findListNode();

function handleClick() {
    switch (props.action) {
        default:
        case "append":
            list.append();
            break;
        case "delete":
            list.delete();
            break;
    }
}

function findListNode(): ListNode {
    let listNode = parentNode;

    if (props.target && parentNode.hasChildNode(props.target)) {
        listNode = parentNode.getChildNode(props.target);
    }

    while (
        listNode &&
        !(listNode instanceof ListNode) &&
        (!props.target || listNode.getName() === props.target)
    ) {
        listNode = listNode.getParentNode();
    }

    if (!listNode) {
        throw new Error("Could not determine associated list!");
    }

    return listNode;
}
</script>
