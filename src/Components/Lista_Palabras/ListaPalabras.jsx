import { useEffect, useRef, useState } from "react";
import style from "./ListaPalabras.module.css";
import { useNavigate } from "react-router-dom";
import { addPalabra, resetPalabra } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ListaPalabras = () => {
    const listaGlobal = useSelector(state => state.palabras);
    const [listaLocal, setListaLocal] = useState([]);
    const [texto, setTexto] = useState('');
    const [borrar, setBorrar] = useState(true);
    const [noDispatch, setNoDispatch] = useState(!borrar);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
        const separadorPalabras = (texto) => {
            let palabras = texto.split(/\s+/).filter(str => str.length > 1);
            let palabrasMayus = palabras.map(palabra => palabra.toUpperCase());
            return palabrasMayus
        };

    const listaDerecha = () => {
        if (listaLocal.length>0) {
            return listaLocal.map((element, index) => (
                <div key={index} className={style.palabra}>{element + " <"}</div>
            ));
        }
    };

    useEffect(() => {
        if (texto) {
            let arr = separadorPalabras(texto);
            setListaLocal(arr);
        }
    }, [texto]);

    useEffect(() => {
        if (listaLocal.length>0) {
            dispatch(addPalabra(listaLocal));
            console.log(listaGlobal);
        }
    }, [listaGlobal, listaLocal]);

    useEffect(() => {
        if (listaLocal.length>0) {
            setTexto("");
            dispatch(resetPalabra());
        }
    }, [borrar]);

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
                        value={texto}
                        onChange={e => setTexto(e.target.value)}
                        rows={20}
                        cols={30}
                    />
                </div>
                <div className={style.contPalabras}>
                    <div className={style.contClean}>
                        <h5 className={style.clean} onClick={() => setBorrar(!borrar)}>LIMPIAR</h5>
                    </div>
                    <div className={style.palabras} >
                        {listaDerecha()}
                    </div>
                </div>

            </div>
            <div className={style.divBoton}>
                <button
                    className={style.boton}
                    onClick={() => {
                        if (listaLocal.length == 0) {
                            alert("Ingrese al menos una palabra y ENTER")
                        } else {
                            navigate("/matriz")
                        }
                    }}
                >
                    {"SIGUIENTE >>"}
                </button>
            </div>
        </div>
    )
};

export default ListaPalabras;