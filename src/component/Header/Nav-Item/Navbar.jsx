import Profile from "../Search & Profile/Profile";
const Navbar = () => {
    return (
        <div className="lg:w-3/5">
            <ul className="flex justify-center gap-10 mr-6">
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Search</a></li>
            </ul>
        </div>
    );
};

export default Navbar;