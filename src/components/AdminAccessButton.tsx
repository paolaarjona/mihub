
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function AdminAccessButton() {
  const { isAdmin } = useAuth();
  
  if (!isAdmin) return null;
  
  return (
    <Link 
      to="/admin"
      className="fixed bottom-4 right-4 z-50 bg-gray-800/20 hover:bg-gray-800/40 text-gray-600 hover:text-gray-800 p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-30 hover:opacity-100"
      title="Panel Admin"
    >
      <Shield size={16} />
    </Link>
  );
}
