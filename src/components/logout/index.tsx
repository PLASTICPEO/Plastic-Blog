// import CustomButton from "../button";
// import { AUTH_TOKEN } from "../../api/constants/constants";
// import { useContext } from "react";
// import { AppContext } from "../../context/ContextProvider";
// import { setAuthorizationHeader } from "../../api/services";
// import { Link } from "react-router-dom";

// const Logout = () => {
//   const { setLogSuccess, setAuthUserInfo } = useContext(AppContext);
//   const handleLogout = () => {
//     localStorage.removeItem(AUTH_TOKEN);
//     setAuthorizationHeader("");
//     setAuthUserInfo(null);
//     setLogSuccess(false);
//   };

//   return (
//     <div>
//       <Link to={"/"}>
//         <CustomButton
//           triggerProps={{
//             onClick: handleLogout,
//           }}
//           title="Sign out"
//           path=""
//         />
//       </Link>
//     </div>
//   );
// };

// export default Logout;
