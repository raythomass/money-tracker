import { Form } from "react-router-dom";

const Intro = () => {
    return (
    <div className="intro">
        <div>
            <h1>Take control of <span className="accent">Your Money</span></h1>
            <p>
                Personal budgeting is the secret to financial freedom.
                Start your journey today.
            </p>
            <Form method="post">
                <input 
                    type="text"
                    name="userName"
                    required
                    placeholder="What is your name?"
                />
                <button type="submit">Create Account</button>

            </Form>
        </div>
    </div>
    )
};

export default Intro;