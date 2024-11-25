import { useEffect, useState } from "react";
import style from "./ListaPalabras.module.css";
import { useNavigate } from "react-router-dom";
import { addPalabra } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ListaPalabras = () => {
    const [palabras, setPalabras] = useState('');
    const lista = useSelector(state => state.palabras);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const separadorPalabras = (texto) => {
        let palabras = texto.split(/\s+/).filter(str => str.length > 1);
        let palabrasMayusculas = palabras.map(palabra => palabra.toUpperCase());
        console.log(palabrasMayusculas);
        return palabrasMayusculas
    };

    useEffect(() => {
        const regex = /[\s\t\r\n]/;
        if (regex.test(palabras)) {
            const arrPalabras = separadorPalabras(palabras);
            arrPalabras.forEach(element => {
                dispatch(addPalabra(element));
            });
        };
    }, [palabras]);

    return (
        <div className={style.ListaPalabras}>
            <div className={style.listaPalabras}>
                <div className={style.inputPalabras}>
                    <label
                        className={style.labelLista}
                        htmlFor="listaPalabras"
                    >
                        Ingresar aquí la lista de palabras a buscar:
                    </label>
                    <textarea
                        className={style.textareaLista}
                        placeholder="Listado de palabras (una por línea)"
                        value={palabras}
                        onChange={e => setPalabras(e.target.value)}
                        rows={20}
                        cols={38}
                    />
                </div>
                <div className={style.palabras}>
                    {lista.map((palabra, index) => (
                        <div key={index} className={style.palabra}>{palabra}</div>
                    ))}
                </div>

            </div>
            <div className={style.divBoton}>
                <button className={style.boton} onClick={() => navigate("/matriz")}>
                    {"SIGUIENTE >>"}
                </button>
            </div>
        </div>
    )
};

export default ListaPalabras;