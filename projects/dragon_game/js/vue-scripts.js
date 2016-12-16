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
      this.monsterAtk = this.calculateDamage(5, 12);
      this.attacks.push({
        who: 'monster',
        message: "Monster attacks player for " + this.monsterAtk + " damage!"
      });
      if(checkWin()){
        return;
      }
      this.playerAtk = this.calculateDamage(3, 10);
      this.attacks.push({
        who: 'player',
        message: "Player attacks monster for " + this.playerAtk + " damage!"
      });
      if(checkWin()){
        return;
      }
    },
    specialAttack: function(){
      this.monsterAtk = this.calculateDamage(5, 12);
      this.playerAtk = this.calculateDamage(5, 12);
    },
    heal: function(){
      this.monsterAtk = this.calculateDamage(5, 12);
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
    },
    checkWin: function(){
      if(this.monster <= 0){
        if(confirm('You win! New Game?')){
          this.startGame();
        }else{
          this.gameStart = false;
        }
        return true;
      }else if(this.player <= 0){
        if(confirm('You lost! New Game?')){
          this.startGame();
        }else{
          this.gameStart = false;
        }
        return true;
      }
      return false;
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor(Math.random() * max) +1, min);

    },
    monsterAttack: function(min, max){

    }
  }
})
