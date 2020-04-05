import React from 'react';

const UserInfo = props => {
    const {name, year} = props.location.state
    return (
        <div>
            <h1>User Info </h1>
            <p>
                Name user : {name}
            </p>
            <p>
                Year: {year}
            </p>
        </div>
    )
}
// class UserInfo extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>User Info</h1>
//                 <p> 
//                     {props.location.aboutProps.name}
//                 </p>
//             </div>
//         )
//     }
// }

export default UserInfo;