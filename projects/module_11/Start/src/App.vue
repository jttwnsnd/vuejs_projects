<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <form class="" action="index.html" method="post">
                      <app-full-name :fullName="fullName"></app-full-name>
                      <div class="form-group">
                        <label for="">Mail</label>
                        <input type="email"
                          class="form-control"
                          v-model="mail">
                      </div>
                      <div class="form-group">
                        <label for="">Password</label>
                        <input type="password"
                          class="form-control"
                          v-model="password">
                      </div>
                      <div class="form-group">
                        <label for="store">Store?</label>
                        <label>
                          <input type="radio"
                            value='yes'
                            v-model="store">Yes
                        </label>
                        <label for="no">
                          <input type="radio"
                            value='No'
                            v-model="store">No
                        </label>
                      </div>
                      <button class="btn btn-primary"
                        @click.prevent="submitted">Submit</button>
                    </form>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ `${fullName.first} ${fullName.last}` }}</p>
                        <p>Mail: {{ mail }}</p>
                        <p>Password:{{ password }} </p>
                        <p>Store in Database?: {{ store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
      data(){
        return{
          fullName: {
            first: '',
            last: ''
          },
          mail: '',
          password: '',
          store: '',
          isSubmitted: false
        }
      },
      methods: {
        submitted(){
          this.isSubmitted = true;
        }
      },
      components: {
        appFullName: FullName
      }
    }
</script>

<style>
</style>
