import { useCallback, useState, useEffect } from "react";
import useTranslations from "./useTranslations";

// This is using formSubmit.co to handle the form submitting.
// It is kind of weird... but free. We might want to change it eventually.

const useFormSubmit = () => {
  const [loading, setLoading] = useState();

  const [submitResult, setSubmitResult] = useState({ message: "", intent: "" });

  const t = useTranslations();

  // Removes the result object after 3 seconds.
  useEffect(() => {
    if (submitResult) setTimeout(() => setSubmitResult(null), 3000);
  }, [submitResult]);

  const submit = useCallback(async info => {
    try {
      setLoading(true);
      await fetch(
        `https://formsubmt.co/ajax/${t("contact:bonsai-email")}.com`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: info.name,
            email: info.email,
            purpose: info.purpose,
            budget: info.budget,
            message: info.message,
          }),
        },
      );
      setSubmitResult({ message: "Hurray!", intent: "positive" });
    } catch (e) {
      setSubmitResult({ message: "Oops!", intent: "danger" });
    }
    setLoading(false);
  }, []);

  return [loading, submit, submitResult];
};

export default useFormSubmit;
