<template>
    <svg class="robo-icon" aria-hidden="true">
        <use ref="iconFont" :xlink:href="iconHref"></use>
    </svg>
</template>

<script lang="ts">
import {Component, Vue, Prop, Watch, Ref} from 'vue-property-decorator';

const DEFAULT_ICON: string = 'icon-sentiment-very-dissa';

@Component
export default class RoboSymbolIcon extends Vue {
    @Prop({required: true, type: String}) href!: string;

    @Ref() iconFont!: HTMLElement;

    iconHref = `#${DEFAULT_ICON}`;

    @Watch('href', {immediate: true})
    hrefWatch() {
        this.iconHref = `#${this.href || DEFAULT_ICON}`;
        setTimeout(() => {
            if (this.iconFont.getBoundingClientRect().width === 0) {
                this.iconHref = `#${DEFAULT_ICON}`;
            }
        });
    }
}
</script>

<style scoped lang="scss">
.robo-icon {
    color: inherit;

    @include nice-btn();
    @include linear-transition(0.1s);
}
</style>
