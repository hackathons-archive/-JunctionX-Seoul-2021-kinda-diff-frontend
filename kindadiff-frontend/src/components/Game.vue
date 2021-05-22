<template>
<div class = "back-color">
  <v-chip draggable outlined style="font-size: 20px; color: #707070;">
    Player (1/2)
  </v-chip>
<div class="text">
    <v-btn class="grey-button" style="color: white; margin-right: 10px" rounded color="#9A9A9A">
     invite
    </v-btn>
    <v-btn class="grey-button" style="color: white; margin-right: 10px" rounded color="#9A9A9A">
      help
    </v-btn>
    <v-btn class="grey-button" to="/" style="color: white; margin-right: 10px" rounded color="#9A9A9A">
    leave
    </v-btn>

    <v-card
        style="margin-left:20px;"
        max-width="344"
        max-height="100"
    >
      <v-card-text>
       <div class="text-center" style="text-align: center; color: #9A9A9A; font-size: 30px; font-weight: bold; margin-bottom: 10px;">Invitation Code</div>
        <hr>
        <div class="text-center" style="text-align: center; color: #707070; font-size: 33px; font-weight: bold; margin-top: 10px;">123abc</div>
      </v-card-text>
      <v-card-actions>

      </v-card-actions>
    </v-card>
  <v-chip
      class="ma-2"
      color="#2973B5"
      style="position: relative; margin-right: 60%; font-size: 26px;"
      outlined
  >

    chip X 20
  </v-chip>

</div>

<!--  <img class="pokertable" src="../image/table.svg" alt="tablepocker" height="600" style="margin-top: 20px; margin-left: -300px; text-align: center; position: absolute;">-->
<!--  <img src="../image/profile.svg" alt="profile" height="437" style="margin-top: -60px; margin-left:65px; position: relative;">-->
   <img src="../image/connected.svg" alt="profile" height="760" style="margin-top: -60px; margin-left:65px; position: relative;">

  <v-footer
      color="#F8981D"
      height="110px"
      padless
      class="footer-card"
  >
    <v-row
        justify="center"
        no-gutters
    >

      <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
      >
        <v-btn
            rounded
            color="white"
            style="color: #F8981D; font-size: 30px"
            class="bottom-button"
            height="60px"

        >
        START
        </v-btn>      </v-col>
    </v-row>
  </v-footer>
</div>
</template>

<script>
export default {
name: "Game",
  data: () => ({
    newPosts: 0,
    checkInterval: null
  }),

}
</script>

<style scoped>


.text{
 text-align: right;
}

.footer-card{
  margin-top: 350px;
}

.back-color{
  background-color: #FFFBF2;
  margin-bottom: 0px;
  margin-top: -55px;

}


.bottom-button{
  margin-bottom: 10px;
}


</style>