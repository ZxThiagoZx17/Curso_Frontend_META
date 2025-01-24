// Las claves o Keys son identificadores unicos que le ayudan a React a identificar si se ha agregado, modificado o eliminado algun elemento dentro de una lista o conjunto de elementos, tambien instruyen como tratar a un elemento en especifico cuando se hace un cambio en el y si su estado interno debe conservarse o no 

// Son indispensables para evitar reprocesos, mejorar el rendimiento y la optimizacion, si no se asignan claves, React muestra una advertencia en la consola (Porque no puede realizar correctamente el renderizado)

// Un ejemplo de uso de las keys es el siguiente:

{/* <ul>
    <li>Cerveza</li>
    <li>Vino</li>
</ul> */}

// Es la lista de bebidas de un bar, si agregamos una bebida:

{/* <ul>
    <li>Cerveza</li>
    <li>Vino</li>
    <li>Whisky</li>
</ul> */}

// Los items cerveza y vino van a coincidir y finalmente se integra el nuevo elemento Whisky, sin embargo, si se inserta de primeras en vez de ultimo, el algoritmo empeorara en su rendimiento porque mutara todos los elementos secundarios innecesariamente

// Para resolver ese problema, react nos trae keys:

{/* <ul>
    <li key = 'cerveza'>Cerveza</li>
    <li key = 'vino'>Vino</li>
</ul> */}

{/* <ul>
    <li key = 'cerveza' >Cerveza</li>
    <li key = 'vino' >Vino</li>
    <li key = 'whisky' >Whisky</li>
</ul> */}

// En este caso React ahora sabe que el elemento Whisky es nuevo y que los elementos cerveza y vino simplemente se movieron

// Una regla importante sobre keys es que tiene que ser unico entre sus hermanos, esto permite que react utilice muchos elementos de lista, de esta manera evitamos que se realicen reprocesos innecesarios y mas con casos como el que acabamos de ver donde unicamente cambia la posicion de los items y se agrega uno nuevo  

// Los ID por lo general son reflejados por la base de datos, esto ayuda a que siempre sea unica, en casos donde no tengamos base de datos ni un ID adecuado podemos acudir a generar nuestras propias ID's ya sea mediante librerias externas o funciones dedicadas a eso como math.random o utilizando un indice de elementos que guarda la posicion de los elementos segun su orden y garantizan el que no se repitan

// Si el arreglo va a cambiar de orden es aconsejable NO USAR INDICES COMO CLAVE

// Si se usan de manera incorrecta podemos causar un impacto negativo en rendimiento