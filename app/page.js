"use client"
import React, { useState } from 'react'


const page = () => {
  const [title,settitle] = useState("")
  const [desc,setdesc] = useState("")
  const [mainTask,setmainTask] = useState([])


  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}]);

    settitle("")
    setdesc("")
    console.log(mainTask)
  }


  const deleteHandler=(i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }



  let renderTask=<h2 className='tracking-wide text-xl font-bold'>
    No Task Available
    </h2>


  if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex bg-amber-800 box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 items-center justify-between mb-4 '>
    <div className='flex justify-between mb-5 w-2/3'>

      <h5 className='text-2xl flex-initial w-34  items-cnter font-semibold'>{t.title}</h5>

      <h5 className='text-xl flex-initial w-64  items-cnter font-semibold'>{t.desc}</h5>
    </div>

      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400 drop-shadow-3xl flex-none hover:bg-red-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4  py-4 rounded font-bold'>
        Remove
      </button>
    
      </li>
      
    );
  });
  }


  return (

    
    <div  > 
      <h1 className='bg-amber-800 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 px-2 text-center text-white p-5 m-0 text-5xl font-bold'>
        My Tode List
      </h1>

      <marquee className="text-2xl">You can add your task's title and it's description, after completion of it you can remove it</marquee>

      <form onSubmit={submitHandler}>
        
        <input type="text" 
        className='border-solid border-2 border-indigo-600 px-11 w-2/6 py-3 m-5 ' 
        placeholder='Enter title here'
        value={title}
        required
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />


        <input type="text" 
        className='border-solid border-2 border-indigo-600 w-3/6  px-11 py-3 m-5 ' 
        placeholder='Enter description here'
        value={desc}
        required
        onChange={(e)=>{
            setdesc(e.target.value)
        }}
        />
        
        <button className='bg-green-400 outline-pink-500  drop-shadow-2xl hover:bg-green-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-2xl font-bold rounded px-4 py-2 '>
          Add Task
        </button>

      </form>      
      <hr/>

      <div className='p-8 bg-yellow-400'>
        <ul >{renderTask}</ul>
      </div>
        
    </div>
  )
}

export default page
