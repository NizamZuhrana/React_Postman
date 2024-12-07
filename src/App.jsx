import axios from 'axios';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './index.css'
import { useState,useEffect } from 'react'

function App() {
  // const [name, setName] = useState("Nizam")

  // const handleClick = () => {
  //   setName("gus")
  // }

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  // const [count, setCount] = useState(0)

  // const handleTambah = (number) => {
  //   setCount(count + number)
  // }

  // const handleKurang = (number) => {
  //   setCount(count - number)
  // }

  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  const getData = () => {
    axios
    .get("https://api.escuelajs.co/api/v1/products/")
    .then(res => {
      setProducts(res.data);
    })
    .catch(err => {
      console.log("err" ,err)
    })
  }
  const getDataUsers = async () => {
    try {
      const res = await axios.get("https://api.escuelajs.co/api/v1/users/");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  
  // lifecycle method (mounting, updating, unmounting)
  useEffect(() => {
    getDataUsers();
    getData();
  }, [])
  
  return (
    <>
      {/* <h1>nama saya {name}</h1>
      <button onClick={handleClick}>ganti nama</button> */}
      {/* <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}/><br/> */}
      {/* <h1>{count}</h1> */}
      {/* <Navbar onIncrease={handleTambah} onDecrease={handleKurang}/> */}
      <h1>test</h1>
       {
        products.map(product => {
          return (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <p>{product.price}</p>
              <img src={product.images[0]} alt="" />
            </div>
          )
        })
       } 
      {/* ngrender data user [nama, avatar, email] */}
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
              <img src={user.avatar} alt="" />
            </div>
          )
        })
      }
    </>
  )
}

export default App

