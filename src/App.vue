<template>
	<TheNavigationVue />
	<div class="container">
		<router-view :key="$route.path"></router-view>
	</div>
</template>

<script>
	import TheNavigationVue from "./components/TheNavigation.vue";

	export default {
		components: {TheNavigationVue}
	}

</script>
