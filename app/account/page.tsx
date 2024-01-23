"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useState, FormEvent, useEffect } from "react";
import MorningForm from "../sliders/MorningFinal";
import CoffeeForm from "../sliders/CoffeeFinal";
import Account from "../accountform/account-form";

const YourFormComponent: React.FC = () => {
  const [profile, setProfile] = useState<any[] | null>(null);
  const [morningValue, setMorningValue] = useState<number>(50);
  const [coffeeValue, setCoffeeValue] = useState<number>(50);
  const supabase = createClient();

  const handleMorningChange = (value: number) => {
    setMorningValue(value);
  };

  const handleCoffeeChange = (value: number) => {
    setCoffeeValue(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Morning Value:", morningValue);
    console.log("Coffee Value:", coffeeValue);
    // Add logic to submit the values to your backend or perform further actions
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("profiles").select();
      setProfile(data);
    };
    getData();
  }, []);

  return (
    <div>
      <Account session={null} />
      <br />
      <MorningForm />
      {/* MorningSlider component */}

      <br />
      <CoffeeForm />
      {/* CoffeeSlider component */}

      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit Form
      </button>
    </div>
  );
};

export default YourFormComponent;
