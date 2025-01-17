// El flujo de datos en react es unidireccional, va de componentes padre a componentes hijos, los componentes arriba en la jerarquia proveen de datos a los que estan mas abajo y asi hasta el componente que este mas abajo

// Los componentes secundarios no pueden mutar ni cambiar los props, solo los pueden leer y codificar

// React vendria a ser una herramienta que actualiza el DOM remplazando valores en plantillas predefinidas por nosotros por datos que reciben los componentes secundarios, funciona! pero no es interactivo

// Sin embargo hay mas formas de trabajar en React con los datos en componentes, esos datos se denominan estado, todos los datos en React pueden dividirse en datos props y datos de los estados:

// Props: Son datos fuera de los componentes, se reciben para trabajar pero no se pueden mutar, pertenecen a una matriz u objeto

// Estado: Son datos dentro de los componentes que se controlan y se pueden mutar, estos si pertenecen al componente, lo que permite que podamos modificar el valor DENTRO DEL COMPONENTE, lo que nos permitirar MODIFICAR EL HTML EN LA PAGINA

// En la carpeta Modulo 2\intro-eventos\src\compenentes\Promocion se ven 2 ejemplos sobre el flujo de datos en React, tambien datos de Estado y Props 