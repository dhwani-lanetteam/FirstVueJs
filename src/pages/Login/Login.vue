<template>
  <div class="mt-1 container">
    <div class="row">
      <div class="col-md-12 title">
        <!-- Fetch query param from route -->
        <h3>Sign in</h3>
      </div>
    </div>
    <div class="row">
      <div class="mt-1 col-md-12">
        <b-form>
          <b-form-group id="input-group-email"
                        label="Email address:"
                        label-for="txt-email-id"
                        description="We'll never share your your email with anyone else.">
            <b-form-input id="txt-email-id"
                          placeholder="Enter email"
                          type="email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="input-group-password"
                        label="Password:"
                        label-for="txt-password">
            <b-form-input id="txt-password"
                          placeholder="Enter password"
                          type="password">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Signin'
  }
</script>

<style>

</style>

