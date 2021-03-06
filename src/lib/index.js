import vueJustGage from './vue-justgage';
import { getRandomInt } from '../plugin/justgage';

const justgage = {
    install (Vue, options) {
        Vue.prototype.getRandomInt = getRandomInt;
        Vue.component(vueJustGage.name, vueJustGage);
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(justgage);
}
export default justgage