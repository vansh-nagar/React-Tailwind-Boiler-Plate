import React from "react";

const Page1 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div>
        Hey there, start creating
        <span className=" italic font-medium"> beautiful </span> ❄️ websites
        without any setup!
      </div>

      <ol className="list-decimal ml-6 mt-4">
        <li>
          Run <code>rm -rf .git</code> to de-initialize the repo, then add your
          own (for Ubuntu)
        </li>
        <li>Tailwind</li>
        <li>React Router DOM</li>
      </ol>
    </div>
  );
};

export default Page1;
