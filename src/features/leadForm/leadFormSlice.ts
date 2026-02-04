import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MAX_PHOTO_FILES, MAX_PHOTO_SIZE_BYTES } from "@/assets/constants";

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  cityZip: string;
  serviceType: string;
  projectDescription: string;
  photos: File[];
  preferredContact: "call" | "text" | "email";
  honeypot: string; // Spam protection
}

export interface ValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  cityZip?: string;
  serviceType?: string;
  projectDescription?: string;
  photos?: string;
}

interface LeadFormState {
  formData: LeadFormData;
  validationErrors: ValidationErrors;
  submitStatus: "idle" | "loading" | "success" | "error";
  responseMessage: string;
  lastSubmitTime: number | null;
}

const initialFormData: LeadFormData = {
  fullName: "",
  phone: "",
  email: "",
  cityZip: "",
  serviceType: "",
  projectDescription: "",
  photos: [],
  preferredContact: "call",
  honeypot: "",
};

const initialState: LeadFormState = {
  formData: initialFormData,
  validationErrors: {},
  submitStatus: "idle",
  responseMessage: "",
  lastSubmitTime: null,
};

// Validation helpers
const validatePhone = (phone: string): boolean => {
  const phoneRegex =
    // eslint-disable-next-line no-useless-escape
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
};

const validateEmail = (email: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const emailRegex =
   /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Async thunk for form submission
export const submitLeadForm = createAsyncThunk(
  "leadForm/submit",
  async (formData: LeadFormData, { rejectWithValue }) => {
    if (formData.honeypot) return rejectWithValue("Spam detected");

    try {
      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("phone", formData.phone);
      fd.append("email", formData.email);
      fd.append("cityZip", formData.cityZip);
      fd.append("serviceType", formData.serviceType);
      fd.append("projectDescription", formData.projectDescription);
      fd.append("preferredContact", formData.preferredContact);

      for (const file of formData.photos) {
        fd.append("photos", file);
      }

      const res = await fetch("/api/lead", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        return rejectWithValue(
          data?.error || "Failed to submit. Please try again.",
        );
      }

      return {
        success: true,
        message:
          "Thanks! We'll contact you within 24 hours to schedule your free estimate.",
      };
    } catch {
      return rejectWithValue("Network error. Please try again.");
    }
  },
);

const leadFormSlice = createSlice({
  name: "leadForm",
  initialState,
  reducers: {
    updateField: (
      state,
      action: PayloadAction<{
        field: keyof LeadFormData;
        value: string | File[];
      }>,
    ) => {
      const { field, value } = action.payload;

      // Безопасное присваивание с проверкой типа
      if (field === "photos") {
        state.formData.photos = value as File[];
      } else if (field === "preferredContact") {
        state.formData.preferredContact = value as "call" | "text" | "email";
      } else {
        // Для всех строковых полей
        state.formData[field] = value as string;
      }

      // Clear validation error when field is updated
      if (state.validationErrors[field as keyof ValidationErrors]) {
        delete state.validationErrors[field as keyof ValidationErrors];
      }
    },
    validateForm: (state) => {
      const errors: ValidationErrors = {};
      const { formData } = state;

      if (!formData.fullName.trim()) {
        errors.fullName = "Please enter your name";
      }

      if (!formData.phone.trim()) {
        errors.phone = "Please enter your phone number";
      } else if (!validatePhone(formData.phone)) {
        errors.phone = "Please enter a valid phone number";
      }

      if (!formData.email.trim()) {
        errors.email = "Please enter your email";
      } else if (!validateEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
      }

      if (!formData.cityZip.trim()) {
        errors.cityZip = "Please enter your city or ZIP code";
      }

      if (!formData.serviceType) {
        errors.serviceType = "Please select a service type";
      }

      if (formData.photos.length > MAX_PHOTO_FILES) {
        errors.photos = `Max ${MAX_PHOTO_FILES} photos allowed.`;
      } else {
        const tooBig = formData.photos.find(
          (f) => f.size > MAX_PHOTO_SIZE_BYTES,
        );
        if (tooBig) errors.photos = `File "${tooBig.name}" is larger than 5MB.`;
      }

      if (!formData.projectDescription.trim()) {
        errors.projectDescription = "Please describe your project";
      } else if (formData.projectDescription.trim().length < 20) {
        errors.projectDescription =
          "Please provide more details (at least 20 characters)";
      }

      state.validationErrors = errors;
    },
    resetForm: (state) => {
      state.formData = initialFormData;
      state.validationErrors = {};
      state.submitStatus = "idle";
      state.responseMessage = "";
    },
    setValidationError: (
      state,
      action: PayloadAction<{ field: keyof ValidationErrors; message: string }>,
    ) => {
      state.validationErrors[action.payload.field] = action.payload.message;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLeadForm.pending, (state) => {
        state.submitStatus = "loading";
        state.responseMessage = "";
      })
      .addCase(submitLeadForm.fulfilled, (state, action) => {
        state.submitStatus = "success";
        state.responseMessage = action.payload.message;
        state.lastSubmitTime = Date.now();
        state.formData = initialFormData;
        state.validationErrors = {};
      })
      .addCase(submitLeadForm.rejected, (state, action) => {
        state.submitStatus = "error";
        state.responseMessage = action.payload as string;
      });
  },
});

export const { updateField, validateForm, resetForm, setValidationError } =
  leadFormSlice.actions;

export default leadFormSlice.reducer;
