import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../components/style.css'  
const Searchbar = () => {
const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState('');
const handleSubmit = (e) => {
  e.preventDefault();

  navigate(`/search/${searchTerm}`)
}
  return(
  <form onSubmit={handleSubmit} autoComplete="off" className="p">
    <div className="flex row ">
      
      <input
      name="search-field"
      autoComplete="off"
      id="seach-field"
      placeholder="Search"   
      type="search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="mmm"
      />
    </div>
  </form>
  )
};

export default Searchbar;
