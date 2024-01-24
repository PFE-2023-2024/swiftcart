
import Button from "react-bootstrap/esm/Button";
import "../Styles/search_bar.css";
import { CiSearch } from "react-icons/ci";
function SearchBar() {
 
  return (
    <a className="search">
      <form>
        <select>
        <option placeholder="category">All</option>
        <option placeholder="category">Alimentation</option>
        <option placeholder="category">Vêtements et Mode</option>
        <option placeholder="category">Électronique</option>
        <option placeholder="category">Magasin de meubles</option>
        <option placeholder="category">Parfumerie</option>
        <option placeholder="category">Librairie</option>
        <option placeholder="category">Sport et Loisirs</option>
        <option placeholder="category">Automobile</option>
        <option placeholder="category">Animaux de compagnie</option>
        <option placeholder="category">Autre</option>
        </select>
      <input type="text" placeholder="search"></input> 
        </form> 
      <button> <CiSearch size={30}  /></button>
       
    </a>
  );
}

export default SearchBar;
