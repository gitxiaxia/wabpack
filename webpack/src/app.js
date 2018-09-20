
//渲染优先级：render > template > 挂载点内容
//Vue操作：写代码操作虚拟DOM，然后有Vue框架操作真实DOM
// ES模块化： import, export

import Vue from 'vue';
import App from './components/app.vue';

new Vue({
	el:'#app',
	render(createElement){
		return createElement(App);
	}
});