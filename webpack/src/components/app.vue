<template>
	<div class="container">
		<img src="img/g3.jpg"/>
		<h1>Hello {{username}}</h1>
		<button class="btn btn-success">点我有惊喜</button>
		<button class="btn btn-info">计入详情</button>
		<div class="box">
			<h4>Sass测试</h4>
		</div>
	</div>
</template>

<script>
	//引入sass文件
	import '../sass/page.scss';
	import '../lib/bootstrap.css';

	export default{
		data(){
			return {
				username:'俄罗斯美女'
			}
		}
	}
</script>