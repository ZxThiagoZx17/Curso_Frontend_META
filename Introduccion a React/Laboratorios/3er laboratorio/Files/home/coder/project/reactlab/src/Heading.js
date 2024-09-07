// function Heading() {
//     return (
//         <h1>Hello, </h1>
//     )
// }

// export default Heading;

function Heading(props) {
    return (
        <h1>Hello, {props.firstName}</h1>
    )
}

export default Heading;
