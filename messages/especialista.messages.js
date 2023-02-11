module.exports = {
    success: {
        s0: {
            code: "EspecialistaCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "EspecialistaUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "EspecialistaFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "EspecialistaDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "NoEspecialistas",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "EspecialistaNotFound",
            type: "error"
        }
    }
}