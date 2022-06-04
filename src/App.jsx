import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./App.css";

export function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [mensagem, setMensagem] = useState("");

  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 18.5 && imc < 24.9) {
      setMensagem("Peso ideal! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 25 && imc < 29.9) {
      setMensagem(
        "Você está levemente acima do peso! Seu IMC: " + imc.toFixed(2)
      );
    } else if (imc >= 30 && imc < 34.9) {
      setMensagem("Cuidado Obesidade grau 1! Seu IMC: " + imc.toFixed(2));
    } else if (imc >= 35 && imc < 39.9) {
      setMensagem("Cuidado Obesidade grau 2! Seu IMC: " + imc.toFixed(2));
    } else if (imc > 40) {
      setMensagem("Cuidado Obesidade grau 3! Seu IMC: " + imc.toFixed(2));
    }

    setPeso("");
    setAltura("");
  }
  return (
    <div className="container-imc">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>
      <div className="area-iput">
        <input
          type="number"
          placeholder="Peso em (kg) Ex:90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="number"
          placeholder="Altura em (cm) Ex:180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <button
          onClick={calcularIMC}
          disabled={peso.length <= 0 || altura.length <= 0}
        >
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>
      <div className="rodapé">
        <p>
          Desenvolvido por{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/GabrielAnjos011"
            className="link-git"
          >
            Gabriel Garcia <FaGithub />
          </a>
        </p>
      </div>
    </div>
  );
}
