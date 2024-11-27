import style from './Matriz.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMatriz } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

const Matriz = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const procesarTexto = (texto) => {
        let letras = texto.split(/[\s,]+/).join('');
        let mayus = letras.toUpperCase();
        return mayus.split('').slice(0, 196);
    };

    const manejarCambio = (e) => {
        setText(e.target.value);
    };

    const manejarClick = () => {
        let letras = procesarTexto(text);
        let matriz = [];
        for (let i = 0; i < 14; i++) {
            matriz.push(letras.slice(i * 14, (i + 1) * 14));
        };
        if (letras.length === 196) {
            dispatch(addMatriz(matriz));
            navigate("/resultado");
        } else if (text == '') {
            alert('El input no puede estar vacío.');
        } else {
            alert(`Debe haber exactamente 196 letras. Letras encontradas: ${letras.length}`);
        }
    };

    const cuadricula = () => {
        let contenido = procesarTexto(text);
        let sopaDeLetras = [];
        for (let i = 0; i < 196; i++) {
            sopaDeLetras.push(
                <div key={i} className={style.letra}>{contenido[i] || ""}</div>
            )
        };
        return sopaDeLetras
    };

    return (
        <div className={style.Matriz}>
            <div className={style.matriz}>
                <div className={style.contIput}>
                    <label
                        className={style.labelMatriz}
                        htmlFor="listaPalabras"
                    >
                        Ingresa aquí la matriz de letras (196 letras):
                    </label>
                    <textarea
                        value={text}
                        onChange={manejarCambio}
                        placeholder="Ingresa aquí la matriz de letras (196 letras)"
                    />
                </div>
                <div className={style.contClean}>
                    <h5 className={style.clean} onClick={() => setText("")}>LIMPIAR</h5>
                </div>
                <div className={style.sopaDeLetras}>
                    {cuadricula()}
                </div>
            </div>
            <button onClick={manejarClick} className={style.boton}>{"BUSCAR >>"}</button>
        </div>
    );
};

export default Matriz;