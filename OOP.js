class Cnt {
    constructor(c=0) {
        Cnt.count = c
      }
    static count
    add () {
        Cnt.count+=1
    }
}

class Clk extends Cnt {
    ticktock() {
        setInterval(() =>super.add(), 1000); 
      }
}

let counter = new Cnt(3600)
let clock = new Clk(3600)
console.log(clock)
clock.ticktock()
console.log(counter)
console.log(clock)
counter.add()
console.log(counter)