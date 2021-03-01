import HtmlGen from "../components/HtmlGen";
import { useAuth } from "../util/authContext";

function ProtectedPage() {
  const auth = useAuth();
  return (
    <div>
      <HtmlGen />
      <h2>Protected</h2>
      <p>Email: {auth.user.email}</p>
    </div>
  );
}

export default ProtectedPage;
