<template>
    <el-menu
        class="layout-aside-menu"
        :router="true"
        :collapse="isCollapsed"
        :default-active="defaultActive"
        :unique-opened="false"
    >
        <template v-for="menu in menus">
            <!-- 有子菜单 -->
            <template v-if="menu.children && menu.children.length > 0">
                <el-submenu :key="menu.path" :index="menu.path">
                    <template slot="title">
                        <robo-symbol-icon :href="menu.icon || defaultIcon" />
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
            <!-- 没有子菜单 -->
            <template v-else>
                <el-menu-item :key="menu.path" :index="menu.path">
                    <robo-symbol-icon :href="menu.icon || defaultIcon" />
                    <span slot="title">{{ menu.title }}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>

<script lang="ts">
// 导航组件，目前只支持二级路由，如果需要三级路由并展开对应的导航菜单，需要在路由配置时向 meta 中添加以下属性
// {
//     openMenu: true; // 打开父级导航
// }
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {TypeMenuConfig} from './types';

const DEFAULT_ICON: string = 'icon-sentiment-very-dissa';

@Component
export default class RoboAsideNavMenu extends Vue {
    @Prop({type: Boolean, required: true}) readonly isCollapsed!: boolean;
    @Prop({type: Array, required: true}) readonly menus!: TypeMenuConfig[];

    defaultIcon: string = DEFAULT_ICON;
    defaultActive = '';

    getItemPath(parentPath: string, childPath: string) {
        return `${parentPath}${childPath.startsWith('/') ? childPath : '/' + childPath}`;
    }

    @Watch('$route.path', {immediate: true})
    onRouteChange() {
        const openMenu = this.$route.meta && this.$route.meta.openMenu;
        this.defaultActive = openMenu
            ? this.$route.path
                  .split('/')
                  .slice(0, 3)
                  .join('/')
            : this.$route.path;
    }
}
</script>

<style lang="scss">
.layout-aside-menu {
    &:not(.el-menu--collapse) {
        width: 208px;
    }
}
</style>
