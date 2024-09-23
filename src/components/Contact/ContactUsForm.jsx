"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phone: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
  message: z.string().min(50, {
    message: "Message must have at least 50 characters.",
  }),
});

const ContactUsForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div
      data-aos="fade-up"
      className="w-full flex flex-col items-center mt-12 md:mt-36"
    >
      <h1 className="text-darkTheme dark:text-lightTheme">Get in Touch</h1>
      <h2 className="text-darkBlack dark:text-white lexend-deca-bold text-[30px] sm:text-[40px] text-center">
        Send us a Message
      </h2>
      <Form {...form} className="w-full">
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="flex flex-col w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white text-darkBlack">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input variant="default" placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col w-full">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white text-darkBlack">
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input variant="default" placeholder="Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white text-darkBlack">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input variant="default" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col w-full  ">
            <FormField
              className="w-full"
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="dark:text-white text-darkBlack">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full"
                      placeholder="Message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex justify-center mt-4">
            <Button type="submit" variant="customButton" className="p-6 px-8">
              Submit Now
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
