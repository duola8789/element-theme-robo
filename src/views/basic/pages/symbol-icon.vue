<template>
    <div class="page-container">
        <el-card header="使用Symbol方式引入阿里的IconFont">
            <robo-symbol-icon href="icon-thumb-up" />
        </el-card>
        <el-card header="加载失败时会展示默认图标">
            <robo-symbol-icon href="icon-thumb-up123" />
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class SymbolIconPage extends Vue {}
</script>
