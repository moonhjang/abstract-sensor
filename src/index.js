class Sensor {
    constructor(id) {
        this.id = id;
        this.powerStatus = 'off';
        this.status = 'idle';
        this.reportingInterval = 10000;
    }

    turn(set) {
        if(this.powerStatus === set){
            throw Error()
        } else {
            return this.powerStatus = set;
        }
    }

}

class IotServer {}

module.exports = {
    Sensor,
    IotServer,
};
