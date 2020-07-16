input.onButtonPressed(Button.A, function () {
    if (colonne == 0) {
        led.unplot(colonne, ligne)
        colonne = 5
        ligne += -1
        if (ligne < 0) {
            ligne = 4
        }
    }
    led.unplot(colonne, ligne)
    colonne += -1
    led.plot(colonne, ligne)
})
input.onButtonPressed(Button.B, function () {
    if (colonne == 4) {
        led.unplot(colonne, ligne)
        colonne = -1
        ligne += 1
        if (ligne > 4) {
            ligne = 0
        }
    }
    led.unplot(colonne, ligne)
    colonne += 1
    led.plot(colonne, ligne)
})
let ligne = 0
let colonne = 0
colonne = 2
ligne = 2
led.plot(colonne, ligne)
