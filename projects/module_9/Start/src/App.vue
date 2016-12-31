<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="loadedTemplate = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="loadedTemplate = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="loadedTemplate = 'appRed'">Load Red Template</button>
                <hr>
                <keep-alive>
                  <component :is="loadedTemplate">
                    <h2 slot="title">{{ inputedTitle }}</h2>
                    <p slot="content">{{ inputedContent }}</p>
                  </component>
                </keep-alive>
                <hr>
                <!-- <app-blue></app-blue>
                <app-green></app-green>
                <app-red></app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
          return{
            inputedTitle: 'I am a title',
            inputedContent: 'I am content',
            loadedTemplate: 'appBlue'
          }
        }
    }
</script>

<style>
</style>
