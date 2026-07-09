import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Construction, Sparkles } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Admin Console" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-10 text-center shadow-soft backdrop-blur-2xl"
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 via-accent/25 to-transparent blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-40 w-64 rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl"
        />
        {/* Sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
        />

        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/80 to-secondary/20 shadow-inner"
          >
            <Construction className="h-6 w-6 text-primary" />
          </motion.div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
            <Sparkles className="h-3 w-3 text-accent" />
            Coming soon
          </div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Dashboard is under development.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            We're crafting a focused overview for your admin workspace. Check back shortly.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
