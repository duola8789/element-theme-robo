<template>
    <div class="button-page-container">
        <el-card class="card-item">
            <p slot="header">基础用法</p>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
        </el-card>
        <el-card>
            <p slot="header">图标按钮</p>
            <el-button>
                <i class="el-icon-search"></i>
                <span>搜索</span>
            </el-button>
            <el-button>
                <robo-symbol-icon href="icon-computer" />
                <span>个人工作台</span>
            </el-button>
            <el-button type="primary">
                <robo-symbol-icon href="icon-computer" />
                <span>个人工作台</span>
            </el-button>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class ButtonPage extends Vue {}
</script>

<style scoped lang="scss">
.button-page-container {
    .card-item {
        margin-bottom: 16px;
    }
}
</style>
