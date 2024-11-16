"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    email: z.string().email({ message: "Email không hợp lệ." }),
  
    password: z
      .string()
      .min(8, { message: "Password tối thiểu 8 kí tự." })
      .max(20, { message: "Password không được quá 20 kí tự." })
      .regex(/[a-zA-Z]/, { message: "Password phải chứa ít nhất một chữ cái." })
      .regex(/[0-9]/, { message: "Password phải chứa ít nhất một số." }),
  });

const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="-mt-64 relative">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="my-20 w-[95%] md:w-2/3 lg:w-2/5 mx-auto shadow-2 px-10 py-3 rounded-xl bg-white">
          <h1 className="text-2xl font-bold text-black-19 mt-8">Welcome Back</h1>
          <p className="text-xs text-gray-500">{`Today is a new day. It's your day. You shape it. 
          Sign in to start managing your projects.`}</p>
          <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="my-8">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Nhập vào email của bạn"
                      autoComplete="off"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Nhập mật khẩu" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full my-8"><Button className="w-full bg-black-18" type="submit">Submit</Button></div>
          </form>
        </Form>
    </div>
  );
};

export default LoginForm;
