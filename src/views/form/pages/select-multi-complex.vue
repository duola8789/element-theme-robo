<template>
    <div class="page-container">
        <el-card header="使用缓存 - 传入一个由 cacheKey 组成的数组">
            <robo-select-multi-complex title="又吃又玩" :cache-config="cacheConfig1" :value.sync="value1" />
            <p class="select-content">我要吃：{{ food1 }}</p>
            <p class="select-content">我要玩：{{ sport1 }}</p>
        </el-card>
        <el-card header="使用缓存 - 传入一个由 configItem 组成的数组">
            <robo-select-multi-complex title="又吃又玩" :cache-config="cacheConfig2" :value.sync="value2" />
            <p class="select-content">我要吃：{{ food2 }}</p>
            <p class="select-content">我要玩：{{ sport2 }}</p>
        </el-card>
        <el-card header="不使用缓存 - 传入一个由 configItem 组成的数组，并传入具体的 options">
            <robo-select-multi-complex title="又吃又玩" :cache-config="cacheConfig3" :value.sync="value3" />
            <p class="select-content">我要吃：{{ food3 }}</p>
            <p class="select-content">我要玩：{{ sport3 }}</p>
        </el-card>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';
import RoboSelectMultiComplex from '@/components/robo-select-multi-complex/index.vue';
import {getFoodToEat} from '@/utils';

@Component({
    components: {RoboSelectMultiComplex}
})
export default class SelectMultiComplex extends Vue {
    @Prop({type: Number, default: 280}) width!: string;
    @Prop({type: String, default: '标题名称'}) title!: string;

    cacheConfig1 = ['recipe', 'sport'];
    cacheConfig2 = [{cacheKey: 'recipe', groupTitle: 'Hello'}, {cacheKey: 'sport'}];
    cacheConfig3 = [
        {
            cacheKey: 'recipe',
            groupTitle: '嘻嘻嘻',
            options: [
                {value: '选项1', label: '啦啦啦'},
                {value: '选项2', label: '呜呜呜'}
            ]
        },
        {
            cacheKey: 'sport',
            groupTitle: '哈哈哈',
            options: [
                {value: '选项1', label: '嘎嘎嘎'},
                {value: '选项2', label: '呼呼呼'}
            ]
        }
    ];

    value1 = {recipe: [], sport: []};
    value2 = {
        recipe: ['选项1', '选项2', '选项3', '选项4', '选项5'],
        sport: ['选项1', '选项2']
    };
    value3 = {recipe: [], sport: []};

    options1 = [
        {value: '选项1', label: '黄金糕'},
        {value: '选项2', label: '双皮奶'},
        {value: '选项3', label: '蚵仔煎'},
        {value: '选项4', label: '龙须面'},
        {value: '选项5', label: '北京烤鸭'}
    ];

    options2 = [
        {value: '选项1', label: '跑步'},
        {value: '选项2', label: '打球'}
    ];

    options3 = [
        {value: '选项1', label: '啦啦啦'},
        {value: '选项2', label: '呜呜呜'}
    ];

    options4 = [
        {value: '选项1', label: '嘎嘎嘎'},
        {value: '选项2', label: '呼呼呼'}
    ];

    get food1() {
        return getFoodToEat(this.value1.recipe, this.options1);
    }

    get food2() {
        return getFoodToEat(this.value2.recipe, this.options1);
    }

    get food3() {
        return getFoodToEat(this.value3.recipe, this.options3);
    }

    get sport1() {
        return getFoodToEat(this.value1.sport, this.options2);
    }

    get sport2() {
        return getFoodToEat(this.value2.sport, this.options2);
    }
    get sport3() {
        return getFoodToEat(this.value3.sport, this.options4);
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
