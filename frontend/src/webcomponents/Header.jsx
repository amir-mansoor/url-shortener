import { Link } from "react-router-dom";
import { SignedIn, useAuth, UserButton, useUser } from "@clerk/clerk-react";
const Header = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  console.log(user?.id);
  return (
    <div className="bg-[#1b2a41]">
      <header className="container">
        <div className="flex justify-between items-center py-4  text-white">
          <h1 className="font-bold text-4xl">
            <Link to="/">ShortLy</Link>
          </h1>

          <div className="space-x-3 font-bold text-xl">
            {isSignedIn ? (
              <div className="flex items-center space-x-3">
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <Link to="/dashboard">Dashboard</Link>
              </div>
            ) : (
              <>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
