// import * as Yup from "yup";

// export const uploadSchema = Yup.object().shape({
//         fileName: Yup.string().required("filename is required"),
//         contentType: Yup.string().required("content type is required")
// })


import zod from "zod"

export const uploadSchema = zod.object({
        fileName: zod.string(),
        contentType: zod.string()
})