import React from 'react';
import './result.css';
import frd from '../assests/friend.jpg';
import love from '../assests/love.jpg';
import affectinate from '../assests/affectinate.jpg';
import marrige from '../assests/marrige.jpg';
import enemy from '../assests/enemy.jpg';
import sibling from '../assests/sister.jpg';

const Result = () => {
  const result=localStorage.getItem('result');
  const partner=localStorage.getItem('partner');
  localStorage.clear();

  const imgSrc={
    f:frd,
    l:love,
    a:affectinate,
    m:marrige,
    e:enemy,
    s:sibling
  }
  const results={
    f:`You and ${partner} are Friends`,
    l:`You and ${partner} are Lovers`,
    a:`${partner} having affection on You`,
    m:`You will Marry ${partner}`,
    e:`You and ${partner} are Enemies`,
    s:`You and ${partner} are Siblings`
  }
  return (
    <div className='img_container'>
        <img src={imgSrc[{result}]} alt ="result" className='result'></img>
        <h2>{results[result]}</h2>
    </div>
  )
}

export default Result;