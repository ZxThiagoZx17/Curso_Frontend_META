// function FruitsCounter() {
//     return (
//         <h2>Total fruits: 2</h2>
//     )
// }

// export default FruitsCounter;

function FruitsCounter(props) {
    return (
        <h2>Total fruits: {props.fruits.length}</h2>
    )
}

export default FruitsCounter;