<template>
    <div class="col-md-4">
        <form @submit.prevent="addNew">
          <label for="location"> Enter Location Name: </label>
          <input type="text" required class="form-control" placeholder="Enter Location Name" v-model="name">
          <br>
          <label for="image"> Image URL:</label>
          <input type="text" required class="form-control" placeholder="Enter Image URL" v-model="imageUrl">
          <br>
          <div class="spinner-holder">
              <button class="btn btn-primary">Add Record</button>
              <div class="spinner-class" v-if="addNewloading">
                <Spinner name="ball-scale-multiple" color="green" :noFadeIn="fader"/>
              </div>
          </div>
      </form>
      </div>
</template>

<script>
import nativeToast from "native-toast";
import { db } from "../main.js";
export default {
  data() {
    return {
      addNewloading: false,
      fader: true,
      name: '',
      imageUrl: ''
    };
  },
  methods: {
    addNew() {
      this.addNewloading = true;
        db.collection("locations").add({
          name: this.name,
          image: this.imageUrl,
          createdAt: new Date()
        })
        .then(record => {
            nativeToast({
              message: "Record Added !!!",
              type: "success",
              icon: false,
              edge: true
            });
            this.name = '';
            this.imageUrl = '';
            this.addNewloading = false;
        }, (err) => {
            alert("Something went wrong");
          }
        );
    }
  }
};
</script>

<style>
.spinner-class {
  display: inline-block;
  padding-top: 10px;
  margin-left: 40px;
}
.spinner-holder {
  display: flex;
  align-items: center;
}
form {
    margin-bottom: 20px;
}
</style>

