<template>
    <div class="robo-403-404">
        <div class="image" :class="'image-' + type"></div>
        <div class="text-block">
            <p class="title">{{ title }}</p>
            <p class="info">如有疑问，请联系管理员</p>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Robo403404 extends Vue {
    get type() {
        return this.$route.path === '/403' ? '403' : '404';
    }

    get title() {
        return this.type === '404' ? '页面不存在' : '暂无权限访问此页面';
    }
}
</script>

<style scoped lang="scss">
.robo-403-404 {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1d2127;

    .image {
        display: inline-block;
        width: 228px;
        height: 170px;

        &.image-403 {
            background: url('./images/403.png') no-repeat center;
            background-size: cover;
        }

        &.image-404 {
            background: url('./images/404.png') no-repeat center;
            background-size: cover;
        }
    }

    .text-block {
        display: inline-block;

        .title {
            font-size: 32px;
            color: #eceded;
            margin-bottom: 10px;
        }

        .info {
            font-size: 20px;
            color: #bfc7d4;
        }

        @media (max-width: 1280px) {
            .title {
                font-size: 20px;
                color: #eceded;
                margin-bottom: 10px;
            }

            .info {
                font-size: 14px;
                color: #bfc7d4;
            }
        }
    }
}
</style>
