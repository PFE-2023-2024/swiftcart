// Dashboard.js

import React from 'react';
import '../../../../Styles/Boutiques_Dashboard/Compoants/screen/Dashboard.css'
function Dashboard(props) {
  const data = props.data;
  console.log(data)
  return (
    <div className='Dashboard'>
     <div className=' HomeDashboardnav'>
     Home / Dashboard
     </div>
    <main className='main'>

    </main> 
    </div>
  );
}

export default Dashboard;
