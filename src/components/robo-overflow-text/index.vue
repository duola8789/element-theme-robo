<template>
    <div class="robo-overflow-text-container">
        <div v-if="!isOverflow" ref="content" class="robo-normal-text">
            <i :class="icon"></i>
            <span>{{ content }}</span>
        </div>
        <el-popover
            v-else
            :trigger="trigger"
            :placement="placement"
            :popper-class="innerPopperClass"
            :open-delay="100"
            class="robo-overflow-text-popover"
        >
            <p>{{ content }}</p>
            <div slot="reference" class="robo-overflow-text">
                <i :class="icon"></i>
                <span>{{ content }}</span>
            </div>
        </el-popover>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch, Ref} from 'vue-property-decorator';

@Component
export default class RoboOverflowText extends Vue {
    @Prop({default: false, type: Boolean}) readonly force!: boolean;
    @Prop({default: true, type: Boolean}) readonly isSingleLine!: boolean;
    @Prop({default: 'hover', type: String}) readonly trigger!: string;
    @Prop({default: 'top', type: String}) readonly placement!: string;
    @Prop({required: true, type: String}) readonly content!: string;
    @Prop({default: 1, type: Number}) readonly linesCount!: number;
    @Prop({default: '', type: String}) readonly popperClass!: string;
    @Prop({default: '', type: String}) readonly icon!: string;

    @Ref('content') readonly contentEl!: HTMLElement;

    isOverflow = false;

    get innerPopperClass() {
        if (this.popperClass) {
            return this.popperClass;
        }
        return 'robo-overflow-default-popper-class';
    }

    // 判断元素的 clientWidth 是否小于 scrollWidth，是的话说明溢出，需要剪切
    @Watch('content', {immediate: true})
    onContentChange(newVal: string, oldVal: string) {
        if (newVal !== oldVal) {
            this.isOverflow = false;
            setTimeout(() => {
                this.isOverflow = this.contentEl.clientWidth < this.contentEl.scrollWidth;
            });
        }
    }
}
</script>

<style scoped lang="scss">
.robo-overflow-text-container {
    .robo-overflow-text-popover {
        .robo-overflow-text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            transition: color linear 0.2s;
        }
    }
}
</style>
