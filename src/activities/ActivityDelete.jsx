import { useState } from "react";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDelete({ id }) {
  const { token } = useAuth();
  const [error, setError] = useState();

  async function tryDeleteActivity(id) {
    setError(null);
    try {
      await deleteActivity(token, id);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    token && (
      <>
        <button onClick={() => tryDeleteActivity(id)}>Delete</button>
        {error && <p role="alert">{error}</p>}
      </>
    )
  );
}
