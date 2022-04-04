class Sensor {
    constructor(id) {
        this.id = id;
        this.powerStatus = 'off';
        this.status = 'idle'
        this.reportingInterval = 10000;
    }

    turn(set) {
        if(this.powerStatus === set){
            throw Error()
        } else if (set === 'off') {
            return this.powerStatus = set;
        } else {
            this.powerStatus = set;
            this.do()   
        }
    }

    do() {
        setTimeout(() => {
            this.status = 'sensingDistance';
            setTimeout(() => {
                this.status = 'reportingData';
                setTimeout(() => {
                    this.status = 'idle';   
                },1000)
            }, 500)
        },10000)
    }

    update() {
        return this.reportingInterval = 3000;
    }

}


class IotServer extends Sensor {
    constructor(){
        super()
    }

    start([sensor]) {
        console.log([sensor])
        return [sensor];

    }
  
    publish({deviceId, actionId, payload}) {
        if (actionId === 'CHANGE_REPORTING_INTERVAL'){
            return this.update()

        }
    }
}


module.exports = {
    Sensor,
    IotServer,
};
