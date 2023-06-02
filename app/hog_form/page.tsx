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
import { CalendarIcon } from "lucide-react";
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
};

const fieldLabel = [
  {
    name: "train_no",
    placeholder: "Train number",
  },
  {
    name: "loco_no",
    placeholder: "Loco number",
  },
  {
    name: "loco_base",
    placeholder: "Loco base",
  },
  {
    name: "division",
    placeholder: "Division",
  },
  {
    name: "days_per_week",
    placeholder: "Days per week",
  },
  {
    name: "days_per_month",
    placeholder: "Days per month",
  },
  {
    name: "wp_power_car",
    placeholder: "Working power car",
  },
  {
    name: "nwp_power_car",
    placeholder: "Non working power car",
  },
];
export default function AddData() {
  return (
    <>
      <div className="w-5/6 sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto p-2 rounded-md border border-slate-400">
        <div className="text-xl capitalize text-center">HOG Form</div>
        <Formik
          validationSchema={yup.object().shape({})}
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="flex flex-col items-center mt-2 space-y-2">
              {fieldLabel.map((fl) => (
                <Field name={fl.name} key={fl.name}>
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <Input
                        {...field}
                        placeholder={fl.placeholder}
                        className="sm:w-1/2"
                      />
                      {meta.touched && meta.error && (
                        <div className="text-red-500 text-xs">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              ))}
              <div className="sm:w-1/2">
                <span className="text-sm">Date of Departure :</span>
                <Field name="date_of_departure">
                  {({ field, form }: { field: any; form: any }) => (
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
                            mode="single"
                            selected={field.value}
                            onSelect={(option, action) =>
                              form.setFieldValue(field.name, option)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </>
                  )}
                </Field>
              </div>
              <div className="sm:w-1/2">
                <span className="text-sm">Date of Destination :</span>
                <Field name="date_of_destination">
                  {({ field, form }: { field: any; form: any }) => (
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
                            mode="single"
                            selected={field.value}
                            onSelect={(option, action) =>
                              form.setFieldValue(field.name, option)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </>
                  )}
                </Field>
              </div>
              <Button variant={"outline"}>Submit</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
