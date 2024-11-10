// app/(main)/not-found.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="space-y-8 bg-white" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        <Link href={"/"}>
          <Button>Go back to home</Button>
        </Link>
      </p>
    </div>
  );
}
