import React from "react";

import baseApi from "../../services/baseApi";

class HomeService {
    static GetAllTravels(){
        return baseApi.get("/travel")
    }
}

export default HomeService;