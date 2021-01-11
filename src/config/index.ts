/**
 * 非开发模式路由懒加载
 * @param componentPath `./src/views`下的文件名
 */
import {RouteConfig} from 'vue-router';
import {getRouteConfigHelper, getMenuConfigHelper} from '@/config/helper';
import {TypePageConfig, TypeMenuConfig} from '@/config/types';

export const PAGE_CONFIGS: TypePageConfig[] = [
    {
        path: '/home',
        menuTitle: 'Home',
        menuIcon: 'icon-home',
        componentPath: 'home'
    },
    {
        path: '/basic',
        menuTitle: 'Basic',
        menuIcon: 'icon-storage',
        children: [
            {path: 'button', componentPath: 'button', menuTitle: 'Button'},
            {path: 'icon', componentPath: 'button', menuTitle: 'Symbol Icon'}
        ]
    },
    {
        path: '/form',
        menuTitle: 'Form',
        menuIcon: 'icon-content-copy',
        children: [{path: 'select', componentPath: 'button', menuTitle: 'Select'}]
    },
    {
        path: '/navigation',
        menuTitle: 'Navigation',
        menuIcon: 'icon-signal-wifi-statusba2',
        children: [{path: 'breadcrumb', componentPath: 'breadcrumb', menuTitle: 'Breadcrumb'}]
    }
];

export const ROUTE_CONFIGS: RouteConfig[] = getRouteConfigHelper(PAGE_CONFIGS);

export const MENU_CONFIG: TypeMenuConfig[] = getMenuConfigHelper(PAGE_CONFIGS);
