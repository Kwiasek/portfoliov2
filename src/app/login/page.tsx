import { login } from "./actions";
const LoginPage = () => {
  return (
    <div className="px-10 md:px-40 w-full max-w-[1920px] h-screen flex items-center justify-center">
      <form className="flex flex-col gap-3 px-7 py-6 rounded-xl myShadow border min-w-450px max-w-[700px] mx-auto">
        <label htmlFor="email" className="text-lg">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full indent-2 px-3 py-2 border-none rounded-lg bg-background text-white"
        />
        <label htmlFor="password" className="text-lg">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="w-full indent-2 px-3 py-2 border-none rounded-lg bg-background text-white"
        />
        <button
          className="mt-5 px-3 py-2 bg-primary text-slate-900 w-full rounded-lg"
          formAction={login}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
