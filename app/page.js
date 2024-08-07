import { GoogleAuthProvider } from "firebase/auth";
import {signInWithGoogle} from "@/lib/firebase/auth";

export default function Home() {
  return (
    <div>
      <button onClick={signInWithGoogle}>sign in</button>
    </div>
  );
}
