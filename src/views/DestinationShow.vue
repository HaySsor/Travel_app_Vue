<template>
	<div>
		<section v-if="importData" class="destination">
			<h1>{{ importData.name }}</h1>
			<GoBack />
			<div class="destination-details">
				<img :src="`/images/${importData.image}`" :alt="importData.name" />
				<p>{{ importData.description }}</p>
			</div>
		</section>
		<section class="experiences">
			<h2>Top Experiences in {{ importData.name }}</h2>
			<div class="cards">
				<router-link
					v-for="experience in importData.experiences"
					:key="experience.slug"
					:to="{
						name: 'experience.show',
						params: {
							experienceSlug: experience.slug,
						},
					}"
				>
					<ExperienceCard :experience="experience" />
				</router-link>
			</div>
			<router-view />
		</section>
	</div>
</template>

<script>
import data from "../data.json";
import ExperienceCard from "../components/ExperienceCard.vue";
import GoBack from "../components/GoBack.vue";

export default {
	// data() {
	// 	return {
	// 		importData: null,
	// 	};
	// },
	components: { ExperienceCard, GoBack },
	props: {
		id: { type: Number, requierd: true },
	},
	computed: {
		importData() {
			return data.destinations.find(item => item.id == this.id);
		},
	},
	// methods: {
	// 	async initData() {
	// 		const response = await fetch(
	// 			`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`
	// 		);

	// 		this.importData = await response.json();
	// 	},
	// },
	// async created() {
	// 	this.initData();
	// 	// this.$watch(() => this.$route.params,this.initData);
	// },
};
</script>
