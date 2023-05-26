<template>
    <div class="container">
        <input type="color" :value="currentColor" @change="changeColor"/>{{currentColor}}
        <div class="colors-list">
            <div v-for="(item,index) in colorLists" :key="index" :style="{backgroundColor: item}" @click="clickColor(item)"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const colorLists = ["#FFB6C1", "#DC143C", "#DA70D6", "#BA55D3", "#4169E1", "#1E90FF", "#00BFFF", "#00FA9A"]
const emit = defineEmits(['changeColor'])
defineProps<{
  currentColor:string
}>()
function changeColor(e:any) {
    emit('changeColor',e.target.value)
}
function clickColor(color: string) {
    emit('changeColor',color)
}
</script> 
<style scoped>
.container{
    display: flex;
    align-items: center;
}
.colors-list{
    display:grid;
    margin-left: 10px;
    gap: 2px;
    grid-template-columns: repeat(4,1fr);
}
.colors-list>div{
    width: 15px;
    height: 15px;
    cursor: pointer;
}
</style>
