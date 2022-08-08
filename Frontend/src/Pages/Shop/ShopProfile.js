import *as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ShopImage from "../../images/shop.jpg";
import MapImage from "../../images/map.png";
import Divider from '@mui/material/Divider';

// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';


import '../../css/ShopProfile.css'
// import logo from "../../images/Logo.png";
import { FormControl } from '@mui/material';




function ShopProfile() {
    return(
        <div>
            <FormControl>
            <h3>Login Credentials</h3>
            <Divider />
                <table>
                    <tr>
                        <td><TextField id="outlined-basic" label="Email" variant="outlined" /></td>
                        <td> <Button variant="contained" className='Button'>Edit</Button></td>
                    </tr>
                </table>

                <h3>Shop Details</h3>
                <Divider />
                <table>
                    <tr>
                        <td><TextField id="outlined-basic" label="Shop name" variant="outlined" /></td>
                        <td><TextField id="outlined-basic" label="Shop registraiton number" variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td><TextField id="outlined-basic" label="Shop Address" variant="outlined" /></td>
                        <td><TextField id="outlined-basic" label="Contact number" variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td> <img src ={ShopImage} alt="sampleimage" className='Image'/></td>
                        <td><img src ={MapImage} alt="sampleimage"  className='Image'/></td>
                    </tr>

                </table> 

                <h3>Shop Owner Details</h3>
                <Divider />
                <table>
                    <tr>
                        <td><TextField id="outlined-basic" label="Name" variant="outlined" /></td>
                        <td><TextField id="outlined-basic" label="Email" variant="outlined" /></td>
                    </tr>
                    <tr>
                        <td><TextField id="outlined-basic" label="Address" variant="outlined" /></td>
                        <td><TextField id="outlined-basic" label="Contact number" variant="outlined" /></td>
                    </tr>
                </table> 
                </FormControl>
           
        </div>   
    )       
}
export default ShopProfile;