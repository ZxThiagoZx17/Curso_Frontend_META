import lc300 from '../Assets/Images/LC300.jpg';

export default function MostrarImagenes() {
    return(
        <>
            <h1>Forma 1: Metodo de importacion</h1>
            <img alt='LC300' src={lc300}/>
            
            <h1>Forma 2: Utilizando Require</h1>
            <img alt='PORSHE TAYCAN' src={require('../Assets/Images/PORSHETAYCAN.jpg')}/>

            <h1>Forma 3: Utilizando un archivo de internet</h1>
            <img alt='LC300' width={300}src={'https://alciautosmazda.com/wp-content/uploads/2019/09/mazda-cx5-lateral-frente.jpg'}/>
        </>
    );
};