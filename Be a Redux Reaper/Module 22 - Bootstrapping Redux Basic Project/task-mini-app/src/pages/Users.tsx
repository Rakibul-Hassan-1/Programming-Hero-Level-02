import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addUser, removeUser, selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Users() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();
  const [newUserName, setNewUserName] = useState("");

  const handleAddUser = () => {
    if (newUserName.trim()) {
      dispatch(addUser({ name: newUserName.trim() }));
      setNewUserName("");
    }
  };

  const handleRemoveUser = (userId: string) => {
    dispatch(removeUser(userId));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  return (
    <div className="h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-muted-foreground">Manage your users</p>
        </div>

        {/* Add User Form */}
        <div className="mb-8 p-6 bg-card rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-4">Add New User</h2>
          <div className="flex gap-4">
            <Input
              placeholder="Enter user name"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleAddUser} disabled={!newUserName.trim()}>
              Add User
            </Button>
          </div>
        </div>

        {/* Users List */}
        <div className="bg-card rounded-lg shadow-md border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Users List</h2>
            <p className="text-muted-foreground">Total users: {users.length}</p>
          </div>
          
          {users.length === 0 ? (
            <div className="p-6 text-center text-muted-foreground">
              No users found. Add a user to get started.
            </div>
          ) : (
            <div className="divide-y">
              {users.map((user) => (
                <div key={user.id} className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">ID: {user.id}</p>
                  </div>
                  <Button
                    onClick={() => handleRemoveUser(user.id)}
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
