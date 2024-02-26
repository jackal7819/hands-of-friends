"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useTranslation } from "@/app/i18n/client";
import Action from "../Action";
import InputField from "./InputField";
import Modal from "../Modal/Modal";
import { validationSchema } from "./helpers/validationSchema";
import { handleSubmit } from "./helpers/handleSubmit";

const FeedbackFormLayout = ({ lng, additionalData, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  const { t } = useTranslation(lng, "form_feedback");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
      company_name: "",
      city: "",
    },
    validationSchema: validationSchema(t),
    onSubmit: (values, formikHelpers) =>
      handleSubmit(values, { ...formikHelpers, setIsOpen }),
  });

  return (
    <>
      {isOpen && <Modal handleClose={handleClose} />}
      {!isOpen && (
        <form
          className=" relative md:justify-self-end justify-self-center flex md:mt-20 mt-[60%] 2xl:p-9  xl:p-6 xs:py-6 xs:px-4  2xl:w-[527px]  xl:w-[503px]  md:w-[334px]  sm:w-[340px] xs:w-[268px]
        flex-col items-center bg-white shadow-md z-10"
          action="/submit_form"
          method="post"
          onSubmit={formik.handleSubmit}
        >
          {children}
          {additionalData && (
            <InputField
              label={t("company_name")}
              id="company_name"
              name="company_name"
              type="text"
              placeholder={t("placeholder_company_name")}
              value={formik.values.company_name}
              error={formik.touched.company_name && formik.errors.company_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
          )}
          {/* <InputField
            label={t("company_name")}
            id="company_name"
            name="company_name"
            type="text"
            placeholder={t("placeholder_company_name")}
            value={formik.values.company_name}
            error={formik.touched.company_name && formik.errors.company_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          /> */}
          {/* <InputField
            label={t("city")}
            id="city"
            name="city"
            type="text"
            placeholder={t("placeholder_city")}
            value={formik.values.city}
            error={formik.touched.city && formik.errors.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          /> */}
          <InputField
            label={additionalData ? t("representative's_name") : t("name")}
            id="name"
            name="name"
            type="text"
            placeholder={t("placeholder_name")}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label={t("email")}
            id="email"
            name="email"
            type="text"
            placeholder={t("placeholder_email")}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label={t("phone")}
            id="phone_number"
            name="phone_number"
            type="text"
            placeholder={t("placeholder_phone")}
            value={formik.values.phone_number}
            error={formik.touched.phone_number && formik.errors.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <InputField
            label={t("message")}
            id="message"
            name="message"
            type="textarea"
            placeholder={t("placeholder_message")}
            value={formik.values.message}
            error={formik.touched.message && formik.errors.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />

          <Action className="min-w-[12.38rem]  bg-deepBlue  hover:text-deepBlue  hover:border-deepBlue">
            {t("button")}
          </Action>
        </form>
      )}
    </>
  );
};

export default FeedbackFormLayout;
