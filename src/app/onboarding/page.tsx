"use client";

import React, { useState } from "react";
import { theme } from "antd";

import BlankLayout from "../components/core/layouts/BlankLayout";
import { questions } from "../constants/questions";
import Step2 from "../components/modules/onboardings/OnboardingStep";
import OnboardingStep from "../components/modules/onboardings/OnboardingStep";
import Welcome from "../components/modules/onboardings/Welcome";

const Onboarding: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [step, setStep] = useState<number>(0);

  return (
    <BlankLayout>
      <div className="min-h-[100vh] flex justify-center items-center ">
        {step === 0 && <Welcome setStep={setStep}></Welcome>}
        {step > 0 && step < 5 && (
          <OnboardingStep
            step={step}
            setStep={setStep}
            question={questions[step - 1]?.question}
            options={questions[step - 1]?.options}
          />
        )}
      </div>
    </BlankLayout>
  );
};

export default Onboarding;
