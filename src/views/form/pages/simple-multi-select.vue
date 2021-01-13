<template>
    <div class="page-container">
        <el-card header="Robo Simple Multi Select（含标题 - 支持多选）">
            <robo-simple-multi-select :options="options" :value.sync="value" />
            <p class="select-content">我要吃：{{ food }}</p>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

import RoboSimpleMultiSelect from '@/components/robo-simple-multi-select/index.vue';

@Component({
    components: {RoboSimpleMultiSelect}
})
export default class ButtonPage extends Vue {
    @Prop({type: Number, default: 280}) width!: string;
    @Prop({type: String, default: '标题名称'}) title!: string;

    value = ['选项1', '选项2', '选项3', '选项4', '选项5'];

    options = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    get food() {
        return this.value.map((v) => this.options.find((option) => option.value === v)!.label).join(', ');
    }
}
</script>

<style lang="scss">
.page-container {
    .select-content {
        margin-top: 16px;
    }
}
</style>
