import { useEffect, useState } from "react";

const C1 = () => {
  const [sayac, setSayac] = useState(0);
  useEffect(() => {
    const surekliIslem1 = setInterval(() => {
      console.log("Interval çalıştı");
    }, 2000);

    return () => {
      clearInterval(surekliIslem1);
      console.log("interval temizlendi");
    };
  }, []);

  return (
    <div className="p-3 m-3 bg-success-subtle">
      C1 Komponenti
      <button onClick={() => setSayac((eskiDeger) => eskiDeger + 1)}>
        {sayac}
      </button>
    </div>
  );
};

export default C1;
