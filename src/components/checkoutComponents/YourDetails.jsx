import React from "react";
import {
  Mail,
  Lock,
  User,
  Phone,
  Calendar,
  AlertCircle,
  Loader2,
} from "lucide-react";

const YourDetails = ({
  activeStep,
  setActiveStep,
  details,
  detailsErrors,
  error,
  isLoggingIn,
  loginForm,
  setLoginForm,
  loading,
  checkingEmail,
  setIsLoggingIn,
  updateDetail,
  checkEmailAvailability,
  validateStep,
  handleLogin,
  FieldInput,
  StepNumber,
  SaveBtn,
}) => {
  return (
    <>
      {activeStep > 1 ? (
        <CompletedStep
          stepNum={1}
          title="Your Details"
          onEdit={() => setActiveStep(1)}
          summary={[
            `${details.firstName} ${details.lastName}`,
            details.email,
            details.mobile,
            details.dob,
          ]}
        />
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-50">
            <StepNumber n={1} active />
            <span className="text-[14px] font-black text-[#1C1C1C]">
              Your Details
            </span>
          </div>

          <div className="p-6 space-y-4">
            {/* Errors */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[13px] font-medium flex items-center gap-2 mb-2">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            {detailsErrors.alreadyRegistered && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-[13px] font-medium flex items-center gap-2 mb-2">
                <AlertCircle size={16} />
                User already registered. Please login to proceed.
              </div>
            )}

            {/* LOGIN */}
            {isLoggingIn ? (
              <div className="space-y-4">
                <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl mb-4">
                  <p className="text-[13px] text-blue-700 font-semibold">
                    Login to your account to proceed with your booking.
                  </p>
                </div>

                <FieldInput
                  label="Email address"
                  type="email"
                  value={loginForm.email}
                  onChange={(v) => setLoginForm((p) => ({ ...p, email: v }))}
                  icon={Mail}
                  error={detailsErrors.email}
                />

                <FieldInput
                  label="Password"
                  type="password"
                  value={loginForm.password}
                  onChange={(v) => setLoginForm((p) => ({ ...p, password: v }))}
                  icon={Lock}
                  error={detailsErrors.password}
                />

                {detailsErrors.login && (
                  <p className="text-red-500 text-xs text-center">
                    {detailsErrors.login}
                  </p>
                )}

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="bg-[#1C1C1C] text-white px-8 py-3.5 rounded-lg font-black text-sm flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 size={16} className="animate-spin" />}
                  Login & Continue
                </button>

                <button
                  onClick={() => setIsLoggingIn(false)}
                  className="text-[13px] text-gray-500 font-bold"
                >
                  Don't have an account? Register here
                </button>
              </div>
            ) : (
              <>
                {/* REGISTER */}
                <div className="flex gap-4">
                  <FieldInput
                    label="First name"
                    value={details.firstName}
                    onChange={(v) => updateDetail("firstName", v)}
                    icon={User}
                    error={detailsErrors.firstName}
                  />
                  <FieldInput
                    label="Last name"
                    value={details.lastName}
                    onChange={(v) => updateDetail("lastName", v)}
                    icon={User}
                    error={detailsErrors.lastName}
                  />
                </div>

                <FieldInput
                  label="Email address"
                  type="email"
                  value={details.email}
                  onChange={(v) => updateDetail("email", v)}
                  onBlur={() => checkEmailAvailability(details.email)}
                  icon={Mail}
                  error={detailsErrors.email}
                />

                <FieldInput
                  label="Mobile number"
                  value={details.mobile}
                  onChange={(v) => updateDetail("mobile", v)}
                  icon={Phone}
                  error={detailsErrors.mobile}
                />

                <FieldInput
                  label="Date of birth"
                  type="date"
                  value={details.dob}
                  onChange={(v) => updateDetail("dob", v)}
                  icon={Calendar}
                  error={detailsErrors.dob}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FieldInput
                    label="Create Password"
                    type="password"
                    value={details.password}
                    onChange={(v) => updateDetail("password", v)}
                    icon={Lock}
                    error={detailsErrors.password}
                  />
                  <FieldInput
                    label="Confirm Password"
                    type="password"
                    value={details.confirmPassword}
                    onChange={(v) => updateDetail("confirmPassword", v)}
                    icon={Lock}
                    error={detailsErrors.confirmPassword}
                  />
                </div>

                <SaveBtn
                  loading={checkingEmail}
                  onClick={async () => {
                    if (await validateStep(1)) setActiveStep(2);
                  }}
                />

                <div className="text-center pt-2">
                  <p className="text-[13px] text-gray-500">
                    Already registered?{" "}
                    <button
                      onClick={() => setIsLoggingIn(true)}
                      className="text-[#F15A24] font-bold"
                    >
                      Please sign in
                    </button>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default YourDetails;
