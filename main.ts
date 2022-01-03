input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        # . . . #
        # . . . #
        `)
    radio.sendNumber(50)
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    EmpangeneDaten = serial.readLine().split(",")
    radio.sendString("" + (EmpangeneDaten[0]))
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # # .
        # . . . #
        # # # # #
        `)
    radio.sendNumber(10)
})
let EmpangeneDaten: string[] = []
radio.setGroup(1)
serial.redirect(
SerialPin.P0,
SerialPin.P14,
BaudRate.BaudRate115200
)
basic.showLeds(`
    # # # . .
    # # # # #
    # # # . .
    # # # . #
    # # # . .
    `)
