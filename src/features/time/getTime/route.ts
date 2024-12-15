import endpoint from "./endpoint";

export default {
    method:"GET",
    url:"/getTime/:id",
    handler: endpoint,
    schema:{
        params:{
            type:"object",
            properties:{
                id:{type:"string"},
            },
            required:["id"]
        },
        response:{
            200:{
                type:"object",
                properties:{
                    time:{type:"string"}
                }
            }
        }
    }
}