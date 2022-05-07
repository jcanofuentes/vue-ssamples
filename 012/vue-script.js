const app = new Vue(
{
  el: '#app',
  data:
  {
    title:'Renderizando HTML',
    html:'',

  },
  methods:
  {
    loadHTML: function()
    {
      this.html =
      `
      <div>
        <p> Primer ejemplo de renderizado HTML (estático) <p>
        Este enlace nos lleva a <a href="https://www.google.es">Google</a>
      <\div>
      `;
    },

    // También se pueden definir las funciones así:
    spanHTML(text) {
      return `<p> ${text} </p>`;
   }
  }
})
