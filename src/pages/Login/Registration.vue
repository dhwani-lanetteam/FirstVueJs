<template>
  <div class="mt-1 col-md-6 container card pb-1">
    <div class="row">
      <div class="col-md-12 title">
        <!-- Fetch query param from route -->
        <h3>Sing up</h3>
      </div>
    </div>
    <div class="row">
      <div class="mt-3 col-md-12">
        <b-form @submit.prevent="validateBeforeSubmit">
          <b-form-group id="ig-firstname"
                        label="First Name:">
            <b-form-input id="firstname"
                          name="firstname"
                          type="text"
                          placeholder="Enter first name"
                          :class="{'error': errors.has('firstname') }"
                          v-model="form.firstname"
                          v-validate="'required'">
            </b-form-input>
            <span class="error-message">{{ errors.first('firstname') }}</span>
          </b-form-group>
          
          <b-form-group id="ig-lastname"
                        label="Last Name:">
            <b-form-input id="lastname"
                          name="lastname"
                          type="text"
                          placeholder="Enter last name"
                          :class="{'error': errors.has('lastname') }"
                          v-model="form.lastname"
                          v-validate="'required'"
            ></b-form-input>
            <span class="error-message">{{ errors.first('lastname') }}</span>
          </b-form-group>
          
          <b-form-group id="ig-email"
                        label="Email:">
            <b-form-input id="email"
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          :class="{'error': errors.has('email') }"
                          v-model="form.email"
                          v-validate="'required|email'">
            </b-form-input>
            <span class="error-message">{{ errors.first('email') }}</span>
          </b-form-group>
          
          <b-form-group id="ig-password"
                        label="Password:">
            <b-form-input id="password"
                          name="password"
                          type="text"
                          placeholder="Enter password"
                          :class="{'error': errors.has('password') }"
                          v-model="form.password"
                          v-validate="'required'">
            </b-form-input>
            <span class="error-message">{{ errors.first('password') }}</span>
          </b-form-group>
          
          <b-form-group id="ig-fav-food"
                        label="Food:"
                        label-for="input-3">
            <b-form-select id="fav-food"
                           name="fav-food"
                           v-model="form.favourite_food"
                           v-validate="'required'"
                           :class="{'error': errors.has('fav-food') }"
                           :options="fruits">
            </b-form-select>
            <span class="error-message">{{ errors.first('fav-food') }}</span>
          </b-form-group>
          
          <b-form-group id="ig-hobby"
                        label-for="hobby"
                        label="Hobby:">
            <b-form-checkbox-group id="hobby"
                                   name="hobby"
                                   v-validate="'required'"
                                   :class="{'error': errors.has('hobby') }">
              <b-form-checkbox value="sports">Sports</b-form-checkbox>
              <b-form-checkbox value="art">Art</b-form-checkbox>
              <b-form-checkbox value="entertainment">Entertainment</b-form-checkbox>
              <b-form-checkbox value="house_decor">House decor</b-form-checkbox>
            </b-form-checkbox-group>
            <span class="error-message">{{ errors.first('hobby') }}</span>
          </b-form-group>
          
          <b-form-group id="ig-gender"
                        label-for="gender"
                        label="Gender:">
            <b-form-radio-group id="gender"
                                name="gender"
                                v-validate="'required'"
                                :class="{'error': errors.has('gender') }">
              <b-form-radio value="male">Male</b-form-radio>
              <b-form-radio value="female">Female</b-form-radio>
              <b-form-radio value="other">Other</b-form-radio>
            </b-form-radio-group>
            <span class="error-message">{{ errors.first('gender') }}</span>
          </b-form-group>
          
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Registration',
    data() {
      return {
        form:{
          'firstname': '',
          'lastname': '',
          'email': '',
          'password': '',
          'favourite_food': null,
          'hobby': 'house_decor',
          'gender': 'female'
        },
        fruits: [{ text: 'Select Your Favourite Food', value: null }, 'grapes', 'strawberry', 'apple', 'banana', 'orange'],
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          // Each field is valid then
          if (result) {
            // eslint-disable-next-line
            alert('Form Submitted!');
            return;
          }
          // One of the fields is not valid then
        });
      },
    },
  }
</script>

<style>

</style>

