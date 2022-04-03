class Sensor {
    constructor(id) {
        this.id = id;
        this.powerStatus = 'off'
        this.status = 'idle'
        this.reportingInterval = 10000
    }

    turn(set) {
        console.log(this.powerStatus, '중간점검')
        if(this.powerStatus === set){
            console.log(this.powerStatus === set,'eror')
        // } else if (set === 'off') {
        //     return this.powerStatus = set;
        } else {
            return this.powerStatus = set;
        }
    }
}

class IotServer {}



const sensor = new Sensor('id1');


sensor.turn('on');
console.log(sensor.powerStatus,'on')

sensor.turn('on');
console.log(sensor.powerStatus,'<<<<<<<<error')


console.log(sensor.status, 'idle')


sensor.turn('off');
console.log(sensor.powerStatus, '<<<<<<<<<off')

console.log(sensor.powerStatus, '최종결과')