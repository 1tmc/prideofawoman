"use client";

import { toast } from "react-toastify";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  email: string;
  phone: number;
  location: string;
  nationality: string;
  referral: string;
}

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    phone: yup
      .number()
      .typeError("Phone number is required")
      .required("Phone must be a number"),
    location: yup.string().required("Location is required"),
    nationality: yup.string().required("Nationality is required"),
    referral: yup.string().required("Please tell us how you heard about us"),
  })
  .required();

const BecomeVolunteerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    try {
      const mailtoLink = `mailto:prideofawoman2016@gmail.com?subject=Volunteer Application – The Pride of a Woman Christian Network (from ${data.name})&body=
Name: ${data.name}%0A
Email: ${data.email}%0A
Phone: ${data.phone}%0A
Location: ${data.location}%0A
Nationality: ${data.nationality}%0A
How did you hear about us: ${data.referral}`;

      window.location.href = mailtoLink;

      toast.success("Opening your email client to send the message.", {
        position: "top-center",
      });
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="volunteer-form">
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="form-control"
              placeholder="Your Name"
            />
            <p className="form_error">{errors.name?.message}</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="form-control"
              placeholder="Email Address"
            />
            <p className="form_error">{errors.email?.message}</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              className="form-control"
              placeholder="Phone Number"
            />
            <p className="form_error">{errors.phone?.message}</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="location">Your Location</label>
            <input
              type="text"
              id="location"
              {...register("location")}
              className="form-control"
              placeholder="City, Country"
            />
            <p className="form_error">{errors.location?.message}</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="nationality">Nationality</label>
            <input
              type="text"
              id="nationality"
              {...register("nationality")}
              className="form-control"
              placeholder="Nationality"
            />
            <p className="form_error">{errors.nationality?.message}</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="referral">How did you hear about us?</label>
            <input
              type="text"
              id="referral"
              {...register("referral")}
              className="form-control"
              placeholder="e.g. Facebook, Instagram, Friend..."
            />
            <p className="form_error">{errors.referral?.message}</p>
          </div>
        </div>

        <div className="col-md-12">
          <div className="form-group pt-10 mb-0">
            <button type="submit" className="cr-btn ml-5">
              Send us a message
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BecomeVolunteerForm;
