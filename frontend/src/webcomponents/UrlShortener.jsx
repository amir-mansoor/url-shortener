import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

import React, { useState } from "react";

const UrlShortener = () => {
  const { user } = useUser();
  const [url, setUrl] = useState("");
  const [link, setLink] = useState("");

  const checkUrl = (e) => {
    e.preventDefault();
    if (url.trim() === "") {
      return;
    }
    if (!url.startsWith("https://")) {
      alert("The URL must start with https://");
      return false;
    }
    createShortLink();
  };

  const createShortLink = async () => {
    if (url.trim() === "") {
      return;
    }

    const res = await axios.post("http://localhost:5000/api/link/create", {
      link: url,
      userid: user?.id,
    });
    setLink(res.data);
  };

  return (
    <div className="h-[60vh] text-center container ">
      <h3 className="uppercase py-2 pt-5 text-orange-500 font-bold text-3xl">
        Great connections start with a click
      </h3>
      <h1 className="font-bold text-white text-5xl">
        Sign up for a free account <br /> and put ShortLy to work
      </h1>

      <div className="bg-white w-[50%]  mx-auto mt-5 rounded-md py-5 px-5 text-left ">
        <h1 className="font-bold text-2xl">Shorten a long link</h1>
        <p className="text-gray-400">No credit card required</p>

        <div className="mt-4">
          <h1 className="font-bold">Paste your long link here</h1>
          <form onSubmit={checkUrl}>
            <Input
              type="url"
              pattern="https://.*"
              placeholder="https://example.com/my-long-url"
              className="mt-3"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <Button onClick={checkUrl} className="mt-2">
              Get Your Link For Free
            </Button>
          </form>
        </div>
        {link && (
          <a
            className="mt-2 font-bold text-blue-600"
            target="_href"
            href={link}
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
