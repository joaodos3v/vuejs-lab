<template>
	<v-app>
		<Menu />
		<Toolbar />

		<v-content>
			<Carousel />
		</v-content>

		<Footer />
	</v-app>
</template>

<script>
import Menu from './Menu.vue'
import Toolbar from './Toolbar.vue'
import Carousel from './Carousel.vue'
import Footer from './Footer.vue'

export default {
	components: { Menu, Toolbar, Carousel, Footer }
}
</script>
