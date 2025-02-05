import React from "react";
import "./styles.css";

export const GrupoRadio = ({onChange, selected, children}) => { 
    
// onChange en las props de GrupoRadio se le asigna la funcion de setSelected y luego al clonar los elementos asignamos onChange que en realidad es setSelected, por eso al accionar el evento en cualquiera de los input, onChange(e.target.value) es lo mismo que setSelected(e.target.value) y asi es como se cambia el estado

    const RadioOptions = React.Children.map(children, (child) => { 
      return React.cloneElement(child, { 
        onChange, 
        checked: child.props.value === selected, 
      }); 
    }); 

    return <div className="RadioGroup">{RadioOptions}</div>; 
   }; 

export const RadioGrupo= ({ value, checked, onChange, children }) => { 

    return ( 
      <div className="RadioOption"> 
        <input 
          id={value} 
          type="radio" 
          name={value} 
          value={value} 
          checked={checked} 
          onChange={(e) => { 
            onChange(e.target.value); 
          }} 
        /> 
        <label htmlFor={value}>{children}</label> 
      </div> 
    ); 
   }; 

