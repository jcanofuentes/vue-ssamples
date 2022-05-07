const app = new Vue(
{
  el: '#app',
  data:
  {
    title:'Hola a',
  },
  methods:
  {
    showMessage: function() {
      console.log( 'press' );
      this.title = this.title + 'l uso de funciones en VUE'
      //return this.title + 'l uso de funciones en VUE'
    }
  }
})
