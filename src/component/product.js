import React from "react";
import { useState } from "react";

const Mobil = (hamdeh) => {
  const [counter, setCounter] = useState(0);
      const hitung = () => {
          setCounter(counter + 1);
      }
      const kurang = () =>{
          setCounter(counter - 1);
      }
      let info;
      if (counter === 0) {
          info = <div className="keranjang" onClick={hitung}>add </div>       
      }
      else{
          info= <div className="show-keranjang"><button onClick={hitung} className="button"> [+] </button>
                  <d>ini hitungan {counter}</d>
                  <button onClick={kurang} className="button"> [-] </button></div>
      }
  return (
    <div className='card'>
      <img style={{
        width: "100%",
        height: "200px",
        borderRadius: '10px 10px 0px 0px' 
      }} src={hamdeh.ling_poto}  alt="car"/>
      <div className='container'>
        <h4>
          <b>{hamdeh.nama_mobil}</b>
        </h4>
        <p>
          {hamdeh.deskripsi_mobil}
        </p>
      </div>
      <div className="card-keranjang">
        {info}
      </div>
    </div>
  );
};

export default Mobil;

//2:26