<template>
    <section class="section">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-menu is-active buttons">
                    <router-link to="/" tag="button" id='home-button' class="button is-link"> Home </router-link>
                    <router-link to="/movies" tag="button" id='home-button' class="button is-link"> Movies </router-link>
                    <!-- <button class="button is-link" v-if='authenticated' v-on:click='logout' id='logout-button'> Logout </button>
                    <button v-else v-on:click='login' id='login-button' class="button is-link"> Login </button> -->
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </section>
</template>


<template>
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Count</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="movie in movies">
                    <tr v-bind:key="movie.id">
                        <td>{{ movie.id }}</td>
                        <td>{{ movie.title }}</td>
                        <td>{{ movie.count }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <a class="button is-primary">Add Movie</a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
	data(){
		return {
			movies: {}
		}
	},
	async created() {
		const response = await axios.get('http://localhost:8000/movies')
		this.movies = response.data
	}
}
</script>