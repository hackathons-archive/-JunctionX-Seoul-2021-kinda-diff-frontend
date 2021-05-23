<template>
  <div className="back-color">
    <v-chip draggable outlined style="font-size: 20px; color: #707070;">
      Player (1/2)
    </v-chip>
    <div className="text">
      <v-btn className="grey-button" style="color: white; margin-right: 10px" rounded color="#9A9A9A">
        invite
      </v-btn>
      <v-btn className="grey-button" style="color: white; margin-right: 10px" rounded color="#9A9A9A">
        help
      </v-btn>
      <v-btn className="grey-button" to="/" style="color: white; margin-right: 10px" rounded color="#9A9A9A">
        leave
      </v-btn>

      <v-card
          style="margin-left:20px;"
          max-width="344"
          max-height="100"
      >
        <v-card-text>
          <div className="text-center"
               style="text-align: center; color: #9A9A9A; font-size: 30px; font-weight: bold; margin-bottom: 10px;">
            Invitation Code
          </div>
          <hr>
          <div className="text-center"
               style="text-align: center; color: #707070; font-size: 33px; font-weight: bold; margin-top: 10px;">123abc
          </div>
        </v-card-text>
        <v-card-actions>

        </v-card-actions>
      </v-card>
      <v-chip
          className="ma-2"
          color="#2973B5"
          style="position: relative; margin-right: 65%; font-size: 26px;"
          outlined
      >

        chip X {{user1_chips}}
      </v-chip>

      <v-chip
          className="ma-2"
          color="#2973B5"
          style="position: relative; margin-right: 65%; font-size: 26px;"
          outlined
      >

        chip X {{user2_chips}}
      </v-chip>

    </div>
    <img className="pokertable" src="../image/table.svg" alt="tablepocker" height="600"
         style="margin-right: 500px; margin-left: -300px; position: absolute;">


    <img src="../image/profile.svg" alt="profile" height="437"
         style="margin-top: -5px; margin-left:65px; position: relative;">


    <img src="../image/card stack.svg" alt="profile" height="117"
         style="margin-top: 30px; margin-left:90px; position: relative;">


    <v-footer
        color="#F8981D"
        height="110px"
        padless
        className="footer-card"
    >
      <v-row
          justify="center"
          no-gutters
      >

        <v-col
            className="primary lighten-2 py-4 text-center white--text"
            cols="12"
        >
          <v-btn
              rounded
              color="white"
              style="color: #F8981D; font-size: 30px"
              className="bottom-button"
              height="60px"

          >
            ALL-IN
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Game_run",
  data: () => ({
    newPosts: 0,
    checkInterval: null,
    user1_cards:[1,2,3,4,5,6,7,8,9,10],
    user2_cards:[1,2,3,4,5,6,7,8,9,10],
    // Initial chips amount
    user1_chips:20,
    user2_chips:20,
    // random card
    user1_rand: 1,
    user2_rand: 1,
    // bet chips
    user1_bet: "",
    user2_bet: "",

    //if tied, use before bet chips
    before_user1_bet:"",
    before_user2_bet:"",
    // round
    round : 0,

    //The room manager starts the game first. I randomly set user1 to go first.
    //From the second round, Game start with the winner of the previous round.
    winner: "user1",

    // game over check
    game_over_ : false
  }),
  methods:{
    random: function() {
      this.round++;
      // used card remove
      this.user1_rand = this.user1_cards.splice(Math.floor(Math.random() * this.user1_cards.length),1)[0];
      this.user2_rand = this.user2_cards.splice(Math.floor(Math.random() * this.user2_cards.length),1)[0];
    },

    checkChipNum: function(){ // 1-10 betting chip check
      if(this.user1_bet > 10 || this.user1_bet <1){
        this.user1_bet = "";
        alert("For User1, Submit 1-10 Chips.");

      }
      if(this.user2_bet > 10 || this.user2_bet <1){
        this.user2_bet ="";
        alert("For User2, Submit 1-10 Chips.");
      }


    },

    betting: function(){
      if(this.user1_chips > 0 && this.user2_chips > 0){
        // betting Chips
        // The second person has to pay the same or more than the first person.
        this.checkChipNum();
        if(this.winner == "user1"){
          if(this.user1_bet > this.user2_bet){

            this.user2_bet = "";
            alert('User2 Chips >= User1 Chips');
          }
        }
        else{
          if(this.user1_bet < this.user2_bet){
            this.user1_bet ="";
            alert('User1 Chips >= User2 Chips');
          }
        }
      }
    },

    betting_all_in: function(){
      if(this.user1_chips > 0 && this.user2_chips > 0){
        // betting Chips
        // The second person has to pay the same or more than the first person.

        if(this.winner == "user1"){
          this.user1_bet = this.user1_chips;

          //Because user1 is all-in, user2 also bets as much as user1 is all-in.
          if(this.user2_bet >= this.user1_bet){
            this.user2_bet = this.user2_chips;
          }
          else{
            this.user2_bet = this.user1_chips;
          }
        }
        else{
          this.user2_bet = this.user2_chips;

          //Because user2 is all-in, user1 also bets as much as user1 is all-in.
          if(this.user1_bet >= this.user2_bet){
            this.user1_bet = this.user2_chips;
          }
          else{
            this.user1_bet = this.user1_chips;
          }
        }
      }
    },

    betting_res: function(){
      if(this.user1_chips > 0 && this.user2_chips > 0){

        if(this.before_user1_bet !=0){              //If the previous round was a draw
          this.user1_bet = parseInt(this.user1_bet) + parseInt(this.before_user1_bet);
          this.user2_bet = parseInt(this.user2_bet) + parseInt(this.before_user2_bet);
          this.before_user1_bet =0;
          this.before_user2_bet =0;
        }

        if(this.user1_rand == this.user2_rand){         // to combine it with the betting amount for the next round.
          this.before_user1_bet = this.user1_bet;
          this.before_user2_bet = this.user2_bet;

        }
        else if(this.user1_rand > this.user2_rand){     // user1 win
          this.user1_chips = parseInt(this.user1_chips) + parseInt(this.user2_bet);
          this.user2_chips = parseInt(this.user2_chips) - parseInt(this.user2_bet);

          if(this.user2_rand == 10){  //-5 chips as penalty if users lose the game with 10
            this.user2_chips -= 5;
          }
          this.winner = "user1";
        }
        else{  //(user1_rand < user2_rand)              // user2 win
          this.user2_chips = parseInt(this.user2_chips) + parseInt(this.user1_bet);
          this.user1_chips = parseInt(this.user1_chips) - parseInt(this.user1_bet);

          if(this.user1_rand== 10){   //-5 chips as penalty if users lose the game with 10
            this.user1_chips -= 5;
          }
          this.winner = "user2";
        }
      }
      this.game_over();
      if(this.game_over_ == true){

        var str = "The Game is Over. Winner is " + this.winner + "!";
        alert(str);
      }
    },

    game_over: function(){
      if(this.user1_chips <= 0 || this.user2_chips <= 0){
        this.game_over_ = true;
      }
      else if(this.user1_cards.length== 0 || this.user1_cards.length == 0){
        this.game_over_ = true;
      }
    },
    logText: function() {
      console.log('changed');
    },



  }

}
</script>

<style scoped>


.text {
  text-align: right;
}

.footer-card {
  margin-top: 350px;
}

.back-color {
  background-color: #FFFBF2;
  margin-bottom: 0px;
  margin-top: -55px;

}


.bottom-button {
  margin-bottom: 10px;
}


</style>