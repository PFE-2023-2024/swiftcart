import { MdFastfood } from "react-icons/md"; 
import { GrServices } from "react-icons/gr"; 
import { ImBooks } from "react-icons/im"; 
import { CgGames } from "react-icons/cg"; 
import { GiBabyFace } from "react-icons/gi"; 
import { AiOutlineCar } from "react-icons/ai"; 
import { MdSportsBaseball } from "react-icons/md"; 
import { BiBed } from "react-icons/bi"; 
import { GiClothes } from "react-icons/gi";  
import { FiTv } from "react-icons/fi"; 
import { FiSmartphone } from "react-icons/fi"; 
import { AiFillHome } from "react-icons/ai"; 
import { BsPcDisplay } from "react-icons/bs"; 
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { Menu } from 'antd';
import './Style/SearchBar.css'
// Function to create a menu item, adjusted for JavaScript
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const items = [
    getItem('Computing', 'sub1', <BsPcDisplay />, [
        getItem('Printers & Scanners', 'g1', null, [
          getItem('Thermal Printer', '1'),
          getItem('Inkjet Printer', '2'),
          getItem('Laser Printer', '3'),
          getItem('Dot Matrix Printer', '4'),
          getItem('Tank Printer', '5'),
          getItem('Scanner', '6'),
          getItem('Cartridges and Toners', '7'),
        ], 'group'),
        getItem('Computers & Components', 'g2', null, [
          getItem('Desktop Computer', '1'),
          getItem('Laptop', '2'),
          getItem('Server', '3'),
          getItem('Motherboard', '4'),
          getItem('Processor', '5'),
          getItem('Graphics Card', '6'),
            getItem('RAM Memory', '7'),
        
        ], 'group'),
        getItem('Peripherals & Accessories', 'g3', null, [
          getItem('Keyboards and Mice', '1'),
          getItem('Network Equipment', '2'),
          getItem('Chargers and Adapters', '3'),
          getItem('USB Flash Drives', '4'),
          getItem('Bags and Cases', '5'),
          getItem('Hard Drives', '6'),
          getItem('RAM Memory', '7'),
        ], 'group'),
      ]),
    
      getItem('Home Appliances', 'sub2', <AiFillHome />, [
        getItem('Small Appliances', 'g1', null, [
          getItem('Mixers', '1'),
          getItem('Irons', '2'),
          getItem('Coffee Machines', '3'),
          getItem('Electric Kettles', '4'),
          getItem('Microwaves', '5'),
          getItem('Utensils', '6'),
        ], 'group'),
        getItem('Large Appliances', 'g2', null, [
          getItem('Refrigerators', '1'),
          getItem('Freezers', '2'),
          getItem('Air Conditioners', '3'),
          getItem('Fans', '4'),
          getItem('Ovens and Stoves', '5'),
          getItem('Washing Machines', '6'),
        ], 'group'),
      ]),
      getItem('Phones & Tablets', 'sub13', <FiSmartphone />, [
        getItem('Smartphones', 'g1', null, [
          getItem('Apple', '1'),
          getItem('Samsung', '2'),
          getItem('Huawei', '3'),
          getItem('Xiaomi', '4'),
          getItem('Oppo', '5'),
          getItem('Realme', '6'),
        ], 'group'),
        getItem('Tablets', 'g2', null, [
          getItem('Apple', '1'),
          getItem('Samsung', '2'),
          getItem('Huawei', '3'),
          getItem('Lenovo', '4'),
          getItem('Amazon', '5'),
          getItem('Microsoft', '6'),
        ], 'group'),
        getItem('Phone Accessories', 'g3', null, [
          getItem('Cases', '1'),
          getItem('Chargers', '2'),
          getItem('Earphones', '3'),
          getItem('Batteries', '4'),
          getItem('Cables', '5'),
          getItem('Stands', '6'),
        ], 'group'),
      ]),
      getItem('Electronics', 'sub3', <FiTv />, [
        getItem('Televisions', 'g1', null, [
          getItem('Smart TV', '1'),
          getItem('LED TV', '2'),
          getItem('OLED TV', '3'),
          getItem('UHD-4K TV', '4'),
          getItem('QLED TV', '5'),
        ], 'group'),
        getItem('Audio & Hi-Fi', 'g2', null, [
          getItem('Speakers', '1'),
        ], 'group'),
        getItem('Security & Protection', 'g3', null, [
          getItem('Surveillance Camera', '1'),
          getItem('Alarm System', '2'),
          getItem('Motion Detector', '3'),
        ], 'group'),
        getItem('High-Tech', 'g4', null, [
          getItem('Photo & Camera', '1'),
          getItem('Connected Objects & Home Automation', '2'),
          getItem('Electronic Gadgets', '3'),
          getItem('Remote-Controlled Devices', '4'),
        ], 'group'),
        
      ]),
      getItem('Fashion & Beauty', 'sub4', <GiClothes />, [
          getItem('Clothing', 'g1', null, [
          getItem('Men', '1'),
          getItem('Women', '2'),
          getItem('Children', '3'),
          getItem('Baby', '4'),
          getItem('Accessories', '5'),
          getItem('Shoes', '6'),
          ], 'group'),
          getItem('Beauty & Hygiene', 'g2', null, [
          getItem('Perfumes', '1'),
          getItem('Makeup', '2'),
          getItem('Body Care', '3'),
          getItem('Face Care', '4'),
          getItem('Hair Care', '5'),
          getItem('Nail Care', '6'),
          ], 'group'),
      ]),
      getItem('Home & Garden', 'sub5', <BiBed />, [
          getItem('Furniture', 'g1', null, [
          getItem('Bedroom', '1'),
          getItem('Living Room', '2'),
          getItem('Kitchen', '3'),
          getItem('Bathroom', '4'),
          getItem('Office', '5'),
          getItem('Garden', '6'),
          ], 'group'),
          getItem('Decoration', 'g2', null, [
          getItem('Lighting', '1'),
          getItem('Rugs', '2'),
          getItem('Curtains', '3'),
          getItem('Cushions', '4'),
          getItem('Frames', '5'),
          getItem('Mirrors', '6'),
          ], 'group'),
          getItem('Gardening', 'g3', null, [
          getItem('Garden Tools', '1'),
          getItem('Watering', '2'),
          getItem('Plants', '3'),
          getItem('Seeds', '4'),
          getItem('Fertilizers', '5'),
          getItem('Pots & Planters', '6'),
          ], 'group'),
      ]),
      getItem('Sports & Leisure', 'sub6',<MdSportsBaseball />, [
          getItem('Fitness & Bodybuilding', 'g1', null, [
          getItem('Treadmill', '1'),
          getItem('Exercise Bikes', '2'),
          getItem('Strength Training Equipment', '3'),
          getItem('Fitness Accessories', '4'),
          getItem('Electrostimulation', '5'),
          getItem('Yoga & Pilates', '6'),
          ], 'group'),
          getItem('Racquet Sports', 'g2', null, [
          getItem('Tennis', '1'),
          getItem('Badminton', '2'),
          getItem('Squash', '3'),
          getItem('Table Tennis', '4'),
          getItem('Padel', '5'),
          getItem('Combat Sports', '6'),
          ], 'group'),
          getItem('Team Sports', 'g3', null, [
          getItem('Football', '1'),
          getItem('Basketball', '2'),
          getItem('Volleyball', '3'),
          getItem('Rugby', '4'),
          getItem('Handball', '5'),
          getItem('Hockey', '6'),
          ], 'group'),
      ]),
      getItem('Automotive & Motorcycles', 'sub7', <AiOutlineCar />, [
          getItem('Auto Parts', 'g1', null, [
          getItem('Tires', '1'),
          getItem('Batteries', '2'),
          getItem('Brakes', '3'),
          getItem('Exhaust', '4'),
          getItem('Suspension', '5'),
          getItem('Filters', '6'),
          ], 'group'),
          getItem('Auto Accessories', 'g2', null, [
          getItem('Car Radios', '1'),
          getItem('GPS', '2'),
          getItem('Rear View Cameras', '3'),
          getItem('Car Mats', '4'),
          getItem('Car Covers', '5'),
          getItem('Car Chargers', '6'),
          ], 'group'),
          getItem('Motorcycles', 'g3', null, [
          getItem('Helmets', '1'),
          getItem('Gloves', '2'),
          getItem('Jackets', '3'),
          getItem('Pants', '4'),
          getItem('Boots', '5'),
          getItem('Motorcycle Accessories', '6'),
          ], 'group'),
      ]),
      getItem('Food & Beverages', 'sub8',<MdFastfood />, [
          getItem('Groceries', 'g1', null, [
          getItem('Canned Goods', '1'),
          getItem('Pasta', '2'),
          getItem('Rice', '3'),
          getItem('Oils', '4'),
          getItem('Sauces', '5'),
          getItem('Spices', '6'),
          ], 'group'),
          getItem('Drinks', 'g2', null, [
          getItem('Waters', '1'),
          getItem('Fruit Juices', '2'),
          getItem('Sodas', '3'),
          getItem('Teas', '4'),
          getItem('Coffees', '5'),
          getItem('Alcohols', '6'),
          ], 'group'),
          getItem('Fresh Products', 'g3', null, [
          getItem('Fruits & Vegetables', '1'),
          getItem('Meats', '2'),
          getItem('Fish', '3'),
          getItem('Dairy Products', '4'),
          getItem('Delicatessen', '5'),
          getItem('Breads & Pastries', '6'),
          ], 'group'),
      ]),
      getItem('Baby & Child', 'sub9', <GiBabyFace />, [
          getItem('Baby Clothes', 'g1', null, [
          getItem('Bodysuits', '1'),
          getItem('Pajamas', '2'),
          getItem('Dresses', '3'),
          getItem('T-shirts', '4'),
          getItem('Pants', '5'),
          getItem('Coats', '6'),
          ], 'group'),
          getItem('Baby Shoes', 'g2', null, [
          getItem('First Steps Shoes', '1'),
          getItem('Slippers', '2'),
          getItem('Booties', '3'),
          getItem('Sneakers', '4'),
          getItem('Sandals', '5'),
          getItem('Ballet Flats', '6'),
          ], 'group'),
          getItem('Baby Accessories', 'g3', null, [
          getItem('Bottles', '1'),
          getItem('Pacifiers', '2'),
          getItem('Dummy', '3'),
          getItem('Milk', '4'),
          getItem('Diapers', '5'),
          getItem('Strollers', '6'),
          ], 'group'),
      ]),
      getItem('Toys & Games', 'sub10', <CgGames />, [
          getItem('Board Games', 'g1', null, [
          getItem('Card Games', '1'),
          getItem('Board Games', '2'),
          getItem('Dice Games', '3'),
          getItem('Role-Playing', '4'),
          getItem('Strategy Games', '5'),
          getItem('Puzzle Games', '6'),
          ], 'group'),
          getItem('Toys', 'g2', null, [
          getItem('Dolls', '1'),
          getItem('Figurines', '2'),
          getItem('Stuffed Animals', '3'),
          getItem('Vehicles', '4'),
          getItem('Building Blocks', '5'),
          getItem('Creative Toys', '6'),
          ], 'group'),
          getItem('Video Games', 'g3', null, [
          getItem('Playstation', '1'),
          getItem('Xbox', '2'),
          getItem('Nintendo', '3'),
          getItem('PC', '4'),
          getItem('PC Games', '5'),
          getItem('VR Games', '6'),
          ], 'group'),
      ]),
      getItem('Books & Music', 'sub11', <ImBooks />, [
          getItem('Books', 'g1', null, [
          getItem('Novels', '1'),
          getItem('Comics', '2'),
          getItem('Mangas', '3'),
          getItem('Youth Books', '4'),
          getItem('School Books', '5'),
          getItem('Art Books', '6'),
          ], 'group'),
          getItem('Music', 'g2', null, [
          getItem('CDs', '1'),
          getItem('Vinyls', '2'),
          getItem('Cassettes', '3'),
          getItem('Musical Instruments', '4'),
          getItem('Scores', '5'),
          getItem('Music Accessories', '6'),
          ], 'group'),
          getItem('Movies & Series', 'g3', null, [
          getItem('DVDs', '1'),
          getItem('Blu-Rays', '2'),
          getItem('VOD', '3'),
          getItem('TV Series', '4'),
          getItem('Documentaries', '5'),
          getItem('Animated Movies', '6'),
          ], 'group'),
      ]),
      getItem('Services', 'sub12', <GrServices />, [
          getItem('Personal Services', 'g1', null, [
          getItem('Cleaning', '1'),
          getItem('Ironing', '2'),
          getItem('Childcare', '3'),
          getItem('Senior Assistance', '4'),
          getItem('Private Lessons', '5'),
          getItem('Sports Coaching', '6'),
          ], 'group'),
          getItem('Home Services', 'g2', null, [
          getItem('Plumbing', '1'),
          getItem('Electricity', '2'),
          getItem('Painting', '3'),
          getItem('Gardening', '4'),
          getItem('Cleaning', '5'),
          getItem('Moving', '6'),
          ], 'group'),
          getItem('Online Services', 'g3', null, [
          getItem('Website Creation', '1'),
          getItem('Application Development', '2'),
          getItem('Digital Marketing', '3'),
          getItem('Graphic Design', '4'),
          getItem('Web Writing', '5'),
          getItem('Translation', '6'),
          ], 'group'),
      ]),
];

    // Additional categories translated...
  
  

// Click event handler
const onClick = (e) => {
  console.log('click ', e);
};

const MyMegaMenu = () => (
    <Dropdown className="Dropdown" >
    <Dropdown.Toggle className="nav-text"  >
    Category
    </Dropdown.Toggle>

    <Dropdown.Menu>
     <Menu
    onClick={onClick}
    style={{ width: 256 }}
    mode="vertical"
    items={items}
  />
    </Dropdown.Menu>
    </Dropdown>
);

export default MyMegaMenu;
