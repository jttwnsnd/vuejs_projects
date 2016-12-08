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


// Lessons on events
// new Vue({
//   el: "#app",
//   data: {
//     counter: 0,
//     x: 0,
//     y: 0
//   },
//   methods: {
//     increase: function(step, event) {
//       this.counter += step;
//     },
//     updateCoordinates: function(event) {
//       this.x = event.clientX;
//       this.y = event.clientY;
//     },
//     alertMe: function() {
//       alert('Alert!')
//     }
//   }
// })

// exercise 2 Vue
// new Vue({
//   el: "#exercise2",
//   data: {
//     value: ''
//   },
//   methods: {
//     showAlert: function() {
//       alert('Alert shown!');
//     },
//     storeValue: function(event) {
//       this.value = event.target.value;
//     }
//   }
// })

// Two way data binding
// new Vue({
//   el: '#app',
//   data: {
//     name: 'JT'
//   }
// })

// reactivity
//important! everything stored in computed can be used like things sotred in data. computed will analyze the code and only run when needed, where methods will run all the time, even if it is not needed. computed are synchronous. best practice, use this when possible. It's cached, and only runs when necessary.
//watch executes code upon data changes. can be asynchronous.
//closures require you to either set the this object as a variable, or use ES6 arrow functions.
//v-on: can be replaced with an @ symbol. so v-on:click="function" can now be @click="function"
//v-bind also gets a shortcut. v-bind:href="link" can now be :href="link "
// new Vue({
//   el: "#app",
//   data: {
//     counter: 0
//   },
//   computed: {
//     output: function(){
//       return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
//     }
//   },
//   watch: {
//     counter: function(value ) {
//
//     }
//   },
//   methods: {
//     result: function(){
//       return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
//     }
//   }
// })

//reactive exercise
// new Vue({
//   el: "#exercise3",
//   data: {
//     value: 0
//   },
//   computed: {
//     result: function(){
//       return this.value >= 37 ? "Made it" : "No there yet"
//     }
//   },
//   watch: {
//     result : function(){
//       var vm = this;
//       setTimeout(function(){
//         console.log("fired off")
//         vm.value = 0;
//       }, 5000)
//     }
//   }
// })

//dynamic styling of Vue project
// new Vue({
//   el: "#app",
//   data: {
//     color: 'gray',
//     width: 100
//   },
//   computed: {
//     myStyle: function() {
//       return {
//         backgroundColor: this.color,
//         width: this.width + 'px'
//       }
//     }
//   }
// })

// new Vue({
//   el: "#exercise4",
//   data: {
//     effectClasses: {
//       highlight: true,
//       shrink: false
//     },
//     userClass: '',
//     isVisible: true,
//     myStyles: {
//       width:'100px',
//       height:'100px',
//       backgroundColor: 'gray'
//     },
//     progressBar: {
//       width: '0px',
//       backgroundColor: 'red'
//     }
//   },
//   methods: {
//     startEffect: function(){
//       var vm = this;
//       //setInterval
//       setInterval(function(){
//         vm.effectClasses.highlight = !vm.effectClasses.highlight;
//         vm.effectClasses.shrink = !vm.effectClasses.shrink;
//       }, 1000)
//     },
//     startProgress: function(){
//       var vm = this;
//       var width = 0;
//       setInterval(function(){
//         width = width + 10;
//         if (width == 210){
//           width = 200;
//         }
//         vm.progressBar.width = width + 'px';
//       },500)
//     }
//   }
// })

// new Vue({
//   el: "#app",
//   data: {
//     ingredients: ['meat', 'fruit', 'cookies'],
//     persons: [
//       {name: 'JT', age: 27, color: 'red'},
//       {name: 'Haley', age: 'unknown', color: 'sky-blue'}
//     ]
//   }
// })

new Vue ({
  el: "#exercise1",
  data: {
    show: true,
    weapons: ["sword", "shield", "lance", "pistol", "greatsword"],
    about: {title: "Lord of the Rings", author: 'J.R.R. Tolkiens', books: 3},
    testObj: {name: "TESTOBJECT", data: [1.67, 1.33, 0.98, 2.21]}
  }
})
