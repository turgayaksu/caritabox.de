"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { PageHeader } from "@/app/components";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const optionSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  optionGroupId: z
    .string({
      required_error: "Please select an option group to display.",
    })
    .min(1, { message: "<Object></Object>ption group is required" }),
});

const OptionCreate = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof optionSchema>>({
    resolver: zodResolver(optionSchema),
    defaultValues: {
      name: "",
      optionGroupId: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof optionSchema>) => {
    try {
      const response = await axios.post("/api/options", values);
      router.push("/admin/options");
      toast.success("Option created");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <PageHeader title="Add new option value" />
      <section className="gradient-section">
        <div className="container mx-auto px-4 pb-10 lg:px-44">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-y-8"
            >
              <FormField
                control={form.control}
                name="optionGroupId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Option Group</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option group" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="6547976ba0254d99bbe769d8">
                          Größe
                        </SelectItem>
                        <SelectItem value="654797cca0254d99bbe769da">
                          Material
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isSubmitting}
                        placeholder="e.g. 'Sample Product'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-2">
                <Link href="/">
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </Link>
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
      <div className="mb-5" />
    </>
  );
};

export default OptionCreate;
