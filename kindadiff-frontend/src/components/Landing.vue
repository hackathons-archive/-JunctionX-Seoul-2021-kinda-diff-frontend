<template >
  <div>
    <div class="title-logo">
      <img src="../image/titlelogo.svg" alt="profile" height="123" style="margin-top: 0px; margin-left:65px; position: relative;">
    </div>
    <div class="buttons">
      <v-col align="center">
        <div>
      <v-btn
          class="ma-2"
          outlined
          color="#F8981D"
          width="400px"
          height="80px"
          style="font-size: 33px; font-family: 'Noto Sans'; "
      >
        Room Code
      </v-btn>
        </div>
        <div>
      <v-btn
          class="ma-2"
          color="#F8981D"
          width="400px"
          height="80px"
          style="font-size: 33px; font-family: 'Noto Sans'; color: white"
          to="/game"
      >
        Start
      </v-btn>
        </div>
      <div>
      <v-btn
          class="ma-2"
          outlined
          color="#F8981D"
          width="400px"
          height="80px"
          style="font-size: 33px; font-family: 'Noto Sans'; "
      >
        Create Room
      </v-btn>
      </div>
        <div>
          <md-dialog :md-active.sync="showDialog">
            <md-dialog-title><i class="fas fa-heart"></i></md-dialog-title>





              <md-tab style="text-align: left; margin-left: 15px; margin-right: 35px;" md-label="Account">
                <p>1. Number cards from 1 to 10, each with 2 cards for a total of 20 cards.</p>
                <p>2. The player with the higher number card takes all the winning chips.</p>
                <p>3. The bet chips are divided into 20 pieces.</p>
                <p>4. Players take one card at a time and put it on their foreheads without checking their faces.</p>
                <p>5. When betting, you have 3 choices!</p>
                <div class="choice" style="margin-left: 10px;">
                  <p>a. Bet the same number of chips as the opponent, the bet ends, and the two cards are revealed.</p>
                  <p>b. Continue betting without revealing the bet card for more chips than the previously bet chips.</p>
                  <p>c. Abandoning the game without betting Unconditionally the opponent wins and takes all the bet chips.</p>
                </div>
                <p>6. if you give up the game with the highest number of “10” cards, you must give your opponent 10 chips as a penalty.</p>
                <p>7. In the case of a draw with the same number, the bet chip</p>
              </md-tab>


            <md-dialog-actions>
              <md-button class="md-accent" @click="showDialog = false">Close</md-button>
            </md-dialog-actions>
          </md-dialog>

          <md-button class="md-accent" style="margin-top: 20px;" @click="showDialog = true">How to Play?</md-button>


        </div>

        <div style="margin-top: 50px; color: #707070; font-size: 20px; font-family: 'Noto Sans';  ">
          All rights reserved by <b>kinda-diff</b>
        </div>
      </v-col>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Landing',
  data: () => ({
    showDialog: false
  }),
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ma-2{
  margin-top: 20px;
  text-decoration: none;
}


.ma-3{
  margin-top: 60px;
}

.back-color{
  height: 100%;
  background: #FFFBF2;

}
template, div {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
