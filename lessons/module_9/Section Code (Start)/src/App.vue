<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <app-quote>
                <h1 slot="title">{{ quoteTitle }}</h1>
                <p slot="quote">A wonderful quote!</p>
              </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue"

    export default {
        components: {
           appQuote: Quote
        },
        data: function(){
          return {
            quoteTitle: 'The Quote'
          }
        }
    }
</script>

<style>
</style>
