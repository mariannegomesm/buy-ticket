import React from "react";

import api from "../../services/baseApi";

class LoginServices {
    static GetAllUsers(){
        return api.get("/users");
    }

    static CreateUser(data: object){
        return api.post("/users", data);
    }
}

export default LoginServices;