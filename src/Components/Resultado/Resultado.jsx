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
        for (let i = 0; i < 14; i++) {
            let fila = contenido[i] || 14;
            for (let e = 0; e < 14; e++) {
                let letra = fila[e];
                sopaDeLetras.push(
                    <div key={`${i}-${e}`} className={style.letra}>{letra || ""}</div>
                )
            }
        };
        return sopaDeLetras
    };

    const renderPalabras = (ord) => {
        if (ord == "no") {
            return noEncontradas.map((element, index) => {
                return <div key={index} className={style.palabraNo}>- {element}</div>
            })
        } else if (ord == "si") {
            return encontradas.map((element, index) => {
                return <div key={index} className={style.palabraSi}>- {element}</div>
            })
        }
    };

    return (
        <div className={style.Resultado}>
            <div className={style.resultado}>
                <div className={style.sopaDeLetras}>
                    {cuadricula()}
                </div>
                <div className={style.contPalabras}>
                    <div className={style.noEncontradas}>
                        <h5 className={style.h5no}>NO ENCONTRADAS{" ("+noEncontradas.length+")"}</h5>
                        <div className={style.palabras}>
                            {renderPalabras("no")}
                        </div>
                    </div>
                    <div className={style.encontradas}>
                        <h5 className={style.h5en}>ENCONTRADAS{" ("+encontradas.length+")"}</h5>
                        <div className={style.palabras}>
                            {renderPalabras("si")}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.boton}>
            </div>
        </div>
    )
};

export default Resultado;