import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchdata=()=>{
        console.log("hello")
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                console.log(response.data)
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchdata()},[])
    return (
        <div>
            <Navbar />
            <h1><center>VIEW ALL</center></h1>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">FIRSTNAME</th>
                                            <th scope="col">LASTNAME</th>
                                            <th scope="col">COLLEGE</th>
                                            <th scope="col">DOB</th>
                                            <th scope="col">COURSE</th>
                                            <th scope="col">MOBILE</th>
                                            <th scope="col">ADDRESS</th>
                                            <th scope="col">__v</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((value, index) => {
                                            return <tr>
                                                <th scope="row">{value._id}</th>
                                                <th scope="row">{value.firstname}</th>
                                                <th scope="row">{value.lastname}</th>
                                                <th scope="row">{value.college}</th>
                                                <th scope="row">{value.dob}</th>
                                                <th scope="row">{value.course}</th>
                                                <th scope="row">{value.mobile}</th>
                                                <th scope="row">{value.email}</th>
                                                <th scope="row">{value.address}</th>
                                                <th scope="row">{value.__v}</th>
                                            </tr>
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll