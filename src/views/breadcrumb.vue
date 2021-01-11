<template>
    <div class="container">
        <robo-breadcrumb :route="false" :path-list="pathList" />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import RoboBreadcrumb from '@/components/robo-breadcrumb/index.vue';

@Component({
    components: {RoboBreadcrumb}
})
export default class Breadcrumb extends Vue {
    pathList = [
        {path: '/', title: '一级页面'},
        {path: '/', title: '二级页面'}
    ];
}
</script>
