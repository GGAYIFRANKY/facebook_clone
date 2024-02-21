import Avatar from '@mui/material/Avatar';
import React from 'react';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='https://img.freepik.com/free-photo/nature-design-with-bokeh-effect_1048-1882.jpg?w=740&t=st=1708531380~exp=1708531980~hmac=36c0c6ce3abc1c61339519e463e2ac0b40e4b7468cdc6e62a3b49d2051600e28' alt=''/>
            <Avatar  className='sidebar_avatar'/>
            <h2>Ggayi Franklin</h2>
            <h4>ggayifranklinj@gmail.com</h4>
        </div>

        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>1,345</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNumber'>1,345</p>
            </div>
        </div>
        <div className='sidebar_bottom'>
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar