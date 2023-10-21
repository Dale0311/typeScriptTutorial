import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 space-y-4">
        <ul className="text-lg flex space-x-4 justify-center">
          <li>Home</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
      <footer className="py-4 bg-gray-800 text-white mt-auto flex justify-center">
        c: Sample footer here made by Dale pogi
      </footer>
    </div>
  );
}

export default Layout;
