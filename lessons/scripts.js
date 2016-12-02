// first lesson/exercise Vue
// new Vue({
//   el: "#exercise",
//   data: {
//     name: "JT Townsend",
//     age: 27,
//     image: 'https://i.kinja-img.com/gawker-media/image/upload/s--zgzpDfnC--/c_scale,fl_progressive,q_80,w_800/ebaeet1udzknntbtepj6.jpg'
//   },
//   methods: {
//     randomInt: function(){
//       return Math.random();
//     },
//     newName: function(event){
//       this.name = event.target.value;
//     },
//     newAge: function(event){
//       this.age = event.target.value;
//     }
//   }
// })
new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
})
