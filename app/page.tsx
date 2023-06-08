"use client";

import { Button } from "@/components/ui/button";
import { Field, Form, Formik } from "formik";

export default function home() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          roll: "",
          message: "",
        }}
        onSubmit={async (values) => {
          console.log(values);
          const res = await fetch("/api/sheet", {
            method: "POST",
            headers: {
              Content_type: "application/json",
            },
            body: JSON.stringify(values),
          });
          const content = await res.json();
          console.log(content.data.tableRange);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="name"
              type="text"
              placeholder="name"
              className="border border-slate-400 rounded-md p-2"
            />
            <Field
              name="roll"
              type="text"
              placeholder="roll"
              className="border border-slate-400 rounded-md p-2"
            />
            <Field
              name="message"
              type="text"
              placeholder="message"
              className="border border-slate-400 rounded-md p-2"
            />
            <Button
              type="submit"
              variant={isSubmitting ? "ghost" : "outline"}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
