const { NextResponse } = require('next/server') 
const { useState } = require("react")
const axios = require("axios")

const [data, setData] = useState()
var initialRequest = true;

module.export.cloudMiddleware = async function(request) {
    if (initialRequest) {
        try {
            let result = axios(`https://cloud-api.nordic-code.com/api/v1/external/server-data`, {
                headers: {
                    apikey: process.env.ORG_APIKEY
                }
            })
    
            setData(result.data)
        } catch (error) {
            return console.error(error)
        }

        initialRequest = false
    }

    return NextResponse.next()
}

module.export.useCloud = function() {
    return data
}