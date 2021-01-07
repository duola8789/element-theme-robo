/**
 * 非开发模式路由懒加载
 * @param componentPath `./src/views`下的文件名
 */
import {RouteConfig} from 'vue-router';

export const lazyLoadHelper = (componentPath: string): any => {
    if (process.env.NODE_ENV === 'development') {
        const comp = require(`@/views/${componentPath}.vue`);
        return comp.default || comp;
    }

    return () => import(/* webpackChunkName: "view-[request]-[index]" */ `@/views/${componentPath}.vue`);
};

export const PAGE_CONFIGS = [
    {
        path: '/basic',
        title: 'Basic',
        icon: 'icon-storage',
        children: [
            {path: 'button', component: lazyLoadHelper('button'), title: 'Button'},
            {path: 'icon', component: lazyLoadHelper('button'), title: 'Icon'}
        ]
    },
    {
        path: '/form',
        title: 'Form',
        icon: 'icon-content-copy',
        children: [{path: 'select', component: lazyLoadHelper('button'), title: 'Select'}]
    }
];

export const ROUTE_CONFIGS: RouteConfig[] = PAGE_CONFIGS.reduce((t, v) => {
    const route = v.children.map((child) => ({
        path: `${v.path}/${child.path}`,
        component: child.component
    }));
    return [...t, ...route];
}, [] as RouteConfig[]);
