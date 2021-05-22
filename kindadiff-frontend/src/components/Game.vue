<template>
<div>
  <md-menu md-direction="top-end">
    <md-button>Invite</md-button>
    <md-button class="md-accent">Help</md-button>
    <md-button class="md-primary">Leave</md-button>

  </md-menu>
<div>
  This is the board game
</div>
  <div class="table">
  </div>
</div>
</template>

<script>
export default {
name: "Game"
}
</script>

<style scoped>

.table{
  width:700px;
  height:400px;
  background-color:#4aad4a;
  left:50%;
  top:80%;
  margin-top: 290px;
  transform:translateX(-50%) translateY(-50%);
  border-radius:150px;
  position:relative;
  border:10px solid #a95555;
}



</style>