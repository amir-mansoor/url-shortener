import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RedirectScreen = () => {
  const params = useParams();
  const { id } = params;
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const redirect = async () => {
      if (isMounted) {
        try {
          const res = await axios.get(`http://localhost:5000/api/link/${id}`);
          window.location.href = res.data;
        } catch (error) {
          console.error("Error fetching the original URL:", error);
        }
      }
    };

    redirect();

    return () => {
      isMounted = false; // Cleanup function to prevent multiple calls
    };
  }, [id]);

  return (
    <div className="flex  h-[85vh] justify-center items-center">
      <h1 className="font-bold text-3xl">Wait while we redirect you.</h1>

      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
      </div>
    </div>
  );
};

export default RedirectScreen;
