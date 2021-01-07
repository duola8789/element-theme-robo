import {ElLoadingComponent} from 'element-ui/types/loading';

// Vue 原型上添加的东西，需要在此定义
declare module 'vue/types/vue' {
    interface Vue {
        $fullLoading(): ElLoadingComponent;
    }
}

// 添加全局属性
declare global {
    interface Window {
        BMap: any;
        BMapGL: any;
    }
}
