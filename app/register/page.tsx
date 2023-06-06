"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Formik, Form, Field } from "formik";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import * as yup from "yup";

export default function RegisterPage() {
  return (
    <>
      <div className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-2 rounded-md border border-slate-400">
        <div className="text-xl capitalize text-center">Register User</div>
        <Formik
          initialValues={{
            name: "",
            username: "",
            password: "",
            designation: "",
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required(),
            username: yup
              .string()
              .required()
              .matches(/^[a-z0-9_-]{3,15}$/g, "invalid username"),
            designation: yup.string().required(),
            password: yup
              .string()
              .required()
              .min(6, "password should be minimum 6 characters"),
          })}
          onSubmit={async (values) => {
            const res = await fetch("/api/register", {
              method: "POST",
              next: { revalidate: 0 },
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: values.username,
                name: values.name,
                password: values.password,
                designation: values.designation,
              }),
            });

            const data = await res.json();
            if (!data.user) return null;
            await signIn("credentials", {
              username: data.user.username,
              password: values.password,
              callbackUrl: "/",
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center mt-2 space-y-2">
              <Field name="name">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input {...field} placeholder="Name" className="sm:w-1/2" />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="username">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="username"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="designation">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Designation"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="password">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="password"
                      type="password"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Button
                variant={"outline"}
                className="text-teal-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    wait
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </Form>
          )}
        </Formik>
        <div className="text-xs text-slate-500 text-center mt-3">
          <span>Already a User ? </span>
          <span className="text-teal-600">
            <Link href={"/login"}>Log In</Link>
          </span>
        </div>
      </div>
    </>
  );
}
