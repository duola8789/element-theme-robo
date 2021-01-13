<template>
    <el-popover
        placement="bottom"
        :width="width"
        trigger="click"
        transition="el-zoom-in-top"
        popper-class="robo-simple-multi-popper"
        @show="isInputActive = true"
        @hide="isInputActive = false"
    >
        <div
            slot="reference"
            class="robo-simple-multi-reference"
            :class="isInputActive ? 'is-active' : ''"
            :style="{width: width + 'px'}"
        >
            <span class="robo-simple-multi-title">{{ title }}</span>
            <div class="robo-simple-multi-input">
                <div v-if="inputValue" class="input-value-container">
                    <p v-if="isSelectAll" class="input-value-all">{{ inputValue }}</p>
                    <p v-else class="input-value">
                        <span>已选择</span>
                        <span class="input-value-count">{{ inputValue }}</span>
                        <span>项</span>
                    </p>
                    <i class="el-icon-circle-close" @click.stop="onReset"></i>
                </div>
                <span v-else class="placeholder">{{ placeholder }}</span>
            </div>
            <i class="robo-simple-multi-select-icon el-icon-arrow-up"></i>
        </div>
        <div class="robo-simple-multi-content">
            <div class="select-all">
                <robo-select-all :value.sync="isSelectAll" :show-save-btn="false" @clear="onClear" />
            </div>
            <el-checkbox-group v-model="selectedList">
                <ul class="options-list">
                    <li v-for="option in options" :key="option.value" class="option-item">
                        <el-checkbox :label="option.value">
                            {{ option.label }}
                        </el-checkbox>
                    </li>
                </ul>
            </el-checkbox-group>
        </div>
    </el-popover>
</template>

<script lang="ts">
import {Component, Vue, Prop, Emit, Watch} from 'vue-property-decorator';

import RoboSelectAll from '@/components/robo-select-all/index.vue';

@Component({
    components: {RoboSelectAll}
})
export default class RoboSimpleMultiSelect extends Vue {
    @Prop({type: Array, required: true}) options!: {value: any; label: string}[];
    @Prop({type: String}) optionKey!: string[];
    @Prop({type: Array, required: true}) value!: Array<string | number>;
    @Prop({type: Number, default: 280}) width!: string;
    @Prop({type: String, default: '标题名称'}) title!: string;
    @Prop({type: String, default: '请选择'}) placeholder!: string;

    get selectedList() {
        return [...this.value];
    }
    set selectedList(newVal: Array<string | number>) {
        this.emitUpdate(newVal);
        this.emitChange(newVal);
    }

    isInputActive = false;

    get inputValue() {
        if (this.isSelectAll) {
            return '已全选';
        }
        return this.selectedList.length;
    }

    get isSelectAll() {
        return this.options.length === this.selectedList.length;
    }
    set isSelectAll(isSelectAll: boolean) {
        this.selectedList = isSelectAll ? this.options.map((v) => v.value) : [];
    }

    onClear() {
        this.selectedList = [];
    }

    @Emit('update:value')
    emitUpdate(newVal: Array<string | number>) {
        return newVal;
    }

    @Emit('change')
    emitChange(newVal: Array<string | number>) {
        return newVal;
    }

    onReset() {
        this.isSelectAll = false;
    }
}
</script>

<style lang="scss">
.robo-simple-multi {
    &-reference {
        display: inline-flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #edf1f6;
        border-radius: 4px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;

        &:hover {
            border-color: #9fafc3;
        }

        &.is-active {
            border-color: #1f66ff;

            .robo-simple-multi-select-icon {
                transform: rotateZ(0);
            }
        }
    }

    &-input {
        flex: 1;
        position: relative;

        .input-value-container {
            display: flex;
            align-items: center;
            color: #344156;
        }

        .input-value-all {
            color: #1f66ff;
            margin-right: 8px;
        }

        .input-value {
            display: flex;
            align-items: center;
            margin-right: 8px;

            .input-value-count {
                color: #1f66ff;
                margin: 0 5px;
            }

            span {
                vertical-align: middle;
            }
        }

        .placeholder {
            color: #9fafc3;
        }

        .el-icon-circle-close {
            position: relative;
            z-index: 2;
            width: 16px;
            height: 16px;
            margin-left: 6px;
            margin-top: 2px;
            color: #9fafc3;
        }
    }

    &-title {
        flex: 0 0 auto;
        margin-right: 8px;
        color: #6e768e;
    }

    &-select-icon {
        color: #344156;
        font-size: 14px;
        transition: transform 0.3s;
        transform: rotateZ(180deg);
        cursor: pointer;
    }

    &-content {
        font-size: 14px;
        color: #6e768e;

        .select-all {
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            border-bottom: 1px solid #edf1f6;
        }

        .option-item {
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            cursor: pointer;

            .el-checkbox {
                width: 100%;
            }

            &:hover {
                background: #fbfcfe;
            }
        }
    }

    &-popper {
        &.el-popper.el-popover {
            padding: 4px 0;
            max-height: 256px;
            overflow-y: auto;
            margin-top: 1px;
            background: #fff;
            box-shadow: 0 2px 8px 0 #dcdee0;
            border-radius: 4px;

            .popper__arrow {
                display: none;
            }

            // 滚动条样式
            &::-webkit-scrollbar {
                width: 6px;
                height: 6px;
                cursor: pointer;
            }

            &::-webkit-scrollbar-track {
                width: 6px;
                height: 6px;
                background: transparent;
            }

            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: transparent;
            }

            &:hover {
                &::-webkit-scrollbar-thumb {
                    background-color: rgba(144, 147, 153, 0.5);
                }
            }
        }
    }
}
</style>
