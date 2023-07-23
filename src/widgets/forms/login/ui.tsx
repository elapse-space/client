import { LoginButton } from "@features/session/login/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@shared/ui/form";
import { Input } from "@shared/ui/input";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  username: string;
  password: string;
};

export const LoginForm = () => {
  const form = useForm<LoginFormValues>();

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.handleSubmit(onSubmit)();
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Fill in the fields to sign in to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleFormSubmit} className={"space-y-4"}>
            <FormField
              control={form.control}
              name={"username"}
              render={() => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type={"username"}
                      placeholder={"Type here.."}
                      {...form.register("username", {
                        required: true,
                        minLength: 4,
                      })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={"password"}
              render={() => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type={"password"}
                      placeholder={"Type here.."}
                      {...form.register("password", {
                        required: true,
                        minLength: 6,
                      })}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <LoginButton
          password={form.watch("password")}
          username={form.watch("username")}
        />
      </CardFooter>
    </Card>
  );
};
