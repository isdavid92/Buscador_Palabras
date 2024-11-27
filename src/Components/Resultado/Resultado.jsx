import { useSelector } from "react-redux";
import style from "./Resultado.module.css";
import { useEffect, useState } from "react";
import useBuscadorPalabras from "../Buscador/Buscador";

const Resultado = () => {
    const palabras = useSelector(state => state.palabras);
    const matriz = useSelector(state => state.matriz);
    const { encontradas, noEncontradas } = useBuscadorPalabras();

    const cuadricula = () => {
        let contenido = matriz;
        let sopaDeLetras = [];
        for (let i = 0; i < 196; i++) {
            sopaDeLetras.push(
                <div key={i} className={style.letra}>{contenido[i] || ""}</div>
            )
        };
        return sopaDeLetras
    };

    useEffect(() => {
        console.log(encontradas);
        console.log(noEncontradas);
    }, [])

    return (
        <div className={style.Resultado}>
            <div className={style.resultado}>
                <div className={style.sopaDeLetras}>
                    {cuadricula()}
                </div>
                <div className={style.palabras}>
                    <div className={style.encontradas}></div>
                    <div className={style.noEncontradas}></div>
                </div>
            </div>
            <div className={style.boton}>
            </div>
        </div>
    )
};

export default Resultado;