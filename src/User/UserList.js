import React from 'react'
import { Link } from 'react-router-dom';
import './UserList.css';

export default props => {
    const url = "/user_info/" + props.id;
    return (
        <div>
            <div className="user_block">
                <ul>
                    {/* <li>Name: <a href={props.id + 1}>{props.name}</a>, year: {props.year}</li> */}
                    <li>Name: <Link to={{
                        pathname: url,
                        state: {
                            name: props.name,
                            year: props.year
                        }
                    }} >{props.name}</Link>, year: {props.year}</li>
                </ul>
            </div>
        </div>
    )
}