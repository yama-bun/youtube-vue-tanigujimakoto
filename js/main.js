Vue.component('alert', {
    template: `
    <div class="alert" v-on:click="caution">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `,
    methods: {
        caution() {
            alert('クリックされたよ');
        }
    }
});

let app = new Vue({
    el: "#app"
})