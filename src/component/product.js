import React from "react";
const Mobil = (hamdeh) => {
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
    </div>
  );
};

export default Mobil;