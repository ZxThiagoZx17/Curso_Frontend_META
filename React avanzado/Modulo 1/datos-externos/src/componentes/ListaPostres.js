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

export default function ListaPostres() {

    const {theme} = useTheme();

    const bajasCalorias = desserts.filter((postres) =>{
        return(postres.calories < 500);

    }).sort((a, b) => {
        return(a.calories-b.calories)
    }).map((postres)=>{
        return(
            <>
                <ul style={{color: theme === "light" ? "black" : "white",}}>
                    {`${postres.name} - ${postres.calories} cal`}
                </ul>
            </>
        )})
    return(<ul>{bajasCalorias}</ul>);
}