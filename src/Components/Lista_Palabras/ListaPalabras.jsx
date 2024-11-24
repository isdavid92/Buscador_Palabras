import { useState } from "react";
import style from "./ListaPalabras.module.css";

const ListaPalabras = () => {
    const [palabras, setPalabras] = useState('')

    return (
        <div className={style.ListaPalabras}>
            <label
                className={style.labelLista}
                htmlFor="listaPalabras"
            >
                Por favor ingresa aqui la lista de palabras a buscar:
            </label>
            <textarea
                className={style.textareaLista}
                placeholder="Listado de palabras (una por línea)"
                value={palabras}
                onChange={e => setPalabras(e.target.value)}
                rows={10}
                cols={30}
            />
        </div>
    )
};

export default ListaPalabras;