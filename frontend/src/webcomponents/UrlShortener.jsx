import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const UrlShortener = () => {
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
          <Input
            placeholder="https://example.com/my-long-url"
            className="mt-3"
          />
          <Button className="mt-2">Get Your Link For Free</Button>
        </div>
      </div>
    </div>
  );
};

export default UrlShortener;
