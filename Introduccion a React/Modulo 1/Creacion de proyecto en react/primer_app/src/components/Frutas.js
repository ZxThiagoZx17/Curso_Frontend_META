export function Manzanas(props) {
     return (
        <div className="promo-section">
            <div>
                <h2>Las manzanas son: {props.color}</h2>
                </div>
                <div>
                <h3>Hay {props.number} manzanas.</h3>
            </div>
        </div>
     )
    }

export function Peras(props) {
        return (
            <h2>No me gustan las peras pero a mi amigo, {props.friend}, le encantan</h2>
        )
    }