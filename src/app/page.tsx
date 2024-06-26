"use client"


import { useState } from 'react';
import axios from 'axios';
import React, { Component } from "react";
import Select from "react-select";
import { createCard } from "./models/api/createCardApplicationService";



export default function Home() {
  const optiongakunen = [
    { value: "syouiti", label: "小学1年生" },
    { value: "syouni", label: "小学2年生" },
    { value: "syousan", label: "小学3年生" },
    { value: "syouyon", label: "小学4年生" },
    { value: "syougo", label: "小学5年生" },
    { value: "syouroku", label: "小学6年生" },
    { value: "tyuuiti", label: "中学1年生" },
    { value: "tyuuni", label: "中学2年生" },
    { value: "tyuusan", label: "中学3年生" },
    { value: "kouiti", label: "高校1年生" },
    { value: "kouni", label: "高校2年生" },
    { value: "kousan", label: "高校3年生" },
    { value: "syakaizin", label: "社会人" }
  ];
  const optiontuki = [
    { value: "itigatu", label: "1月" },
    { value: "nigatu", label: "2月" },
    { value: "sangatu", label: "3月" },
    { value: "sigatu", label: "4月" },
    { value: "gogatu", label: "5月" },
    { value: "rokugatu", label: "6月" },
    { value: "nanagatu", label: "7月" },
    { value: "hatigatu", label: "8月" },
    { value: "kugatu", label: "9月" },
    { value: "juugatu", label: "10月" },
    { value: "juuitigatu", label: "11月" },
    { value: "juunigatu", label: "12月" }
  ];
   const optionhi = [
    { value: "iti", label: "1日" },
    { value: "ni", label: "2日" },
    { value: "san", label: "3日" },
    { value: "yon", label: "4日" },
    { value: "go", label: "5日" },
    { value: "roku", label: "6日" },
    { value: "nana", label: "7日" },
    { value: "hati", label: "8日" },
    { value: "kyuu", label: "9日" },
    { value: "juu", label: "10日" },
    { value: "juuiti", label: "11日" },
    { value: "juuni", label: "12日" },
    { value: "juusan", label: "13日" },
    { value: "juuyon", label: "14日" },
    { value: "juugo", label: "15日" },
    { value: "juuroku", label: "16日" },
    { value: "juunana", label: "17日" },
    { value: "juuhati", label: "18日" },
    { value: "juukyuu", label: "19日" },
    { value: "nijuu", label: "20日" },
    { value: "nijuuiti", label: "21日" },
    { value: "nijuuni", label: "22日" },
    { value: "nijuusan", label: "23日" },
    { value: "nijuuyon", label: "24日" },
    { value: "nijuugo", label: "25日" },
    { value: "nijuuroku", label: "26日" },
    { value: "nijuunana", label: "27日" },
    { value: "nijuuhati", label: "28日" },
    { value: "nijuukyu", label: "29日" },
    { value: "sanjuu", label: "30日" },
    { value: "sanjuuiti", label: "31日" }
  ];
  const optionkyouka = [
    { value: "kokugo", label: "国語" },
    { value: "sannsuu", label: "算数" },
    { value: "suugaku", label: "数学" },
    { value: "eigo", label: "英語" },
    { value: "rika", label: "理科" },
    { value: "syakai", label: "社会" },
    { value: "puroguraminngu", label: "プログラミング" }

  ];
  const [cardName, setCardName] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [reason, setReason] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [errorText, setErrorText] = useState('');
  const sendCardName = day + " " + cardName + " " + subject + " " 
  const sendDescName = reason + '\n' + grade + '\n' + schoolName;

  const handleCreateCard = async () => {
    if(day == "" ){
      setErrorText("全て入力してください")
    }else if(cardName == ""){
      setErrorText("全て入力してください")
    }else if(subject == ""){
      setErrorText("全て入力してください")
    }else if(reason == ""){
      setErrorText("全て入力してください")
    }else if(grade == ""){
      setErrorText("全て入力してください")
    }else if(schoolName == ""){
      setErrorText("全て入力してください")
    }
    console.log(sendCardName,sendDescName)
    createCard({sendCardName,sendDescName})
  };

  return (
      <div className="da" style={{textAlign:'center'}}>
        <h1 className="sa">佐竹塾欠席連絡サイト</h1>
        <h3 className="sa">さたやす</h3>

        {/* 行を合わせたいぜ*/}

      <label>学校<input type="text" style={{ padding: "7px" }} value={schoolName} onChange={(e) => setSchoolName(e.target.value)}></input></label><br />
      <label>学年<input type="text" style={{ padding: "7px" }} value={grade} onChange={(e) => setGrade(e.target.value)}></input></label><br />
      <label>名前<input type="text" style={{padding:"7px"}} value={cardName} onChange={(e) => setCardName(e.target.value)}></input></label><br/>
      <label>日付<input type="text" style={{ padding: "7px" }} value={day} onChange={(e) => setDay(e.target.value)}></input></label><br />
      <label>教科<input type="text" style={{padding:"7px",marginTop:"4px"}} value={subject} onChange={(e) => setSubject(e.target.value)}></input></label><br/>
      <label>理由<input type="text" style={{ padding: "7px", marginTop: "4px" }} value={reason} onChange={(e) => setReason(e.target.value)}></input></label><br />
      <div className="select">

      <select name="kyouka" id="pet-select">
        <option disabled>選んでね</option>
        <option value="kokugo">国語</option>
        <option value="sannsuu">算数</option>
        <option value="suugaku">数学</option>
        <option value="rika">理科</option>
        <option value="syakai">社会</option>
        <option value="eigo">英語</option>
        <option value="eiken">英検</option>
        <option value="programing">プログラミング</option>
        </select>
        <select name="gakunen" id="pet-select">
        <option selected disabled>選んでね</option>
        <option value="kokugo">小学1年生</option>
        <option value="sannsuu">小学2年生</option>
        <option value="suugaku">小学3年生</option>
        <option value="rika">小学4年生</option>
        <option value="syakai">小学5年生</option>
        <option value="eigo">小学6年生</option>
        <option value="eiken">小学1年生</option>
        <option value="programing">プログラミング</option>
        </select>
  </div> 


      <div className="wa">
        <div className="qa"><label>名前<div><input type="namae" className="namae" placeholder="名前を入力してください"/></div></label></div>
        <div className="qa"><label>学年<Select options={optiongakunen} className="gakunen" placeholder="学年を入力してください"/></label></div>
        <div className="qa"><label>日付<div className='hizuke'>
          <Select options={optiontuki} className="hizukee" placeholder="月" />
          <Select options={optionhi} className="hizukee" placeholder="日" /></div></label></div>
        <div className="qa"><label>教科<div className='kyoukaa'><Select options={optionkyouka} className="kyouka" placeholder="教科を入力してください"/></div></label></div>
        <div className="qa"><label>理由<div><input type="namae" className="riyuu" placeholder="例:おなかがいたいため" /></div></label></div>



      {/* いい感じのサイト　https://qiita.com/Hitomi_Nagano/items/c00df24dc24e0329167d */}
        </div>
        <button onClick={handleCreateCard} className="button">送信</button>
    </div>

  );
  
}
