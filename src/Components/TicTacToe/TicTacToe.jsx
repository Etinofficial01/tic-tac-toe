import React, { useState, useRef } from 'react';
import Circle_icon from '../Assets/circle.png';
import Cross_icon from '../Assets/cross.png';

let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count,setCount] = useState(0);
  let [title, setTitle] = useState("Tic Tac Toe Game In <span class='text-blue-2 '>React</span>");
  let [lock,setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];


  const toggle = (e,num) =>{
    if(lock){
      return 0;
    }
    if(count%2===0)
    {
      e.target.innerHTML = `<img src='${Cross_icon}' class='m-9'>`;
      data[num]="x";
      setCount(count + 1);
    }
    else{
      e.target.innerHTML = `<img src='${Circle_icon}' class='m-9'>`;
      data[num]="o";
      setCount(count + 1);
    }
    checkWinner();
    };

    const checkWinner = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
          won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
          won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
          won(data[8]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
          won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
          won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
          won(data[8]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
          won(data[8]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
          won(data[6]);
        }
    };

    const won = (winner) => {
      setLock(true);
      if(winner==="x")
      {
        setTitle(`Congratulations: <img src=${Cross_icon} class='inline-block h-7' /> wins`);
      }else{
        setTitle(`Congratulations: <img src=${Circle_icon} class='inline-block h-7' /> wins`);
      }
    };

    const reset = () => {
      setLock(false);
      data = ["","","","","","","","",""];
      setTitle("Tic Tac Toe Game In <span class='text-blue-2 '>React</span>");
      box_array.forEach((e)=>{
        e.current.innerHTML = "";
      })
    }
  return (
    <div>
      <div className="container h-screen w-full max-w-[500px] mt-[24px] mx-auto  text-center ">
      <h1 ref={titleRef} className='text-[25px] text-center text-white font-bold' dangerouslySetInnerHTML={{ __html: title }}></h1>
        <div className=' w-full max-w-[464px] mt-6 flex items-center justify-center  mx-auto'>
            <div>
              <div ref={box1} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,0)}}></div>
              <div ref={box2} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer'onClick={(e)=>{toggle(e,1)}}></div>
              <div ref={box3} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,2)}}></div>
            </div>

            <div >
              <div ref={box4} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,3)}}></div>
              <div ref={box5} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,4)}}></div>
              <div ref={box6} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,5)}}></div>
            </div>

            <div>
              <div ref={box7} className='boxes flex h-[120px] w-[120px] bg-[#1f3540] border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,6)}}></div>
              <div ref={box8} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,7)}}></div>
              <div ref={box9} className='boxes flex h-[120px] w-[120px] bg-[#1f3540]  border-[4px] border-solid border-blue-bg rounded-[12px] cursor-pointer' onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>

        <button className='w-[150px] h-[60px] border-none outline-none bg-[#1f3540] cursor-pointer text-blue-2 text-[26px] rounded-[50px] mt-6
        ' onClick={()=>{reset()}}>Reset</button>

      </div>
        
    </div>
  );
};

export default TicTacToe;