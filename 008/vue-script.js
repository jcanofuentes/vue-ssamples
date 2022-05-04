const app = new Vue(
{
  el: '#app',
  data:
  {
    title:'Calculadora',
    op_1:'1',
    op_2:'2',
    op_3:'3',
    op_4:'4',
  },
  computed:
  {
    resultSum: function()
    {
      let op1 = parseInt(this.op_1 ===''?'0':this.op_1);
      let op2 = parseInt(this.op_2 ===''?'0':this.op_2);
      console.log( op1 + ' + ' + op2 + ' = ' + (op1+op2));
      return op1+op2;
    },
    resultSub: function()
    {
      let op3 = parseInt(this.op_3 ===''?'0':this.op_3);
      let op4 = parseInt(this.op_4 ===''?'0':this.op_4);
      console.log( op3 + ' - ' + op4 + ' = ' + (op3-op4));
      return op3-op4;
    }
  }
});
