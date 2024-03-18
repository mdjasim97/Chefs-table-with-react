import Navbar from "./Nav-Item/Navbar";
import Profile from "./Search & Profile/Profile";

const Header = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center">
                <h1 className="text-4xl my-4 justify-center lg:justify-start font-bold lg:w-2/5">Recipe Calories</h1>
                <Navbar></Navbar>
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Header;