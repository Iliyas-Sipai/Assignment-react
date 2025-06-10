import React, { useEffect, useState } from "react";
import axios from 'axios'


const JsonCompo = () => {
  const [info, setInfo] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      // let res = data.map((i, index) => {
      //   if (index == id) {
      //     i = data;
      //   }
      //   return i;
      // });
      // setData(res);
       axios.put(`http://localhost:3000/users${id}`,info)
      .then(()=>console.log("update"));
    } else {
      // setData([...data, info]);
     axios.post("http://localhost:3000/users",info)
     .then(()=>console.log("insert"));
    }
    setInfo({
      name: "",
      age: "",
      salary: "",
    });
    setId("");
  };

  const handlChnage = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const disp = () =>{
    axios.get("http://localhost:3000/users")
    .then((res)=>setData(res.data))
  }
  useEffect(()=>{
    disp()
  },[])
  const delData = (id) => {
      /*let res = data.filter((i, index) => {
      return index != id;
    });
    setData(res);*/
  axios.delete(`http://localhost:3000/users/${id}`)
    .then(() => {
      console.log("delete");
      disp();
    })
};
  const aditData = (id) => {
    // let res = data.find((i, index) => {
    //   return index == id;
    // });
    // setInfo(res);
    // setId(id);
      axios.patch(`http://localhost:3000/users/${id}`)
      .then((res)=>setData(res.data))
      // .then((res)=>console.log("adit"))
      setId(id)
  };
  return (
    <>
      <form action="#" onSubmit={saveData}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handlChnage}
        />{" "}
        <br />
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={info.age}
          onChange={handlChnage}
        />{" "}
        <br />
        <br />
        <br />
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          name="salary"
          value={info.salary}
          onChange={handlChnage}
        />{" "}
        <br />
        <br />
        <br />
        <input type="submit" value="saveData" />
      </form>
      <br />
      <br />
      <br />
      <table width="500px">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => {
            return (
              <tr key={index}>
                <td >{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => delData(i.id)}>Delete</button>
                  <button onClick={() => aditData(i.id)}>Adit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default JsonCompo;
