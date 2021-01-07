<template>
    <div id="app">
        <el-container class="root-container">
            <el-aside class="root-aside" width="auto">
                <div class="aside-header">
                    <robo-symbol-icon
                        class="collapse-icon"
                        href="icon-view-headline"
                        @click.native="isCollapsed = !isCollapsed"
                    />
                </div>
                <el-menu
                    class="layout-aside-menu"
                    :router="true"
                    :collapse="isCollapsed"
                    :default-active="$route.path"
                    :unique-opened="false"
                >
                    <template v-for="menu in menus">
                        <el-submenu :key="menu.path" :index="menu.path">
                            <template slot="title">
                                <robo-symbol-icon :href="menu.icon" />
                                <span slot="title">{{ menu.title }}</span>
                            </template>
                            <el-menu-item
                                v-for="item in menu.children"
                                :key="getItemPath(menu.path, item.path)"
                                :index="getItemPath(menu.path, item.path)"
                            >
                                <span>{{ item.title }}</span>
                            </el-menu-item>
                        </el-submenu>
                    </template>
                    <el-menu-item index="/404">
                        <robo-symbol-icon href="icon-storage" />
                        <span>404</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main class="layout-main">
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {PAGE_CONFIGS} from '@/config';

@Component
export default class App extends Vue {
    isCollapsed: boolean = false;

    menus = PAGE_CONFIGS;

    getItemPath(parentPath: string, childPath: string) {
        return `${parentPath}/${childPath}`;
    }
}
</script>

<style lang="scss">
html,
body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-size: 14px;
}

#app {
    font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    color: #344156;
    height: 100%;
    min-width: 1440px;
    font-weight: normal;
    background: #fff;
}

.root-container {
    height: 100%;

    .root-aside {
        background: #18182a;
    }

    .aside-header {
        position: relative;
        height: 48px;
        line-height: 48px;
        background: inherit;
        border-bottom: 1px solid #232342;

        .collapse-icon {
            margin-left: 20px;
            color: #7f7f91;
            font-size: 20px;
        }
    }

    .layout-aside-menu {
        &:not(.el-menu--collapse) {
            width: 208px;
        }
    }
}

input::-webkit-credentials-auto-fill-button {
    display: none !important;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    right: 0;
}

input:focus::-webkit-contacts-auto-fill-button {
    opacity: 0;
}

// 滚动条样式
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    width: 6px;
    height: 6px;
    background: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #484b56;
}
</style>
