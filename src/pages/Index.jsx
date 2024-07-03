import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to the Gallery App</h1>
      <p className="text-lg text-gray-600">Explore and share beautiful images</p>
      <Button className="mt-4" onClick={() => navigate("/gallery")}>
        Go to Gallery
      </Button>
    </div>
  );
};

export default Index;