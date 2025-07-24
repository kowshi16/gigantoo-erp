"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
        }),
        onSubmit: (values) => {
            console.log("Login data:", values);
            // Handle login API call here
        },
    });

    return (
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white px-6 lg:px-16 py-10 shadow-md">
            {/* Logo */}
            <img src="/logo/logo.jpg" alt="ERP Logo" className="mb-6 w-32 h-auto" />

            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
                Forgot Password
            </h2>

            {/* Login Form */}
            <Form noValidate onSubmit={formik.handleSubmit} className="w-full">
                {/* Email Field */}
                <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label className="text-gray-700 font-medium">
                        Email Address
                    </Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={!!formik.errors.email && formik.touched.email}
                        className="py-2 px-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Submit Button */}
                <Button
                    type="submit"
                    className="w-full py-2 bg-blue-700 hover:bg-blue-800 border-0 text-white font-semibold rounded-md"
                >
                    Reset Password
                </Button>
            </Form>
        </div>
    );
}
