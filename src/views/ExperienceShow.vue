<template>
	<section>
		<h1>{{ experience.name }}</h1>
		<img :src="`/images/${experience.image}`" :alt="experience.name" />
		<p>{{ experience.description }}</p>

	</section>
</template>

<script>
import data from "../data.json";

export default {
	props: {
		id: { type: Number, required: true },
		experienceSlug: { type: String, required: true },
  
	},
	computed: {
		destination() {
			return data.destinations.find(item => item.id === this.id);
		},
		experience() {
			return this.destination.experiences.find(
				item => item.slug === this.experienceSlug
			);
		},
	},
};
</script>
