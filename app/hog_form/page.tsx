"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Formik, Form, Field } from "formik";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import * as yup from "yup";

const initialValues = {
  date_of_departure: new Date(),
  date_of_destination: new Date(),
  train_no: "",
  loco_no: "",
  loco_base: "",
  division: "",
  days_per_week: "",
  days_per_month: "",
  wp_power_car: "",
  nwp_power_car: "",
  from_hog: "",
  to_hog: "",
  units_hog: "",
  from_eog: "",
  to_eog: "",
  units_eog: "",
  reason_eog: "",
  diesel_saved: "",
};

export default function AddData() {
  const { data: session } = useSession();

  return (
    <>
      <div className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-2 rounded-md border border-slate-400">
        <div className="text-xl capitalize text-center">HOG Form</div>
        <Formik
          validationSchema={yup.object().shape({
            train_no: yup
              .string()
              .matches(/^[0-9]{5}$/g, "invalid  number")
              .required(),
            loco_no: yup
              .string()
              .matches(/^[0-9]{5}$/g, "invalid  number")
              .required(),
            loco_base: yup
              .string()
              .matches(/[a-z]$/gi, "invalid division")
              .required(),
            division: yup
              .string()
              .matches(/[a-z]$/gi, "invalid division")
              .required(),
            days_per_week: yup
              .string()
              .matches(/^[1-9]{1}$/g, "invalid  number")
              .required(),
            days_per_month: yup
              .string()
              .matches(/^[1-9]{1,2}$/g, "invalid  number")
              .required(),
            wp_power_car: yup
              .string()
              .matches(/^[0-9]{5,6}$/g, "invalid power car number")
              .required(),
            nwp_power_car: yup
              .string()
              .matches(/^[0-9]{5,6}$/g, "invalid power car number")
              .required(),
            from_hog: yup.string(),
            to_hog: yup.string(),
            units_hog: yup.string(),
            from_eog: yup.string(),
            to_eog: yup.string(),
            units_eog: yup.string(),
            reason_eog: yup.string(),
            diesel_saved: yup.string(),
          })}
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            const res = await fetch("/api/add_hog_form", {
              method: "POST",
              body: JSON.stringify({ ...values, userID: session?.user.id }),
              headers: {
                "Content-type": "application/json</div>",
              },
            });

            console.log(await res.json());

            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col items-center mt-2 space-y-2">
              <Field name="division">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Division"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="loco_no">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="LOCO Number"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="loco_base">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="LOCO Base"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="train_no">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Train number"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="days_per_week">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Days Per Week"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="days_per_month">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Days Per Month"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="wp_power_car">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Working Power Car"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="nwp_power_car">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Non working Power Car"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>

              <div className="sm:w-1/2 flex flex-col items-center mt-2 space-y-2 border border-slate-200 rounded p-1">
                <div className="p-1 text-center w-full rounded bg-slate-100 text-sm">
                  HOG
                </div>
                <Field name="from_hog">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input {...field} placeholder="From" />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <Field name="to_hog">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input {...field} placeholder="To" />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <Field name="units_hog">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input {...field} placeholder="Unit Consumed" />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>

              <div className="sm:w-1/2 flex flex-col items-center mt-2 space-y-2 border border-slate-200 rounded p-1">
                <div className="p-1 text-center w-full rounded bg-slate-100 text-sm">
                  EOG
                </div>
                <Field name="from_hog">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input {...field} placeholder="From" />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <Field name="to_hog">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input {...field} placeholder="To" />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
                <Field name="units_hog">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input {...field} placeholder="Unit Consumed" />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>

              <Field name="reason_eog">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Reason to run on EOG"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>
              <Field name="diesel_saved">
                {({ field, meta }: { field: any; meta: any }) => (
                  <>
                    <Input
                      {...field}
                      placeholder="Diesel saved"
                      className="sm:w-1/2"
                    />
                    {meta.touched && meta.error && (
                      <div className="text-red-500 text-xs">{meta.error}</div>
                    )}
                  </>
                )}
              </Field>

              <div className="sm:w-1/2">
                <span className="text-sm">Date of Departure :</span>
                <Field name="date_of_departure">
                  {({
                    field,
                    form,
                    meta,
                  }: {
                    field: any;
                    form: any;
                    meta: any;
                  }) => (
                    <>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "justify-start text-left font-normal w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            {...field}
                            mode="single"
                            selected={field.value}
                            onSelect={(option, action) =>
                              form.setFieldValue(field.name, option)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <div className="sm:w-1/2">
                <span className="text-sm">Date of Destination :</span>
                <Field name="date_of_destination">
                  {({
                    field,
                    form,
                    meta,
                  }: {
                    field: any;
                    form: any;
                    meta: any;
                  }) => (
                    <>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "justify-start text-left font-normal w-full",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            {...field}
                            mode="single"
                            selected={field.value}
                            onSelect={(option, action) =>
                              form.setFieldValue(field.name, option)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>
              <Button variant={"outline"} disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    wait
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
