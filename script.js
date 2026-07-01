
function addToDisplay(data){
    document.querySelector('#display').value += data
}
function clean(){
    document.querySelector('#display').value = ''
}
function apagar(){
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}
function resultado(){
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
}