<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="../assets/img/banner-ico.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
            SpotiApp
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item" routerLinkActive="active">
            <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item" routerLinkActive="active">
            <router-link to="/search" class="nav-link">Search</router-link>
            </li>
        </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>