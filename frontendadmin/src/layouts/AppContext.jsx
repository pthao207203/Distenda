import React, { createContext, useContext, useState, useEffect } from "react";
import { roleController } from "../controllers/home.controller";

// Tạo Context
const RoleContext = createContext();

// Tạo Provider
export function RoleProvider({ children }) {
  console.log("RoleProvider rendered");
  const [role, setRole] = useState(null) // Lưu thông tin người dùng
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect triggered"); // Log đầu tiên
    async function fetchData() {
      console.log("vaof")
      const result = await roleController(setLoading);
      // console.log(result)
      if (result) {
        setRole(result); // Lưu dữ liệu nếu hợp lệ
      }
    }

    fetchData();
  }, []);
  if (loading) {
    return (
      <div>
        Đang tải...
      </div>
    )
  }
  console.log("app ", role)

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

// Custom hook để sử dụng RoleContext
export function useRole() {
  return useContext(RoleContext);
}