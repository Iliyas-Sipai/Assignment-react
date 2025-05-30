import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instFun, updFun } from "./To-dolist/ActionTodo";

const TodoCompo = () => {
  const [info, setInfo] = useState({
    name: "",
  });

  const data = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  const [id, setId] = useState("");

  const handleChnage = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      dispatch(updFun(id, info));
    } else {
      dispatch(instFun(info));
    }
    setId("");
    setInfo({
      name: "",
    });
  };
const updFun = (id)=>{
    let res = data.find((i,index)=> index == id)
    setInfo(res)
    setId(id)
}
  return (
    <>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleChnage}
          id=""
        />
        <input type="submit" value="SaveData" />
      </form>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>To-DO</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i, index) => {
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>Delete</td>
               <td>
                            <button onClick={()=>editFun(index)}>Edit</button>
                            <button onClick={()=>dispatch(delFun(index))}>Delete</button>
                        </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default TodoCompo;
