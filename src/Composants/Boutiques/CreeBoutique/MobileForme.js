import React, { useState,useEffect } from "react";
import axios from 'axios';
import '../../../Styles/BoutiqueStyles/CreeBoutique2.css';
import Autocomplete from '@mui/joy/Autocomplete';
import cover from '../../../assets/images/cover.png';
import profile from '../../../assets/images/profile.png';
import { FaCamera } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import AlertDismissible from "../../../Pieces/AlertSucess";
import AlertDismissibleExample from "../../../Pieces/AlertDismissible";
import TextField  from '@mui/material/TextField';
function MobileForme({function1}) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [stoppage, setStoppage] = useState(false);
    const [categories, setcategories] = useState(null);
    const [Valider, setValider] = useState(false);
    const [page1, setpage1] = useState(true);
    const [page2, setpage2] = useState(false);
    const [page3, setpage3] = useState(false);
    const [page4, setpage4] = useState(false);

  
 
    const [boutiqueInfo, setBoutiqueInfo] = useState({
        nom: '',
        categorie: '',
        bio: '',
        image1: null,
        image2: null,
    });

 
    const categorieSearche =async ()=> {
        let test=null
        try {            
        const response = await fetch('http://localhost:4000/Categorie/boutiques/');
        test = await response.json();
        
        } catch (err) {
        console.error(err.message);
        test = []; 
        }
        setcategories(prevState => test);
        console.log(test);

    }
    useEffect(() => {
        categorieSearche(); 
        },[]);
     
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBoutiqueInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
      };

    const openpage1=()=>{
            setpage1(true);
            setpage2(false);
            setpage3(false);
            setpage4(false);
        }
    const openpage2=()=>{
        setpage1(false);
        setpage2(true);
        setpage3(false);
        setpage4(false);
    }
    const openpage3=()=>{
        setpage1(false);
        setpage2(false);
        setpage3(true);
        setpage4(false);
    }
    const openpage4=()=>{
        setpage1(false);
        setpage2(false);
        setpage3(false);
        setpage4(true);
    }

    function CheckWordInList() {
        const trimmedCategorie = boutiqueInfo.categorie.trim(); 
        
        if (trimmedCategorie && categories) {
        const isWordInList = categories.some(item => item.name.toLowerCase() === trimmedCategorie.toLowerCase());
        setValider(isWordInList);
        } else {
        setValider(false);
        }
    }
  
    useEffect(() => {
        CheckWordInList(); 
    }, [boutiqueInfo.categorie]); 
  
  
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
     const reponse= await axios.post('http://localhost:4000/insert/boutiques', formData, {
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
    return (
<>    {show &&<div className="alertsucces"><AlertDismissible function1={function1}></AlertDismissible></div>}
    {show1 &&<div className="alertsucces"><AlertDismissibleExample function1={function1}></AlertDismissibleExample></div>}
    {stoppage &&<div className="stoppage"><div class="loader"></div></div>}
        

<div className="carousel">
      <div >
       {page1 && <div className="Page1">
          <div className="nav">
          <button onClick={function1}><IoIosClose size={25}/></button>
          </div>
            <div className="body">
              
                <h1>Créez votre Boutique</h1>
                <p>
                  Une Page est espace ou les gens peuvent communiquer publiquemet  avec votre Boutique
                </p>

              
              </div>
              <div className="footter">
              <button onClick={openpage2} >Démarre</button>
              <p>
          En créant une Page, vous acceptez <a>les Règles relatives aux évènements, aux groupes et aux Pages</a>
        </p>
              </div>

            
  
          
        </div>}
        <form onSubmit={handleFormSubmit}>
        {page2 &&<div className="Page2">
          <div className="nav">
          <button onClick={openpage1} ><IoArrowBackOutline size={25}/></button>
          </div>
          <div className="body">
          <h1>Quel est le nom de votre Boutique?</h1>
          <p> Utuliser le nom de votre entreprise , marque ou organisation , ou un nom qui décrit votre boutique</p>
          <TextField type="text"  name="nom"
          label="Nom Boutique"
          value={boutiqueInfo.nom}
          onChange={handleInputChange} className="form-control" id="exampleFormControlInput1" placeholder="Nom de Boutique (obligatoire)"/>
          </div>
          <div className="footter">
          {boutiqueInfo.nom ?<button onClick={openpage3} className="activer" >Suivant</button>:
          <button onClick={openpage2} className="deactiver" >Suivant</button>}

          </div>
        </div>
        }
        {page3&&<div className="Page3">
          <div className="nav">
          <button onClick={openpage2} ><IoArrowBackOutline size={25}/></button>
          </div>
          <div className="body">
          <h1>Quelle est catégorie décrit le mieux {boutiqueInfo.nom} ?</h1>
          <p>Une catégorie permet de trouver Cette Page dans les résultats de recheche .</p>
          {boutiqueInfo.categorie}
          
          {categories && (
                  <Autocomplete
                  startDecorator={<BiCategory />}
                  name="categorie"
                  value={boutiqueInfo.categorie} // Utilisation de la valeur actuelle de boutiqueInfo.categorie
                  onChangeCapture={handleInputChange}
                  classes={{
                    option: 'custom-option-class',
                  }}
                  id="categorie222"
                  placeholder="Nom de la Catégorie"
                  options={categories.map(category => category.name)} 
                />

)}
            {Valider&&<div className="categorie">{boutiqueInfo.categorie}</div>}
          </div>
          <div className="footter">
          {Valider ?<button onClick={openpage4} className="activer" >Suivant</button>:
          <button  className="deactiver" >Suivant</button>}

          </div>
        </div>}

        {page4 &&<div className="Page4">
          <div className="nav">
          <button onClick={openpage3} ><IoArrowBackOutline size={25}/></button>
          </div>
          <div className="body">
            <div className="photoCoverture" style={{backgroundImage: boutiqueInfo.image2 ? `url(${URL.createObjectURL(boutiqueInfo.image2)})`:`url(${cover})`, backgroundSize: 'cover'}}>
                <label className="custom-file-input" htmlFor="file-input">
                <FaCamera />
                </label>
                <input id="file-input" type="file" accept="image/*" name="image2" onChange={handleFileChange} style={{display: 'none'}} /> 
                <div className="photoprofile" style={{backgroundImage:boutiqueInfo.image1 ? `url(${URL.createObjectURL(boutiqueInfo.image1)})`:`url(${profile})`,  backgroundSize: 'cover'}}>
              
                <label className="custom-file-input" htmlFor="file-input2">
                <FaCamera />
                </label>
                <input id="file-input2" type="file" accept="image/*" name="image1" onChange={handleFileChange} style={{display: 'none'}} /> 
            </div>
        
        
        
        </div>
                

             
            </div>
          <div className="footter">
            <button  className="activer"  type="submit" >Terminer</button>
          </div>
        </div>
        }     







        </form>
       
      </div>
      
     
    </div>
</>  );
}

export default MobileForme;
