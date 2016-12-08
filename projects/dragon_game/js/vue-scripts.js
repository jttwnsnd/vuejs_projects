new Vue({
  el: '#app',
  data: {
    gameStart: false,
    player: 100,
    monster: 100,
    playerAtk: 0,
    monsterAtk: 0,
    attacks: [],
    gameOver: false
  },
  computed: {
    playerHealth: function(){
      var health = this.player - this.monsterAtk;
      if(health <= 0){
        this.gameOver = true;
        return 0;
      }else{
        return this.player -= this.monsterAtk;
      }
    },
    monsterHealth: function(){
      var health = this.monster - this.playerAtk;
      if(health <= 0){
        this.gameOver = true;
        return 0;
      }else{
        return this.monster -= this.playerAtk;
      }
    },
    playerBar: function(){
      if(this.player <= 25){
        return {
          width: this.player + "%",
          backgroundColor: 'red'
        }
      }else{
        return {
          width: this.player + "%",
          backgroundColor: 'green'
        }
      }
    },
    monsterBar: function(){
      if(this.monster <= 25){
        return {
          width: this.monster + "%",
          backgroundColor: 'red'
        }
      }else{
        return {
          width: this.monster + "%",
          backgroundColor: 'green'
        }
      }
    }
  },
  methods: {
    start: function(){
      this.gameStart = true;
      this.gameOver = false;
    },
    attack: function(mod){
      this.monsterAtk = Math.ceil(Math.random() * 15);
      this.playerAtk = Math.ceil(Math.random() * 10) + mod;
      this.attacks.push({
        who: 'player',
        message: "Player attacks monster for " + this.playerAtk + " damage!"
      });
      this.attacks.push({
        who: 'monster',
        message: "Monster attacks player for " + this.monsterAtk + " damage!"
      });
    },
    heal: function(){
      this.monsterAtk = Math.ceil(Math.random() * 10);
      var heal = Math.ceil(Math.random() * 15);
      this.player += heal
      this.attacks.push({
        who: 'player_heal',
        message: "Player heals " + heal + " damage!"
      });
      this.attacks.push({
        who: 'monster',
        message: "Monster attacks player for " + this.monsterAtk + " damage!"
      });
    },
    giveUp: function(){
      this.playerAtk = 0;
      this.monsterAtk = 0;
      this.player = 100;
      this.monster = 100;
      this.gameStart = false;
      this.attacks = [];
    }
  }
})
