import { useState } from "react";
import { Button, TextInput } from "../../atoms";

export const Newsletter = () => {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <section className="w-screen bg-lime py-8 flex flex-col items-center mt-12">
      <h3 className="text-white">Subscribe to our newsletter</h3>
      <div className="flex w-[60%] gap-[10px] flex-col laptop:flex-row items-center mt-6 laptop:w-[46%]">
        <TextInput
          placeholder="Company e-mail address"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button label="Subscribe" secondary />
      </div>
      <p className="mt-6 text-white">
        Chupa chups gummi bears shortbread candy
      </p>
    </section>
  );
};
