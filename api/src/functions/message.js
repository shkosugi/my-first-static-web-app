const { app } = require('@azure/functions');

app.http('message', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
    
    let name;
        
    try {
        const body = await request.json();
        name = body?.text;

    } catch {
        name = 'error';
    }

    return { 
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ "text": `Hello, from the backend API!` + name }) 
    };
}
});