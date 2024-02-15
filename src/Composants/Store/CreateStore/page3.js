import { BiErrorCircle } from "react-icons/bi"; 
import { IoIosArrowBack } from "react-icons/io"; 
import React, { useState } from 'react'
import './Style/Three.css'
import { GrFormNext } from 'react-icons/gr'
import FormLabel from '@mui/joy/FormLabel';
import Autocomplete from '@mui/joy/Autocomplete';
import CircularProgress from '@mui/joy/CircularProgress';


function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
function Stepthree({openPage2,openPage4,function1,Storecategory}) {
    const [firstNameError,setFirstNameError]=useState(false);
    const [category, setcategory] = useState(Storecategory);
    let list =['name','description','description2','description3','description4','description5','description6','description7','description8','description9']
   
    const validname=()=>{
      if(category==''||category==null){
        setFirstNameError(true);
      }
      else{
        setFirstNameError(false);
        openPage4();
        function1(category);
      }
     }
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;
    
        if (!loading) {
          return undefined;
        }
    
        (async () => {
          await sleep(1e3); // For demo purposes.
    
          if (active) {
            setOptions([...list]);
          }
        })();
    
        return () => {
          active = false;
        };
      }, [loading]);

      React.useEffect(() => {
        if (!open) {
          setOptions([]);
        }
      }, [open]);
    
  return (
    <div className='three'>
    <div className='header'>    
    <h1>Choose your store category:</h1>

    <h2>Select the category that best describes your store's products or services. </h2>
  </div>
  <div className='main'>
  <Autocomplete
  placeholder="Select the category "
  className="TextField"
  value={category}
  onChange={(event, newValue) => {
    setcategory(newValue);
  }}
  // Ajouter la prop error
  error={firstNameError} // Ajouter la prop error
// Afficher le texte d'aide en fonction de l'erreu       
  open={open}
  onOpen={() => {
    setOpen(true);
  }}
  onClose={() => {
    setOpen(false);
  }}
  options={options}
  loading={loading}
  endDecorator={
    loading ? (
      <CircularProgress size="sm" sx={{ bgcolor: 'background.surface' }} />
    ) : null
  }
/>
{firstNameError && <p className="errer"><BiErrorCircle />Please Select the category that best describes your store's products or services.</p>
 }
      </div>
    
      <div className='footer'>
    <button onClick={openPage2} className="back"><IoIosArrowBack className="IoIosArrowBack"/>Back</button>
    <div className='ss'>
    <button o className='skip'>  
        Skip
    </button>
    <button onClick={validname} className='next'>  
        Next<GrFormNext className="GrFormNext" />
    </button>
    </div>
  </div>
</div>
  )
}

export default Stepthree
