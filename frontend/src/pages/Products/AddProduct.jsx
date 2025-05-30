import React, { useState} from "react";
import { Button, Form } from "react-bootstrap";
import ProductModal from "./ProductModal";

const AddProduct = () => {
    const[showModal, setShowModal] = useState(false);
    const[formData, setFormData] = useState({name: "", banner: "", description: "", price: ""});

    const handleSubmit = () => {
        console.log("Submitted product:", formData);
        setShowModal(false);
    }

    return(
        <>
        <Button variant="primary" onClick={() => setShowModal(true)}>
            <i className="bi bi-plus-circle me-2"></i>Add Product
        </Button>

        <ProductModal />
        </>
    );
};

export default AddProduct;