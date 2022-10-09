<template>
	<TheNavigationVue />
	<div class="container">
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :key="$route.path"></component>
			</transition>
		</router-view>
	</div>
</template>

<script>
import TheNavigationVue from "./components/TheNavigation.vue";

export default {
	components: { TheNavigationVue },
};
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
