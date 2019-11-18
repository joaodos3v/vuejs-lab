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
import Menu from "./components/template/Menu";
import Toolbar from "./components/template/Toolbar";
import Carousel from "./components/widgets/Carousel";
import Footer from "@/components/template/Footer";

export default {
	components: {
		Menu, Toolbar, Carousel, Footer
	}
}
</script>
