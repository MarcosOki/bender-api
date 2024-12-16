import endpoint from "./endpoint";

export default {
    method:"PUT",
    url:"/usertime/:id/:time",
    handler: endpoint,
    schema:{
        params:{
            type:"object",
            properties:{
                id:{type:"string"},
                time:{type:"string"}
            },
            required:["id","time"]
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