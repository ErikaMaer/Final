// import React, { Component } from "react";
// import FacebookLogin from "react-facebook-login";
// import {useHttp} from "../hooks/http.hook";
//
//
//  class Facebook extends Component {
//
//     state = {
//         isLoggedIn: false,
//         userID: "",
//         name: "",
//         email: "",
//         //picture: ""
//     };
//
//     responseFacebook = response => {
//           console.log(response);
//
//         this.setState({
//             isLoggedIn: true,
//             userID: response.userID,
//             name: response.name,
//             email: response.email,
//             //picture: response.picture.data.url
//         });
//     };
//
//     componentClicked = () => console.log("clicked");
//
//     render() {
//         let fbContent;
//           if (this.state.isLoggedIn) {
//          //  fbContent=(
//          //
//          //    );
//         } else {
//             fbContent = (
//                 <FacebookLogin
//                     appId="2771367289648593"
//                     autoLoad={true}
//                     fields="name,email"
//                     onClick={this.componentClicked}
//                     callback={this.responseFacebook}
//                 />
//             );
//         }
//
//         return <div>{fbContent}</div>;
//     }
// }
// export default Facebook