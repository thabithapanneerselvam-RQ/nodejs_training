import Yup from "yup";

export const uploadSchema = Yup.object().shape({
        fileName: Yup.string().required("filename is required"),
        contentType: Yup.string().required("content type is required")
})
