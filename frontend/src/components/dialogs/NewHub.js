import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, TextField } from '@material-ui/core'
import DeviceHubIcon from '@material-ui/icons/DeviceHub';


function NewHub({ open, onClose }) {
    const [state, setState] = useState({
        hubName: '',
        displayName: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        mobileNo: '',
        landline: '',
        website: ''
    })

    const onInput = (event) => {
       setState({
           ...state,
           [event.target.name]: event.target.value
       });
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        const { address1, address2, ...data } = state;
        const newHub = {...data, address: address1.concat( " " + address2)};
        console.log(newHub);
    }
    return (
        <Dialog open={ open } maxWidth="sm" fullWidth={ true }>
            <DialogTitle>
                <DeviceHubIcon /> Add Hub
            </DialogTitle>
            <DialogContent>
                <div className="row mb-4">
                    <div className="col-md-6 col-12">
                        <TextField value={ state.hubName } onChange={ onInput } required label="Hub Name" name="hubName" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12">
                        <TextField value={ state.displayName } onChange={ onInput } required label="Display Name" name="displayName" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.address1 } onChange={ onInput } required label="Address 1" name="address1" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.address2 } onChange={ onInput } label="Address 2" name="address2" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.country } onChange={ onInput } required label="Country" name="country" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.state } onChange={ onInput } required label="State" name="state" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.city } onChange={ onInput } required label="City" name="city" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.mobileNo } onChange={ onInput } required label="Mobile No" name="mobileNo" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.landline } onChange={ onInput } required label="Landline No" name="landline" className="w-100"></TextField>
                    </div>
                    <div className="col-md-6 col-12 mt-4">
                        <TextField value={ state.website } onChange={ onInput } required label="Website" name="website" className="w-100"></TextField>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={ onSubmit }>Save</Button>
                <Button color="secondary" variant="contained" onClick={ onClose }>Cancel</Button>
            </DialogActions>
        </Dialog>
    )
}

export default NewHub
