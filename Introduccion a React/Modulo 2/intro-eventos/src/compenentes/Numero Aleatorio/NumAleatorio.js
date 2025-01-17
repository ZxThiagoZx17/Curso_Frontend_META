// Esta funcion te invita a adivinar un numero del 1 al 3 con el PC, se incluyen eventos y prompts por parte del usuario

function NumAleatorio() {

    function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('Ingresa un numero');
    alert(`Numero del PC: ${randomNum}, Tu numero: ${userInput}`);
    }

    return (
    <div>
        <h1>Tarea: Agregar un botón y controlar un evento de clic</h1>
        <button onClick={handleClick}>Adivina el número entre 1 y 3</button>
    </div>
    );
}

export default NumAleatorio;