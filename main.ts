//% weight=0 color=#331199 icon="\uf0ad" block="microbittosu03t"
namespace microbittosu03t {
let readserialdata='';

    //% blockId=setMicrobit block="Initialize Microbit |TX %tx|RX %rx|Baud rate %baudrate "
    //% tx.defl=SerialPin.P0
    //% rx.defl=SerialPin.P1
    //% weight=102
    //% blockExternalInputs = 1
    export function setMicrobit(tx: SerialPin, rx: SerialPin, baudrate: BaudRate) {
        serial.redirect(
            tx,
            rx,
            baudrate
        )
        basic.pause(100)
    }
    //% blockId=returnserialdata1 block="read SU-03t results"
    //% weight=101
    export function returnserialdata1(): string {
         serial.setRxBufferSize(1)
         return serial.readBuffer(1).toHex().toUpperCase()
    }  

    //% blockId=sendserialdata block="su-03t speak string id %id "
    //% weight=100
    export function sendserialdata(id: string) {
            let _a=pins.createBuffer(5)
    	    _a[0] = 170
            _a[1] = 85
            _a[2] = parseInt(id,16)
            _a[3] = 85
            _a[4] = 170
    	    serial.writeBuffer(_a)
    }     
    //% blockId=sendserialdata1 block="su-03t speak  string id %id with integer %_22"
    //% weight=99
    export function sendserialdata1(id: string, _22: number) {
            let _a=pins.createBuffer(9)
    	    _a[0] = 170
            _a[1] = 85
            _a[2] = parseInt(id,16)
            _a[3] = _22 & 0xFF
            _a[4] = _22 >> 8 & 0xFF
            _a[5] = _22 >> 16 & 0xFF
            _a[6] = _22 >> 24 & 0xFF
            _a[7] = 85
            _a[8] = 170
    	    serial.writeBuffer(_a)
    } 
}
