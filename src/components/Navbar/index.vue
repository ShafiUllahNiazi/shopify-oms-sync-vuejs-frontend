<template>
  <v-app-bar id="navbar" color="#000000" dense>
    <ul>
      <li>
        <router-link to="/" exact-active-class="active">Logs</router-link>
      </li>
      <!-- <li>
            <router-link to="/settings" exact-active-class="active">Sync</router-link>
        </li> -->
      <!-- <li>
        <router-link to="/pricing" exact-active-class="active">Pricings</router-link>
      </li> -->
    </ul>
  </v-app-bar>
</template>

<style lang="scss" src="./Navbar.scss"></style>

<script src="./Navbar.js"></script>
