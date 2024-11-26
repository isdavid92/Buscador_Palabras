import { useEffect, useState } from "react";
import style from "./Matriz.module.css";
import { useSelector } from "react-redux";

const Matriz = () => {
    const [grid, setGrid] = useState('');
    const palabras = useSelector(state => state.palabras);

    useEffect(() => {
       console.log(palabras);
    },[])

    return (
        <div className={style.Matriz}>
            <div className={style.inputMatriz}>
                <label
                    className={style.labelLista}
                    htmlFor="listaPalabras"
                >
                    Ingresa aqui la matriz de caracteres separada por comas: sopa de letras (196 letras):
                </label>
                <textarea
                    placeholder="Matriz (separada por comas)"
                    value={grid}
                    onChange={e => setGrid(e.target.value)}
                    rows={5}
                    cols={30}
                />
            </div>
            <div className={style.matriz}>
                
            </div>
        </div>
    )
};

export default Matriz;