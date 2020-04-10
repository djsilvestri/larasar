<template>
  <div class="fixed-center text-center">
    <p>
      <!-- <img
        src="~assets/sad.svg"
        style="width:30vw;max-width:150px;"
      > -->
       <img src="../img/logo_file.png" alt="Logo" class="header__logo">
    </p>
    <p class="text-faded">Nothing to see here except the logo and the back button!</p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Go back"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
