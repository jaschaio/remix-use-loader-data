import { Form } from '@remix-run/react';

export const action = async ( { request } ) => {

    const formData = await request.formData();

    const { username } = Object.fromEntries( Array.from( formData.entries() ) )

    return new Response( null, {
        status: 301,
        headers: {
            Location: '/',
            'Set-Cookie': `user=${ username }; Max-Age=2592000; Path=/; SameSite=Lax`,
        },
    } );

};

const Login = () => {

    return (
        <Form method="post">
            <input placeholder="your username" type="text" name="username" />
            <input placeholder="your password" type="password" name="password" />
            <button type="submit">Login</button>
        </Form>
    );

};

export default Login;