import { Link } from "react-router-dom";
export const Header = () =>{
    return (
        <header className="bg-blue-600 p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">MyApp</h1>
            <div className="space-x-4">
              <Link to="/login" className="text-white hover:underline">Login</Link>
              <Link to="/signup" className="text-white hover:underline">Signup</Link>
            </div>
          </nav>
        </header>

    )
}