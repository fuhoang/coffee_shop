<template>
    <section class="section">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-menu is-active buttons">
                    <router-link to="/" tag="button" id='home-button' class="button is-link"> Home </router-link>
                    <router-link to="/movies" tag="button" id='home-button' class="button is-link"> Movies </router-link>
                  <!--   <button class="button is-link" v-if='authenticated' v-on:click='logout' id='logout-button'> Logout </button>
                    <button v-else v-on:click='login' id='login-button' class="button is-link"> Login </button> -->
                </div>
            </nav>
            <router-view></router-view>
        </div>
    </section>
</template>
