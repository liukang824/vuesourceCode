export default {
  props:{
    to:{
      type:String,
      require:true,
    },
    tag:{
      type:String,
      default:'a'
    }
  },
  render() {
    // console.log(this.$router.push);
    let tag = this.tag
    return <tag onClick={
        () => this.$router.push(this.to)
    }>
        {this.$slots.default}
    </tag>
}

}