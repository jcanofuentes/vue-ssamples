const app = new Vue(
{
  el: '#app',
  data:
  {
    title:'Uso de v-bind',
    image:'https://via.placeholder.com/320x240.png',
    imageCounter: 0
  },

  mounted: function()
  {
    console.log('App mounted!');
    this.title = 'Escuchando eventos de teclado [ENTER]'
  },

  methods:
  {
    handleClick: function()
    {
      this.imageCounter++;
      this.image = 'https://loremflickr.com/320/240/random=' + this.imageCounter;
      // this.image = `https://loremflickr.com/320/240/random=${this.imageCounter}`;
      console.log(this.image);
    }
  }
})
