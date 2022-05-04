const app = new Vue({
  el: '#app',
  data: {
    message:'Hola VUE!',
  },
  watch: {
    message: function( newValue, oldValue ){
      console.log('oldValue:', oldValue,'newValue:', newValue);
    }
  }
});
