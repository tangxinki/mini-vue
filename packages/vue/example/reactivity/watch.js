import { reactive, watchEffect, } from '../../dist/mini-vue.esm-bundler.js'
const p = Promise.resolve()
function nextTick(fn) {
    return fn ? p.then(fn) : p;
}
const state = reactive({ count: 0 });
let dummy;
debugger
watchEffect(() => {
    console.log(1111);
    dummy = state.count;
});

state.count++;
await nextTick();
console.log(dummy);