
export default{
    computed:{
        getResult()
      {
        return (this.dollars*this.rupeeVal)-this.discount;
      }
    }
}