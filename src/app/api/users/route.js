import { query } from "@/lib/db";

// GET Value
export async function GET(request) {
    const users = await query({
        query: "SELECT * FROM users ORDER BY id DESC",
        values: [],
    });

    let data = JSON.stringify(users);
    return new Response(data, {
        status: 200,
    });
}

// Insert Value
export async function POST(request) {

    try {
        const {name, email,type} = await request.json();
        const updateUsers = await query({
            query: "INSERT INTO users (name,email,type) VALUES (?,?,?)",
            values: [name,email,type],
        });
        const result = updateUsers.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const user = {
            name: name,
            email: email,
            type: type,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: user
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: request
        }));
    }
}

// Update Value
export async function PUT(request) {

    try {
        const { id, email, name, type } = await request.json();
        const updateProducts = await query({
            query: "UPDATE users SET email = ?, name = ?, type = ? WHERE id = ?",
            values: [email, name, type, id],
        });
        const result = updateProducts.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            id: id,
            email: email,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: res
        }));
    }

}

// Delete Value
export async function DELETE(request) {

    try {
        const { id } = await request.json();
        const deleteUser = await query({
            query: "DELETE FROM users WHERE id = ?",
            values: [id],
        });
        const result = deleteUser.affectedRows;
        let message = "";
        if (result) {
            message = "success";
        } else {
            message = "error";
        }
        const product = {
            id: id,
        };
        return new Response(JSON.stringify({
            message: message,
            status: 200,
            product: product
        }));
    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            data: res
        }));
    }

}
