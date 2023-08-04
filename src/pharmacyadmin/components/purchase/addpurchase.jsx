import React, { useState } from 'react';
import SidebarNav from '../sidebar';
import {Product1} from "../imagepath"
import FeatherIcon from 'feather-icons-react';
import SelectField from '../commoncomponent/selectfield';

const AddPurchase=(props)=>{

  const [blogtype, setBlogType] = useState([
    { label: "category", value: 'category' },
    { label: "Injuries", value: 'Injuries' },
    { label: "Cancer", value: 'Cancer' },  
     { label: "Animal diseases", value: 'Animal diseases' },
    { label: "Growth disorders", value: 'Growth disorders' },
    { label: "Rare diseases", value: 'Rare diseases' },      
    { label: "Neoplasms", value: 'Neoplasms' },
    { label: "Inflammations", value: 'Inflammations' },
    { label: "Sleep disorders", value: 'Sleep disorders' },
    { label: "Infectious diseases", value: 'Infectious diseases' },
    { label: "Phytopatholog", value: 'Phytopatholog' },               
  ]);
  const [stateValue, setStateValue] = useState()

 
        return(
            <>
             <SidebarNav />
             <>
              {/* Page Wrapper */}
              <div className="page-wrapper">
                <div className="content container-fluid">
                    {/* Add Purchase */}
                    <div className="row">
                      <div className="col-md-8">
                          <h5 className="mb-3">Add Purchase</h5>
                          <form method="post" className="supplier-form">
                            <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group form-focus">
                                      <input type="text" className="form-control floating" />
                                      <label className="focus-label">
                                      Medicine Name <span className="text-danger">*</span>
                                      </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                   <div className="form-focus">
                                    <SelectField 
                                     
                                      options={blogtype}
                                      errorMessage={""}
                                      error={false}
                                      label={false}
                                      placeholder={"category"}
                                      isRequired={false}
                                      onChangeValue={(value) => setStateValue(value?.value) }
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group form-focus">
                                      <input type="text" className="form-control floating" />
                                      <label className="focus-label">
                                      Price <span className="text-danger">*</span>
                                      </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group form-focus">
                                      <input type="text" className="form-control floating" />
                                      <label className="focus-label">
                                      Quantity <span className="text-danger">*</span>
                                      </label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group form-focus">
                                      <input type="text" className="form-control floating" />
                                      <label className="focus-label">
                                      Expire Date <span className="text-danger">*</span>
                                      </label>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group">
                                      <div className="change-photo-btn  bg-grey">
                                        <div>
                                            <FeatherIcon icon="upload"/>
                                            <p>Upload File</p>
                                        </div>
                                        <input type="file" className="upload" />
                                      </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <button type="submit" className="btn btn-primary save-btn">
                                  Submit
                                  </button>
                                </div>
                            </div>
                          </form>
                      </div>
                    </div>
                </div>
                {/* /Add Purchase */}
              </div>
              {/* /Page Wrapper */}
              </>
             </>         
        )
     }
  
  
 export default AddPurchase; 