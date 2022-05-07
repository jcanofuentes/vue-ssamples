const app = new Vue(
{
  el: '#app',
  data:
  {
    title:'Hola VUE',
    result:''
  },
  mounted: function()
  {
    console.log('montado');
    this.title = 'Escuchando eventos de teclado [ENTER]'
  },
   methods:
   {
    onEnterPressed: function()
    {
      console.log('Enter pulsado!');
      this.$refs.textInput.value = 'Ahora aprendimos...';
      this.result = 'a detectar eventos de teclado';
    }
   }
});
