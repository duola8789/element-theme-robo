<template>
    <svg class="robo-icon" aria-hidden="true">
        <use :xlink:href="iconHref"></use>
    </svg>
</template>

<script lang="ts">
import {Component, Vue, Prop} from 'vue-property-decorator';

@Component
export default class RoboSymbolIcon extends Vue {
    @Prop({required: true, type: String}) href!: string;

    get iconHref() {
        return `#${this.href}`;
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
