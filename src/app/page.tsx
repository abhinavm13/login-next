"use client";

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();
  const username = Cookies.get('username');

  const handleLogout = () => {
    Cookies.remove('username');
    router.push('/login');
  };

  if (!username) {
    router.push('/login');
    return null;
  }

  return (
    <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
      <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
        <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-black font-light text-4xl bg-yellow rounded-t-xl m-0 py-4">
            Welcome, {username}!
          </h1>
          <div className="p-6">
            <p className="text-center text-black text-lg font-light">
              You are logged in.
            </p>
            <button
              className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white mt-5"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default HomePage;
