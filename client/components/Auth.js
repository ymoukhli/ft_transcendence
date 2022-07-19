import { signIn } from "next-auth/react"
import { Fragment } from "react/cjs/react.development"

function Landing() {
    return (
        <div>
            <Fragment>
                <a onClick={signIn}>
                    <img src="/google-logo.png" alt="" />
                    Sign In With Google
                </a>
            </Fragment>
        </div>
    )
}

export default Landing