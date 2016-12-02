new Vue({
  el: "#exercise",
  data: {
    name: "JT Townsend",
    age: 27,
    image: 'https://i.kinja-img.com/gawker-media/image/upload/s--zgzpDfnC--/c_scale,fl_progressive,q_80,w_800/ebaeet1udzknntbtepj6.jpg'
  },
  methods: {
    randomInt: function(){
      return Math.round(Math.random());
    },
    newName: function(event){
      this.name = event.target.value;
    }
  }
})
