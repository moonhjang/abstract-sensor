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

module.exports = {
    Sensor,
    IotServer,
};
