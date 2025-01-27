import { useTheme } from "./ThemeContext";

const desserts = [
    {
      name: "Chocolate Cake",
      calories: 400,
      createdAt: "2022-09-01",
    },
    {
      name: "Ice Cream",
      calories: 200,
      createdAt: "2022-01-02",
    },
    {
      name: "Tiramisu",
      calories: 300,
      createdAt: "2021-10-03",
    },
    {
      name: "Cheesecake",
      calories: 600,
      createdAt: "2022-01-04",
    },
  ];

export default function TransformacionListas() {

    const {theme} = useTheme();
    const arreglarPostres = desserts.map(postres => {
        const listaElementos =`${postres.name} tiene ${postres.calories} calorias.`;
        return(
            <li>{listaElementos}</li>
        );
    })

    return(
        <>
            <ul style={{color: theme === "light" ? "black" : "white",}}>
                {arreglarPostres}
            </ul>
        </>
    );
}