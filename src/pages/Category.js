import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

function Category() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {}, []);

  return <div>Category</div>;
}

export default Category;
