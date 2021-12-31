import React,{useState} from 'react'

export default function FormRenderingFunctions() {
  let initialData={
      uname:"",
      pword:"",
      email:""
  }

  let [values,updateValues]=useState(initialData);
   const  changeUserName=(event)=>{
        updateValues({...values,uname:event.target.value})
        }
    const    changeUserPassword=(event)=>{
            updateValues({...values,pword:event.target.value})
            }
            const    changeUserEmail=(event)=>{
                updateValues({...values,email:event.target.value})
                }
    
            
     const   submitUserData=(event)=>{
            event.preventDefault()
            console.log(`${values.uname}  ${values.pword} ${values.email}`)
        }

    return (
        <div className="form">
            <form onSubmit={submitUserData}>
                    <input type="text" value={values.uname}
                     onChange={changeUserName}
                     
                     
                     />
                    <br></br>
                    <input type="text" value={values.pword}
                    onChange={changeUserPassword}/>
                  
                  <br></br>
                    <input type="text" value={values.email}
                    onChange={changeUserEmail}/>


                    <br></br>
                    <button type="submit">Login</button>
                </form>
        </div>
    )
}
