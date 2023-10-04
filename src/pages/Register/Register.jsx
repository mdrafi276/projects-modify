import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password, name, photo);
        // create user
        createUser(email, password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.error(error)
        })
    } 
    return (
      <div>
        <Navbar></Navbar>
        <div>
          <h1 className="text-3xl my-10 text-center"> Please Register</h1>

          <form
            onSubmit={handleRegister}
            className="card-body md:w-3/4 mx-auto lg:w-1/2"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Regirster</button>
            </div>
          </form>
          <p className="text-center mt-4 ">
            Do not have an accoutn
            <Link className="text-blue-600  hover:underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;