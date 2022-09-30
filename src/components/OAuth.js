import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopUp, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import googleIcon from "../assets/svg/googleIcon.svg";

const OAuth = () => {
  return <div>OAuth</div>;
};

export default OAuth;
