import React, { useEffect } from "react";

const C1 = ({ sayac, setSayac }) => {
  useEffect(() => {
    console.log("c1 render oldu");
  }, [sayac]);

  return (
    <div className="bg-success-subtle p-3">
      Ben C1 komponentiyim
      <button
        onClick={() => {
          setSayac((eskideger) => eskideger + 1);
        }}
        className="btn btn-outline-danger"
      >
        {sayac}
      </button>
    </div>
  );
};

export default C1;
