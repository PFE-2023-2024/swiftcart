import React ,{useState,useEffect}from "react";
import { API_BASE_URL } from '../../../config';
import { IoIosClose } from "react-icons/io";
import  '../../../Styles/BoutiqueStyles/FormulerBoutique.css';
import { CgScreen } from "react-icons/cg";
import { FaMobileScreen } from "react-icons/fa6";
import cover from '../../../assets/images/cover.png';
import profile from '../../../assets/images/profile.png';
import axios from 'axios';
import AlertDismissible from "../../../Pieces/AlertSucess";
import AlertDismissibleExample from "../../../Pieces/AlertDismissible";
import TextField  from '@mui/material/TextField';
function Formuler({function1}){
  const [show, setShow] = useState(false);
  const [posible, setposible] = useState(false);
  const [show1, setShow1] = useState(false);
  const [stoppage, setStoppage] = useState(false);
  const [sizeFone, setsizeFone] = useState(false)
  const OpenPhone = () => {
    setsizeFone(true);
  };
  const ClosePhone = () => {
    setsizeFone(false);
  };
  const [boutiqueInfo, setBoutiqueInfo] = useState({
    nom: '',
    categorie: '',
    bio: '',
    image1: null,
    image2: null,
  });
     
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBoutiqueInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
      };
      const Controle = () => {
        if(boutiqueInfo.nom !='' && boutiqueInfo.categorie!='' ){
        setposible(true);}
        if(boutiqueInfo.nom =='' ||boutiqueInfo.categorie==''){
          setposible(false);}
        
      };
     useEffect(() => {
      Controle(); 
      }, [boutiqueInfo]);
    
        
    
      const handleFileChange = (e) => {
        const { name, files } = e.target;
        setBoutiqueInfo((prevInfo) => ({
          ...prevInfo,
          [name]: files[0],
        }));
      };
    
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        setStoppage(true)
        const formData = new FormData();
        formData.append('path', '1/imageBoutique');
        formData.append('files', boutiqueInfo.image1 );
        formData.append('files', boutiqueInfo.image2 );
        formData.append('titre', boutiqueInfo.nom);
        formData.append('datePublication', new Date().toISOString());
        formData.append('categorie', boutiqueInfo.categorie);
        formData.append('admin', 1);
        try {
         const reponse= await axios.post( API_BASE_URL+'/insert/boutiques', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          setShow(true);
          setBoutiqueInfo({
            nom: '',
            categorie: '',
            bio: '',
            image1: null,
            image2: null,
          });
        } catch (error) {
          console.log('eror:', error);
          setShow1(true);
          setBoutiqueInfo({
            nom: '',
            categorie: '',
            bio: '',
            image1: null,
            image2: null,
          });
        }
        
      };


    return(<>
    {show &&<div className="alertsucces"><AlertDismissible function1={function1}></AlertDismissible></div>}
    {show1 &&<div className="alertsucces"><AlertDismissibleExample function1={function1}></AlertDismissibleExample></div>}
    {stoppage &&<div className="stoppage"><div class="loader"></div></div>}
    <div className="Cadre">
    
        <div className=" navcadre">
            <button onClick={function1}><IoIosClose size={25}/></button>
        </div>
        <h1>Créer une Boutique</h1>
        <p>Les internautes accèdent à votre Boutique pour en savoir plus sur vous. Veillez à y inclure toutes les informations dont ils pourraient avoir besoin.</p>
        <form onSubmit={handleFormSubmit}>
      <div className="form">
        
        <TextField
          required
          className="TextField"
          label="Nom Boutique"
          type="text"
          name="nom"
          value={boutiqueInfo.nom}
          onChange={handleInputChange}
          placeholder="Nom de Boutique (obligatoire)"
        />
        <p>Utilisez le nom de votre entreprise, marque ou organisation, ou un nom qui décrit votre Page</p>

        <select
          required
          name="categorie"
          value={boutiqueInfo.categorie}
          onChange={handleInputChange}
          placeholder="Catégorie (obligatoire)"
        >
          <option placeholder="category">Alimentation</option>
                    <option placeholder="category">Vetements et Mode</option>
                    <option placeholder="category">Électronique</option>
                    <option placeholder="category">Magasin de meubles</option>
                    <option placeholder="category">Parfumerie</option>
                    <option placeholder="category">Librairie</option>
                    <option placeholder="category">Sport et Loisirs</option>
                    <option placeholder="category">Automobile</option>
                    <option placeholder="category">Animaux de compagnie</option>
                    <option placeholder="category">Autre</option>
         
        </select>
        <p>Saisissez la catégorie qui vous décrit le mieux.</p>

        <textarea
          name="bio"
          value={boutiqueInfo.bio}
          onChange={handleInputChange}
          cols={3}
          
          placeholder="Bio (facultatif)"
        />
        <p>Dites-en plus sur votre activité.</p>

        <input type="file" accept="image/*" name="image1" onChange={handleFileChange} />
        <p>Ajoutez une image représentative de votre boutique.</p>

        <input type="file" accept="image/*" name="image2" onChange={handleFileChange} />
        <p>Ajoutez une autre image de votre choix.</p>
      </div>

      <div className="piedcadre">
        {posible?<button type="submit" className="posible" >Créer une Boutique</button>:
        <button className="notposible">Créer une Boutique</button>}
        <p>
          En créant une Page, vous acceptez <a>les Règles relatives aux évènements, aux groupes et aux Pages</a>
        </p>
      </div>
    </form>

    </div>

    <div className={`${sizeFone ? 'affichage2' : 'affichage'} `}>
        <div className="affichageNav">
            <h1>Aperçu bureau</h1>
            <div>{<button onClick={ClosePhone}><CgScreen size={25}/></button>}
            {<button onClick={OpenPhone}><FaMobileScreen size={25}/></button>}</div>
        </div>

        <div className="affichageprofile">
            { boutiqueInfo.image2==null &&<div className="photoCoverture"> <img src={cover}></img></div>}
            { boutiqueInfo.image1 == null&& <div className="photoprofile"> <img src={profile}></img></div>}
            { boutiqueInfo.image2 != null &&<div className="photoCoverture"> <img src={(URL.createObjectURL(boutiqueInfo.image2))}></img></div>}
            { boutiqueInfo.image1 != null && <div className="photoprofile"> <img src={(URL.createObjectURL(boutiqueInfo.image1))}></img></div>}
            {boutiqueInfo.nom === '' && <h1 style={{ color: 'rgba(0, 0, 0, 0.363)' }}>Nom de Boutique</h1>}
    {boutiqueInfo.nom !== '' && <h1 >{boutiqueInfo.nom}</h1>}
    
    {boutiqueInfo.bio === '' && <p style={{ color: 'rgba(0, 0, 0, 0.363)' }}>Description de Bio</p>}
    {boutiqueInfo.bio !== '' && <p>{boutiqueInfo.bio}</p>}

        </div>

    </div>
   

    </>)
}
export default Formuler