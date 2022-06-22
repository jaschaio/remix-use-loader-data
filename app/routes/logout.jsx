export const action = async () => {

    return new Response( null, {
        status: 301,
        headers: {
            Location: '/',
            'Set-Cookie': `user=; Max-Age=0; Path=/; SameSite=Lax`,
        },
    } );

};
