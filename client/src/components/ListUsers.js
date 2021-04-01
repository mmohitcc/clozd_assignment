import React, {Fragment, useEffect, useState} from "react";

import ShowUser from './ShowUser'

const ListUsers = () => {

    const [users, setUsers] = useState([]);
    const [page, setPage] = useState([1])
    const [currentUser, setCurrentUser] = useState([])
    const [listSize, setListSize] = useState([10])


    const handlePageSizeChange = (userPageSizeValue) => {
        if (userPageSizeValue < 0) {
            setListSize(0);
        } else if (userPageSizeValue > 7000) {
            setListSize(7000);
        } else {
            setListSize(userPageSizeValue);
        }
        getUsers();
    }

    const nextPage = () => {
        let nextPage = Number(page) + 1;
        setPage(nextPage);
        getUsers()
        console.log(page)
    }

    const previousPage = () => {
        let previousPage = Number(page) - 1;
        if (previousPage < 0) {
            previousPage = 0;
        }
        setPage(previousPage);
        getUsers();
        console.log(page)
    }

    const updateCurrentUser = (index) => {
        setCurrentUser(users[index])
    }

    const getUsers = async () => {
        try {

            const response = await fetch(`http://localhost:5000/users?page=${page}&size=${listSize}`)
            const jsonData = await response.json()

            console.log(jsonData);
            setUsers(jsonData.rows);
            setCurrentUser(jsonData.rows[0])

        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])



    console.log(users)
return (
    <Fragment>
        <div className="float-right">
            <form className="form-control">
                <label className="ml-2 mr-4"> Number of Users per Page </label>
                <input onChange={event => handlePageSizeChange(event.target.value)} type="number"></input>
            </form>
         </div>
<table className="table mt-5 tetxt-centter">
    <thead>
        <tr>
            <th>
                Profile Pic
            </th>
            <th>
               Name
            </th>
            <th>
                Email
            </th>
            <th>
                city
            </th>
            <th>
                Country
            </th>
        </tr>
    </thead>
    <tbody>
        {/* {users.map(user => (
            <tr>
                <td>
                    {user.first_name}
                </td>
                <td>
                {user.first_name}
                    </td>
                    <td>
                    {user.first_name}
                    </td>
                    <td>
                    {user.first_name}
                    </td>
                    <td>
                    {user.first_name}
                    </td>
            </tr>
        ))} */}
        {users.map( (user, index ) => (
            <tr onClick={() => updateCurrentUser(index)} data-toggle="modal" data-target="#userModal">
                <td><img style={{borderRadius: "50%", width: 50, height: 50}} src={user.image_url} alt="Avatar" /></td>
                <td>{`${user.first_name} ${user.last_name}`}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
                <td>{user.country}</td>
            </tr>
        ))}
    </tbody>
</table>
<button onClick={() => previousPage()} className="btn btn-info float-left">Previous Page</button>
<button onClick={() => nextPage()} className="btn btn-info ml-5 float-right">Next Page</button>
<ShowUser currentUser={currentUser} />
</Fragment>
)
}


export default ListUsers;