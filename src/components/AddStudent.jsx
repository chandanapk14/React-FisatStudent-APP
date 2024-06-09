import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const[data,setData]=useState(
        {
         "id":"",
         "firstname":"",
         "lastname":"",
         "college":"",
         "dob":"",
         "course":"",
         "mobile":"",
         "email":"",
         "address":"",
         "__v":""
        }
    )
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    } 
    const readvalue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <h1><center>ADD STUDENT</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control"  name="id" value={data.id} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">FIRSTNAME</label>
                        <input type="text" className="form-control" name="firstname" value={data.firstname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">LASTNAME</label>
                        <input type="text" className="form-control" name="lastname" value={data.lastname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">COLLEGE</label>
                        <input type="text" className="form-control" name="college" value={data.college} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">DOB</label>
                        <input type="date" id="" className="form-control" name="" value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">COURSE</label>
                        <input type="text" className="form-control" name="course" value={data.course} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">MOBILE</label>
                        <input type="text" className="form-control" name="mobile" value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">EMAIL</label>
                        <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">ADDRESS</label>
                        <input type="text" className="form-control" name="address" value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">___V</label>
                        <input type="text" className="form-control" name="__v" value={data.__v} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><br></br>
                            <button className="btn btn-success" onClick={readvalue}>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent