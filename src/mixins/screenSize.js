export const screenSize = {
  computed: {
    screenSize() {
      return window.innerWidth
    },
    xs() {
      return this.screenSize < 576
    },
    sm() {
      return this.screenSize >= 576 && this.screenSize < 768
    },
    md() {
      return this.screenSize >= 768 && this.screenSize < 960
    },
    lg() {
      return this.screenSize >= 960 && this.screenSize < 1600
    },
    xl(){
      return this.screenSize >= 1600 && this.screenSize
    }
},
}
