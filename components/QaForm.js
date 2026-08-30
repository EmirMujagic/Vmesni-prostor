"use client";

import { useState } from "react";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

export default function QaForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("err");
      return;
    }

    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <form className="qa-form" id="vprasaj" onSubmit={handleSubmit}>
      <label htmlFor="ime">Ime (ali vzdevek)</label>
      <input type="text" id="ime" name="ime" required />

      <label htmlFor="email">Email (samo za odgovor, ni javen)</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="vprasanje">Tvoje vprašanje ali dilema</label>
      <textarea id="vprasanje" name="vprasanje" required />

      <p className="form-note">
        Splošna vprašanja lahko izberem za javen odgovor na tej strani (brez tvojega imena). Za osebno,
        poglobljeno svetovanje si oglej{" "}
        <a href="/storitve" style={{ textDecoration: "underline" }}>
          storitve
        </a>
        .
      </p>

      <button type="submit" className="btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Pošiljam …" : "Pošlji vprašanje"}
      </button>

      {status === "ok" && <p className="form-status ok">Hvala! Vprašanje je bilo poslano.</p>}
      {status === "err" && (
        <p className="form-status err">
          Pošiljanje trenutno ni na voljo — obrazec še ni povezan. Piši direktno na{" "}
          <a href="/kontakt" style={{ textDecoration: "underline" }}>
            kontaktno stran
          </a>
          .
        </p>
      )}
    </form>
  );
}
