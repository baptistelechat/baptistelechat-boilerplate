"use client";
import { AutoForm } from "@/components/ui/autoform";
import { ZodProvider } from "@autoform/zod";
import { toast } from "sonner";
import * as z from "zod";

// Define your form schema using zod
const formSchema = z.object({
  subject: z
    .string({
      required_error: "Subject is required.",
    })
    .describe("Objet"),
  message: z
    .string({
      required_error: "Message is required.",
    })
    .describe("Message"),
});

const schemaProvider = new ZodProvider(formSchema);

const BasicForm = () => {
  const handleSubmit = (values: { subject: string; message: string }) => {
    toast(values.subject, {
      description: values.message,
    });
  };

  return (
    <AutoForm
      schema={schemaProvider}
      onSubmit={(data, form) => {
        handleSubmit(data);
      }}
      withSubmit
    />
  );
};

export default BasicForm;
