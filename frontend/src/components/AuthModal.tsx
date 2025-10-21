import { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Checkbox } from "../components/CheckBox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/Dialog";
import { Eye, EyeOff } from "lucide-react";
import http_api from "../services/http_api";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "register";
}

export function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    agreeToTerms: false,
  });

  const isFormValid =
    formData.firstName.length >= 3 &&
    formData.lastName.length >= 3 &&
    /^\+38\d{10}$/.test(formData.phone) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.password.length > 0 &&
    formData.confirmPassword === formData.password &&
    formData.agreeToTerms;

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (mode === "login") {
        const res = await http_api.post("/api/Auth/login", {
          email: formData.email,
          password: formData.password,
        });

        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
        onClose();
      } else if (mode === "register") {
        const res = await http_api.post("/api/Auth/register", {
          phone: formData.phone,
          password: formData.password,
          passwordConfirm: formData.confirmPassword,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
        });

        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
        onClose();
      }
    } 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      console.error(err);
      if (
        err.isAuthError ||
        err.response?.status === 401 ||
        err.response?.status === 403
      ) {
        setErrorMessage("Невірно введена пошта або пароль");
        setIsErrorModalOpen(true);
      } else {
        setErrorMessage("Сталася помилка. Спробуйте ще раз.");
        setIsErrorModalOpen(true);
      }
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };