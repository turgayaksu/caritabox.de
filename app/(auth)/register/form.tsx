"use client";

import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import { useRouter } from "next/navigation";

import { Button, Input } from "@/components";
import { userRegister } from "@/validations";

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    resolver: zodResolver(userRegister),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Registrierung erfolgreich");
        router.push("/login");
      })
      .catch((error) => {
        toast.error("Die E-Mail-Adresse ist bereits vergeben!");
      })
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  };
  return (
    <div className="flex flex-col space-y-8">
      <Input
        id="email"
        label="Ihre E-Mail-Adresse"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Ihr Name und Nachname"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Ihr Passwort"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Button
        type="submit"
        disabled={isLoading}
        label="Weiter"
        onClick={handleSubmit(onSubmit)}
      />
    </div>
  );
};

export default RegisterForm;
