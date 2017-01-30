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


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              show: true,
              alertAnimation: 'fade'
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
