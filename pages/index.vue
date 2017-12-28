<template>
  <section class="container">
    <div>
      <h2 class="title">
        Under Construction
      </h2>
      <h2 class="subtitle">
        My name is Miguel Fondeur
      </h2>
      <p>
        I'm a UX Developer and Interaction Designer. What's that you say? Well, in short, I create the things you see and interact with on the web and make sure you feel good doing it.
        If you have a web project or would like to chat feel free to contact me. <a href="mailto:miguelfondeur@gmail.com">miguelfondeur@gmail.com</a>
      </p>
      <div class="links">
        <a href="https://github.com/miguelfondeur" target="_blank" class="button--green">Github</a>
        <a href="https://codepen.io/miguelfondeur/" target="_blank" class="button--grey">Codepen</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

body {
  line-height: 1.5;
}

.container {
  min-height: 100vh;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 90px;
  color: #35495e;
  letter-spacing: 1px;
}



.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 30px;
}
</style>
