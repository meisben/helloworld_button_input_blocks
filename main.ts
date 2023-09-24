//  If button A is pressed set the state variable to 0 
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    state = 0
})
//  If button B is pressed set the state variable to 1
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    state = 1
})
//  If button B has been pressed, then show a sad face. Otherwise show a happy face
//  Start the program, then run the forever loop
let state = 0
basic.showIcon(IconNames.Happy)
basic.forever(function on_forever() {
    if (state == 1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    
})
