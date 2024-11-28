import { useSelector } from "react-redux";

const useBuscadorPalabras = () => {
    const palabras = useSelector(state => state.palabras);
    const matriz = useSelector(state => state.matriz);
    const direcciones = [
      { x: 0, y: 1 },
      { x: 0, y: -1 },
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 1, y: 1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 1 }
    ];

    const enRango = (x, y) => x >= 0 && x < 14 && y >= 0 && y < 14;

    const buscarEnDireccion = (x, y, dir, palabra) => {
        for (let i = 0; i < palabra.length; i++) {
            if (!enRango(x + dir.x * i, y + dir.y * i) || matriz[x + dir.x * i][y + dir.y * i] !== palabra[i]) {
                return false;
            }
        }
        return true;
    };

    const buscarPalabra = (x, y, palabra) => {
        for (let dir of direcciones) {
            if (buscarEnDireccion(x, y, dir, palabra)) {
                return true;
            }
            const palabraReversa = palabra.split('').reverse().join('');
            if (buscarEnDireccion(x, y, dir, palabraReversa)) {
                return true;
            }
        }
        return false;
    };

    const resultado = {
        encontradas: [],
        noEncontradas: []
    };

    palabras.forEach((palabra) => {
        let encontrada = false;
        for (let x = 0; x < 14 && !encontrada; x++) {
            for (let y = 0; y < 14 && !encontrada; y++) {
                if (buscarPalabra(x, y, palabra)) {
                    resultado.encontradas.push(palabra);
                    encontrada = true;
                }
            }
        }
        if (!encontrada) {
            resultado.noEncontradas.push(palabra);
        }
    });

    return resultado;
};

export default useBuscadorPalabras;