import { GitGraph, PersonStanding } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const LinkScreen = () => {
  const params = useParams();
  const { id } = params;

  const [linkDetails, setLinkDetails] = useState(null);

  useEffect(() => {
    const getLinkDetails = async () => {
      const res = await axios.get(`http://localhost:5000/api/link/link/${id}`);
      setLinkDetails(res.data);
    };

    getLinkDetails();
  }, [id]);

  return (
    <div className="h-[85vh] container mx-auto py-2">
      <div className="flex items-center justify-around mt-4">
        <div className="font-bold space-y-3">
          <h1 className="text-2xl">
            Original Link: <a href="">https://youtube.com</a>{" "}
          </h1>
          <h1>
            Short Link: <a href="">https://youtube.com/42321c</a>{" "}
          </h1>
          <h1>Total Visitors: 53</h1>
        </div>

        <div>
          <h1>I will show chart here</h1>
        </div>
      </div>
    </div>
  );
};

export default LinkScreen;
