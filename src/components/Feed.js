import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


function Feed() {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
      const loggedInUser = localStorage.getItem("authenticated");
      if (loggedInUser) {
        setauthenticated(loggedInUser);
      }
    }, []);

    if (!authenticated) {
        // Redirect
        return <Navigate replace to="/login" />;
    } else {
        return (
            <h1>
                EDGING FYP
            </h1>
        );
    };
}

export default Feed;