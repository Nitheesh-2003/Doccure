import React from "react";

import SidebarNav from "../sidebar";


const BlankPage =()=> {

    return (
      
        
             <>
                    <SidebarNav />
              {/* Page Wrapper */}
              <div className="page-wrapper">
                <div className="content container-fluid">
                  {/* Page Header */}
                  <div className="page-header">
                    <div className="row">
                      <div className="col-sm-12">
                        <h3 className="page-title">Blank Page</h3>
                      </div>
                    </div>
                  </div>
                  {/* /Page Header */}
                  {/* Blank Page */}
                  <div className="row">
                    <div className="col-sm-12">Contents here</div>
                  </div>
                  {/* /Blank Page */}
                </div>
              </div>
              {/* /Page Wrapper */}
            </>

      
    );
 
}

export default BlankPage;
