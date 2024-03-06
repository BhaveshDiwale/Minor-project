import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LoginContext } from '../../../Store' ;
export default function Login(props) {
    const loginContext = useContext(LoginContext);
    console.log(loginContext)
    const navigate = useNavigate();
    const [userdetail,setUserdetail] = useState({});
    const [token,setToken] = useState("");
    const [username,setUsername] = useState("");
    const handleChange = (e)=>{
        setUserdetail({
            ...userdetail,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(userdetail.username==="" ||userdetail.password===""){
            toast.error("Fill out all the fields")
        }

        else if(userdetail.username.length<8){
            toast.error("Username must be at least 8 characters.")
        }
         if(userdetail.password.length<8){
            toast.error("Password must be at least 8 characters.")
        }

        else{
            const data = await fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdetail),
            });

           const response = await data.json();
           const status = data.status;
            console.log(response)
           if(status===200){
            setToken(response.token);
            // console.log(response.username);
            toast.success(response.msg);
            loginContext.loginDispatch({type:"Completed",username:response.username})
            // navigate(`/${response.category}_dashboard`)
            navigate('/dev_dashboard')
           }
           else if(status===401){
            toast.error(response.msg)
           }
        }
    }

  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Dev&Client    
      </a>
        {userdetail.username}
      <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Alex_Carey_28" required="" onChange={handleChange}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={handleChange}/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Sign in</button>
                  <ToastContainer/> 
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}
