// src/hooks/useAuth.js
import { useState } from "react";

export function useAuth() {
  // For now, just simulate login state
  const [isAuthenticated] = useState(false);
  return { isAuthenticated };
}
