<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation">
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </select>
                <button type="button" class="btn btn-primary" name="button" @click="show = !show">Show Alert</button>
                <br><br>

                <transition :name="alertAnimation" appear mode="out-in">
                  <div class="alert alert-info" v-if="show" key="info">This is some info.</div>
                  <div class="alert alert-warning" v-else key="warning">this is some warning</div>
                </transition>
                <button type="button" name="button" class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition>
                  <div class="" style="width: 100px; height: 100px; background-color: lightgreen" v-if="load">

                  </div>
                </transition>
                <hr>
                <button type="button" name="button" class="btn btn-success">Toggle Components</button>
                <br>
                <transition name="fade" mode="out-in">
                  <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button type="button" name="button" class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                  <transition-group name="slide">
                    <li class="list-group-item"
                      v-for="(number, index) in numbers"
                      @click="removeItem(index)"
                      style="cursor: pointer"
                      :key="number">{{ number }}</li>
                  </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
              show: true,
              load: true,
              alertAnimation: 'fade',
              selectedComponent: 'app-success-alert',
              numbers: [1, 2, 3, 4, 5]
            }
        },
        components: {
          appDangerAlert: DangerAlert,
          appSuccessAlert: SuccessAlert
        },
        methods: {
          addItem(){
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length + 1);
          },
          removeItem(index){
            this.numbers.splice(index, 1);
          }
        }
    }
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s;
  }

  .fade-leave{
    /*default of opacity is 1*/
  }

  .fade-leave-active{
    transition: opacity 1s;
    /*default is 1, lets set it to 0*/
    opacity: 0;
  }

  .slide-enter{
    /*because my animation starts where I want it, I dont have to specify the start*/
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
  }
  .slide-leave{
    /*because my animation starts where I want it, I dont have to specify the start*/
  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    transition: opacity 1s;
    opacity: 0;
    position: absolute;
  }
  .slide-move{
    transition: transform 1s;
  }

  @keyframes slide-in{
    from {
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }

  @keyframes slide-out{
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to{
      transform: translateY(20px);
      opacity: 0;
    }
  }

</style>
