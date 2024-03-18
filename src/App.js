import { useState } from "react";
import C1 from "./C1";

function App() {
  const [c1Kapali, c1AcKapa] = useState(false);
  const [sayac, setSayac] = useState(0);

  return (
    <>
      <div className="container my-5">
        <button
          className="btn btn-success"
          onClick={() => {
            c1AcKapa((eskiDeger) => !eskiDeger);
          }}
        >
          C1 Aç/Kapa
        </button>
        {!c1Kapali && <C1 sayac={sayac} setSayac={setSayac} />}
      </div>
    </>
  );
}

export default App;
