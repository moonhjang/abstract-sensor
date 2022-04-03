class Sensor {
    constructor(id) {
        this.id = id;
        this.powerStatus = 'off'
    }

    turn(on) {
        return this.powerStatus = on
    }
}

class IotServer {}


const sensor = new Sensor('id1');
console.log(sensor.powerStatus,'off')

sensor.turn('on');
console.log(sensor.powerStatus,'on')