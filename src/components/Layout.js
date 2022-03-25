import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({title = "Title", className, children}) {
    return (
      <main>
        <Header />
          <div>
           <h2>{title}</h2>
           <div className={className}>{children}</div>
          </div>

        <Footer />
      </main>
    ); 
  }
  
  