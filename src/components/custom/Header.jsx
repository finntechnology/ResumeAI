import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between shadow-lg border static">
      <Link to={"/"}>
        <div className=" text-black text-2xl font-extrabold h-full w-[150px] text-center place-content-center rounded-sm">
          Resume<span className="text-pink-600">AI</span>
        </div>
        {/* <img src="/logo.png" width={100} height={100} /> */}
      </Link>

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
