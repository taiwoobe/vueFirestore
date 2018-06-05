<template>
  <div class="">
    <div class="container-fluid">
        <div class="row">
            <div class="headerBackground">
                <h3 style="padding-top:  20px;"> {{ msg }}</h3>
            </div>
        </div>
    </div>
    <div class="loginSection">
        <div class="container">
            <div class="">
                <div class="col-md-3">
                </div>
                <div class="col-md-6 loginForm">
                    <form @submit.prevent="login">
                        <label for="email"> Email Address: <small>(test@test.com)</small></label>
                        <input type="text" required class="form-control" placeholder="Enter Email Address" v-model="email">
                        <br>
                        <label for="password"> Password: <small>(password)</small></label>
                        <input type="password" required class="form-control" placeholder="Enter Password" v-model="password">
                        <br>
                        <div class="spinner-holder">
                            <button class="btn btn-primary">Login</button>
                                <div class="spinner-class" v-if="loading">
                            <Spinner name="ball-scale-multiple" color="green" :noFadeIn="fader"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import nativeToast from "native-toast";
export default {
  name: "Login",
  data() {
    return {
      fader: true,
      msg: "A Fullstack App with VueJS and Firestore",
      email: "test@test.com",
      password: "password",
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            nativeToast({
              message: "Login Successful !!!",
              type: "success",
              timeout: 5000,
              icon: false
            });
            setTimeout({ ...this.$router.push("/hello") }, 10000);
            this.loading = false;
          },
          err => {
            nativeToast({
              message: "Login Failed !!!",
              type: "error",
              timeout: 5000,
              icon: false
            });
            this.loading = false;
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.loginSection {
  margin-top: 120px;
}
.loginForm {
  border: 1px solid #1f030321;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
}
label {
  color: rgb(134, 131, 131);
  margin-bottom: 10px;
}
.spinner-class {
  display: inline-block;
  padding-top: 10px;
  margin-left: 40px;
}
.spinner-holder {
  display: flex;
  align-items: center;
}
</style>
