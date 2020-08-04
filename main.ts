// 替换掉 当引脚P1被按下时
control.onEvent(EventBusSource.MICROBIT_ID_IO_P1, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    money += 1
    basic.showNumber(money)
    robotbit.Servo(robotbit.Servos.S1, 136)
    basic.pause(500)
    robotbit.Servo(robotbit.Servos.S1, 0)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
// 打开存钱罐，取出钱
input.onButtonPressed(Button.AB, function () {
    robotbit.Servo(robotbit.Servos.S1, 136)
    basic.pause(5000)
    robotbit.Servo(robotbit.Servos.S1, 0)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
// 初始化四位数码管
// 和
// money变量
let money = 0
let tm = TM1637.create(
DigitalPin.P2,
DigitalPin.P8,
7,
4
)
money = 0
// 数码显示存钱罐打开次数/硬币数量
basic.forever(function () {
    tm.showNumber(money)
})
