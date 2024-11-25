import { useState } from "react";
import style from "./Matriz.module.css";

const Matriz = () => {
    const [grid, setGrid] = useState('');

    return (
        <div className={style.Matriz}>
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
                rows={10}
                cols={30}
            />
        </div>
    )
};

export default Matriz;