export async function onRequestPost(context) {
    const { request, env } = context;

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    try {
        const { name, organ, email, phone, message } = await request.json();

        if (!name || !organ || !email) {
            return new Response(JSON.stringify({ error: 'Campos obrigatórios ausentes.' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            });
        }

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'IA Master <contato@iamaster.com.br>',
                to: ['contato@iamaster.com.br'],
                reply_to: email,
                subject: `Proposta Workshop IA na Prática — ${organ}`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #00E5FF;">Nova solicitação de proposta</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; color: #666; width: 100px;"><strong>Nome</strong></td>
                                <td style="padding: 8px 0;">${name}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #666;"><strong>Órgão</strong></td>
                                <td style="padding: 8px 0;">${organ}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #666;"><strong>E-mail</strong></td>
                                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; color: #666;"><strong>Telefone</strong></td>
                                <td style="padding: 8px 0;">${phone || 'Não informado'}</td>
                            </tr>
                        </table>
                        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
                        <p style="color: #666;"><strong>Mensagem:</strong></p>
                        <p style="color: #333; white-space: pre-wrap;">${message || '(sem mensagem)'}</p>
                    </div>
                `,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            return new Response(JSON.stringify({ error: error.message || 'Erro ao enviar.' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json', ...corsHeaders },
            });
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });

    } catch (err) {
        return new Response(JSON.stringify({ error: 'Erro interno.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }
}

export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
