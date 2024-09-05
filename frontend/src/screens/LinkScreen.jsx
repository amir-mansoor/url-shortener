import { GitGraph, PersonStanding } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Chart from "chart.js/auto";

import { Bar, Line } from "react-chartjs-2";
import { useAuth } from "@clerk/clerk-react";

const LinkScreen = () => {
  const params = useParams();
  const { id } = params;

  const [linkDetails, setLinkDetails] = useState(null);

  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn]);

  useEffect(() => {
    const getLinkDetails = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_API_URL}/link/${id}`
      );
      setLinkDetails(res.data);
    };

    getLinkDetails();
  }, [id]);

  const locations = linkDetails?.locations || [];

  const locationCounts = locations?.reduce((acc, location) => {
    acc[location] = (acc[location] || 0) + 1;
    return acc;
  }, {});

  const isEmpty = Object.keys(locationCounts).length === 0;

  const data = {
    labels: isEmpty ? ["No Data"] : Object.keys(locationCounts),
    datasets: [
      {
        label: isEmpty ? "No Clicks Available" : "Number of Clicks",
        data: isEmpty ? [0] : Object.values(locationCounts),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-[85vh] container mx-auto py-2">
      <div className="flex items-center justify-around mt-4">
        <div className="font-bold space-y-3 w-[30%]">
          <h1 className="">
            Original Link:{" "}
            <a target="_tab" href={linkDetails?.originalLink}>
              {linkDetails?.originalLink}
            </a>{" "}
          </h1>
          <h1>
            Short Link:{" "}
            <a target="_tab" href={linkDetails?.shortLink}>
              {linkDetails?.shortLink}
            </a>{" "}
          </h1>
          <h1>Total Visitors: {linkDetails?.clicks}</h1>
        </div>

        <div className="w-[70%]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LinkScreen;
