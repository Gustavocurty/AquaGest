"use client";

import { useAuth } from "@/app/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Olá, {user?.name?.split(" ")[0]}
          </h2>
          <p className="text-sm text-gray-600">
            Bem-vindo de volta ao AquaGest
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* User info */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white font-medium">
              {user?.name?.charAt(0) || "U"}
            </div>
          </div>

          {/* Logout button */}
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="ml-2"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
