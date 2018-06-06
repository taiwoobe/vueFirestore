<template>
  <div class="hello">
    <div class="container-fluid">
        <div class="row">
            <div class="headerBackground">
                <h3 style="padding-top:  20px;"> {{ msg }}</h3>
                <span class="logoutButton" @click="logout">
                  Logged in As: {{ loggedInUser }} Logout
                </span>
            </div>
        </div>
    </div>
    <div class="container-fluid">
      <app-new-record></app-new-record>
      <div class="col-md-8">
        <transition-group name="slide-fade" tag="div">
        <div class="col-md-4" v-for="(location, index) in locations" :key="index">
          <div class="panel panel-default" style="padding-left: 0px;padding-right: 0px;">
            <div class="panel-body">
              <img :src="location.image" class="img-responsive" :alt="location.name">
            </div>
            <div class="panel-footer">
              <span class="panel-text">{{ location.name }}</span>
              <span class="removeButton"><a class="btn btn-primary small-button" @click="deleteLocation(location)">X</a></span>
            </div>
          </div>
        </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import firebase,{ firestore } from 'firebase';
import nativeToast from 'native-toast';
import NewRecord from './newRecord.vue';
import { db } from '../main.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'A Fullstack App with VueJS and Firestore',
      loggedInUser: '',
      locations: []
    }
  },
  components: {
    appNewRecord: NewRecord
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(userLogout => {
        nativeToast({
          message: 'Logout Successful !!!',
          type: 'success',
          icon: false
        });
        this.$router.replace('/login');
      }, (err) => {
        nativeToast({
          message: 'Logout Failed !!!',
          type: 'error',
          icon: false
        });
      })
    },
    deleteLocation(location) {
      db.collection('locations').doc(location['.key']).delete();
    }
  },
  firestore() {
    return {
      locations: db.collection('locations').orderBy('createdAt'),
    }
  },
  created() {
    this.loggedInUser = firebase.auth().currentUser.email;
    console.log(db.collection('locations').doc())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoutButton{
    float: right;
    right: 20px;
    position: absolute;
    top: 25px;
    cursor: pointer;
}
.panel-text {
  line-height: 25px;
  font-size: 15px;
}
.removeButton {
  float: right;
  line-height: 25px;
}
.small-button{
  padding: 4px 9px;
}
.slide-fade-enter-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
