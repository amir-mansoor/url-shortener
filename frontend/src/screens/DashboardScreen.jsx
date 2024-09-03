import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  const { user } = useUser();
  const [userLinks, setUserLinks] = useState(null);

  useEffect(() => {
    const getLinks = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/link/links/${user?.id}`
      );
      setUserLinks(res.data);
    };

    getLinks();
  }, [user?.id]);
  return (
    <div className="h-[85vh] overflow-auto scrollbar-hide container mx-auto py-2">
      <h1 className="text-3xl mt-4 font-bold">Hy {user?.username}</h1>
      <div className="flex flex-wrap">
        {userLinks &&
          userLinks?.map((link) => (
            <div
              key={link._id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
            >
              <div className="p-4 bg-gray-200 text-left mt-2 rounded-md shadow-md">
                <h1 className="flex justify-between">
                  <a href={link.shortLink} target="_tab">
                    {link.shortLink}
                  </a>
                </h1>
                <Link to={`/link/${link._id}`}>
                  <Button className="mt-2">See More</Button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardScreen;
