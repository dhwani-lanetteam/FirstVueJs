<template>
  <div class="mt-1 container card pb-1">
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
            <b-form-input id="first-name"
                          type="text"
                          placeholder="Enter first name">
            </b-form-input>
          </b-form-group>
          
          <b-form-group id="ig-lastname"
                        label="Last Name:">
            <b-form-input id="last-name"
                          type="text"
                          placeholder="Enter last name"
            ></b-form-input>
          </b-form-group>
  
          <b-form-group id="ig-email"
                        label="Email:">
            <b-form-input id="email"
                          type="text"
                          placeholder="Enter email"
            ></b-form-input>
          </b-form-group>
  
          <b-form-group id="ig-password"
                        label="Last Name:">
            <b-form-input id="password"
                          type="text"
                          placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
  
          <b-form-group id="ig-fav-food"
                        label="Food:"
                        label-for="input-3">
            <b-form-select id="fav-food">
              <option :value = "null" selected>Select your favourite</option>
              <option value ="grapes">Grapes</option>
              <option value ="strawberry">Strawberry</option>
              <option value ="apple">Apple</option>
              <option value ="banana">Banana</option>
              <option value ="orange">Orange</option>
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
    name: 'Registration'
  }
</script>

<style>

</style>

