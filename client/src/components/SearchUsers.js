import React, {Fragment, useState } from "react";


const SearchUser = () => {

return (
    <Fragment>
        <h1 className="text-center mt-5"> Users </h1>
        <form className="d-flex mt-5">
            <input type="text" className="form-control" />
            <button className= "btn btn-success" >Search </button>
        </form>
    </Fragment>
    
    )

}


export default SearchUser;
