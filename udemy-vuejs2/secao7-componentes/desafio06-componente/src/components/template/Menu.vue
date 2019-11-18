<template>
    <v-navigation-drawer app>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Menu
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
            <MenuItem v-for="menuItem in menuItems" :key="menuItem.title" :icon="menuItem.icon" :title="menuItem.title" />
        </v-list>
    </v-navigation-drawer>
</template>


<script>
import MenuItem from "./MenuItem";

export default {
    components: {
        MenuItem
    },

    data() {
        return {
			menuItems: [
				{title: 'Início', icon: 'dashboard'},
				{title: 'Sobre', icon: 'question_answer'}
			],
        }
    }
}
</script>