"use client";

import { SetStateAction, useState } from "react";
import {
  ChevronLeft,
  Search,
  Eye,
  Edit2,
  Trash2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import UserSearchBar from "@/components/admin/user-search-bar";
import UserCard from "@/components/admin/user-card";
import ViewUserModal from "@/components/admin/view-user-modal";
import EditUserModal from "@/components/admin/edit-user-modal";
import DeleteUserModal from "@/components/admin/delete-user-modal";

const mockUsers = [
  {
    id: 1,
    name: "Ana Paula Rodrigues",
    cpf: "123.456.789-00",
    email: "ana.paula@email.com",
    status: "Ativo",
  },
  {
    id: 2,
    name: "Carlos de Souza",
    cpf: "987.654.321-00",
    email: "carlos.souza@email.com",
    status: "Inativo",
  },
  {
    id: 3,
    name: "Fernanda Lima",
    cpf: "111.222.333-44",
    email: "fernanda.lima@email.com",
    status: "Ativo",
  },
  {
    id: 4,
    name: "João Silva",
    cpf: "555.666.777-88",
    email: "joao.silva@email.com",
    status: "Ativo",
  },
  {
    id: 5,
    name: "Maria Santos",
    cpf: "999.000.111-22",
    email: "maria.santos@email.com",
    status: "Inativo",
  },
];

export default function UserManagementPage() {
  const [users, setUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.cpf.includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleView = (user: SetStateAction<null>) => {
    setSelectedUser(user);
    setViewModalOpen(true);
  };

  const handleEdit = (user: SetStateAction<null>) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  const handleDelete = (user: SetStateAction<null>) => {
    setSelectedUser(user);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setUsers(users.filter((u) => u.id !== selectedUser.id));
    setDeleteModalOpen(false);
    setSelectedUser(null);
  };

  const handleSaveEdit = (updatedUser) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/dashboard">
                <ChevronLeft className="w-5 h-5" />
              </Link>
            </Button>
            <h1 className="text-xl font-bold text-foreground">
              Gestão de Usuários
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Search Bar */}
        <UserSearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Users List */}
        <div className="space-y-4">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Nenhum usuário encontrado</p>
            </Card>
          )}
        </div>
      </main>

      {/* Modals */}
      {viewModalOpen && selectedUser && (
        <ViewUserModal
          user={selectedUser}
          onClose={() => setViewModalOpen(false)}
        />
      )}

      {editModalOpen && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setEditModalOpen(false)}
          onSave={handleSaveEdit}
        />
      )}

      {deleteModalOpen && selectedUser && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}
