import React, { Fragment } from "react";


const ShowUser = ({currentUser}) => {
    console.log(currentUser)

    const formatDate = (date) => {
        var date = new Date(date);
        date.setHours(0, 0, 0, 0);
        return date.toDateString();
    }

    return <Fragment>
<div className="modal" id="userModal">
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">{`${currentUser.first_name}  ${currentUser.last_name}`}</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>
      <div className="modal-body container">
          <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4 float-left">
                <img style={{borderRadius: "50%", width: 200, height: 200}} src={currentUser.image_url} alt="Avatar" />
                </div>
                <div className="col-sm-4"></div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 text-right">Address: </div>
            <div className="text-left">{currentUser.street}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">City: </div>
            <div className="text-left">{currentUser.city}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">State: </div>
            <div className="text-left">{currentUser.state}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">Postal Code: </div>
            <div className="text-left">{currentUser.postcode}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">Email: </div>
            <div className="text-left">{currentUser.email}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">Phone: </div>
            <div className="text-left">{currentUser.phone}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">Date Of Birth: </div>
            <div className="text-left">{formatDate(currentUser.dob)}</div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-6 text-right">Gender: </div>
            <div className="text-left">{currentUser.sex}</div>
          </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>

}


export default ShowUser;