<template>
    <div class="robo-error-page">
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
