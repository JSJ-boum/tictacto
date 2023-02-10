input.onButtonPressed(Button.A, function () {
    Compter += 1
    if (Compter == 1) {
        led.plotBrightness(0, 0, 100)
    } else {
        if (Compter == 2) {
            led.plotBrightness(2, 0, 100)
        } else {
            if (Compter == 3) {
                led.plotBrightness(4, 0, 100)
            } else {
                if (Compter == 4) {
                    led.plotBrightness(0, 2, 100)
                } else {
                    if (Compter == 5) {
                        led.plotBrightness(2, 2, 100)
                    } else {
                        if (Compter == 6) {
                            led.plotBrightness(4, 2, 100)
                        } else {
                            if (Compter == 7) {
                                led.plotBrightness(0, 4, 100)
                            } else {
                                if (Compter == 8) {
                                    led.plotBrightness(2, 4, 100)
                                } else {
                                    if (Compter == 9) {
                                        led.plotBrightness(4, 4, 100)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
let Compter = 0
Compter = 0
basic.forever(function () {
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(1, 2, 255)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(1, 4, 255)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(0, 3, 255)
    led.plotBrightness(2, 1, 255)
    led.plotBrightness(2, 3, 255)
    led.plotBrightness(3, 0, 255)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(3, 2, 255)
    led.plotBrightness(3, 3, 255)
    led.plotBrightness(3, 4, 255)
    led.plotBrightness(4, 1, 255)
    led.plotBrightness(4, 3, 255)
})
