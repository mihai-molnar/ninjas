import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Error() {
    const router = useRouter();

    // redirect user to home page if they try to access the 404 page
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    });

    return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>This page does not exist :(</h2>
            <p>
                Go back to the{" "}
                <Link href="/">
                    <a>homepage</a>
                </Link>
            </p>
        </div>
    );
}
