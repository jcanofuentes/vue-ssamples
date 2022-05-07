const app = new Vue(
{
  el: '#app',
  data:
  {
    title:'Hola VUE',
  },
  methods:
  {
    onClick: function()
    {
      console.log('Click!');
      this.$refs.subtitle_1.innerText = 'Enlace a Google';
      // this.$refs.subtitle_1.href = 'http://www.google.es';
      this.$refs.subtitle_1.style.color = 'red';
      this.$refs.subtitle_2.innerText = 'Enlace a Youtube';
      // this.$refs.subtitle_1.href = 'http://www.google.es';
      this.$refs.subtitle_2.style.color = 'blue';


      this.$refs["input"].value = '';
      this.$refs.input.focus();
    },
    hello: function()
    {
      return 'hi from the method';
    }
  }
})

// También podemos hacer llamadas una vez instanciada la app de VUE
console.log("HTML De la App" + app.$el.innerHTML);
console.log("data De la App" + app.$data);
console.log(app.hello());
console.log(app.$refs);
