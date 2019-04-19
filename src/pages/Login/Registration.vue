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
        <b-form>
          <b-form-group id="ig-firstname"
                        label="First Name:">
            <b-form-input id="firstname"
                          v-model="form.firstname"
                          type="text"
                          placeholder="Enter first name">
            </b-form-input>
          </b-form-group>
          
          <b-form-group id="ig-lastname"
                        label="Last Name:">
            <b-form-input id="lastname"
                          v-model="form.lastname"
                          type="text"
                          placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="ig-email"
                        label="Email:">
            <b-form-input id="email"
                          v-model="form.email"
                          type="text"
                          placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="ig-password"
                        label="Last Name:">
            <b-form-input id="password"
                          v-model="form.password"
                          type="text"
                          placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
          
          <b-form-group id="ig-fav-food"
                        label="Food:"
                        label-for="input-3">
            <b-form-select id="fav-food"
                           :options="fruits"
                           v-model="form.favourite_food">
            </b-form-select>
          </b-form-group>
          
          <b-form-group id="ig-hobby"
                        label-for="hobby"
                        label="Hobby:">
            <b-form-checkbox-group id="hobby">
              <b-form-checkbox value="sports">Sports</b-form-checkbox>
              <b-form-checkbox value="art">Art</b-form-checkbox>
              <b-form-checkbox value="entertainment">Entertainment</b-form-checkbox>
              <b-form-checkbox value="house_decor">House decor</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          
          <b-form-group id="ig-gender"
                        label-for="gender"
                        label="Gender:">
            <b-form-radio-group id="gender">
              <b-form-radio value="male">Male</b-form-radio>
              <b-form-radio value="female">Female</b-form-radio>
              <b-form-radio value="other">Other</b-form-radio>
            </b-form-radio-group>
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
  }
</script>

<style>

</style>

