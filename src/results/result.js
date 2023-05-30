// import React, { useState } from 'react';
// import './result.css';
// import { updateData } from '../Apis/Api';


// const Result = () => {

//   const[show,setShow]=useState(false);

//   const result=JSON.parse(localStorage.getItem('result'));
//   const partner=JSON.parse(localStorage.getItem('partner'));
//   const userId=localStorage.getItem('id');

//   const flames=['f','l','a','m','e','s'];
//   const index=flames.indexOf(result);
//   const imgSrc=[
//     "https://images.pexels.com/photos/2738167/pexels-photo-2738167.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/2494701/pexels-photo-2494701.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/10362063/pexels-photo-10362063.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://thumbs.gfycat.com/CloudyAmazingGangesdolphin-size_restricted.gif",
//     "https://images.pexels.com/photos/220413/pexels-photo-220413.jpeg?auto=compress&cs=tinysrgb&w=600"
//   ];
//   const results=[
//     `You and ${partner} are Friends`,
//     `You and ${partner} are Lovers`,
//     `${partner} having affection on You`,
//     `You will Marry ${partner}`,
//     `You and ${partner} are Enemies`,
//     `You and ${partner} are Siblings`
//     ]

//   updateData(results[result],userId).then(response=>{

//    setShow(true);
//    localStorage.clear();
//   }).catch(err=>{console.log(err)});


//   const path=imgSrc[index];
//   // const path="https://images.pexels.com/photos/220413/pexels-photo-220413.jpeg?auto=compress&cs=tinysrgb&w=600";
//   const value=results[index];

//   console.log(path);
//   console.log(value)
//   return (
//       <div className='img_container'>
//         {show?<img src={path} alt ="result" className='result'></img>:null}
//         {show?<h2>{value}</h2>:null}
//     </div>
//   )
// }

// export default Result;

import React, { useState, useEffect, useCallback } from 'react';
import './result.css';
import { updateData } from '../Apis/Api';

const Result = () => {
  const [show, setShow] = useState(false);
  const result = JSON.parse(localStorage.getItem('result'));
  const partner = JSON.parse(localStorage.getItem('partner'));
  const userId = localStorage.getItem('id');

  const flames = ['f', 'l', 'a', 'm', 'e', 's'];
  const index = flames.indexOf(result);

  const imgSrc = [
    "https://images.pexels.com/photos/2738167/pexels-photo-2738167.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2494701/pexels-photo-2494701.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10362063/pexels-photo-10362063.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://thumbs.gfycat.com/CloudyAmazingGangesdolphin-size_restricted.gif",
    "https://images.pexels.com/photos/220413/pexels-photo-220413.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];
  const results = [
    `You and ${partner} are Friends`,
    `You and ${partner} are Lovers`,
    `${partner} having affection on You`,
    `You will Marry ${partner}`,
    `You and ${partner} are Enemies`,
    `You and ${partner} are Siblings`
  ];

  const path = imgSrc[index];
  const value = results[index];

  const handleUpdateData = useCallback(async () => {
    try {
      await updateData(value, userId);
      setShow(true);
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }, [value, userId]);

  useEffect(() => {
    handleUpdateData();
  }, [handleUpdateData]);

  console.log(path);
  console.log(value);

  return (
    <div className='img_container'>
      {show && <img src={path} alt="result" className='result' />}
      {show && <h2>{value}</h2>}
    </div>
  );
};

export default Result;
