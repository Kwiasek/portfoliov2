import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { ReactNode } from "react";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  return <div className="px-10 md:px-40 w-full max-w-[1920px]">{children}</div>;
}
