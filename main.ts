input.onButtonPressed(Button.A, function () {
    SPEED += -10
})
input.onButtonPressed(Button.B, function () {
    SPEED += 10
})
let Sekundy = 0
let Minúty = 0
let Hodiny = 0
let SPEED = 100
SuperBit.Servo2(SuperBit.enServo.S1, 0)
SuperBit.Servo2(SuperBit.enServo.S2, 0)
SuperBit.Servo2(SuperBit.enServo.S3, 0)
basic.forever(function () {
    if (Sekundy >= 60) {
        Sekundy = 0
        Minúty += 1
    } else if (Minúty >= 60) {
        Minúty = 0
        Hodiny += 1
    } else if (Hodiny >= 24) {
        Minúty = 0
    } else {
        SuperBit.Servo2(SuperBit.enServo.S1, Sekundy * (270 / 60))
        SuperBit.Servo2(SuperBit.enServo.S2, Minúty * (270 / 60))
        SuperBit.Servo2(SuperBit.enServo.S3, Hodiny * (270 / 24))
    }
    Sekundy += 1
    basic.pause(SPEED)
})
