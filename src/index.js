class Sensor {
    constructor(){
        this.powerStatus = 'off'
        this.status = 'idle'
        this.reportingInterval = 10000
    }

    turn(set){
        if (set === this.powerStatus){
            throw Error()
        } else {
            if (set === 'on'){
                this.powerStatus = 'on'
                setTimeout(()=> {
                    this.status = 'sensingDistance';
                    setTimeout(() => {
                        this.status = 'reportingData';
                        setTimeout(() => {
                            this.status = 'idle'
                        },1000)
                    },500)
                }, this.reportingInterval)
            } else{
                return this.powerStatus = 'off'
            }
        } 
    }

    update(Interval){
        if (this.powerStatus === 'off'){
            return
        } else {
            return this.reportingInterval = Interval
        }
    }

}


class IotServer {
    start(sensors) {
        this.sensors = sensors
    }

    publish(information){
        if(information.actionId === 'CHANGE_REPORTING_INTERVAL'){
            this.sensors.forEach(sensor => {
                sensor.update(information.payload)
            })
        }
    }
}


module.exports = {
    Sensor,
    IotServer,
};



// class Sensor {
//     //클래스 내에서만 작동될때, 
//     //#reportingInterval

//     constructor(id) {
//         this.id = id; 
//         this.powerStatus = 'off';
//         this.status = 'idle'
//         this.reportingInterval = 10000; 
        
//     }

//     turn(set) {
//         if(this.powerStatus === set){
//             throw Error()
//         } else if (set === 'off') {
//             return this.powerStatus = set;
//         } else {
//             this.powerStatus = set;
//             this.do()   
//         }
//     }

//     do() {
//         setTimeout(() => {
//             this.status = 'sensingDistance';
//             setTimeout(() => {
//                 this.status = 'reportingData';
//                 setTimeout(() => {
//                     this.status = 'idle';   
//                 },1000)
//             }, 500) 
//         },this.reportingInterval)
//     }

//     changeInterval(Interval) {
//         if(this.powerStatus === 'off'){
//             return; 
//         } else {
//             return this.reportingInterval = Interval;
//         }       
//     }
// }


// class IotServer extends Sensor {
//     sensors = [];

//     start(sensors) {
//         this.sensors = sensors;
//     }

//     publish(information) {
//         if (information.actionId === 'CHANGE_REPORTING_INTERVAL') {
//             this.sensors.forEach(sensor => {
//                 sensor.changeInterval(information.payload);
//             })
//         }
//     }
// }

