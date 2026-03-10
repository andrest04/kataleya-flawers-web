"use client";

import { useState, type ChangeEvent, type FocusEvent, type FormEvent } from "react";

type FormValues = {
  nombre: string;
  telefono: string;
  mensaje: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  nombre: "",
  telefono: "",
  mensaje: "",
};

function validateField(name: keyof FormValues, value: string) {
  const trimmedValue = value.trim();

  switch (name) {
    case "nombre":
      if (!trimmedValue) {
        return "Ingresa tu nombre.";
      }

      if (trimmedValue.length < 2) {
        return "El nombre debe tener al menos 2 caracteres.";
      }

      return "";
    case "telefono":
      if (!trimmedValue) {
        return "Ingresa tu teléfono.";
      }

      if (!/^[+\d\s()-]{7,}$/.test(trimmedValue)) {
        return "Ingresa un teléfono válido.";
      }

      return "";
    case "mensaje":
      if (!trimmedValue) {
        return "Cuéntanos qué arreglo necesitas.";
      }

      if (trimmedValue.length < 10) {
        return "El mensaje debe tener al menos 10 caracteres.";
      }

      return "";
  }
}

function validateForm(values: FormValues) {
  return {
    nombre: validateField("nombre", values.nombre),
    telefono: validateField("telefono", values.telefono),
    mensaje: validateField("mensaje", values.mensaje),
  } satisfies FormErrors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormValues;

    setValues((current) => ({
      ...current,
      [fieldName]: value,
    }));

    if (isSubmitted || errors[fieldName]) {
      setErrors((current) => ({
        ...current,
        [fieldName]: validateField(fieldName, value),
      }));
    }
  };

  const handleFieldBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormValues;

    setErrors((current) => ({
      ...current,
      [fieldName]: validateField(fieldName, value),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(values);
    const firstInvalidField = (Object.keys(nextErrors) as Array<keyof FormValues>).find(
      (fieldName) => nextErrors[fieldName],
    );

    setIsSubmitted(true);
    setErrors(nextErrors);

    if (firstInvalidField) {
      const firstInvalidElement = event.currentTarget.elements.namedItem(firstInvalidField);

      if (
        firstInvalidElement instanceof HTMLInputElement ||
        firstInvalidElement instanceof HTMLTextAreaElement
      ) {
        firstInvalidElement.focus();
      }

      return;
    }

    console.log("Formulario de contacto enviado");
    setValues(initialValues);
    setErrors({});
    setIsSubmitted(false);
  };

  const getFieldStyles = (fieldName: keyof FormValues) => ({
    borderColor: errors[fieldName]
      ? "var(--color-primary)"
      : "color-mix(in srgb, var(--color-dark) 14%, transparent)",
    color: "var(--color-dark)",
    backgroundColor: "var(--color-cream)",
    boxShadow: errors[fieldName]
      ? "0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent)"
      : "none",
  });

  const getErrorId = (fieldName: keyof FormValues) => `${fieldName}-error`;

  return (
    <form
      noValidate
      className="space-y-5 rounded-[2rem] border p-6 sm:p-8"
      style={{
        backgroundColor: "var(--color-cream)",
        borderColor: "color-mix(in srgb, var(--color-primary) 16%, transparent)",
        boxShadow:
          "0 20px 50px color-mix(in srgb, var(--color-dark) 8%, transparent)",
      }}
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label htmlFor="nombre" className="text-sm font-semibold">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          autoComplete="name"
          value={values.nombre}
          aria-invalid={errors.nombre ? "true" : "false"}
          aria-describedby={errors.nombre ? getErrorId("nombre") : undefined}
          className="w-full rounded-full border px-4 py-3 outline-none transition-all duration-300"
          style={getFieldStyles("nombre")}
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
        />
        {errors.nombre ? (
          <p
            id={getErrorId("nombre")}
            className="text-sm leading-6"
            style={{ color: "var(--color-primary)" }}
          >
            {errors.nombre}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="telefono" className="text-sm font-semibold">
          Teléfono
        </label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          value={values.telefono}
          aria-invalid={errors.telefono ? "true" : "false"}
          aria-describedby={errors.telefono ? getErrorId("telefono") : undefined}
          className="w-full rounded-full border px-4 py-3 outline-none transition-all duration-300"
          style={getFieldStyles("telefono")}
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
        />
        {errors.telefono ? (
          <p
            id={getErrorId("telefono")}
            className="text-sm leading-6"
            style={{ color: "var(--color-primary)" }}
          >
            {errors.telefono}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label htmlFor="mensaje" className="text-sm font-semibold">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          value={values.mensaje}
          aria-invalid={errors.mensaje ? "true" : "false"}
          aria-describedby={errors.mensaje ? getErrorId("mensaje") : undefined}
          className="w-full rounded-[1.5rem] border px-4 py-3 outline-none transition-all duration-300"
          style={getFieldStyles("mensaje")}
          onBlur={handleFieldBlur}
          onChange={handleFieldChange}
        />
        {errors.mensaje ? (
          <p
            id={getErrorId("mensaje")}
            className="text-sm leading-6"
            style={{ color: "var(--color-primary)" }}
          >
            {errors.mensaje}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="rounded-full px-7 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-cream)",
        }}
      >
        Enviar mensaje
      </button>
    </form>
  );
}
