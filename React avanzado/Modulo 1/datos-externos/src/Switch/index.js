import './Styles.css';
import { UsarTema } from '../componentes/ThemeContext';

const Cambiar = () => {
    const[tema, cambiarTema] = UsarTema();

    return(
        <label className='switch'>
            <input
            type='checkbox'
            checked={tema === 'luz'}
            onChange={cambiarTema}
            />
            <span className="slider round"/>
        </label>
    );
};

export default Cambiar;