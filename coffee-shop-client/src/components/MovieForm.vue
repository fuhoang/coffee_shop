<template>
    <form @submit.prevent="onSubmit">
        <span class="help is-danger" v-text="errors"></span>

        <div class="field">
            <div class="control">
                <input class="input" type="title" placeholder="enter movie title..." v-model="title" @keydown="errors = ''">
            </div>
        </div>

        <button class="button is-primary" v-bind:class="{ 'is-loading' : isLoading }">Add Movie</button>
    </form>
</template>

<script>

	import axios from 'axios'

	export default {
	    data() {
	        return {
	            title: '',
	            errors: '',
	            isLoading: false
	        }
	    },
	    methods: {
	        onSubmit() {
	            this.isLoading = true
	            this.postMovie()
	        },
	        async postMovie() {
  				// axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:8080';
  				// axios.defaults.headers.post['Content-Type'] = 'application/json';
  				// axios.defaults.headers.post['Host'] = 'localhost:8000';
  				// axios.defaults.headers.post['Origin'] = 'localhost:8080';
  				//axios.defaults.headers.post['Accept-Encoding'] = 'gzip, deflate, br';
				//axios.defaults.headers.post['Access-Control-Request-Method'] = 'POST';
	            console.log(this.$data);
	            axios.post('http://localhost:8000/movies', this.$data)
	                .then(response => {
	                    this.title = ''
	                    this.isLoading = false
	                    this.$emit('completed', response.data)
	                })
	                .catch(error => {
	                    // handle authentication and validation errors here
	                    this.errors = error.response.data.errors
	                    this.isLoading = false
	                })
	        }
	    }
	}

</script>