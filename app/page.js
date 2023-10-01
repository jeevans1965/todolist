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



  let renderTask=<h2>No Task Available</h2>


  if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex items-cnter justify-between mb-5'>
    <div className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl items-cnter font-semibold'>{t.title}</h5>
      <h5 className='text-xl items-cnter font-semibold'>{t.desc}</h5>
    </div>

      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-white text-black px-4 py-2 rounded font-bold'>
        Delete
      </button>
    
      </li>
      
    );
  });
  }


  return (
    <>
      <h1 className='bg-black text-white text-center p-5 m-0 text-5xl font-bold'>My Tode List</h1>
      <form onSubmit={submitHandler}>
        
        <input type="text" 
        className='border-double border-4 border-indigo-800 px-4 py-3 m-5 ' 
        placeholder='Enter title here'
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />


        <input type="text" 
        className='border-double border-4 border-indigo-900 px-9 py-3 m-5 ' 
        placeholder='Enter description here'
        value={desc}
        onChange={(e)=>{
            setdesc(e.target.value)
        }}
        />
        
        <button className='bg-black text-white text-2xl font-bold rounded px-4 py-2 m-5'>
          Add Task
        </button>

      </form>      
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
        
    </>
  )
}

export default page
