import Image from "next/image";
import React from 'react';

export default function Home() {
  return (
      <div style={{textAlign:"center"}}>
      <h1>さたやす</h1>
        {/* 行を合わせたいぜ*/}
        <label>日付<input type="text" style={{padding:"7px"}}></input></label><br/>
        <label>教科<input type="text" style={{padding:"7px",marginTop:"4px"}}></input></label><br/>
        <label>理由<input type="text"  style={{padding:"7px",marginTop:"4px"}}></input></label><br/>
        <button>送信</button>
    
      </div>

  );
  
}
