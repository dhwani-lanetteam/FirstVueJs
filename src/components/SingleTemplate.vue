<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <!-- Click to invoke toggle method which toggles the boolean flag -->
        <button class="btn btn-dark" @click="toggle">Click me</button>
        <div class="row" v-show="isShown">
          <div class="col-md-12 mt-5">
            <!-- Show if 'isShown' is true -->
            <p id="text">Hello, {{ user }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleTemplate',
    data() {
      return {
        user: 'Dhwani',
        isShown: false, // Control property
      };
    },
    methods: {
      toggle() {
        // Toggles control property
        this.isShown = !this.isShown;
      },
    },
  }
</script>

<style>

</style>
