import React, { useState } from 'react';
import SidebarNav from '../sidebar';
import FeatherIcon from 'feather-icons-react';
import SelectField from '../commoncomponent/selectfield';

const EditProduct =(props)=>{

  const [blogtype, setBlogType] = useState([
    { label: "category", value: 'category' },
    { label: "Family Care", value: 'Family Care' },
    { label: "Cancer", value: 'Cancer' },  
     { label: "Fitness &amp; Wellness", value: 'Fitness &amp; Wellness' },
    { label: "Hair care", value: 'Hair care' },
    { label: "Skin care", value: 'Skin care' },      
    { label: "Neoplasms", value: 'Neoplasms' },
    { label: "Women's Care", value: 'Women Care' },
    { label: "Sleep disorders", value: 'Sleep disorders' },
    { label: "Baby care", value: 'Baby care' },             
  ]);

  
  const [stateValue, setStateValue] = useState()

        return(
            <>
             <SidebarNav />
             <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                {/* Edit Product */}
                <div className="row">
                  <div className="col-md-8">
                    <h5 className="mb-3">Edit Product</h5>
                    <form method="post" className="supplier-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-focus">
                            <input type="text" className="form-control floating" />
                            <label className="focus-label">
                              Product Name <span className="text-danger">*</span>
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
                              Discount <span className="text-danger">*</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form-focus">
                            <textarea
                              className="form-control bg-grey floating"
                              defaultValue={""}
                            />
                            <label className="focus-label">
                              Descriptions <span className="text-danger">*</span>
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
              {/* /Edit Product */}
            </div>
            {/* /Page Wrapper */}
          </>

             </>         
        )
     }
  
  
 export default EditProduct; 