import { act } from "react";
import { Form, Link } from "react-router-dom";

const Nav = ({userName}) => {
    return (
        <>
        <div className="nav">
            <Link to="/">
                <h1>Navbar</h1>
            </Link>
            {/* <h1>Hello {userName}</h1> */}
            {
            userName && (
                <Form
                    method="post"
                    action="/logout"
                    onSubmit={(event) => {
                        if (!confirm("Delete user and all data?")){
                            event.preventDefault()
                        }
                    }}
                >
                    <button type="submit">
                        Delete User
                    </button>

                </Form>
            )
        }
        </div>
        </>
        
    )
}

export default Nav;