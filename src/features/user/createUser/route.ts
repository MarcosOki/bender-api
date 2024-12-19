import endpoint from "./endpoint";

export default {
    method:"POST",
    url:"/user",
    handler: endpoint,
    schema:{
        body:{
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
                    msg:{type:"string"}
                }
            },
            500:{
                type:"object",
                properties:{
                    msg:{type:"string"}
                }
            }
        }
    }
}