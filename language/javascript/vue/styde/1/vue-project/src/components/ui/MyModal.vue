<template lang="">
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog_contend">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import toggleMixin from '../../mixins/toggleMixin';

export default {
    name: 'my-dialog',
    mixin: [toggleMixin],
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    // methods: {
    //     hideDialog () {
    //         this.$emit('update:show', false)
    //     }
    // }
}
</script>
<style scoped>
    .dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0,0,0, 0.5);
        position: fixed;
        display: flex;
    }
    .dialog_contend {
        margin: auto;
        background-color: white;
        border-radius: 12px;
        min-height: 50px;
        min-width: 300px;
    }
</style>