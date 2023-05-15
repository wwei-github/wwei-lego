<template>
    <div class="component-item-box">
        <slot ></slot>
    </div>
</template>

<script setup lang="ts">
</script> 
<style scoped>
.component-item-box{
    position: relative;
    border: 1px solid transparent;

}
.component-item-box:hover{
    border-style: dashed;
    border-color: aqua;
}
.active{
    border-style: solid !important;
    border-color: #f45146 !important
}
</style>
