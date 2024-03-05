import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/utility/Header";
import { useAuth } from "../hooks/useAuth";

// creating private or protected routes
export default function PrivateRoutes() {
  const { auth } = useAuth(); // current auth info
  return (
    <>
      {auth?.user ? (
        <>
          <Header />
          <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
              <Outlet /> {/* pages and routes */}
            </div>
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
