basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 500) {
        pins.analogWritePin(AnalogPin.P13, 600)
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
        pins.analogWritePin(AnalogPin.P13, 400)
    }
    if (pins.analogReadPin(AnalogPin.P1) < 500) {
        pins.analogWritePin(AnalogPin.P15, 600)
        led.plot(4, 2)
    } else {
        pins.analogWritePin(AnalogPin.P15, 400)
        led.unplot(4, 2)
    }
})
basic.forever(function () {
	
})
