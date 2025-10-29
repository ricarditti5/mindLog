//Variables declared
import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const App = (
  <>
    <h1>Crie as suas notas Aqui</h1>
    const divArea = <div className="noteArea">Não tem nenhuma nota.</div>
    <input className="noteInput" type="text" placeholder="Insira uma nota" />
    <button onClick={addNote}>Adicionar Nota</button>
  </>
);
function addNote() {
  if (!note) return;
}
root.render(App);
